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
class ApiController extends AppController {
var $components = array('Common');
/**
 * This controller does not use a model
 *
 * @var array
 */
	//public $uses = array('User');
	//public $name = 'User';
	public $layout = false;
	public $autorender = false;

	function beforeFilter() {
        parent::beforeFilter();
        $this->Auth->allow();
    }

	public function newCheck() {
		$this->loadModel('User');
		$this->loadModel('JobList');
		if (!empty($this->request->data)) {
	
		    $params = array(
				'conditions' => array('User.fb_id' => $this->request->data['fb_id']),
			);
			$resultset = $this->User->find('first', $params);
			
			if(!empty($resultset['User']['job_id'])){
				$job = $this->JobList->find('first',array('conditions'=>array('_id' => $resultset['User']['job_id']),'fields'=>array("eng_name","jap_name")));
				$resultset['User']['job'] = $job;	
			}			
			 
			if(!empty($resultset)){
				$resultArray = array();
				$resultArray['status'] = true;
				$resultArray['data'] = $resultset;
				$resultArray['message'] = "success";
			
			}else{
				$resultArray = array();
				$resultArray['status'] = true;
				$resultArray['data'] = new stdClass();
				$resultArray['message'] = "user not found";
			}
		    
		}else{
			$resultArray = array();
			$resultArray['status'] = false;
			$resultArray['data'] = new stdClass();
			$resultArray['message'] = "no parameter found";
		}
		echo json_encode($resultArray); 
		header("Content-type:application/json"); die;
	}


	/**
	 * add method
	 *
	 * @return void
	 * @access public
	 */
	public function registerFacebook() {
		$this->loadModel('User');
		$this->loadModel('JobList');
		if (!empty($this->request->data['fb_id'])) {
			$this->User->create();
			
			if(!empty($_FILES['image'])){
				$this->request->data['image'] = BASE_URL."uploads/users/original/".$this->Common->upload("profile_image",$_FILES['image']);	
				}
			if($this->User->save($this->request->data)){

				$params = array(
					'conditions' => array('User.fb_id' => $this->request->data['fb_id']),
				);
				$resultset = $this->User->find('first', $params);
				if(!empty($resultset['User']['job_id'])){
					$job = $this->JobList->find('first',array('conditions'=>array('_id' => $resultset['User']['job_id']),'fields'=>array("eng_name","jap_name")));
			    	$resultset['User']['job'] = $job;
			    } 
				$resultArray = array();
				$resultArray['status'] = true;
				$resultArray['data'] = $resultset;
				$resultArray['message'] = "user successfully saved";
			
			}else{
				$resultArray = array();
				$resultArray['status'] = false;
				$resultArray['data'] = new stdClass();
				$resultArray['message'] = "user not saved";
			}	
		}else{
			$resultArray = array();
			$resultArray['status'] = false;
			$resultArray['data'] = new stdClass();
			$resultArray['message'] = "no fb_id found";
		}
		echo json_encode($resultArray); 
		header("Content-type:application/json"); die;
	}


	public function memberJob() {
		$this->loadModel('JobList');
		$resultset = $this->JobList->find('all',array('fields'=>array("eng_name","jap_name")));
		
		if(!empty($resultset)){
			
			$updated_Array = array();
			foreach ($resultset as $resultset) {
				$updated_Array[] = $resultset['JobList']; 
			}
			$resultArray = array();
			$resultArray['status'] = true;
			$resultArray['data'] = $updated_Array;
			$resultArray['message'] = "success";
			
		}else{
			$resultArray = array();
			$resultArray['status'] = false;
			$resultArray['data'] = new stdClass();
			$resultArray['message'] = "no jobs found";
		}
		 
		echo json_encode($resultArray);
		header("Content-type:application/json"); die;
	}

	/**
	 * add method
	 *
	 * @return void
	 * @access public
	 */
	public function login() {
		$this->loadModel('History');

		if (!empty($this->request->data['user_id'])) {
			$this->History->create();
			if($this->History->save($this->request->data)){
				$resultArray = array();
				$resultArray['status'] = true;
				$resultArray['data'] = new stdClass();
				$resultArray['message'] = "Login history successfully updated";
			}else{
				$resultArray = array();
				$resultArray['status'] = false;
				$resultArray['data'] = new stdClass();
				$resultArray['message'] = "Login history not updated";
			}	
		}else{
			$resultArray = array();
			$resultArray['status'] = false;
			$resultArray['data'] = new stdClass();
			$resultArray['message'] = "no user_id found";
		}
		echo json_encode($resultArray); 
		header("Content-type:application/json"); die;
	}

	/**
	 * add method
	 *
	 * @return void
	 * @access public
	 */
	public function logout() {
		$this->loadModel('History');

		if (!empty($this->request->data['user_id'])) {
			$this->History->create();
			if($this->History->save($this->request->data)){
				$resultArray = array();
				$resultArray['status'] = true;
				$resultArray['data'] = new stdClass();
				$resultArray['message'] = "Logout history successfully updated";
			}else{
				$resultArray = array();
				$resultArray['status'] = false;
				$resultArray['data'] = new stdClass();
				$resultArray['message'] = "Logout history not updated";
			}	
		}else{
			$resultArray = array();
			$resultArray['status'] = false;
			$resultArray['data'] = new stdClass();
			$resultArray['message'] = "no user_id found";
		}
		echo json_encode($resultArray); 
		header("Content-type:application/json"); die;
	}


