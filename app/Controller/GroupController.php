<?php

    /**
     * Group controller
     *
     **/
    App::uses('AppController', 'Controller');
    App::uses('BlowfishPasswordHasher', 'Controller/Component/Auth');


    class GroupController extends AppController {

        public $uses = array("Report", "Member");

        
        function beforeFilter() {
            parent::beforeFilter();
        }

        public function webadmin_groups(){

            $AdminUser = $this->Session->read('AdminUser');
            $this->set('title_for_layout', 'Groups List');
            $this->layout = 'admin_inner';
            $this->loadModel("Group");
            $GroupsData = $this->Group->find('all',array());
            //print_R($GroupsData); exit;
            $this->set('page','group');
            $this->set('sub_page','groups');
            $this->set(compact('GroupsData','sub_page','page'));
            $this -> render('/Admin/webadmin_groups');
        }

    }
