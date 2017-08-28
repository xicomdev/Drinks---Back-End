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

       

    }