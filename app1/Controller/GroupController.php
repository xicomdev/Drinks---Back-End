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
            $GroupsDataList = $this->Group->find('all',array(
                         'order' => array('_id' => -1)
                    ));
            $GroupsData = array();
            foreach ($GroupsDataList as $key => $value) {
                $user_info = $this->getUserInfoById($value['Group']['user_id'], array('fb_image','full_name','full_name','image'));
                $value['Group']['user_info'] = $user_info; 
                $GroupsData[] = $value;
            }

            $this->set('page','group');
            $this->set('sub_page','groups');
            $this->set(compact('GroupsData','sub_page','page'));
            $this -> render('/Admin/webadmin_groups');
        }

    


        /*
        * 
        * Author: Lakhvinder Singh
        * Method: getUserInfoById
        * Description: return user detail 
        */
        public function getUserInfoById($user_id,$fields = false)
        {
            $this->loadModel("User");
            if($fields == false){
                $params = array(
                        'conditions' => array('User._id' => $user_id),
                    );

            }else{
                $params = array(
                        'conditions' => array('User._id' => $user_id),
                        'fields'=>$fields
                    );
            }
            $result = $this->User->find('first', $params);
            return $result['User'];
        }
    }