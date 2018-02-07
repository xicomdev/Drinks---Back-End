<?php

    /**
     * Admin controller
     *
     **/
    App::uses('AppController', 'Controller');
    App::uses('BlowfishPasswordHasher', 'Controller/Component/Auth');


    class AdminController extends AppController {

        public $uses = array("Report", "Member");

        
        function beforeFilter() {
            parent::beforeFilter();
            /*if (@$this->Session->read('AdminUser')) {
                $this->set("AdminInfo", $this->Session->read('AdminUser'));
            }*/
            $this->Auth->allow("index","dashboard");
        }

        /* Author	: Ashwani Kocher
         * Purpose	: This function is used for webadmin Home page that is login page to get logged and go to dashboard
         */

        public function webadmin_index() {
            //if ($this->Member->loggedIn()) {
            //    return $this->redirect(array("controller" => "admin", "action" => "dashboard", "webadmin" => true));
            // }
            //$AdminUser = $this->Session->read('AdminUser');
            if (@$AdminUser) {
                return $this->redirect(array("controller" => "admin", "action" => "dashboard","webadmin"=>true));
            }
            $this->set('title_for_layout', 'Login');
            $this->layout = 'admin';
            if (!empty($this->request->data)) {
                $isEmail = filter_var($this->request->data["Member"]['user_name'], FILTER_VALIDATE_EMAIL);
                if ($isEmail) {
                    $recordInfo = $this->Member->findByEmail(trim($this->request->data["Member"]['user_name']));
                    if ($recordInfo) {
                        $this->request->data["Member"]['user_name'] = $recordInfo["Member"]['user_name'];
                    }
                }
                $this->Member->set($this->request->data);
                if ($this->Member->validateAdminLogin()) {
                    if (@$this->Member->data["Member"]["status"] == "inactive") {
                        $this->Session->setFlash(__('Your account has been deactivated. Please contact to Administrator'), 'flash_notification_error');
                    } elseif ($this->Auth->login($this->Member->data["Member"])) {
                        $this->Session->setFlash(__('Welcome back'), 'flash_notification_success');
                        $this->Session->write("AdminUser", $this->Member->data["Member"]);
                        return $this->redirect(array("controller" => 'admin', 'action' => 'dashboard', 'webadmin' => true));
                    } else {
                        $this->Session->setFlash(__('You have entered wrong credentials.'), 'flash_notification_error');
                    }
                }else {
                    return $this->Member->validationErrors;
                }
                return $this->redirect(array('action' => 'index'));
            }
        }

        public function webadmin_dashboard() {
            $this->loadModel("Group");
            $this->loadModel("User");
            $AdminUser = $this->Session->read('AdminUser');
            if (!@$AdminUser) {
                return $this->redirect(array("controller" => "admin", "action" => "index","webadmin"=>true));
            }
            $total_group = $this->Group->find('count');
            $total_user = $this->User->find('count');
            

            $this->set(compact('total_group','total_user'));
            $this->set('title_for_layout', 'Dashboard');
            $this->layout = 'admin_inner';

        }

        public function webadmin_logout() {
            if ($this->Auth->logout()) {
                $this->Session->delete('AdminUser');
                $this->Session->setFlash(__("You have been logged out successfully"), 'flash_notification_success');
                $this->redirect(array("controller" => "admin", "action" => "index", 'webadmin' => true));
            }
            
        }

        public function webadmin_usersList() {
            $this->set('page','user');
            $this->set('sub_page','user');
            $AdminUser = $this->Session->read('AdminUser');
            if (!@$AdminUser) {
                return $this->redirect(array("controller" => "admin", "action" => "index","webadmin"=>true));
            }
        	$this->set('title_for_layout', 'Users List');
            $this->layout = 'admin_inner';
            $this->loadModel("User");
            $conditions = array();
            $keyword = "";
            if(isset($_GET['keyword'])){
            	$keyword = $_GET['keyword'];
            }
            if ($this->request->is('post')) {
                $keyword = $this->data['keyword'];
                //$conditions["OR"] = array('User.full_name LIKE' => '%' . $keyword . '%', 'User.email LIKE' => '%' . $keyword . '%');

                $conditions = array(
                                    '$or'=>
                                        array(
                                                array('User.full_name LIKE' => '%' . $keyword . '%'), 
                                                array('User.email LIKE' => '%' . $keyword . '%')
                                            ),
                                        array('User.is_deleted' => false)
                                );
                $this->set("keyword", $this->data['keyword']);
            }else{
                $conditions = array('User.is_deleted' => false);
            }
            //print_r($conditions); exit;
            
			$this->paginate = array(
                'limit' => 10,
                "conditions" => $conditions,
                "order" =>array('User.created' => 'DESC')
            );
	        $UsersData = $this->paginate('User');
            $this->set(compact('UsersData','page','sub_page','keyword'));
        }


        public function webadmin_deletedUsers() {
            $this->set('page','user');
            $this->set('sub_page','deleted_user');
            $AdminUser = $this->Session->read('AdminUser');
            if (!@$AdminUser) {
                return $this->redirect(array("controller" => "admin", "action" => "index","webadmin"=>true));
            }
            $this->set('title_for_layout', 'Deleted Users List');
            $this->layout = 'admin_inner';
            $this->loadModel("User");
            $conditions = array();
            $keyword = "";
            if(isset($_GET['keyword'])){
                $keyword = $_GET['keyword'];
            }
            if ($this->request->is('post')) {
                $keyword = $this->data['keyword'];
                //$conditions["OR"] = array('User.full_name LIKE' => '%' . $keyword . '%', 'User.email LIKE' => '%' . $keyword . '%');

                $conditions = array(
                                    '$or'=>
                                        array(
                                                array('User.full_name LIKE' => '%' . $keyword . '%'), 
                                                array('User.email LIKE' => '%' . $keyword . '%')
                                            ),
                                        array('User.is_deleted' => true)
                                );
                $this->set("keyword", $this->data['keyword']);
            }else{
                $conditions = array('User.is_deleted' => true);
            }
            //print_r($conditions); exit;
            
            $this->paginate = array(
                'limit' => 10,
                "conditions" => $conditions,
                "order" =>array('User.created' => 'DESC')
            );
            $UsersData = $this->paginate('User');
            $this->set(compact('UsersData','page','sub_page','keyword'));
        }

        public function webadmin_deleteUser(){
            $user_id = $_POST['user_id'];
            $this->loadModel("User");
            // convert the string list to an array
            $user_array = $this->User->find('first',array('conditions'=>array('_id' => $user_id)));
            if(!empty($user_array)){
                $user_array['User']['is_deleted'] = true;
                $user_array['User']['fb_id'] = '';
                $this->User->save($user_array);

                $group_array = $this->Group->find('first',array('conditions'=>array('Group.user_id' => $user_id,'Group.is_deleted' => false)));

                if(!empty($group_array)){
                    $this->loadModel('Group');
                    $this->loadModel('Thread');
                    $this->loadModel('DrinkedGroup');
                    /*********************** START: Group deleted **********************/
                    $group_array['Group']['is_deleted'] = true;
                    $this->Group->save($group_array);
                    /*********************** END: Group deleted **********************/

                    /*********************** START: Thread deleted **********************/
                    $Thread_array = $this->Thread->find('first',array('conditions'=>array('group_id' => $group_array['Group']['id'])));
                    if(!empty($Thread_array)){
                        $Thread_array['Thread']['is_deleted'] = true;
                        $this->Thread->save($Thread_array);
                    }
                    /*********************** END: Thread deleted **********************/

                    /*********************** START: DrinkedGroup deleted **********************/
                    $DrinkedGroup_array = $this->DrinkedGroup->find('first',array('conditions'=>array('group_id' => $group_array['Group']['id'])));
                    if(!empty($DrinkedGroup_array)){
                        $DrinkedGroup_array['DrinkedGroup']['is_deleted'] = true;
                        $this->DrinkedGroup->save($DrinkedGroup_array);
                    }
                    /*********************** END: DrinkedGroup deleted **********************/
                }
                echo 'success';
                exit;
            }
        }

        public function webadmin_ageVerficationStatusChange(){
            $user_id = $_POST['user_id'];
            $this->loadModel("User");
            // convert the string list to an array
            $user_array = $this->User->find('first',array('conditions'=>array('_id' => $user_id)));
            if(!empty($user_array)){
                if($user_array['User']['is_age_verified'] == "pending" || $user_array['User']['is_age_verified'] == "reject"){
                    $user_array['User']['is_age_verified'] = "approve";
                }else{
                    $user_array['User']['is_age_verified'] = "reject";
                }                
                $this->User->save($user_array);
                echo 'success';
                exit;
            }
        }

        public function webadmin_delGroups(){
            $group_id = $_POST['group_id'];
            $this->loadModel("User");
            $this->loadModel("Group");
            $this->autoRender = false;
            // convert the string list to an array
            $group_array = $this->Group->find('first',array('conditions'=>array('Group._id' => $group_id)));
            if(!empty($group_array)){
                $this->loadModel('Group');
                $this->loadModel('Thread');
                $this->loadModel('DrinkedGroup');
                /*********************** START: Group deleted **********************/
                $group_array['Group']['is_deleted'] = true;
                $this->Group->save($group_array);
                /*********************** END: Group deleted **********************/

                /*********************** START: Thread deleted **********************/
                $Thread_array = $this->Thread->find('first',array('conditions'=>array('group_id' => $group_array['Group']['id'])));
                if(!empty($Thread_array)){
                    $Thread_array['Thread']['is_deleted'] = true;
                    $this->Thread->save($Thread_array);
                }
                /*********************** END: Thread deleted **********************/

                /*********************** START: DrinkedGroup deleted **********************/
                $DrinkedGroup_array = $this->DrinkedGroup->find('first',array('conditions'=>array('group_id' => $group_array['Group']['id'])));
                if(!empty($DrinkedGroup_array)){
                    $DrinkedGroup_array['DrinkedGroup']['is_deleted'] = true;
                    $this->DrinkedGroup->save($DrinkedGroup_array);
                }
                /*********************** END: DrinkedGroup deleted **********************/
                echo 'success';
                exit;
            }else{
                echo 'failed';
                exit;
            }
        }

        public function webadmin_getPlans($id=false) {
            //echo $type; exit;
            $AdminUser = $this->Session->read('AdminUser');
            if (!@$AdminUser) {
                return $this->redirect(array("controller" => "admin", "action" => "index","webadmin"=>true));
            }
            $this->set('title_for_layout', 'Options List');
            $this->layout = 'admin_inner';
            $this->loadModel("Option");
            $params = array('Option.type'=>'membership_plan');  
            $OptionsData = $this->Option->find('all',array(
                    'conditions' => $params,
                ));
            $options_edit_data = '';
            if($id != false){
	            $params_edit = array('Option.id'=>$id);  
	            $options_edit_data = $this->Option->find('first',array(
	                    'conditions' => $params_edit,
	                ));
            }
            $this->set('page','option');
            $this->set('sub_page','membership_plan');
            $this->set(compact('OptionsData','options_edit_data','sub_page','option'));
        }

        public function webadmin_getTickets($id=false) {
            //echo $type; exit;
            $AdminUser = $this->Session->read('AdminUser');
            if (!@$AdminUser) {
                return $this->redirect(array("controller" => "admin", "action" => "index","webadmin"=>true));
            }
            $this->set('title_for_layout', 'Options List');
            $this->layout = 'admin_inner';
            $this->loadModel("Option");
            $params = array('Option.type'=>'ticket');  
            $OptionsData = $this->Option->find('all',array(
                    'conditions' => $params,
                ));
            $options_edit_data = '';
            if($id != false){
	            $params_edit = array('Option.id'=>$id);  
	            $options_edit_data = $this->Option->find('first',array(
	                    'conditions' => $params_edit,
	                ));
            }
            $this->set('options_edit_data','options_edit_data');
            $this->set('page','option');
            $this->set('sub_page','ticket');
            $this->set(compact('OptionsData','options_edit_data','sub_page','option'));
        }
        public function webadmin_getOptions($type) {
            //echo $type; exit;
            $AdminUser = $this->Session->read('AdminUser');
            if (!@$AdminUser) {
                return $this->redirect(array("controller" => "admin", "action" => "index","webadmin"=>true));
            }
            $this->set('title_for_layout', 'Options List');
            $this->layout = 'admin_inner';
            $this->loadModel("Option");
            $params = array('Option.type'=>$type);  
            $OptionsData = $this->Option->find('all',array(
                    'conditions' => $params,
                ));
            $this->set('page','option');
            $this->set('sub_page',$type);
            $this->set(compact('OptionsData','sub_page','option'));
        }

        public function webadmin_set_order(){
            $list_order = $_POST['list_order'];
            $this->loadModel("Option");
            // convert the string list to an array
            $list = explode(',' , $list_order);
            $order_number = 0 ;
            foreach($list as $id) {
                $Option_array = $this->Option->find('first',array('conditions'=>array('_id' => $id)));
                $Option_array['Option']['order'] = $order_number;
                $this->Option->save($Option_array);
                $order_number++ ;
            }
            exit;
        }

        public function webadmin_delete_option(){
            $option_id = $_POST['option_id'];
            $this->loadModel("Option");
            $this->autoRender = false;
            // convert the string list to an array
            $Option_array = $this->Option->find('first',array('conditions'=>array('_id' => $option_id)));
            if(!empty($Option_array)){
                $this->Option->delete($Option_array['Option']['id']);                    
                echo 'success';
                exit;
            }
        }

        public function add_option(){
            $this->loadModel("Option");
            $this->Option->create();
            //print_r($this->request->data['option_type']); exit;
            $Option_array['eng_name'] = $this->request->data['eng_name'];
            $Option_array['jap_name'] = $this->request->data['jap_name'];
            $Option_array['type'] = $this->request->data['option_type'];
            $Option_array['order'] = 1;
            $this->Option->save($Option_array);
            if ($this->request->is('ajax')) {
                if (isset($failure) && $failure == TRUE) {
                    $data['success'] = false;
                    $data['error_message'] = 'Somthing wents wrong';
                } else {
                    $data['success'] = true;
                    $data['resetform'] = true;
                    $data['success_message'] = 'Added';
                    $data['selfReload'] = true;
                    $data['resetForm'] = true;
                }
                $data['slideToThisForm'] = true;
                echo json_encode($data);
                die;
            }
        }

        public function add_plan(){
            $this->loadModel("Option");
            if(empty($this->request->data['option_id'])){
	            $this->Option->create();
	            //print_r($this->request->data['option_type']); exit;
	            $Option_array['eng_name'] = $this->request->data['eng_name'];
	            $Option_array['jap_name'] = $this->request->data['jap_name'];
	            $Option_array['type'] = $this->request->data['option_type'];
	            $Option_array['duration'] = $this->request->data['duration'];
	            $Option_array['amount'] = $this->request->data['amount'];
	            $Option_array['order'] = 1;
	            $Option_array['discount'] = $this->request->data['discount'];
                $Option_array['description'] = $this->request->data['description'];
	            $Option_array['jap_description'] = $this->request->data['jap_description'];
	            $this->Option->save($Option_array);
            }else{
            	$Option_array = $this->Option->find('first',array('conditions'=>array('_id' => $this->request->data['option_id'])));
            	$Option_array['Option']['eng_name'] = $this->request->data['eng_name'];
	            $Option_array['Option']['jap_name'] = $this->request->data['jap_name'];
	            $Option_array['Option']['type'] = $this->request->data['option_type'];
	            $Option_array['Option']['duration'] = $this->request->data['duration'];
	            $Option_array['Option']['amount'] = $this->request->data['amount'];
	            $Option_array['Option']['order'] = 1;
	            $Option_array['Option']['discount'] = $this->request->data['discount'];
                $Option_array['Option']['description'] = $this->request->data['description'];
	            $Option_array['Option']['jap_description'] = $this->request->data['jap_description'];
	            $this->Option->save($Option_array);
            }
            if ($this->request->is('ajax')) {
                if (isset($failure) && $failure == TRUE) {
                    $data['success'] = false;
                    $data['error_message'] = 'Somthing wents wrong';
                } else {
                    $data['success'] = true;
                    $data['resetform'] = true;
                    $data['success_message'] = 'Added';
                    $data['url'] = $this->webroot.'webadmin/admin/getPlans';
                    $data['resetForm'] = true;
                }
                $data['slideToThisForm'] = true;
                echo json_encode($data);
                die;
            }
        }

        public function add_ticket(){
            $this->loadModel("Option");
            if(empty($this->request->data['option_id'])){
	            $this->Option->create();
	            //print_r($this->request->data['option_type']); exit;
	            $Option_array['eng_name'] = $this->request->data['eng_name'];
	            $Option_array['jap_name'] = $this->request->data['jap_name'];
	            $Option_array['type'] = $this->request->data['option_type'];
                $Option_array['ticket'] = $this->request->data['ticket'];
	            $Option_array['discount'] = $this->request->data['discount'];
	            $Option_array['amount'] = $this->request->data['amount'];
	            $Option_array['order'] = 1;
	            $this->Option->save($Option_array);
            	
            }else{
            	$Option_array = $this->Option->find('first',array('conditions'=>array('_id' => $this->request->data['option_id'])));
            	$Option_array['Option']['eng_name'] = $this->request->data['eng_name'];
	            $Option_array['Option']['jap_name'] = $this->request->data['jap_name'];
                $Option_array['Option']['type'] = $this->request->data['option_type'];
	            $Option_array['Option']['discount'] = $this->request->data['discount'];
	            $Option_array['Option']['ticket'] = $this->request->data['ticket'];
	            $Option_array['Option']['amount'] = $this->request->data['amount'];
	            $this->Option->save($Option_array);
            }
            if ($this->request->is('ajax')) {
                if (isset($failure) && $failure == TRUE) {
                    $data['success'] = false;
                    $data['error_message'] = 'Somthing wents wrong';
                } else {
                    $data['success'] = true;
                    $data['resetForm'] = true;
                    $data['success_message'] = 'Updated';
                    $data['url'] = $this->webroot.'webadmin/admin/getTickets';
                }
                $data['slideToThisForm'] = true;
                echo json_encode($data);
                die;
            }
        }


        public function webadmin_send_notification(){
            $this->set('title_for_layout', 'Send notification');
            $this->layout = 'admin_inner';
            $this->set('page','notification');
            $this->set('sub_page','send_notification');
            $this->set(compact('page','sub_page'));
        }
    }