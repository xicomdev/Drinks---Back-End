<?php
/**
 * Static content controller.
 *
 * This file will render views from views/pages/
 *
 * CakePHP(tm) : Rapid Development Framework (http://cakephp.org)
 * Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
 * @link          http://cakephp.org CakePHP(tm) Project
 * @package       app.Controller
 * @since         CakePHP(tm) v 0.2.9
 * @license       http://www.opensource.org/licenses/mit-license.php MIT License
 */

App::uses('AppController', 'Controller');

/**
 * Static content controller
 *
 * Override this controller by placing a copy in controllers directory of an application
 *
 * @package       app.Controller
 * @link http://book.cakephp.org/2.0/en/controllers/pages-controller.html
 */
class UserController extends AppController {

/**
 * This controller does not use a model
 *
 * @var array
 */
	public $uses = array('User');
	public $name = 'User';


	public function newCheck() {
	
		if (!empty($this->request->data)) {
			//print_r($this->request->data);
			//Old direct method
			//$m = new MongoClient();
	    	//$collection = $m->selectDB("drinks")->selectCollection("users");
	    	//$resultset = $collection->find();

		    $params = array(
				'conditions' => array('User.fb_id' => $this->request->data['fb_id']),
			);
			$resultset = $this->User->find('first', $params);
			if(!empty($resultset)){
				$resultArray = array();
				$resultArray['status'] = true;
				$resultArray['data'] = $resultset;
				$resultArray['message'] = "success";
			
			}else{
				$resultArray = array();
				$resultArray['status'] = false;
				$resultArray['data'] = "";
				$resultArray['message'] = "user not found";
			}
		    
		}else{
			$resultArray = array();
			$resultArray['status'] = false;
			$resultArray['data'] = "";
			$resultArray['message'] = "no parameter found";
		}
		echo json_encode($resultArray); die;
	}


	/**
	 * add method
	 *
	 * @return void
	 * @access public
	 */
		public function add1() {
			$this->data = array(
					'name' => 'ashu2',
					'age' => '23',
				);
			if (!empty($this->data)) {
				$this->User->create();
				if ($this->User->save($this->data)) {
					$this->flash(__('User saved.', true), array('action' => 'index'));
					echo 1; die;
				} 
				echo 0; die;
			}
		}
}
