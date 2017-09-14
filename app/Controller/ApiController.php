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
	public $deviceId = '';
    public $sessionId='';
    public $userId='';


    var $allowedActions = array('newCheck','registerFacebook','memberJob');

	public function beforeFilter() {
		header("Content-type:application/json");
        parent::beforeFilter();
        $headers = apache_request_headers();
        $this->deviceToken = isset($headers['token']) ? $headers['token'] : "";
        $this->deviceId = isset($headers['device_id']) ? $headers['device_id'] : "";
		$this->timeStamp = isset($headers['timeStamp']) ? $headers['timeStamp'] : "" ;
		$this->userId = isset($headers['user_id']) ? $headers['user_id'] : "";
		$this->sessionId = isset($headers['session_id']) ? $headers['session_id'] : "";
        $this->Auth->allow();
        if(!in_array($this->request->action,$this->allowedActions)){
        	if($this->checkUserExists($this->userId)){
	        	if(!$this->checkApiSession(null,$this->sessionId,$this->userId,$this->deviceId)){
	        		$resultArray = array();
					$resultArray['status'] = false;
					$resultArray['status_code'] = 203;
					$resultArray['data'] = new stdClass();
					$resultArray['message'] = "session expired. please login again";
					echo json_encode($resultArray); die;
	        	}
	        }else{
	        	$resultArray = array();
				$resultArray['status'] = false;
				$resultArray['status_code'] = 203;
				$resultArray['data'] = new stdClass();
				$resultArray['message'] = "user deleted by admin. please register again";
				echo json_encode($resultArray); die;
	        }
        }
    }

    public function updateApiSession($loginStatus,$deviceToken,$sessionId,$userId,$deviceId)
    {
    	$this->loadModel("ApiSession");
    	$params = array(
				'conditions' => array('ApiSession.user_id' => $userId,'ApiSession.device_id'=>$deviceId),
			);
		$exists = $this->ApiSession->find('first', $params);
		if(!empty($exists)){
			if(!empty($deviceToken)){
				$exists['ApiSession']['token'] = $deviceToken;	
			}

			$exists['ApiSession']['session_id'] = $sessionId;	
			$exists['ApiSession']['loginStatus'] = $loginStatus;
			$this->ApiSession->save($exists);
		}else{
			$data = array();
			$data['token'] = $deviceToken;
			$data['login_status'] = $loginStatus;
			$data['session_id'] = $sessionId;
			$data['user_id'] = $userId;
			$data['device_id'] = $deviceId;
			$this->ApiSession->save($data);
		}
    }

    public function checkUserExists($user_id)
    {
    	$this->loadModel("User");
    	$params = array(
				'conditions' => array('User._id' => $user_id),
			);
		$exists = $this->User->find('first', $params);
		
		if(!empty($exists)){
			return true;
		}else{
			return false;
		}
    }

    public function checkGroupExists($user_id)
    {
    	if($this->checkUserExists($user_id)){
    		$this->loadModel("Group");
	    	$params = array(
					'conditions' => array('Group.user_id' => $user_id),
				);
			$exists = $this->User->find('first', $params);
			
			if(!empty($exists)){
				return "1";  // one group already there
			}else{
				return "0";  // no groups for this user
			}
    	}else{
    		return "2";   // user not exists
    	}
    	
    }




    public function checkApiSession($loginStatus,$sessionId,$userId,$deviceId)
    {
    	if($this->checkUserExists($userId)){

    		$this->loadModel("ApiSession");
	    	$params = array(
					'conditions' => array('ApiSession.user_id' => $userId,'ApiSession.device_id'=>$deviceId,'ApiSession.login_status' => 1,'ApiSession.session_id'=>$sessionId),
				);
			$exists = $this->ApiSession->find('first', $params);
			
			if(!empty($exists)){
				return true;
			}else{
				return false;
			}

    	}else{
    		return false;
    	}
    	
    }


    public function createThread($exists)
    {
    	$this->loadModel('Thread');
	    $this->Thread->create();
	    $new_thread['group_id'] = $exists['DrinkedGroup']['group_id'];
	    $new_thread['sender_id'] = $exists['DrinkedGroup']['user_id'];
	    $new_thread['receiver_id'] = $exists['DrinkedGroup']['owner_user_id'];
	    if($this->Thread->save($new_thread)){
	    	return true;
	    }else{
	    	return false;
	    }
    }

    public function deleteThreadIfHave($exists)
    {
    	$this->loadModel('Thread');
    	$this->loadModel('Message');

    	$params = array('$and'=>array(
                         array('Thread.group_id'=>$exists['DrinkedGroup']['group_id']),
                         array('Thread.sender_id'=>$exists['DrinkedGroup']['user_id']),
             			)
                    );	
		$resultset = $this->Thread->find('first',array(
					'conditions' => $params
				));

		if(!empty($resultset)){
			$this->Thread->delete($resultset['Thread']['id']);
			$this->Message->deleteAll(array('thread_id' => $resultset['Thread']['id']));
		}
	   	return true;	
    }

	public function newCheck() {
		$this->loadModel('User');
		$this->loadModel('JobList');
		$this->loadModel('UserAccount');
		//echo json_encode("fb_id :".$this->request->data['fb_id']);
		if (!empty($this->request->data['fb_id'])) {
	
		    $params = array(
				'conditions' => array('User.fb_id' => $this->request->data['fb_id']),
			);
			$resultset = $this->User->find('first', $params);
			
			if(!empty($resultset['User']['job_id'])){
				$job = $this->JobList->find('first',array('conditions'=>array('_id' => $resultset['User']['job_id']),'fields'=>array("eng_name","jap_name")));
				$resultset['User']['job'] = $job['JobList'];	
			}
			if(!empty($resultset['User']['id'])){
				$account_array = $this->UserAccount->find('first',array('conditions'=>array('user_id' => $resultset['User']['id'])));
				$resultset['User']['account'] = $account_array['UserAccount'];	
				$resultset['User']['reported_status'] = false;
				
				$session_key = sha1($resultset['User']['id'].strtotime(date('m/d/Y h:i:s a', time())));
				$this->updateApiSession(1,$this->deviceToken,$session_key,$resultset['User']['id'],$this->deviceId);
				$resultset['User']['session_id'] = $session_key;
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
		header("Content-type:application/json");
		echo json_encode($resultArray); 
		 die;
	}

	public function logout()
	{
		$this->updateApiSession(0,$this->deviceToken,"",$this->userId,$this->deviceId);
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
			$this->request->data['last_login'] = ""; 
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
					$new_arr['balance'] = 100;
					$this->UserAccount->save($new_arr);
				}
				if(!empty($resultset['User']['job_id'])){
					$job = $this->JobList->find('first',array('conditions'=>array('_id' => $resultset['User']['job_id']),'fields'=>array("eng_name","jap_name")));
			    	$resultset['User']['job'] = $job['JobList'];
			    } 
			    if(!empty($resultset['User']['id'])){
			    	$account_array = $this->UserAccount->find('first',array('conditions'=>array('user_id' => $resultset['User']['id'])));
					$resultset['User']['account'] = $account_array['UserAccount'];
					$resultset['User']['reported_status'] = false;
					
					$session_key = sha1($resultset['User']['id'].strtotime(date('m/d/Y h:i:s a', time())));
					$this->updateApiSession(1,$this->deviceToken,$session_key,$resultset['User']['id'],$this->deviceId);
					$resultset['User']['session_id'] = $session_key;
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
/*	public function login() {
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
	}*/

	/**
	 * add method
	 *
	 * @return void
	 * @access public
	 */
/*	public function logout() {
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
	}*/


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
		$this->request->data['user_id'] = $this->userId;
		if (!empty($this->request->data['user_id'])) {
			$check_group = $this->checkGroupExists($this->request->data['user_id']);
			if($check_group == "0"){
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
						$user_array['User']['reported_status'] = false;
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
			}else if($check_group == "2"){
				$resultArray = array();
				$resultArray['status'] = false;
				$resultArray['status_code'] = 203;
				$resultArray['data'] = new stdClass();
				$resultArray['message'] = "user deleted by admin. please register again";
			}else {
				$resultArray = array();
				$resultArray['status'] = false;
				$resultArray['data'] = new stdClass();
				$resultArray['message'] = "only one group is allowed";
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
					    $user_array['User']['reported_status'] = false;
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
			    	$user_array['User']['reported_status'] = false;
			    	$resultset['Group']['user'] = $user_array['User'];
			    } 
			
				$resultArray = array();
				$resultArray['status'] = true;
				$resultArray['data'] = new stdClass();
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
		$this->loadModel('ReportedUser');
		$this->loadModel('ReportedGroup');
		$this->loadModel('UserAccount');
		$params = array();
		if(isset($this->request->data['user_id'])){
			$params = array('Group.user_id' => $this->request->data['user_id']);	
		}
		
		$resultsets = $this->Group->find('all',array(
					'conditions' => $params,
				));
		if(!empty($resultsets)){

			if(!empty($this->userId)){
				foreach ($resultsets as $key => $value) {
					if($value['Group']['user_id'] == $this->userId){
						unset($resultsets[$key]);
					}
				}	
			}
			
			
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
								$resultset['Group']['drinked_status'] = $drinked_group['DrinkedGroup']['drinked_status'];
							}else{
								$resultset['Group']['drinked_status'] = "undrinked";
							}

							$reported_user = $this->ReportedUser->find('first',array('conditions'=>array('user_id' => $this->userId,'reported_user_id'=>$resultset['Group']['user_id'])));
							if(!empty($reported_user)){
								$user_array['User']['reported_status'] = true;
							}else{
								$user_array['User']['reported_status'] = false;
							}

							$reported_group = $this->ReportedGroup->find('first',array('conditions'=>array('user_id' => $this->userId,'group_id'=>$resultset['Group']['id'])));
							if(!empty($reported_user)){
								$resultset['Group']['group_reported_status'] = true;
							}else{
								$resultset['Group']['group_reported_status'] = false;
							}

						}else{
							$resultset['Group']['group_reported_status'] = false;
							$resultset['Group']['drinked_status'] = "undrinked";
							$user_array['User']['reported_status'] = false;
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
					
					switch ($this->request->data['sort_value']) {
						case 'age_L_H':
							$sorted_arr = array();
							foreach ($new_arr as $key => $row) {
							    $sorted_arr[$key] = date_diff(date_create($row['Group']['user']['dob']), date_create('today'))->y;
							}
							array_multisort($sorted_arr, SORT_ASC, $new_arr);	
							break;
						case 'age_H_L':
							$sorted_arr = array();
							foreach ($new_arr as $key => $row) {
							    $sorted_arr[$key] = date_diff(date_create($row['Group']['user']['dob']), date_create('today'))->y;
							}
							array_multisort($sorted_arr, SORT_DESC, $new_arr);
							break;
						case 'last_login':
						    $sorted_arr = array();
							foreach ($new_arr as $key => $row) {
							    $sorted_arr[$key] = $row['Group']['user']['last_login'];
							}
							array_multisort($sorted_arr, SORT_DESC, $new_arr);
							break;
					}
				}else{
					$sorted_arr = array();
					foreach ($new_arr as $key => $row) {
					    $sorted_arr[$key] = $row['Group']['id'];
					}
					array_multisort($sorted_arr, SORT_DESC, $new_arr);
				} 
				
				$myGroups = $this->Group->find('all',array(
							'conditions' => array('Group.user_id' => $this->userId),
						));
				
				$resultArray = array();
				$resultArray['status'] = true;
				$resultArray['data'] = array('myGroups'=>$myGroups , 'groups'=>$new_arr);
				$resultArray['message'] = "success";
			}else{
				$resultArray = array();
				$resultArray['status'] = true;
				$resultArray['data'] = new stdClass();
				$resultArray['message'] = "no groups found";
			}
			
			
		}else{
			$resultArray = array();
			$resultArray['status'] = true;
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

	public function showInterest() {
		$this->loadModel('DrinkedGroup');
		$this->loadModel('UserAccount');
		$this->request->data['user_id'] = $this->userId;
		if($this->checkGroupExists($this->userId) != "1"){
			$resultArray = array();
			$resultArray['status'] = false;
			$resultArray['drinked_status'] = "undrinked";
			$resultArray['message'] = "you must have your own group to drink another group";
			
		}else{

			if (!empty($this->request->data['user_id']) && !empty($this->request->data['group_id'])) {

				$exists = $this->DrinkedGroup->find('first',array('conditions'=>array('user_id' => $this->request->data['user_id'],'group_id' => $this->request->data['group_id'])));
				if(!empty($exists)){
					// We already drinked group and now sending the drinked fr the same group
					if($this->request->data['drinked_status'] == "drinked"){
						$resultArray = array();
						$resultArray['status'] = true;
						$resultArray['drinked_status'] = "waiting";
						$resultArray['message'] = "group already drinked";
					}
					// offer is in waiting or confirmed and we are undrinked
					if($this->request->data['drinked_status'] == "undrinked"){
						if($this->DrinkedGroup->delete($exists['DrinkedGroup']['id'])){
							
							//Delete Thread on undrinked
							$this->deleteThreadIfHave($exists);
							
							$resultArray = array();
							$resultArray['status'] = true;
							$resultArray['drinked_status'] = "undrinked";
							$resultArray['message'] = "group undrinked successfully";
						}else{
							$resultArray = array();
							$resultArray['status'] = false;
							$resultArray['drinked_status'] = "undrinked";
							$resultArray['message'] = "something went wrong. please try again.";
						}
					}
					// offer is in waiting list and we confirmed
					if($this->request->data['drinked_status'] == "confirmed"){
						$exists['DrinkedGroup']['drinked_status'] = "confirmed";
						if($this->DrinkedGroup->save($exists)){
							    
							    //Create Thread on accepted
							    $this->createThread($exists);

								$resultArray = array();
								$resultArray['status'] = true;
								$resultArray['drinked_status'] = "confirmed";
								$resultArray['message'] = "offer accepted successfully";	
							}else{
								$resultArray = array();
								$resultArray['status'] = false;
								$resultArray['drinked_status'] = "undrinked";
								$resultArray['message'] = "something went wrong. please try again.";
							}	
					}

				}else{
					if($this->request->data['drinked_status'] == "drinked"){
						$this->DrinkedGroup->create();
						$this->request->data['drinked_status'] = "waiting";
						$account_array = $this->UserAccount->find('first',array('conditions'=>array('user_id' => $this->request->data['user_id'])));
						
						if($account_array['UserAccount']['balance'] > 0){
							if($this->DrinkedGroup->save($this->request->data)){
								
								$new_arr = array();
								$new_arr['id'] = $account_array['UserAccount']['id'];
								$new_arr['balance'] = $account_array['UserAccount']['balance']-1;
								$this->UserAccount->save($new_arr);

								$resultArray = array();
								$resultArray['status'] = true;
								$resultArray['drinked_status'] = "waiting";
								$resultArray['message'] = "group drinked successfully";	
							}else{
								$resultArray = array();
								$resultArray['status'] = false;
								$resultArray['drinked_status'] = "undrinked";
								$resultArray['message'] = "something went wrong. please try again.";
							}	
						}else{
							$resultArray = array();
							$resultArray['status'] = true;
							$resultArray['drinked_status'] = "undrinked";
							$resultArray['message'] = "insufficient balance";
						}
						
					}else{
						$resultArray = array();
						$resultArray['status'] = true;
						$resultArray['drinked_status'] = "undrinked";
						$resultArray['message'] = "group already undrinked";
						
					}
				}


			}

		}

		echo json_encode($resultArray); 
		die;

	}

	/*public function showInterest1() {
		$this->loadModel('DrinkedGroup');
		$this->loadModel('UserAccount');
		$this->request->data['user_id'] = $this->userId;
		if (!empty($this->request->data['user_id']) && !empty($this->request->data['group_id'])) {

			$exists = $this->DrinkedGroup->find('first',array('conditions'=>array('user_id' => $this->request->data['user_id'],'group_id' => $this->request->data['group_id'])));	
			if(!empty($exists)){
				if($this->request->data['drinked_status'] == true){
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
				if($this->request->data['drinked_status'] == true){
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
	}*/
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
			/*if(!empty($resultset['User']['id'])){
				$this->UserAccount->create();
				$new_arr = array();
				$new_arr['user_id'] = $resultset['User']['id'];
				$new_arr['balance'] = 10;
				$this->UserAccount->save($new_arr);
			}*/
			if(!empty($resultset['User']['job_id'])){
				$job = $this->JobList->find('first',array('conditions'=>array('_id' => $resultset['User']['job_id']),'fields'=>array("eng_name","jap_name")));
		    	$resultset['User']['job'] = $job['JobList'];
		    } 
		    if(!empty($resultset['User']['id'])){
		    	$account_array = $this->UserAccount->find('first',array('conditions'=>array('user_id' => $resultset['User']['id'])));
				$resultset['User']['account'] = $account_array['UserAccount'];
				$resultset['User']['reported_status'] = false;
			}

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


	public function receivedOffers() {
		$this->loadModel('Group');
		$this->loadModel('User');
		$this->loadModel('JobList');
		$this->loadModel('DrinkedGroup');
		$this->loadModel('ReportedUser');
		$this->loadModel('ReportedGroup');
		$this->loadModel('UserAccount');
		$params = array();
		if(isset($this->userId)){
			$params = array('DrinkedGroup.owner_user_id' => $this->userId);	
		}
		
		$resultsets = $this->DrinkedGroup->find('all',array(
					'conditions' => $params,
					'order'=>array('_id'=>'DESC'),
				));

		if(!empty($resultsets)){
			
			$new_arr = array();
			foreach ($resultsets as $key => $resultGroup) {
				
				$resultset = $this->Group->find('first',array(
							//'conditions' => array('Group._id' => $resultGroup['DrinkedGroup']['group_id']),
							'conditions' => array('Group.user_id' => $resultGroup['DrinkedGroup']['user_id']),
						));

				//Binding
				if(!empty($resultset['Group']['user_id'])){
					$user_array = $this->User->find('first',array('conditions'=>array('_id' => $resultset['Group']['user_id'])));
					$job = $this->JobList->find('first',array('conditions'=>array('_id' => $user_array['User']['job_id']),'fields'=>array("eng_name","jap_name")));
					if(!empty($this->userId)){
						$drinked_group = $this->DrinkedGroup->find('first',array('conditions'=>array('user_id' => $this->userId,'group_id'=>$resultset['Group']['id'])));
						
						if(!empty($drinked_group)){
							$resultset['Group']['drinked_status'] = $drinked_group['DrinkedGroup']['drinked_status'];
						}else{
							$resultset['Group']['drinked_status'] = "undrinked";
						}

						$reported_user = $this->ReportedUser->find('first',array('conditions'=>array('user_id' => $this->userId,'reported_user_id'=>$resultset['Group']['user_id'])));
						if(!empty($reported_user)){
							$user_array['User']['reported_status'] = true;
						}else{
							$user_array['User']['reported_status'] = false;
						}

						$reported_group = $this->ReportedGroup->find('first',array('conditions'=>array('user_id' => $this->userId,'group_id'=>$resultset['Group']['id'])));
						if(!empty($reported_user)){
							$resultset['Group']['group_reported_status'] = true;
						}else{
							$resultset['Group']['group_reported_status'] = false;
						}
					}else{
						$resultset['Group']['reported_status'] = false;
						$resultset['Group']['drinked_status'] = "undrinked";
						$user_array['User']['reported_status'] = false;
					}
					
			    	$user_array['User']['job'] = $job['JobList'];
			    	$account_array = $this->UserAccount->find('first',array('conditions'=>array('user_id' => $user_array['User']['id'])));
				    $user_array['User']['account'] = $account_array['UserAccount'];
			    	$resultset['Group']['user'] = $user_array['User'];
			    } 
			    $new_arr[] = $resultset;
			
			}
			if(!empty($new_arr)){

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
			$resultArray['status'] = true;
			$resultArray['data'] = new stdClass();
			$resultArray['message'] = "no groups found";
		}
		 
		echo json_encode($resultArray); die;
	}


	public function sentOffers() {
		$this->loadModel('Group');
		$this->loadModel('User');
		$this->loadModel('JobList');
		$this->loadModel('DrinkedGroup');
		$this->loadModel('ReportedUser');
		$this->loadModel('ReportedGroup');
		$this->loadModel('UserAccount');
		$params = array();
		if(isset($this->userId)){
			$params = array('DrinkedGroup.user_id' => $this->userId);	
		}
		
		$resultsets = $this->DrinkedGroup->find('all',array(
					'conditions' => $params,
					'order'=>array('_id'=>'DESC'),
				));

		if(!empty($resultsets)){
			
			$new_arr = array();
			foreach ($resultsets as $key => $resultGroup) {
				
				$resultset = $this->Group->find('first',array(
							'conditions' => array('Group._id' => $resultGroup['DrinkedGroup']['group_id']),
						));

				//Binding
				if(!empty($resultset['Group']['user_id'])){
					$user_array = $this->User->find('first',array('conditions'=>array('_id' => $resultset['Group']['user_id'])));
					$job = $this->JobList->find('first',array('conditions'=>array('_id' => $user_array['User']['job_id']),'fields'=>array("eng_name","jap_name")));
					if(!empty($this->userId)){
						$drinked_group = $this->DrinkedGroup->find('first',array('conditions'=>array('user_id' => $this->userId,'group_id'=>$resultset['Group']['id'])));
						if(!empty($drinked_group)){
							$resultset['Group']['drinked_status'] = $drinked_group['DrinkedGroup']['drinked_status'];
						}else{
							$resultset['Group']['drinked_status'] = "undrinked";
						}
						$reported_user = $this->ReportedUser->find('first',array('conditions'=>array('user_id' => $this->userId,'reported_user_id'=>$resultset['Group']['user_id'])));
						if(!empty($reported_user)){
							$user_array['User']['reported_status'] = true;
						}else{
							$user_array['User']['reported_status'] = false;
						}
						$reported_group = $this->ReportedGroup->find('first',array('conditions'=>array('user_id' => $this->userId,'group_id'=>$resultset['Group']['id'])));
						if(!empty($reported_user)){
							$resultset['Group']['group_reported_status'] = true;
						}else{
							$resultset['Group']['group_reported_status'] = false;
						}
					}else{
						$resultset['Group']['group_reported_status'] = false;
						$resultset['Group']['drinked_status'] = "undrinked";
						$user_array['User']['reported_status'] = false;
					}
					
			    	$user_array['User']['job'] = $job['JobList'];
			    	$account_array = $this->UserAccount->find('first',array('conditions'=>array('user_id' => $user_array['User']['id'])));
				    $user_array['User']['account'] = $account_array['UserAccount'];
			    	$resultset['Group']['user'] = $user_array['User'];
			    } 
			    $new_arr[] = $resultset;
			
			}
			if(!empty($new_arr)){

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
			$resultArray['status'] = true;
			$resultArray['data'] = new stdClass();
			$resultArray['message'] = "no groups found";
		}
		 
		echo json_encode($resultArray); die;
	}

	/**
	 * add method
	 *
	 * @return void
	 * @access public
	 */
	public function appLogin() {
		$this->loadModel('User');

		if (!empty($this->timeStamp) && !empty($this->userId)) {
			$user_array = $this->User->find('first',array('conditions'=>array('_id' => $this->userId)));
			$user_array['User']['last_login'] = $this->timeStamp;

			if($this->User->save($user_array)){
				$resultArray = array();
				$resultArray['status'] = true;
				$resultArray['data'] = new stdClass();
				$resultArray['message'] = "Last Login successfully updated";
			}else{
				$resultArray = array();
				$resultArray['status'] = false;
				$resultArray['data'] = new stdClass();
				$resultArray['message'] = "Last Login not updated";
			}	
		}else{
			$resultArray = array();
			$resultArray['status'] = false;
			$resultArray['data'] = new stdClass();
			$resultArray['message'] = "header missing";
		}
		echo json_encode($resultArray); 
		die;
	}


	/**
	 * add method
	 *
	 * @return void
	 * @access public
	 */
	public function reportUser() {
		$this->loadModel('ReportedUser');
		$this->loadModel('UserAccount');
		$this->request->data['user_id'] = $this->userId;
		if (!empty($this->request->data['user_id']) && !empty($this->request->data['reported_user_id'])) {

			$exists = $this->ReportedUser->find('first',array('conditions'=>array('user_id' => $this->request->data['user_id'],'reported_user_id' => $this->request->data['reported_user_id'])));	
			if(!empty($exists)){
				if($this->request->data['reported_status'] == true){
					$resultArray = array();
					$resultArray['status'] = true;
					$resultArray['reported_status'] = true;
					$resultArray['message'] = "user already reported";
				}else{
					if($this->ReportedUser->delete($exists['ReportedUser']['id'])){
						$resultArray = array();
						$resultArray['status'] = true;
						$resultArray['reported_status'] = false;
						$resultArray['message'] = "user unreported successfully";
					}else{
						$resultArray = array();
						$resultArray['status'] = false;
						$resultArray['reported_status'] = "";
						$resultArray['message'] = "something went wrong. please try again.";
					}
				}
			}else{
				if($this->request->data['reported_status'] == true){
					$this->ReportedUser->create();
					unset($this->request->data['reported_status']);
					if($this->ReportedUser->save($this->request->data)){

						$resultArray = array();
						$resultArray['status'] = true;
						$resultArray['reported_status'] = true;
						$resultArray['message'] = "user reported successfully";	
					}else{
						$resultArray = array();
						$resultArray['status'] = false;
						$resultArray['reported_status'] = "";
						$resultArray['message'] = "something went wrong. please try again.";
					}			
				}else{
					$resultArray = array();
					$resultArray['status'] = true;
					$resultArray['reported_status'] = false;
					$resultArray['message'] = "user already unreported";
					
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


	/**
	 * add method
	 *
	 * @return void
	 * @access public
	 */
	public function editProfile() {
		$this->loadModel('User');
		$this->loadModel('JobList');
		$this->loadModel('UserAccount');
		$data = $this->request->data;
		if(!empty($data)){
			if (!empty($this->userId)) {
				$user_array = $this->User->find('first',array('conditions'=>array('_id' => $this->userId)));
				
				foreach ($data as $key => $value) {

					$user_array['User'][$key] = $value;	
						
				}
				if(!empty($_FILES['image'])){
					if(!empty($user_array['User']['image'])){
						$this->Common->deleteFile("profile_image",str_replace(BASE_URL."uploads/users/original/", "", $user_array['User']['image']));	
					}
					$user_array['User']['image'] = BASE_URL."uploads/users/original/".$this->Common->upload("profile_image",$_FILES['image']);	
				}

				if($this->User->save($user_array)){

					$params = array(
						'conditions' => array('User._id' => $this->userId),
					);
					$resultset = $this->User->find('first', $params);
					
					if(!empty($resultset['User']['job_id'])){
						$job = $this->JobList->find('first',array('conditions'=>array('_id' => $resultset['User']['job_id']),'fields'=>array("eng_name","jap_name")));
				    	$resultset['User']['job'] = $job['JobList'];
				    } 
				    if(!empty($resultset['User']['id'])){
				    	$account_array = $this->UserAccount->find('first',array('conditions'=>array('user_id' => $resultset['User']['id'])));
						$resultset['User']['account'] = $account_array['UserAccount'];
						$resultset['User']['reported_status'] = false;
					}
					
					$resultArray = array();
					$resultArray['status'] = true;
					$resultArray['data'] = $resultset;
					$resultArray['message'] = "Profile updated successfully ";
				}else{
					$resultArray = array();
					$resultArray['status'] = false;
					$resultArray['data'] = new stdClass();
					$resultArray['message'] = "Profile not updated";
				}	
			}else{
				$resultArray = array();
				$resultArray['status'] = false;
				$resultArray['data'] = new stdClass();
				$resultArray['message'] = "header missing";
			}	
		}else{
				$resultArray = array();
				$resultArray['status'] = false;
				$resultArray['data'] = new stdClass();
				$resultArray['message'] = "no data found";
		}
		
		echo json_encode($resultArray); 
		die;
	}



	/**
	 * add method
	 *
	 * @return void
	 * @access public
	 */
	public function reportGroup() {
		$this->loadModel('ReportedGroup');
		$this->request->data['user_id'] = $this->userId;
		if (!empty($this->request->data['user_id']) && !empty($this->request->data['group_id'])) {

			$exists = $this->ReportedGroup->find('first',array('conditions'=>array('user_id' => $this->request->data['user_id'],'group_id' => $this->request->data['group_id'])));	
			if(!empty($exists)){
				if($this->request->data['group_reported_status'] == true){
					$resultArray = array();
					$resultArray['status'] = true;
					$resultArray['data'] = ['group_reported_status' => true];
					$resultArray['message'] = "group already reported";
				}else{
					if($this->ReportedGroup->delete($exists['ReportedGroup']['id'])){
						$resultArray = array();
						$resultArray['status'] = true;
						$resultArray['data'] = ['group_reported_status' => false];
						$resultArray['message'] = "group unreported successfully";
					}else{
						$resultArray = array();
						$resultArray['status'] = false;
						$resultArray['data'] = ['group_reported_status' => false];
						$resultArray['message'] = "something went wrong. please try again.";
					}
				}
			}else{
				if($this->request->data['group_reported_status'] == true){
					$this->ReportedGroup->create();
					unset($this->request->data['group_reported_status']);
					if($this->ReportedGroup->save($this->request->data)){

						$resultArray = array();
						$resultArray['status'] = true;
						$resultArray['data'] = ['group_reported_status' => true];
						$resultArray['message'] = "group reported successfully";	
					}else{
						$resultArray = array();
						$resultArray['status'] = false;
						$resultArray['data'] = ['group_reported_status' => false];
						$resultArray['message'] = "something went wrong. please try again.";
					}			
				}else{
					$resultArray = array();
					$resultArray['status'] = true;
					$resultArray['data'] = ['group_reported_status' => false];
					$resultArray['message'] = "group already unreported";
					
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


	//Message Module API's start



	/* Method: getThreads
    *  Description: This method is use to send messages
    *  Created by: Ashwani Kocher
    */

    public function getThreads() {
		$this->loadModel('Thread');
		$this->loadModel('Message');
		$this->loadModel('Group');
		$this->loadModel('User');
		$this->loadModel('JobList');
		$this->loadModel('DrinkedGroup');
		$this->loadModel('ReportedUser');
		$this->loadModel('ReportedGroup');
		$this->loadModel('UserAccount');
		$params = array();
		if(isset($this->userId)){
			$params = array('$or'=>array(
	                             array('Thread.receiver_id'=>$this->userId),
	                             array('Thread.sender_id'=>$this->userId ),
                     			)
                            );
			//$params = array('Thread.sender_id' => $this->userId);	
		}
		//print_r($params);
		$resultsets = $this->Thread->find('all',array(
					'conditions' => $params,
					'fields' => array('group_id','sender_id','receiver_id'),
				));
		//print_r($resultsets); die;
	
		if(!empty($resultsets)){
			
			$new_arr = array();
			foreach ($resultsets as $key => $resultGroup) {
				$thread_info = $resultGroup;
				$resultset = $this->Group->find('first',array(
							'conditions' => array('Group._id' => $resultGroup['Thread']['group_id'])
						));
				if($thread_info['Thread']['sender_id'] == $this->userId){
					$second_member_array = $this->User->find('first',array('conditions'=>array('_id' => $thread_info['Thread']['receiver_id']),'fields'=>array('full_name','image','job_id',"fb_image","dob")));
					$job = $this->JobList->find('first',array('conditions'=>array('_id' => $second_member_array['User']['job_id']),'fields'=>array("eng_name","jap_name")));
					$second_member_array['User']['job'] = $job['JobList'];
			    	$thread_info['Thread']['second_member'] = $second_member_array['User'];
				}else{
					$second_member_array = $this->User->find('first',array('conditions'=>array('_id' => $thread_info['Thread']['sender_id']),'fields'=>array('full_name','image','job_id',"fb_image","dob")));
					$job = $this->JobList->find('first',array('conditions'=>array('_id' => $second_member_array['User']['job_id']),'fields'=>array("eng_name","jap_name")));
					$second_member_array['User']['job'] = $job['JobList'];
			    	$thread_info['Thread']['second_member'] = $second_member_array['User'];
				} 

				//Binding
				if(!empty($resultset['Group']['user_id'])){
					$user_array = $this->User->find('first',array('conditions'=>array('_id' => $resultset['Group']['user_id']),'fields'=>array('full_name','image','job_id','fb_image',"dob")));
					$job = $this->JobList->find('first',array('conditions'=>array('_id' => $user_array['User']['job_id']),'fields'=>array("eng_name","jap_name")));
					if(!empty($this->userId)){
						$drinked_group = $this->DrinkedGroup->find('first',array('conditions'=>array('user_id' => $this->userId,'group_id'=>$resultset['Group']['id'])));
						if(!empty($drinked_group)){
							$resultset['Group']['drinked_status'] = $drinked_group['DrinkedGroup']['drinked_status'];
						}else{
							$resultset['Group']['drinked_status'] = "undrinked";
						}

						//$reported_user = $this->ReportedUser->find('first',array('conditions'=>array('user_id' => $this->userId,'reported_user_id'=>$resultset['Group']['user_id'])));
						//if(!empty($reported_user)){
						//	$user_array['User']['reported_status'] = true;
						//}else{
							$user_array['User']['reported_status'] = false;
						//}

						$reported_group = $this->ReportedGroup->find('first',array('conditions'=>array('user_id' => $this->userId,'group_id'=>$resultset['Group']['id'])));
						if(!empty($reported_user)){
							$resultset['Group']['group_reported_status'] = true;
						}else{
							$resultset['Group']['group_reported_status'] = false;
						}
					}else{
						$resultset['Group']['reported_status'] = false;
						$resultset['Group']['drinked_status'] = "undrinked";
						$user_array['User']['reported_status'] = false;
					}
					
			    	$user_array['User']['job'] = $job['JobList'];
			    	//$account_array = $this->UserAccount->find('first',array('conditions'=>array('user_id' => $user_array['User']['id'])));
				    //$user_array['User']['account'] = $account_array['UserAccount'];
			    	$resultset['Group']['user'] = $user_array['User'];
			    } 
			    $thread_info['Thread']['Group'] = $resultset['Group']; 
			    $last_message = $this->Message->find('first',array('conditions'=>array('Message.thread_id'=>$thread_info['Thread']['id']),'order'=>array('Message._id'=>'DESC')));
			    if(!empty($last_message)){
			    	//Binding
					if(!empty($last_message['Message']['sender_id'])){
						$user_array = $this->User->find('first',array('conditions'=>array('_id' => $last_message['Message']['sender_id']),'fields'=>array('full_name','image','job_id',"fb_image","dob")));
						$job = $this->JobList->find('first',array('conditions'=>array('_id' => $user_array['User']['job_id']),'fields'=>array("eng_name","jap_name")));
						//$user_array['User']['reported_status'] = false;
				    	$user_array['User']['job'] = $job['JobList'];
				    	//$account_array = $this->UserAccount->find('first',array('conditions'=>array('user_id' => $user_array['User']['id'])));
					    //$user_array['User']['account'] = $account_array['UserAccount'];
				    	$last_message['Message']['sender'] = $user_array['User'];
				    } 
			    	$thread_info['Thread']['last_message'] = $last_message['Message'];	
			    }else{
			    	$thread_info['Thread']['last_message'] = new stdClass();
			    }
			    
			    $new_arr[] = $thread_info['Thread'];
			
			}
			if(!empty($new_arr)){

				$resultArray = array();
				$resultArray['status'] = true;
				$resultArray['data'] = $new_arr;
				$resultArray['message'] = "success";
			}else{
				$resultArray = array();
				$resultArray['status'] = true;
				$resultArray['data'] = new stdClass();
				$resultArray['message'] = "no threads found";
			}
			
			
		}else{
			$resultArray = array();
			$resultArray['status'] = true;
			$resultArray['data'] = new stdClass();
			$resultArray['message'] = "no threads found";
		}
		 
		echo json_encode($resultArray); die;
	}




	    public function getAllMessages() {
			$this->loadModel('Message');
			$this->loadModel('User');
			$this->loadModel('JobList');
			$params = array();
			if(isset($this->request->data['thread_id'])){
				$params = array(
	                            'Message.thread_id'=>$this->request->data['thread_id']
							);	
			}
			$resultsets = $this->Message->find('all',array(
						'conditions' => $params,
						//'order' => array('Message._id'=>"ASC")
					));
		
			if(!empty($resultsets)){
				
				$new_arr = array();
				foreach ($resultsets as $key => $resultMessage) {
					if($resultMessage['Message']['receiver_id'] == $this->userId){
						$resultMessage['Message']['read_status'] = "1";
						$this->Message->save($resultMessage);
					}
					$message_info = $resultMessage;
					$resultset = $this->User->find('first',array(
								'conditions' => array('User._id' => $resultMessage['Message']['sender_id']),
								'fields'=>array('full_name','image','job_id','fb_image'),
							));
					
				    $message_info['Message']['sender'] = $resultset['User']; 				    
				    $new_arr[] = $message_info['Message'];

				
				}
				if(!empty($new_arr)){

					$resultArray = array();
					$resultArray['status'] = true;
					$resultArray['data'] = $new_arr;
					$resultArray['message'] = "success";
				}else{
					$resultArray = array();
					$resultArray['status'] = true;
					$resultArray['data'] = new stdClass();
					$resultArray['message'] = "no messages found";
				}
				
				
			}else{
				$resultArray = array();
				$resultArray['status'] = true;
				$resultArray['data'] = new stdClass();
				$resultArray['message'] = "no messages found";
			}
			 
			echo json_encode($resultArray); die;
		}


	/**
	 * add method
	 *
	 * @return void
	 * @access public
	 */
	public function sendMessage() {
		$this->loadModel('Message');
		$this->request->data['sender_id'] = $this->userId;
		$this->request->data['read_status'] = "0";
		//print_r($this->request->data); die;
		if (!empty($this->request->data['sender_id']) && !empty($this->request->data['thread_id']) && !empty($this->request->data['receiver_id']) && !empty($this->request->data['message'])) {

			$this->Message->create();
			if($result = $this->Message->save($this->request->data)){
				$resultArray = array();
				$resultArray['status'] = true;
				$resultArray['data'] = $result['Message'];
				$resultArray['message'] = "message sent successfully";	
			}else{
				$resultArray = array();
				$resultArray['status'] = false;
				$resultArray['data'] = new stdClass();
				$resultArray['message'] = "message not sent";
			}			
		}else{
			$resultArray = array();
			$resultArray['status'] = true;
			$resultArray['data'] = false;
			$resultArray['message'] = "incomplete data";
		}	

		echo json_encode($resultArray); 
		die;
	}

	//Message Module API's end 


}
