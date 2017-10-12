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
            $AdminUser = $this->Session->read('AdminUser');
            if (!@$AdminUser) {
                return $this->redirect(array("controller" => "admin", "action" => "index","webadmin"=>true));
            }
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
                $conditions["OR"] = array('User.full_name LIKE' => '%' . $keyword . '%', 'User.email LIKE' => '%' . $keyword . '%');
                $this->set("keyword", $this->data['keyword']);
            }else{
            	if(!empty($keyword)){
            		$conditions["OR"] = array('User.full_name LIKE' => '%' . $keyword . '%', 'User.email LIKE' => '%' . $keyword . '%');
            		$this->set("keyword", $keyword);
            	}
            }
            
			$this->paginate = array(
                'limit' => 5,
                "conditions" => $conditions
            );
	        $UsersData = $this->paginate('User');
            $this->set(compact('UsersData','keyword'));
        }

        public function webadmin_getPlans() {
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
            $this->set('page','option');
            $this->set('sub_page','membership_plan');
            $this->set(compact('OptionsData','sub_page','option'));
        }

        public function webadmin_getTickets() {
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
            $this->set('page','option');
            $this->set('sub_page','ticket');
            $this->set(compact('OptionsData','sub_page','option'));
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

        public function add_ticket(){
            $this->loadModel("Option");
            $this->Option->create();
            //print_r($this->request->data['option_type']); exit;
            $Option_array['eng_name'] = $this->request->data['eng_name'];
            $Option_array['jap_name'] = $this->request->data['jap_name'];
            $Option_array['type'] = $this->request->data['option_type'];
            $Option_array['point'] = $this->request->data['point'];
            $Option_array['amount'] = $this->request->data['amount'];
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
                }
                $data['slideToThisForm'] = true;
                echo json_encode($data);
                die;
            }
        }
    }