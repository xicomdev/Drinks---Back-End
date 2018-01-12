<?php

/**
 * Group controller
 *
 **/
App::uses('AppController', 'Controller');
App::uses('BlowfishPasswordHasher', 'Controller/Component/Auth');


class PageController extends AppController {

    public $uses = array("Report", "Member");

    
    function beforeFilter() {
        parent::beforeFilter();
    }

    public function webadmin_pages(){

        $AdminUser = $this->Session->read('AdminUser');
        $this->set('title_for_layout', 'Pages List');
        $this->layout = 'admin_inner';
        $this->loadModel("Page");
        $PagesData = $this->Page->find('all',array(
                     'order' => array('status' => 1)
                ));
        
        $this->set('page','pages');
        $this->set('sub_page','pages');
        $this->set(compact('PagesData','sub_page','page'));
        $this -> render('/Admin/webadmin_pages');
    }

    public function webadmin_editpage($id){

        $AdminUser = $this->Session->read('AdminUser');
        $this->set('title_for_layout', 'Edit Page');
        $this->layout = 'admin_inner';
        $this->loadModel("Page");
        $PageData = $this->Page->find('first',array(
                     'conditions' => array('_id' => $id)
                ));
        $this->set('page','pages');
        $this->set('sub_page','pages');
        $this->set('page_id',$id);

        $this->set(compact('PageData','page_id','sub_page','page'));
        $this -> render('/Admin/webadmin_editpage');
    }


     public function webadmin_updatepage(){

        $this->loadModel("Page");
        if(!empty($this->request->data['page_id'])){
            $Page_array = $this->Page->find('first',array('conditions'=>array('_id' => $this->request->data['page_id'])));
            //print_r($Page_array); exit;
            $Page_array['Page']['page_title'] = $this->request->data['page_title'];
            $Page_array['Page']['page_content'] = $this->request->data['page_content'];
            $this->Page->save($Page_array);
        }else{
            $failure = true;
        }
        if ($this->request->is('ajax')) {
            if (isset($failure) && $failure == TRUE) {
                $data['success'] = false;
                $data['error_message'] = 'Somthing wents wrong';
            } else {
                $data['success'] = true;
                $data['selfReload'] = true;
                $data['success_message'] = 'Updated';
            }
            $data['slideToThisForm'] = true;
            echo json_encode($data);
            die;
        }
    }
}