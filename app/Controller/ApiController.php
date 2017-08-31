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
	//public $components = array('Common','Auth','Session','Paginator');
	//public $helper = array('Form','Session');
var $components = array('Common');
/**
 * This controller does not use a model
 *
 * @var array
 */
	public $layout = false;
	public $autorender = false;
	public $deviceToken = '';
    public $deviceType='';
    public $sessionId='';
    public $userId='';

	public function beforeFilter() {
		header("Content-type:application/json");
        parent::beforeFilter();
        $headers = apache_request_headers();
        $token = $headers['token'];
		$timeStamp = $headers['timeStamp'];
		$this->userId = $headers['user_id'];
		$this->sessionId = $headers['session_id'];
        $this->Auth->allow();
    }

	public function newCheck() {
		$this->loadModel('User');
		$this->loadModel('JobList');
		$this->loadModel('UserAccount');
		if (!empty($this->request->data)) {
	
		    $params = array(
				'conditions' => array('User.fb_id' => $this->request->data['fb_id']),
			);
			$resultset = $this->User->find('first', $params);
			
			if(!empty($resultset['User']['job_id'])){
				$job = $this->JobList->find('first',array('conditions'=>array('_id' => $resultset['User']['job_id']),'fields'=>array("eng_name","jap_name")));
				$resultset['User']['job'] = $job['JobList'];	
			}
			$account_array = $this->UserAccount->find('first',array('conditions'=>array('user_id' => $resultset['User']['id'])));
			$resultset['User']['account'] = $account_array['UserAccount'];			
			 
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
		header("Content-type:application/json");
		echo json_encode($resultArray); 
		 die;
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
		$this->loadModel('UserAccount');
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
				// User account entry
				if(!empty($resultset['User']['id'])){
					$this->UserAccount->create();
					$new_arr = array();
					$new_arr['user_id'] = $resultset['User']['id'];
					$new_arr['balance'] = 10;
					$this->UserAccount->save($new_arr);
				}
				if(!empty($resultset['User']['job_id'])){
					$job = $this->JobList->find('first',array('conditions'=>array('_id' => $resultset['User']['job_id']),'fields'=>array("eng_name","jap_name")));
			    	$resultset['User']['job'] = $job['JobList'];
			    } 

			    $account_array = $this->UserAccount->find('first',array('conditions'=>array('user_id' => $resultset['User']['id'])));
				$resultset['User']['account'] = $account_array['UserAccount'];

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
		header("Content-type:application/json"); 
		echo json_encode($resultArray); 
		die;
	}


	public function memberJob() {
		$this->loadModel('JobList');
		$this->loadModel('Place');
		$this->loadModel('Education');
		$this->loadModel('MarriageType');
		$this->loadModel('Tobacco');
		$this->loadModel('Drinking');
		$this->loadModel('Salary');
		$this->loadModel('Relationship');

		$jobset = $this->JobList->find('all',array('fields'=>array("eng_name","jap_name")));
		
		if(!empty($jobset)){
			
			$joblist_Array = array();
			foreach ($jobset as $jobset) {
				$joblist_Array[] = $jobset['JobList']; 
			}
			
			$updated_Array['job_list'] = $joblist_Array;
		}

		$placeset = $this->Place->find('all',array('fields'=>array("eng_name","jap_name","latitude","longitude")));
		
		if(!empty($placeset)){
			
			$places_Array = array();
			foreach ($placeset as $placeset) {
				$places_Array[] = $placeset['Place']; 
			}
			
			$updated_Array['places'] = $places_Array;
		}

		$educationset = $this->Education->find('all',array('fields'=>array("eng_name","jap_name")));
		
		if(!empty($educationset)){
			
			$education_Array = array();
			foreach ($educationset as $educationset) {
				$education_Array[] = $educationset['Education']; 
			}
			
			$updated_Array['education_types'] = $education_Array;
		}

		$marriageset = $this->MarriageType->find('all',array('fields'=>array("eng_name","jap_name")));
		
		if(!empty($marriageset)){
			
			$marriage_Array = array();
			foreach ($marriageset as $marriageset) {
				$marriage_Array[] = $marriageset['MarriageType']; 
			}
			
			$updated_Array['marriage_types'] = $marriage_Array;
		}


		$tobaccoset = $this->Tobacco->find('all',array('fields'=>array("eng_name","jap_name")));
		
		if(!empty($tobaccoset)){
			
			$tobacco_Array = array();
			foreach ($tobaccoset as $tobaccoset) {
				$tobacco_Array[] = $tobaccoset['Tobacco']; 
			}
			
			$updated_Array['tobacco_types'] = $tobacco_Array;
		}

		$drinkingset = $this->Drinking->find('all',array('fields'=>array("eng_name","jap_name")));
		
		if(!empty($drinkingset)){
			
			$drinking_Array = array();
			foreach ($drinkingset as $drinkingset) {
				$drinking_Array[] = $drinkingset['Drinking']; 
			}
			
			$updated_Array['drinking_types'] = $drinking_Array;
		}

		$salaryset = $this->Salary->find('all',array('fields'=>array("eng_name","jap_name")));
		
		if(!empty($salaryset)){
			
			$salary_Array = array();
			foreach ($salaryset as $salaryset) {
				$salary_Array[] = $salaryset['Salary']; 
			}
			
			$updated_Array['salary_types'] = $salary_Array;
		}
		
		$relationshipset = $this->Relationship->find('all',array('fields'=>array("eng_name","jap_name")));
		
		if(!empty($relationshipset)){
			
			$relationship_Array = array();
			foreach ($relationshipset as $relationshipset) {
				$relationship_Array[] = $relationshipset['Relationship']; 
			}
			
			$updated_Array['relationship_types'] = $relationship_Array;
		}

		if(!empty($updated_Array)){

			$resultArray = array();
			$resultArray['status'] = true;
			$resultArray['data'] = $updated_Array;
			$resultArray['message'] = "success";
			
		}else{
			$resultArray = array();
			$resultArray['status'] = false;
			$resultArray['data'] = new stdClass();
			$resultArray['message'] = "no data found";
		}
		
		header("Content-type:application/json");
		echo json_encode($resultArray);
		 die;
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
		header("Content-type:application/json"); 
		echo json_encode($resultArray); 
		die;
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
		header("Content-type:application/json");
		echo json_encode($resultArray); 
		 die;
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
		$this->loadModel('UserAccount');
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
			    	$account_array = $this->UserAccount->find('first',array('conditions'=>array('user_id' => $user_array['User']['id'])));
					$user_array['User']['account'] = $account_array['UserAccount'];

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
		header("Content-type:application/json"); 
		echo json_encode($resultArray); 
		die;
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
		$this->loadModel('UserAccount');
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
				    	$account_array = $this->UserAccount->find('first',array('conditions'=>array('user_id' => $user_array['User']['id'])));
					    $user_array['User']['account'] = $account_array['UserAccount'];
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
		header("Content-type:application/json"); 
		echo json_encode($resultArray); 
		die;
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
		$this->loadModel('UserAccount');
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
			    	$account_array = $this->UserAccount->find('first',array('conditions'=>array('user_id' => $user_array['User']['id'])));
					$user_array['User']['account'] = $account_array['UserAccount'];
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
		header("Content-type:application/json"); 
		echo json_encode($resultArray); 
		die;
	}


	public function getGroups() {
		$this->loadModel('Group');
		$this->loadModel('User');
		$this->loadModel('JobList');
		$this->loadModel('DrinkedGroup');
		$this->loadModel('UserAccount');
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
						if(!empty($this->userId)){
							$drinked_group = $this->DrinkedGroup->find('first',array('conditions'=>array('user_id' => $this->userId,'group_id'=>$resultset['Group']['id'])));
							if(!empty($drinked_group)){
								$resultset['Group']['drinked_status'] = true;
							}else{
								$resultset['Group']['drinked_status'] = false;
							}
						}else{
							$resultset['Group']['drinked_status'] = false;
						}
						
				    	$user_array['User']['job'] = $job['JobList'];
				    	$account_array = $this->UserAccount->find('first',array('conditions'=>array('user_id' => $user_array['User']['id'])));
					    $user_array['User']['account'] = $account_array['UserAccount'];
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

	/**
	 * add method
	 *
	 * @return void
	 * @access public
	 */
	public function showInterest() {
		$this->loadModel('DrinkedGroup');
		$this->loadModel('UserAccount');
		$this->request->data['user_id'] = $this->userId;
		if (!empty($this->request->data['user_id']) && !empty($this->request->data['group_id'])) {

			$exists = $this->DrinkedGroup->find('first',array('conditions'=>array('user_id' => $this->request->data['user_id'],'group_id' => $this->request->data['group_id'])));	
			if(!empty($exists)){
				if($this->request->data['drinked_status'] == "true"){
					$resultArray = array();
					$resultArray['status'] = true;
					$resultArray['drinked_status'] = true;
					$resultArray['message'] = "group already drinked";
				}else{
					if($this->DrinkedGroup->delete($exists['DrinkedGroup']['id'])){
						$resultArray = array();
						$resultArray['status'] = true;
						$resultArray['drinked_status'] = false;
						$resultArray['message'] = "group undrinked successfully";
					}else{
						$resultArray = array();
						$resultArray['status'] = false;
						$resultArray['drinked_status'] = "";
						$resultArray['message'] = "something went wrong. please try again.";
					}
				}
			}else{
				if($this->request->data['drinked_status'] == "true"){
					$this->DrinkedGroup->create();
					unset($this->request->data['drinked_status']);
					$account_array = $this->UserAccount->find('first',array('conditions'=>array('user_id' => $this->request->data['user_id'])));
					if($account_array['UserAccount']['balance'] > 0){
						if($this->DrinkedGroup->save($this->request->data)){
							
							$new_arr = array();
							$new_arr['id'] = $account_array['UserAccount']['id'];
							$new_arr['balance'] = $account_array['UserAccount']['balance']-1;
							$this->UserAccount->save($new_arr);

							$resultArray = array();
							$resultArray['status'] = true;
							$resultArray['drinked_status'] = true;
							$resultArray['message'] = "group drinked successfully";	
						}else{
							$resultArray = array();
							$resultArray['status'] = false;
							$resultArray['drinked_status'] = "";
							$resultArray['message'] = "something went wrong. please try again.";
						}	
					}else{
						$resultArray = array();
						$resultArray['status'] = true;
						$resultArray['drinked_status'] = false;
						$resultArray['message'] = "insufficient balance";
					}
					
					
				}else{
					$resultArray = array();
					$resultArray['status'] = true;
					$resultArray['drinked_status'] = false;
					$resultArray['message'] = "group already undrinked";
					
				}
			}
		}else{
			$resultArray = array();
			$resultArray['status'] = true;
			$resultArray['data'] = new stdClass();
			$resultArray['message'] = "incomplete data";
		}

		echo json_encode($resultArray); 
		die;
	}
	public function test()
	{
		$this->loadModel('Group');
		$group = $this->Group->find('first',array('conditions'=>array('_id' => "59a7d5976d349c01208b4567")));
		print_r($group); die;
	}

	public function updatedUser()
	{
		if(!empty($this->userId)){
			$this->loadModel('User');
			$this->loadModel('JobList');
			$this->loadModel('UserAccount');
			$params = array(
						'conditions' => array('User._id' => $this->userId),
					);
			$resultset = $this->User->find('first', $params);
			// User account entry
			if(!empty($resultset['User']['id'])){
				$this->UserAccount->create();
				$new_arr = array();
				$new_arr['user_id'] = $resultset['User']['id'];
				$new_arr['balance'] = 10;
				$this->UserAccount->save($new_arr);
			}
			if(!empty($resultset['User']['job_id'])){
				$job = $this->JobList->find('first',array('conditions'=>array('_id' => $resultset['User']['job_id']),'fields'=>array("eng_name","jap_name")));
		    	$resultset['User']['job'] = $job['JobList'];
		    } 

		    $account_array = $this->UserAccount->find('first',array('conditions'=>array('user_id' => $resultset['User']['id'])));
			$resultset['User']['account'] = $account_array['UserAccount'];

			$resultArray = array();
			$resultArray['status'] = true;
			$resultArray['data'] = $resultset;
			$resultArray['message'] = "user successfully saved";
		}else{
			$resultArray = array();
			$resultArray['status'] = true;
			$resultArray['data'] = $resultset;
			$resultArray['message'] = "header key user_id not found";
		}
		echo json_encode($resultArray); die;
		
	}


}
