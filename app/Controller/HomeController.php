<?php

/**
 * Group controller
 *
 **/
App::uses('AppController', 'Controller');
App::uses('BlowfishPasswordHasher', 'Controller/Component/Auth');


class HomeController extends AppController {


    
    function beforeFilter() {
        parent::beforeFilter();
        $this->Auth->allow("page");
    }

    public function page($slug){

        $this->set('title_for_layout', 'Page');
        $this->layout = 'mobile';
        $this->loadModel("Page");
        $PageData = $this->Page->find('first',array(
                     'conditions' => array('slug' => $slug)
                ));
        $this->set('page','pages');
        $this->set('sub_page','pages');

        $this->set(compact('PageData','sub_page','page'));
        $this -> render('/Pages/home');
    }
}