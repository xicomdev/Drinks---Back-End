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
            $keyword = "";
            if(isset($_GET['keyword'])){
                $keyword = $_GET['keyword'];
            }
            if ($this->request->is('post')) {
                $keyword = $this->data['keyword'];
                $conditions = array(
                                    '$or'=>
                                        array(
                                                array('Group.title LIKE' => '%' . $keyword . '%'), 
                                                array('Group.description LIKE' => '%' . $keyword . '%'),
                                                array('Group._id LIKE' => '%' . $keyword . '%')
                                            )
                                        //array('Group.is_deleted' => false)
                                );
                $this->set("keyword", $this->data['keyword']);
            }else{
                //$conditions = array('Group.is_deleted' => false);
            }
            $this->paginate = array(
                'limit' => 10,
                "conditions" => $conditions,
                "order" =>array('Group.created' => 'DESC')
            );
            $GroupsDataList = $this->paginate('Group');
            //print_r($conditions); exit;
            $GroupsData = array();
            foreach ($GroupsDataList as $key => $value) {
                $user_info = $this->getUserInfoById($value['Group']['user_id'], array('fb_image','full_name','full_name','image'));
                $value['Group']['user_info'] = $user_info; 
                $GroupsData[] = $value;
            }

            $this->set('page','group');
            $this->set('sub_page','groups');
            $this->set(compact('GroupsData','page','sub_page','keyword'));
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