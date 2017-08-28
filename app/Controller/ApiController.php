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
				$resultset['User']['job'] = $job['JobList'];	
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
				//print_r($_FILES['image']);
				$this->request->data['image'] = BASE_URL."uploads/users/original/".$this->Common->upload("profile_image",$_FILES['image']);	
				}
			if($this->User->save($this->request->data)){

				$params = array(
					'conditions' => array('User.fb_id' => $this->request->data['fb_id']),
				);
				$resultset = $this->User->find('first', $params);
				if(!empty($resultset['User']['job_id'])){
					$job = $this->JobList->find('first',array('conditions'=>array('_id' => $resultset['User']['job_id']),'fields'=>array("eng_name","jap_name")));
			    	$resultset['User']['job'] = $job['JobList'];
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
		$this->loadModel('User');
		$this->loadModel('JobList');
		if (!empty($this->request->data['user_id'])) {
			$this->Group->create();
			
			if(!empty($_FILES['image'])){
				//echo "1";
				//print_r($_FILES['image']);
				$this->request->data['image'] = BASE_URL."uploads/groups/original/".$this->Common->upload("group_image",$_FILES['image']);
				//echo "3";	
				//print_r($this->request->data['image']);
				}
			if($this->Group->save($this->request->data)){
				$last_inserted_id = $this->Group->getLastInsertID();
				$params = array(
					'conditions' => array('Group._id' => $last_inserted_id),
				);
				$resultset = $this->Group->find('first', $params);

				// Binding
				if(!empty($resultset['Group']['user_id'])){
					$user_array = $this->User->find('first',array('conditions'=>array('_id' => $resultset['Group']['user_id'])));
					$job = $this->JobList->find('first',array('conditions'=>array('_id' => $user_array['User']['job_id']),'fields'=>array("eng_name","jap_name")));
			    	$user_array['User']['job'] = $job['JobList'];
			    	$resultset['Group']['user'] = $user_array['User'];
			    } 


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
		$this->loadModel('User');
		$this->loadModel('JobList');
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

					//Binding
					if(!empty($group['Group']['user_id'])){
						$user_array = $this->User->find('first',array('conditions'=>array('_id' => $group['Group']['user_id'])));
						$job = $this->JobList->find('first',array('conditions'=>array('_id' => $user_array['User']['job_id']),'fields'=>array("eng_name","jap_name")));
				    	$user_array['User']['job'] = $job['JobList'];
				    	$group['Group']['user'] = $user_array['User'];
				    } 
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
		$this->loadModel('User');
		$this->loadModel('JobList');
		if (!empty($this->request->data['id'])) {

			$group = $this->Group->find('first',array('conditions'=>array('_id' => $this->request->data['id'])));	

			if($this->Group->delete($group['Group']['id'])){
				$old_image = str_replace(BASE_URL."uploads/groups/original/", "", $group['Group']['image']); 
				unlink(WWW_ROOT.'uploads/groups/original/'.$old_image);	
				unlink(WWW_ROOT.'uploads/groups/resized/'.$old_image);	

				//Binding
				if(!empty($resultset['Group']['user_id'])){
					$user_array = $this->User->find('first',array('conditions'=>array('_id' => $resultset['Group']['user_id'])));
					$job = $this->JobList->find('first',array('conditions'=>array('_id' => $user_array['User']['job_id']),'fields'=>array("eng_name","jap_name")));
			    	$user_array['User']['job'] = $job['JobList'];
			    	$resultset['Group']['user'] = $user_array['User'];
			    } 
			
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
		$this->loadModel('User');
		$this->loadModel('JobList');
		$params = array();
		if(isset($this->request->data['user_id'])){
			$params = array('Group.user_id' => $this->request->data['user_id']);	
		}
		
		$resultsets = $this->Group->find('all',array(
					'conditions' => $params,
				));
		if(!empty($resultsets)){
			
			$new_arr = array();
			$i = 0;
			foreach ($resultsets as $key => $resultset) {
				
				$followed_conditions = false;


				if(isset($this->request->data['place']) && $this->request->data['place'] != 0 ){

					$lat1 = $resultset['Group']['group_latitude'];
					$lon1 = $resultset['Group']['group_longitude'];
					$lat2 = $this->request->data['current_latitude'];
					$lon2 = $this->request->data['current_longitude'];

					$resultset['Group']['distance'] = $this->distance($lat1, $lon1, $lat2, $lon2);

					if($resultset['Group']['distance'] <= $this->request->data['place']){
						$followed_conditions = true;
					}else{
						$followed_conditions = false;
						continue;
					}
				}else{
					$followed_conditions = true;
				}

				if(isset($this->request->data['relationship'])){

					$relation_arr = explode(",", $this->request->data['relationship']);
					
					if(in_array($resultset['Group']['relationship'], $relation_arr)){
						$followed_conditions = true;
					}else{
						$followed_conditions = false;
						continue;
					}
				}else{
					$followed_conditions = true;
				}

				if(isset($this->request->data['number_people'])){
					$number_people_arr =  explode(",", $this->request->data['number_people']);
					if(in_array(count(json_decode($resultset['Group']['group_conditions'],true)), $number_people_arr)){
						$followed_conditions = true;
					}else{
						$followed_conditions = false;
						continue;
					}
				}else{
					$followed_conditions = true;
				}

				if(isset($this->request->data['age'])){
					$age_arr =  explode(",", $this->request->data['age']);
					
					if(!empty($resultset['Group']['group_conditions'])){
						$group_conditions_arr = json_decode($resultset['Group']['group_conditions'],true);
						foreach ($group_conditions_arr as $key => $value) {
							foreach ($age_arr as $key => $age_valueset) {
								$age_values_arr = explode("-", $age_valueset);
								if($value['Age'] >= $age_values_arr[0] && $value['Age'] <= $age_values_arr[1]){
									$followed_conditions = true;
								}	
							}							
						}
						if(!$followed_conditions){
							continue;
						}
					}				

				}else{
					$followed_conditions = true;
				}

				if(isset($this->request->data['job_id'])){
					$job_arr =  explode(",", $this->request->data['job_id']);
					
					if(!empty($resultset['Group']['group_conditions'])){
						$group_conditions_arr = json_decode($resultset['Group']['group_conditions'],true);
						foreach ($group_conditions_arr as $key => $value) {
							if(in_array($value['id'], $job_arr) ){
								$followed_conditions = true;
							}	
						}
						if(!$followed_conditions){
							continue;
						}
					}
				}else{
					$followed_conditions = true;
				}

				if(!empty($resultset['Group']['group_conditions'])){
					
					$resultset['Group']['group_count'] = count(json_decode($resultset['Group']['group_conditions'],true));
				}
				if($followed_conditions){
					//Binding
					if(!empty($resultset['Group']['user_id'])){
						$user_array = $this->User->find('first',array('conditions'=>array('_id' => $resultset['Group']['user_id'])));
						$job = $this->JobList->find('first',array('conditions'=>array('_id' => $user_array['User']['job_id']),'fields'=>array("eng_name","jap_name")));
				    	$user_array['User']['job'] = $job['JobList'];
				    	$resultset['Group']['user'] = $user_array['User'];
				    } 
				    $new_arr[] = $resultset;
				}
				
			    $i++;
			}
			if(!empty($new_arr)){

				if(isset($this->request->data['sort_value'])){
					$sorted_arr = array();
					foreach ($new_arr as $key => $row) {
					    $sorted_arr[$key] = date_diff(date_create($row['Group']['user']['dob']), date_create('today'))->y;
					}
					switch ($this->request->data['sort_value']) {
						case 'age_L_H':
							array_multisort($sorted_arr, SORT_ASC, $new_arr);	
							break;
						case 'age_H_L':
							array_multisort($sorted_arr, SORT_DESC, $new_arr);
							break;
					}
				} 
				
				$resultArray = array();
				$resultArray['status'] = true;
				$resultArray['data'] = $new_arr;
				$resultArray['message'] = "success";
			}else{
				$resultArray = array();
				$resultArray['status'] = true;
				$resultArray['data'] = new stdClass();
				$resultArray['message'] = "no groups found";
			}
			
			
		}else{
			$resultArray = array();
			$resultArray['status'] = false;
			$resultArray['data'] = new stdClass();
			$resultArray['message'] = "no groups found";
		}
		 
		header("Content-type:application/json"); 
		echo json_encode($resultArray); die;
	}


	function distance($lat1, $lon1, $lat2, $lon2, $unit="K") {

	  $theta = $lon1 - $lon2;
	  $dist = sin(deg2rad($lat1)) * sin(deg2rad($lat2)) +  cos(deg2rad($lat1)) * cos(deg2rad($lat2)) * cos(deg2rad($theta));
	  $dist = acos($dist);
	  $dist = rad2deg($dist);
	  $miles = $dist * 60 * 1.1515;
	  $unit = strtoupper($unit);

	  if ($unit == "K") {
	    return ($miles * 1.609344);
	  } else if ($unit == "N") {
	      return ($miles * 0.8684);
	    } else {
	        return $miles;
	      }
	}




}