	/**
	 * add method
	 *
	 * @return void
	 * @access public
	 */
	public function addGroup() {
		$this->loadModel('Group');
		if (!empty($this->request->data['user_id'])) {
			$this->Group->create();
			
			if(!empty($_FILES['image'])){
				$this->request->data['image'] = BASE_URL."uploads/groups/original/".$this->Common->upload("group_image",$_FILES['image']);	
				}
			if($this->Group->save($this->request->data)){
				$last_inserted_id = $this->Group->getLastInsertID();
				$params = array(
					'conditions' => array('Group._id' => $last_inserted_id),
				);
				$resultset = $this->Group->find('first', $params);
				$resultArray = array();
				$resultArray['status'] = true;
				$resultArray['data'] = $resultset;
				$resultArray['message'] = "group successfully added";
			
			}else{
				$resultArray = array();
				$resultArray['status'] = false;
				$resultArray['data'] = new stdClass();
				$resultArray['message'] = "group not added";
			}	
		}else{
			$resultArray = array();
			$resultArray['status'] = false;
			$resultArray['data'] = new stdClass();
			$resultArray['message'] = "no user_id found";
		}
		echo json_encode($resultArray); 
		header("Content-type:application/json"); die;
	}

	/**
	 * add method
	 *
	 * @return void
	 * @access public
	 */
	public function editGroup() {
		$this->loadModel('Group');
		if (!empty($this->request->data['id'])) {
			$group = $this->Group->find('first',array('conditions'=>array('_id' => $this->request->data['id'])));
			if(!empty($group)){
				if(!empty($_FILES['image'])){
					$old_image = str_replace(BASE_URL."uploads/groups/original/", "", $group['Group']['image']); 
					$group['Group']['image'] = BASE_URL."uploads/groups/original/".$this->Common->upload("group_image",$_FILES['image']);
					unlink(WWW_ROOT.'uploads/groups/original/'.$old_image);
					unlink(WWW_ROOT.'uploads/groups/resized/'.$old_image);	
					}
				foreach ($this->request->data as $key => $value) {
					$group['Group'][$key] = $value;
				}

				if($this->Group->save($group)){
					$resultArray = array();
					$resultArray['status'] = true;
					$resultArray['data'] = $group;
					$resultArray['message'] = "group successfully updated";
				
				}else{
					$resultArray = array();
					$resultArray['status'] = false;
					$resultArray['data'] = new stdClass();
					$resultArray['message'] = "group not updated";
				}	
			}else{
				$resultArray = array();
				$resultArray['status'] = false;
				$resultArray['data'] = new stdClass();
				$resultArray['message'] = "no group found with this id";	
			}
			
		}else{
			$resultArray = array();
			$resultArray['status'] = false;
			$resultArray['data'] = new stdClass();
			$resultArray['message'] = "no group_id found";
		}
		echo json_encode($resultArray); 
		header("Content-type:application/json"); die;
	}


	/**
	 * add method
	 *
	 * @return void
	 * @access public
	 */
	public function deleteGroup() {
		$this->loadModel('Group');
		if (!empty($this->request->data['id'])) {

			$group = $this->Group->find('first',array('conditions'=>array('_id' => $this->request->data['id'])));	

			if($this->Group->delete($group['Group']['id'])){
				$old_image = str_replace(BASE_URL."uploads/groups/original/", "", $group['Group']['image']); 
				unlink(WWW_ROOT.'uploads/groups/original/'.$old_image);	
				unlink(WWW_ROOT.'uploads/groups/resized/'.$old_image);	
			
				$resultArray = array();
				$resultArray['status'] = true;
				$resultArray['data'] = $resultset;
				$resultArray['message'] = "group successfully deleted";
			
			}else{
				$resultArray = array();
				$resultArray['status'] = false;
				$resultArray['data'] = new stdClass();
				$resultArray['message'] = "group not deleted";
			}	
		}else{
			$resultArray = array();
			$resultArray['status'] = false;
			$resultArray['data'] = new stdClass();
			$resultArray['message'] = "no group_id found";
		}
		echo json_encode($resultArray); 
		header("Content-type:application/json"); die;
	}


	public function getGroups() {
		$this->loadModel('Group');
		$params = array(
					'conditions' => array('Group.user_id' => $this->request->data['user_id']),
				);
		$resultset = $this->Group->find('all',$params);
		
		if(!empty($resultset)){
			
			/*$updated_Array = array();
			foreach ($resultset as $resultset) {
				$updated_Array[] = $resultset['Group']; 
			}*/
			$resultArray = array();
			$resultArray['status'] = true;
			$resultArray['data'] = $resultset;
			$resultArray['message'] = "success";
			
		}else{
			$resultArray = array();
			$resultArray['status'] = false;
			$resultArray['data'] = new stdClass();
			$resultArray['message'] = "no jobs found";
		}
		 
		echo json_encode($resultArray);
		header("Content-type:application/json"); die;
	}




}
