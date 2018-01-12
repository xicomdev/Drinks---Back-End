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
var $components = array('Common','Stripe.Stripe');
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


    var $allowedActions = array('newCheck','registerFacebook','memberJob','getMembershipPlanAndTickets','testapi');



	public function beforeFilter() {	
		header("Content-type:application/json");
        parent::beforeFilter();
        $headers = apache_request_headers();
        //print_r($headers); exit;
		//$txt = $this->request->action.'--------------'.json_encode($headers).' -----------------';
 		//$myfile = file_put_contents('debug.txt', $txt.PHP_EOL , FILE_APPEND | LOCK_EX);
        $this->deviceToken 	= isset($headers['Token']) ? $headers['Token'] : "";
        $this->deviceId 	= isset($headers['Device-Id']) ? $headers['Device-Id'] : "";
		$this->timeStamp 	= isset($headers['Timestamp']) ? $headers['Timestamp'] : "" ;
		$this->userId 		= isset($headers['User-Id']) ? $headers['User-Id'] : "";
		$this->sessionId 	= isset($headers['Session-Id']) ? $headers['Session-Id'] : "";
        $this->Auth->allow();
        if(!in_array($this->request->action,$this->allowedActions)){
        		$session_info = $this->checkApiSession($this->sessionId);
	        	if(!empty($session_info)){
		        	$this->userId = $session_info['ApiSession']['user_id'];
			        if(!$this->checkApiSession($this->sessionId)){
		        		$resultArray = array();
						$resultArray['status'] = false;
						$resultArray['status_code'] = 203;
						$resultArray['data'] = new stdClass();
						$resultArray['message'] = "session expired. please login again";
						$resultArray['jap_message'] = "セッションの有効期限が切れ。もう一度ログインしてください";
						echo json_encode($resultArray); die;
		        	}
		        	$this->loadModel("User");
			        $last_login_user_array = $this->User->find('first',array('conditions'=>array('_id' => $this->userId)));
					$last_login_user_array['User']['last_login'] = date('Y-m-d H:i:s');
					$this->User->save($last_login_user_array);
	        	}else{
	        		$resultArray = array();
					$resultArray['status'] = false;
					$resultArray['status_code'] = 203;
					$resultArray['data'] = new stdClass();
					$resultArray['message'] = "session expired. please login again";
					$resultArray['jap_message'] = "セッションの有効期限が切れ。もう一度ログインしてください";
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
			$exists['ApiSession']['login_status'] = $loginStatus;
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
					'conditions' => array('Group.user_id' => $user_id,'Group.is_deleted' => false),
				);
			$exists = $this->Group->find('first', $params);			
			if(!empty($exists)){
				return "1";  // one group already there
			}else{
				return "0";  // no groups for this user
			}
    	}else{
    		return "2";   // user not exists
    	}
    	
    }

    public function checkGroupExistsByGroupId($group_id){
    	$this->loadModel("Group");
    	$params = array(
				'conditions' => array('Group._id' => $group_id,'Group.is_deleted' => false),
			);
		$exists = $this->Group->find('first', $params);			
		if(!empty($exists)){
			return true;  // one group already there
		}else{
			return false;  // no groups for this user
		}
    }




    public function checkApiSession($sessionId)
    {

		$this->loadModel("ApiSession");
    	$params = array(
				'conditions' => array('ApiSession.login_status' => 1,'ApiSession.session_id'=>$sessionId),
			);
		$exists = $this->ApiSession->find('first', $params);	
		//print_r($exists); exit;		
		return $exists;
    	
    }

    /*
    * 
    * Author: Lakhvinder Singh
    * Method: getUserInfoById
    * Description: return user detail 
    */
    public function getUserInfoById($user_id,$fields = false)
    {
    	$this->loadModel("DrinkedGroup");
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
    	$result_user = $result['User'];
    	if(!empty($result['User'])){
    		$result_user['friends_count'] = $this->countUserFbFriendsById($user_id);
    		$params = array(
						'DrinkedGroup.drinked_status'=>'confirmed',
	    				'$or'=>array(		
	                    				array('DrinkedGroup.user_id'=>$user_id),		
                    					array('DrinkedGroup.owner_user_id'=>$user_id),		
	         						)		
	            );		
			$resultsets = $this->DrinkedGroup->find('all', array('conditions'=>$params));		
			$result_user['offer_count'] = sizeof($resultsets);	
    	}
    	//print_r($result_user); exit;
		return $result_user;
    }

    /*
    * 
    * Author: Lakhvinder Singh
    * Method: getThreadInfoById
    * Description: return user detail 
    */
    public function getThreadInfoById($thread_id)
    {
    	$this->loadModel("Thread");
    	$params = array(
				'conditions' => array('Thread._id' => $thread_id),
			);
    	$result = $this->Thread->find('first', $params);
		return $result['Thread'];
    }

    /*
    * 
    * Author: Lakhvinder Singh
    * Method: getGroupInfoById
    * Description: return user detail 
    */
    public function getGroupInfoById($group_id)
    {
    	$this->loadModel("Group");
    	$params = array(
				'conditions' => array('Group._id' => $group_id,'Group.is_deleted'=>false),
			);
    	$result = $this->Group->find('first', $params);
		return $result['Group'];
		//return $this->Group->find('first', $params);
    }


    /*
    * 
    * Author: Lakhvinder Singh
    * Method: getSessionInfoById
    * Description: return user session detail 
    */
    public function getSessionInfoById($user_id)
    {
    	$this->loadModel("ApiSession");
    	$params = array(
				'conditions' => array('ApiSession.user_id' => $user_id,'ApiSession.login_status' => 1),
			);
    	//print_r($this->ApiSession->find('all', $params)); exit;
		return $this->ApiSession->find('all', $params);
    }

    public function createThread($exists)
    {
    	$this->loadModel('Thread');
	    $this->Thread->create();
	    $new_thread['group_id'] = $exists['DrinkedGroup']['group_id'];
	    $new_thread['sender_id'] = $exists['DrinkedGroup']['user_id'];
	    $new_thread['receiver_id'] = $exists['DrinkedGroup']['owner_user_id'];
	    $new_thread['is_deleted'] = false;
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

	public function checkIfDrinked($user_id,$owner_user_id)		
	    {		
			$this->loadModel("DrinkedGroup");		
	    	$params = array(
	    				'DrinkedGroup.is_deleted'=>false,
	    				'DrinkedGroup.drinked_status'=>"confirmed",
	    				'$or'=>array(		
	                    				array('DrinkedGroup.user_id'=>$user_id,'DrinkedGroup.owner_user_id'=>$owner_user_id),		
                    					array('DrinkedGroup.owner_user_id'=>$user_id,'DrinkedGroup.user_id'=>$owner_user_id),		
	         						)		
	            );		
			$exists = $this->DrinkedGroup->find('first', array('conditions'=>$params));		
					
			if(!empty($exists)){		
				return true;  // one user already drinked another users group		
			}else{		
				return false;  // not drinked by any user		
			}		
	    			
	}

	public function checkIfDrinkedButNotConfirmed($user_id,$owner_user_id)		
	    {		
			$this->loadModel("DrinkedGroup");		
	    	$params = array(
	    				'DrinkedGroup.is_deleted'=>false,
	    				'DrinkedGroup.drinked_status'=>"drinked",
	    				'$or'=>array(		
	                    				array('DrinkedGroup.user_id'=>$user_id,'DrinkedGroup.owner_user_id'=>$owner_user_id),		
                    					array('DrinkedGroup.owner_user_id'=>$user_id,'DrinkedGroup.user_id'=>$owner_user_id),		
	         						)		
	            );		
			$exists = $this->DrinkedGroup->find('first', array('conditions'=>$params));		
					
			if(!empty($exists)){		
				return true;  // one user already drinked another users group		
			}else{		
				return false;  // not drinked by any user		
			}		
	    			
	}
	public function newCheck() {
		$this->loadModel('User');
		$this->loadModel('JobList');
		//$this->loadModel('UserAccount');
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
				//$account_array = $this->UserAccount->find('first',array('conditions'=>array('user_id' => $resultset['User']['id'])));
				//$resultset['User']['account'] = $account_array['UserAccount'];	
				$resultset['User']['reported_status'] = false;
				
				$session_key = sha1($resultset['User']['id'].strtotime(date('m/d/Y h:i:s a', time())));
				$this->updateApiSession(1,$this->deviceToken,$session_key,$resultset['User']['id'],$this->deviceId);
				$resultset['User']['session_id'] = $session_key;
			}		
			if(!empty($resultset)){

				$user_array = $this->User->find('first',array('conditions'=>array('_id' => $resultset['User']['id'])));
				$user_array['User']['last_login'] = date('Y-m-d H:i:s');
				$this->User->save($user_array);
				if($user_array->premium_plan_last_date >= date('Y-m-d')){
					$resultset['User']['membership_status'] = 'Paid member';
				}else{
					$resultset['User']['membership_status'] = 'Regular';					
				}
				$resultArray = array();
				$resultArray['status'] = true;
				$resultArray['data'] = $resultset;
				$resultArray['message'] = "success";
				$resultArray['jap_message'] = "成功";
			
			}else{
				$resultArray = array();
				$resultArray['status'] = true;
				$resultArray['data'] = new stdClass();
				$resultArray['message'] = "user not found";
				$resultArray['jap_message'] = "ユーザーが見つかりません";
			}
		    
		}else{
			$resultArray = array();
			$resultArray['status'] = false;
			$resultArray['data'] = new stdClass();
			$resultArray['message'] = "no parameter found";
			$resultArray['jap_message'] = "パラメータが見つかりません";
		}
		header("Content-type:application/json");
		echo json_encode($resultArray); 
		die;
	}


	public function generateCouponCode(){
		$chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		$coupon_code = "";
		for ($i = 0; $i < 10; $i++) {
		    $coupon_code .= $chars[mt_rand(0, strlen($chars)-1)];
		}
		$user_array = $this->User->find('first',array('conditions'=>array('coupon_code' => $coupon_code)));
	 	while(empty($user_array)){
			return $coupon_code;
		}

		
	}

	public function logout()
	{
		$this->updateApiSession(0,$this->deviceToken,"",$this->userId,$this->deviceId);
		$resultArray = array();
		$resultArray['status'] = true;
		$resultArray['data'] = new stdClass();
		$resultArray['message'] = "Logout successfully";
		$resultArray['jap_message'] = "ログアウトに成功しました";
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
		//$this->loadModel('UserAccount');
		if (!empty($this->request->data['fb_id'])) {
			$this->User->create();
			
			if(!empty($_FILES['image'])){
				//print_r($_FILES['image']);
				$this->request->data['image'] = BASE_URL."uploads/users/original/".$this->Common->upload("profile_image",$_FILES['image']);	
			}
			$this->request->data['last_login'] = date('Y-m-d H:i:s'); 
			$this->request->data['balance'] = 10;
			$this->request->data['image'] = '';
			$current_date = date('Y-m-d');
			$this->request->data['premium_plan_last_date'] = date('Y-m-d', strtotime($current_date .' -1 day'));  
			$this->request->data['notification_receive_offer'] = true;
			$this->request->data['notification_when_matching'] = true;
			$this->request->data['notification_message'] = true;
			$this->request->data['notification_notice'] = true;
			$this->request->data['coupon_code'] = $this->generateCouponCode();
			$this->request->data['is_deleted'] = false;
			$this->request->data['deleted_reason'] = '';
			$this->request->data['is_age_verified'] = "pending";
			$this->request->data['age_document'] = '';
			$this->request->data['status'] = true;
			$this->request->data['consume_date'] = date('Y-m-d');
			$this->request->data['consume_total'] = 0;
			if($this->User->save($this->request->data)){

				$params = array(
					'conditions' => array('User.fb_id' => $this->request->data['fb_id']),
				);
				$resultset = $this->User->find('first', $params);
				// User account entry
				/*if(!empty($resultset['User']['id'])){
					$this->UserAccount->create();
					$new_arr = array();
					$new_arr['user_id'] = $resultset['User']['id'];
					$new_arr['balance'] = 100;
					$this->UserAccount->save($new_arr);
				}*/
				if(!empty($resultset['User']['job_id'])){
					$job = $this->JobList->find('first',array('conditions'=>array('_id' => $resultset['User']['job_id']),'fields'=>array("eng_name","jap_name")));
			    	$resultset['User']['job'] = $job['JobList'];
			    } 
			    if(!empty($resultset['User']['id'])){
			    	//$account_array = $this->UserAccount->find('first',array('conditions'=>array('user_id' => $resultset['User']['id'])));
					//$resultset['User']['account'] = $account_array['UserAccount'];
					$resultset['User']['reported_status'] = false;
					
					$session_key = sha1($resultset['User']['id'].strtotime(date('m/d/Y h:i:s a', time())));
					$this->updateApiSession(1,$this->deviceToken,$session_key,$resultset['User']['id'],$this->deviceId);
					$resultset['User']['session_id'] = $session_key;
				}
				$resultArray = array();
				$resultArray['status'] = true;
				$resultArray['data'] = $resultset;
				$resultArray['message'] = "user successfully saved";
				$resultArray['jap_message'] = "ユーザーは保存されました";
			}else{
				$resultArray = array();
				$resultArray['status'] = false;
				$resultArray['data'] = new stdClass();
				$resultArray['message'] = "user not saved";
				$resultArray['jap_message'] = "ユーザーは保存されません";
			}	
		}else{
			$resultArray = array();
			$resultArray['status'] = false;
			$resultArray['data'] = new stdClass();
			$resultArray['message'] = "no fb_id found";
			$resultArray['jap_message'] = "fb_idが見つかりません";
		}
		header("Content-type:application/json"); 
		echo json_encode($resultArray); 
		die;
	}


	public function memberJob() {
		$this->loadModel('JobList');
		//$this->loadModel('Place');
		//$this->loadModel('MarriageType');
		//$this->loadModel('Tobacco');
		//$this->loadModel('Drinking');
		$this->loadModel('Option');
		//$this->loadModel('Relationship');

		$jobset = $this->JobList->find('all',array('fields'=>array("eng_name","jap_name")));
		
		if(!empty($jobset)){
			
			$joblist_Array = array();
			foreach ($jobset as $jobset) {
				$joblist_Array[] = $jobset['JobList']; 
			}
			
			$updated_Array['job_list'] = $joblist_Array;
		}

		//$placeset = $this->Place->find('all',array('fields'=>array("eng_name","jap_name","latitude","longitude")));
		$placeset = $this->Option->find('all',array('fields'=>array("eng_name","jap_name","latitude","longitude","type"),'conditions' => array('Option.type' => 'place'),'order'=>array('order'=>'asc')));
		
		if(!empty($placeset)){
			
			$places_Array = array();
			foreach ($placeset as $placeset) {
				$places_Array[] = $placeset['Option']; 
			}
			
			$updated_Array['places'] = $places_Array;
		}

		$educationset = $this->Option->find('all',array('fields'=>array("eng_name","jap_name","type"),'conditions' => array('Option.type' => 'education'),'order'=>array('order'=>'asc')));
		
		if(!empty($educationset)){
			
			$education_Array = array();
			foreach ($educationset as $educationset) {
				$education_Array[] = $educationset['Option']; 
			}
			
			$updated_Array['education_types'] = $education_Array;
		}

		//$marriageset = $this->MarriageType->find('all',array('fields'=>array("eng_name","jap_name")));
		$marriageset = $this->Option->find('all',array('fields'=>array("eng_name","jap_name","type"),'conditions' => array('Option.type' => 'marriage_type'),'order'=>array('order'=>'asc')));
		
		if(!empty($marriageset)){
			
			$marriage_Array = array();
			foreach ($marriageset as $marriageset) {
				$marriage_Array[] = $marriageset['Option']; 
			}
			
			$updated_Array['marriage_types'] = $marriage_Array;
		}


		//$tobaccoset = $this->Tobacco->find('all',array('fields'=>array("eng_name","jap_name")));
		$tobaccoset = $this->Option->find('all',array('fields'=>array("eng_name","jap_name","type"),'conditions' => array('Option.type' => 'tobacco'),'order'=>array('order'=>'asc')));
		
		if(!empty($tobaccoset)){
			
			$tobacco_Array = array();
			foreach ($tobaccoset as $tobaccoset) {
				$tobacco_Array[] = $tobaccoset['Option']; 
			}
			
			$updated_Array['tobacco_types'] = $tobacco_Array;
		}

		//$drinkingset = $this->Drinking->find('all',array('fields'=>array("eng_name","jap_name")));
		$drinkingset = $this->Option->find('all',array('fields'=>array("eng_name","jap_name","type"),'conditions' => array('Option.type' => 'drinking'),'order'=>array('order'=>'asc')));
		if(!empty($drinkingset)){
			
			$drinking_Array = array();
			foreach ($drinkingset as $drinkingset) {
				$drinking_Array[] = $drinkingset['Option']; 
			}
			
			$updated_Array['drinking_types'] = $drinking_Array;
		}

		$salaryset = $this->Option->find('all',array('fields'=>array("eng_name","jap_name","type"),'conditions' => array('Option.type' => 'salary'),'order'=>array('order'=>'asc')));
		
		if(!empty($salaryset)){
			
			$salary_Array = array();
			foreach ($salaryset as $salaryset) {
				$salary_Array[] = $salaryset['Option']; 
			}
			
			$updated_Array['salary_types'] = $salary_Array;
		}
		
		//$relationshipset = $this->Relationship->find('all',array('fields'=>array("eng_name","jap_name")));
		$relationshipset = $this->Option->find('all',array('fields'=>array("eng_name","jap_name","type"),'conditions' => array('Option.type' => 'relationship'),'order'=>array('order'=>'asc')));
		
		if(!empty($relationshipset)){
			
			$relationship_Array = array();
			foreach ($relationshipset as $relationshipset) {
				$relationship_Array[] = $relationshipset['Option']; 
			}
			
			$updated_Array['relationship_types'] = $relationship_Array;
		}

		if(!empty($updated_Array)){

			$resultArray = array();
			$resultArray['status'] = true;
			$resultArray['data'] = $updated_Array;
			$resultArray['message'] = "success";
			$resultArray['jap_message'] = "成功";
			
		}else{
			$resultArray = array();
			$resultArray['status'] = false;
			$resultArray['data'] = new stdClass();
			$resultArray['message'] = "no data found";
			$resultArray['jap_message'] = "何もデータが見つかりませんでした";
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
		//$this->loadModel('UserAccount');

		$data_is = $this->request->data;
		$file = new File('/var/www/html/drinks/debug.txt', true);
        $txt = '--------------'.json_encode($data_is).' -----------------';
        //$txt = $this->sessionId;
		$json = $file->read(true, 'r');
		$file = new File('/var/www/html/drinks/debug.txt', true);
		$json = $json.$txt;
		$file->write($json);
		

		$this->request->data['user_id'] = $this->userId;
		if (!empty($this->request->data['user_id'])) {
			$check_group = $this->checkGroupExists($this->request->data['user_id']);
			if($check_group == "0"){
				$this->Group->create();
				
				if(!empty($_FILES['image'])){
					//print_r($_FILES['image']);
					$this->request->data['image'] = BASE_URL."uploads/groups/original/".$this->Common->upload("group_image",$_FILES['image']);
				}else{
					$login_user_info = $this->getUserInfoById($this->userId);
					if(isset($login_user_info['image']) && !empty($login_user_info['image'])){
						$this->request->data['image'] = $login_user_info['image'];					
					}elseif(isset($login_user_info['fb_image']) && !empty($login_user_info['fb_image'])){
						$this->request->data['image'] = $login_user_info['fb_image'];					
					}else{
						$this->request->data['image'] = '';				
					}
				}

				if(empty($this->request->data['group_conditions'])){
					$this->request->data['group_conditions'] = '';
				}
				if(empty($this->request->data['group_description'])){
					$this->request->data['group_description'] = '';
				}
				if(empty($this->request->data['group_latitude'])){
					$this->request->data['group_latitude'] = '';
				}
				if(empty($this->request->data['group_location'])){
					$this->request->data['group_location'] = '';
				}
				if(empty($this->request->data['group_tag'])){
					$this->request->data['group_tag'] = '';
				}
				if(empty($this->request->data['relationship'])){
					$this->request->data['relationship'] = '';
				}
				if(empty($this->request->data['group_tag'])){
					$this->request->data['group_tag'] = '';
				}
				if(empty($this->request->data['group_tag'])){
					$this->request->data['group_tag'] = '';
				}
				$this->request->data['is_deleted'] = false;

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
				    	//$account_array = $this->UserAccount->find('first',array('conditions'=>array('user_id' => $user_array['User']['id'])));
						//$user_array['User']['account'] = $account_array['UserAccount'];
						$user_array['User']['reported_status'] = false;
				    	$resultset['Group']['user'] = $user_array['User'];
				    	
				    } 


					$resultArray = array();
					$resultArray['status'] = true;
					$resultArray['data'] = $resultset;
					$resultArray['message'] = "group successfully added";
					$resultArray['jap_message'] = "グループが追加されました";
				
				}else{
					$resultArray = array();
					$resultArray['status'] = false;
					$resultArray['data'] = new stdClass();
					$resultArray['message'] = "group not added";
					$resultArray['jap_message'] = "グループが追加されていない";
				}
			}else if($check_group == "2"){
				$resultArray = array();
				$resultArray['status'] = false;
				$resultArray['status_code'] = 203;
				$resultArray['data'] = new stdClass();
				$resultArray['message'] = "user deleted by admin. please register again";
				$resultArray['jap_message'] = "ユーザーは管理者によって削除されました。再度登録してください";
			}else {
				$resultArray = array();
				$resultArray['status'] = false;
				$resultArray['data'] = new stdClass();
				$resultArray['message'] = "only one group is allowed";
				$resultArray['jap_message'] = "1つのグループのみが許可されます";
			}


		}else{
			$resultArray = array();
			$resultArray['status'] = false;
			$resultArray['data'] = new stdClass();
			$resultArray['message'] = "no user_id found";
			$resultArray['jap_message'] = "user_idは見つかりませんでした";
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
		//$this->loadModel('UserAccount');
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
				    	//$account_array = $this->UserAccount->find('first',array('conditions'=>array('user_id' => $user_array['User']['id'])));
					    //$user_array['User']['account'] = $account_array['UserAccount'];
					    $user_array['User']['reported_status'] = false;
				    	$group['Group']['user'] = $user_array['User'];
				    } 
					$resultArray = array();
					$resultArray['status'] = true;
					$resultArray['data'] = $group;
					$resultArray['message'] = "group successfully updated";
					$resultArray['jap_message'] = "グループが更新されました";
				
				}else{
					$resultArray = array();
					$resultArray['status'] = false;
					$resultArray['data'] = new stdClass();
					$resultArray['message'] = "group not updated";
					$resultArray['jap_message'] = "グループは更新されません";
				}	
			}else{
				$resultArray = array();
				$resultArray['status'] = false;
				$resultArray['data'] = new stdClass();
				$resultArray['message'] = "no group found with this id";	
				$resultArray['jap_message'] = "このIDのグループは見つかりませんでした";
			}
			
		}else{
			$resultArray = array();
			$resultArray['status'] = false;
			$resultArray['data'] = new stdClass();
			$resultArray['message'] = "no group_id found";
			$resultArray['jap_message'] = "group_idが見つかりません";
		}
		header("Content-type:application/json"); 
		echo json_encode($resultArray); 
		die;
	}

	/**
	 * deleteUser
	 *
	 * @return void
	 * @access public
	 */
	public function deleteUser(){
		$user_id = $this->userId;
        $this->loadModel("User");
        $this->loadModel('Group');
        $this->loadModel('Thread');
        $this->loadModel('DrinkedGroup');
        if($this->request->data['deleted_reason']){
	        // convert the string list to an array
	        $user_array = $this->User->find('first',array('conditions'=>array('_id' => $user_id)));
	        $user_array['User']['is_deleted'] = true;
	        $user_array['User']['fb_id'] = '';
	        $user_array['User']['deleted_reason'] = $this->request->data['deleted_reason'];
	        $this->User->save($user_array);
	        $this->updateApiSession(0,$this->deviceToken,"",$this->userId,$this->deviceId);
	        $group_array = $this->Group->find('first',array('conditions'=>array('Group.user_id' => $this->userId,'Group.is_deleted' => false)));

	        if(!empty($group_array)){
	        	$group_id = $group_array['Group']['id'];
                /*********************** START: Group deleted **********************/
                $group_array['Group']['is_deleted'] = true;
                $this->Group->save($group_array);
                /*********************** END: Group deleted **********************/

                /*********************** START: Thread deleted **********************/
                $Thread_array = $this->Thread->find('first',array('conditions'=>array('group_id' => $group_id)));
                if(!empty($Thread_array)){
                    $Thread_array['Thread']['is_deleted'] = true;
                    $this->Thread->save($Thread_array);
                }
                /*********************** END: Thread deleted **********************/

                /*********************** START: DrinkedGroup deleted **********************/
                $DrinkedGroup_array = $this->DrinkedGroup->find('first',array('conditions'=>array('group_id' => $group_id)));
                if(!empty($DrinkedGroup_array)){
                    $DrinkedGroup_array['DrinkedGroup']['is_deleted'] = true;
                    $this->DrinkedGroup->save($DrinkedGroup_array);
                }
                /*********************** END: DrinkedGroup deleted **********************/
            }

	        $resultArray = array();
			$resultArray['status'] = true;
			$resultArray['data'] = new stdClass();
			$resultArray['message'] = "Deleted successfully.";
			$resultArray['jap_message'] = "正常に削除されました。";
			header("Content-type:application/json"); 
			echo json_encode($resultArray); 
			die;

        }else{
	        $resultArray = array();
			$resultArray['status'] = false;
			$resultArray['data'] = new stdClass();
			$resultArray['message'] = "Reason is required.";
			$resultArray['jap_message'] = "理由が必要です。";
			header("Content-type:application/json"); 
			echo json_encode($resultArray); 
			die;
        }
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
        $this->loadModel('Thread');
        $this->loadModel('DrinkedGroup');
		if (!empty($this->request->data['id'])) {

			$group_array = $this->Group->find('first',array('conditions'=>array('_id' => $this->request->data['id'])));	

			if(!empty($group_array)){
				/*			$old_image = str_replace(BASE_URL."uploads/groups/original/", "", $group['Group']['image']); 
				unlink(WWW_ROOT.'uploads/groups/original/'.$old_image);	
				unlink(WWW_ROOT.'uploads/groups/resized/'.$old_image);	

				//Binding
				if(!empty($resultset['Group']['user_id'])){
					$user_array = $this->User->find('first',array('conditions'=>array('_id' => $resultset['Group']['user_id'])));
					$job = $this->JobList->find('first',array('conditions'=>array('_id' => $user_array['User']['job_id']),'fields'=>array("eng_name","jap_name")));
			    	$user_array['User']['job'] = $job['JobList'];
			    	//$account_array = $this->UserAccount->find('first',array('conditions'=>array('user_id' => $user_array['User']['id'])));
					//$user_array['User']['account'] = $account_array['UserAccount'];
			    	$user_array['User']['reported_status'] = false;
			    	$resultset['Group']['user'] = $user_array['User'];
			    }*/

                /*********************** START: Group deleted **********************/
                $group_array['Group']['is_deleted'] = true;
                $this->Group->save($group_array);
                /*********************** END: Group deleted **********************/

                /*********************** START: Thread deleted **********************/
                $Thread_array = $this->Thread->find('first',array('conditions'=>array('group_id' => $group_array['Group']['id'])));
                if(!empty($Thread_array)){
                    $Thread_array['Thread']['is_deleted'] = true;
                    $this->Thread->save($Thread_array);
                }
                /*********************** END: Thread deleted **********************/

                /*********************** START: DrinkedGroup deleted **********************/
                $DrinkedGroup_array = $this->DrinkedGroup->find('first',array('conditions'=>array('group_id' => $group_array['Group']['id'])));
                if(!empty($DrinkedGroup_array)){
                    $DrinkedGroup_array['DrinkedGroup']['is_deleted'] = true;
                    $this->DrinkedGroup->save($DrinkedGroup_array);
                }
                /*********************** END: DrinkedGroup deleted **********************/
			
				$resultArray = array();
				$resultArray['status'] = true;
				$resultArray['data'] = new stdClass();
				$resultArray['message'] = "group successfully deleted";
				$resultArray['jap_message'] = "グループが削除されました";
			
			}else{
				$resultArray = array();
				$resultArray['status'] = false;
				$resultArray['data'] = new stdClass();
				$resultArray['message'] = "group not deleted";
				$resultArray['jap_message'] = "グループは削除されません";
			}	
		}else{
			$resultArray = array();
			$resultArray['status'] = false;
			$resultArray['data'] = new stdClass();
			$resultArray['message'] = "no group_id found";
			$resultArray['jap_message'] = "group_idが見つかりません";
		}
		header("Content-type:application/json"); 
		echo json_encode($resultArray); 
		die;
	}


	public function getGroups() {
		/*$data_is = $this->request->data;
		$file = new File('/home/drinks/public_html/debug.txt', true);
        $txt = '--------------'.json_encode($data_is).' -----------------';
        $txt = $this->sessionId;
		$json = $file->read(true, 'r');
		$file = new File('/home/drinks/public_html/debug.txt', true);
		$json = $json.$txt;
		$file->write($json);*/
		/*
 		print_r($myfile);
		exit;*/
		$this->loadModel('Group');
		$this->loadModel('User');
		$this->loadModel('JobList');
		$this->loadModel('DrinkedGroup');
		$this->loadModel('ReportedUser');
		$this->loadModel('ReportedGroup');
		//$this->loadModel('UserAccount');
		$login_user_info = $this->getUserInfoById($this->userId);
		$params = array('Group.is_deleted'=>false);
		$new_arr = array();
		$myGroups = array();
		if(isset($this->request->data['user_id'])){
			$params = array('Group.user_id' => $this->request->data['user_id'],'Group.is_deleted'=>false);	
		}
		
		$resultsets = $this->Group->find('all',array(
					'conditions' => $params,
				));
		//print_r($resultsets); exit;
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
					$place_radius = $this->request->data['place'];
				}else{
					$place_radius = 100;
				}
				$lat1 = $resultset['Group']['group_latitude'];
				$lon1 = $resultset['Group']['group_longitude'];
				$lat2 = $this->request->data['current_latitude'];
				$lon2 = $this->request->data['current_longitude'];
				$resultset['Group']['distance'] = $this->distance($lat1, $lon1, $lat2, $lon2);
				if($resultset['Group']['distance'] <= $place_radius){
					$followed_conditions = true;
				}else{
					$followed_conditions = false;
					continue;
				}

				if(isset($this->request->data['relationship'])){
					$relation_arr = explode(",", $this->request->data['relationship']);
					if(in_array($resultset['Group']['relationship'], $relation_arr)){
						$followed_conditions = true;
					}else{
						$followed_conditions = false;
						continue;
					}
				}
				/*else{
					$followed_conditions = true;
				}*/

				if(isset($this->request->data['number_people'])){
					$number_people_arr =  explode(",", $this->request->data['number_people']);
					if(in_array(count(json_decode($resultset['Group']['group_conditions'],true)), $number_people_arr)){
						$followed_conditions = true;
					}else{
						$followed_conditions = false;
						continue;
					}
				}
				/*else{
					$followed_conditions = true;
				}*/

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

				}
				/*else{
					$followed_conditions = true;
				}*/

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
				}
				/*else{
					$followed_conditions = true;
				}*/

				if(!empty($resultset['Group']['group_conditions'])){
					
					$resultset['Group']['group_count'] = count(json_decode($resultset['Group']['group_conditions'],true));
				}
				if($followed_conditions){
					//Binding
					if(!empty($resultset['Group']['user_id'])){
						//$user_array = $this->User->find('first',array('conditions'=>array('_id' => $resultset['Group']['user_id']))); 
						$owner_info = $this->getUserInfoById($resultset['Group']['user_id']);
						$job = $this->JobList->find('first',array('conditions'=>array('_id' => $owner_info['job_id']),'fields'=>array("eng_name","jap_name")));
						if(!empty($this->userId)){
							//$drinked_group = $this->DrinkedGroup->find('first',array('conditions'=>array('user_id' => $this->userId,'group_id'=>$resultset['Group']['id'])));
							//if(!empty($drinked_group)){
							//	$resultset['Group']['drinked_status'] = $drinked_group['DrinkedGroup']['drinked_status'];
							//}else{
							//	$resultset['Group']['drinked_status'] = "undrinked";
							//}
							$drinked_group = $this->checkIfDrinked($this->userId,$resultset['Group']['user_id']);	
							if($drinked_group){
								unset($resultsets[$key]);
								continue;
							}else{
								$checkIfDrinkedButNotConfirmed = $this->checkIfDrinkedButNotConfirmed($this->userId,$resultset['Group']['user_id']);
								$resultset['Group']['drinked_status'] = "undrinked";
								if($checkIfDrinkedButNotConfirmed){
									$resultset['Group']['drinked_status'] = "drinked";
								}
							}

							$reported_user = $this->ReportedUser->find('first',array('conditions'=>array('user_id' => $this->userId,'reported_user_id'=>$resultset['Group']['user_id'])));
							if(!empty($reported_user)){
								$owner_info['reported_status'] = true;
							}else{
								$owner_info['reported_status'] = false;
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
							$owner_info['reported_status'] = false;
						}
						
				    	$owner_info['job'] = $job['JobList'];
				    	//$account_array = $this->UserAccount->find('first',array('conditions'=>array('user_id' => $owner_info['User']['id'])));
					    //$owner_info['User']['account'] = $account_array['UserAccount'];
				    	$resultset['Group']['user'] = $owner_info;
				    } 
				    //print_r($resultset); exit;
				    
				    //print_r($owner_info);
				    //print_r($login_user_info);
				    //exit;
				    if(strtolower($owner_info['gender']) !=  strtolower($login_user_info['gender'])){
				    	if($this->checkGroupOwnerFbFriendOrNot($this->userId,$owner_info['fb_id']) == false){
				    		$new_arr[] = $resultset; 				    		
				    	}
				    }
				}
				
			    $i++;
			}
			if(!empty($new_arr)){

				if(isset($this->request->data['sort_value'])){
					$sort_value_ar  = explode(', ', $this->request->data['sort_value']);
					$sorted_arr = array();
					foreach ($sort_value_ar as $value_sort) {
						# code...
						switch (trim($value_sort)) {
							case 'age_asc':
								foreach ($new_arr as $key => $row) {
								    $sorted_arr[$key] = date_diff(date_create($row['Group']['user']['dob']), date_create('today'))->y;
								}
								array_multisort($sorted_arr, SORT_ASC, $new_arr);	
								break;
							case 'age_desc':
								foreach ($new_arr as $key => $row) {
								    $sorted_arr[$key] = date_diff(date_create($row['Group']['user']['dob']), date_create('today'))->y;
								}
								array_multisort($sorted_arr, SORT_DESC, $new_arr);
								break;
							case 'login_new':
								foreach ($new_arr as $key => $row) {
								    $sorted_arr[$key] = $row['Group']['user']['last_login'];
								}
								array_multisort($sorted_arr, SORT_DESC, $new_arr);
								break;
							case 'login_old':
								foreach ($new_arr as $key => $row) {
								    $sorted_arr[$key] = $row['Group']['user']['last_login'];
								}
								array_multisort($sorted_arr, SORT_ASC, $new_arr);
								break;
							case 'distance_desc':
								foreach ($new_arr as $key => $row) {
								    $sorted_arr[$key] = $row['Group']['distance'];
								}
								array_multisort($sorted_arr, SORT_DESC, $new_arr);
								break;
							case 'distance_asc':
								foreach ($new_arr as $key => $row) {
								    $sorted_arr[$key] = $row['Group']['distance'];
								}
								array_multisort($sorted_arr, SORT_ASC, $new_arr);
								break;
							case 'offer_asc':
								foreach ($new_arr as $key => $row) {
								    $sorted_arr[$key] = $row['Group']['group_count'];
								}
								array_multisort($sorted_arr, SORT_ASC, $new_arr);
								break;
							case 'offer_desc':
								foreach ($new_arr as $key => $row) {
								    $sorted_arr[$key] = $row['Group']['group_count'];
								}
								array_multisort($sorted_arr, SORT_DESC, $new_arr);
								break;
						}
					}
				}else{
					$sorted_arr = array();
					foreach ($new_arr as $key => $row) {
					    $sorted_arr[$key] = $row['Group']['distance'];
					}
					array_multisort($sorted_arr, SORT_ASC, $new_arr);
				} 
				
				/*$myGroups = $this->Group->find('all',array(
							'conditions' => array('Group.user_id' => $this->userId),
						));
				
				$resultArray = array();
				$resultArray['status'] = true;
				$resultArray['data'] = array('myGroups'=>$myGroups , 'groups'=>$new_arr);
				$resultArray['message'] = "success";*/
			}/*else{
				$resultArray = array();
				$resultArray['status'] = true;
				$resultArray['data'] = new stdClass();
				$resultArray['message'] = "no groups found";
			}*/
			
			
		}/*else{
			$resultArray = array();
			$resultArray['status'] = true;
			$resultArray['data'] = new stdClass();
			$resultArray['message'] = "no groups found"; user
		}*/
		$myGroups = $this->Group->find('all',array(
							'conditions' => array('Group.user_id' => $this->userId,'Group.is_deleted'=>false),
						));
		//$login_user_info = $this->User->find('first',array('conditions'=>array('_id' => $this->userId)));
		
		$job = $this->JobList->find('first',array('conditions'=>array('_id' => $login_user_info['job_id']),'fields'=>array("eng_name","jap_name")));
		$login_user_info['job'] = $job['JobList'];
		$myGroups_new = array();
		$lat2 = $this->request->data['current_latitude'];
		$lon2 = $this->request->data['current_longitude'];
		foreach ($myGroups as $key => $myGroup) {
			$lat1 = $myGroup['Group']['group_latitude'];
			$lon1 = $myGroup['Group']['group_longitude'];
			$myGroup['Group']['distance'] = $this->distance($lat1, $lon1, $lat2, $lon2);
			$myGroup['Group']['user'] = $login_user_info;
			//print_r($myGroup); exit;
			$myGroups_new[] = $myGroup;
		}
		$resultArray = array(); 
		$resultArray['status'] = true;
		$resultArray['data'] = array('myGroups'=>$myGroups_new , 'groups'=>$new_arr);
		$resultArray['message'] = "success";
		$resultArray['jap_message'] = "成功";
		 
		header("Content-type:application/json"); 
		echo json_encode($resultArray); die;
	}


	function distance($lat1, $lon1, $lat2, $lon2, $unit="K") {
		//echo $lat1.' = '.$lon1.' = '.$lat2.' = '.$lon2; exit;
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
		if($this->checkGroupExists($this->userId) != "1"){  
			$resultArray = array();
			$resultArray['status'] = false;
			$resultArray['drinked_status'] = "undrinked";
			$resultArray['message'] = "you must have your own group to drink another group";
			$resultArray['jap_message'] = "あなたは別のグループを飲むために自分のグループを持っている必要があります";
		}else{
			//$this->request->data['user_id'] = $this->userId;
			if (!empty($this->request->data['user_id']) && !empty($this->request->data['group_id'])) {
				if($this->checkGroupExistsByGroupId($this->request->data['group_id']) == true){
					$exists = $this->DrinkedGroup->find('first',array('conditions'=>array('user_id' => $this->request->data['user_id'],'group_id' => $this->request->data['group_id'])));
					if(!empty($exists)){
						// We already drinked group and now sending the drinked fr the same group
						if($this->request->data['drinked_status'] == "drinked"){
							$resultArray = array();
							$resultArray['status'] = true;
							$resultArray['drinked_status'] = "waiting";
							$resultArray['message'] = "group already drinked";
							$resultArray['jap_message'] = "既に飲んだグループ";
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
								$resultArray['jap_message'] = "グループはうまく飲まれた";
							}else{
								$resultArray = array();
								$resultArray['status'] = false;
								$resultArray['drinked_status'] = "undrinked";
								$resultArray['message'] = "something went wrong. please try again.";
								$resultArray['jap_message'] = "何かが間違っていた。もう一度お試しください。";
							}
						}
						// offer is in waiting list and we confirmed
						if($this->request->data['drinked_status'] == "confirmed"){
							$exists['DrinkedGroup']['drinked_status'] = "confirmed";
							$exists['DrinkedGroup']['is_deleted'] = false;
							if($this->DrinkedGroup->save($exists)){
							    //Create Thread on accepted
							    $this->createThread($exists);

							    /*************** PUSH NOTICATION CODE**************************/
								$pushData =array();
								$pushData['sender_info'] 	= $this->getUserInfoById($this->userId,array('fb_image','full_name','full_name','image'));
								$pushData['receiver_info']  = $this->getUserInfoById($this->request->data['user_id'],array('fb_image','full_name','full_name','image'));
								$pushdata['group_info']		= $this->getGroupInfoById($this->request->data['group_id']);
								$pushData['push_type'] 		= 'DrinkedGroupAccepted'; 
								$pushNotificationTokens 	= $this->getSessionInfoById($this->request->data['user_id']);
								$push_notification_message  = $pushData['sender_info']['User']['full_name'].'  accepted your offer.';
								$notification_count = 0;
								foreach ($pushNotificationTokens as $token) {
									//print_r($token['ApiSession']); exit;
									if(isset($token['ApiSession']['token'])  && !empty($token['ApiSession']['token'])){
										$this->sendPushNotificationOnIOS($token['ApiSession']['token'],$push_notification_message,'@drinks',json_encode($pushData));	
										$notification_count++;
									}
								}
								/*************** END: PUSH NOTICATION CODE **********************/
								$resultArray = array();
								$resultArray['status'] = true;
								$resultArray['drinked_status'] = "confirmed";
								$resultArray['message'] = "offer accepted successfully";	
								$resultArray['jap_message'] = "オファーが正常に受け入れられ";
							}else{
								$resultArray = array();
								$resultArray['status'] = false;
								$resultArray['drinked_status'] = "undrinked";
								$resultArray['message'] = "something went wrong. please try again.";
								$resultArray['jap_message'] = "何かが間違っていた。もう一度お試しください。";
							}	
						}

					}else{
						if($this->request->data['drinked_status'] == "drinked"){
							
							if(!$this->checkIfDrinked($this->userId,$this->request->data['owner_user_id'])){
								$this->DrinkedGroup->create();
								$this->request->data['drinked_status'] = "drinked"; // direct interest confirrmed - removed "waiting"
								$this->request->data['is_deleted'] = false; // direct interest confirrmed - removed "waiting"
								
								$account_array = $this->User->find('first',array('conditions'=>array('id' => $this->request->data['user_id'])));
								
								if($account_array['User']['balance'] > 0){
									if($this->DrinkedGroup->save($this->request->data)){
										//$exists = $this->DrinkedGroup->find('first',array('conditions'=>array('user_id' => $this->userId,'group_id' => $this->request->data['group_id'])));
										//$this->createThread($exists);
										$new_arr = array();
										$new_arr['id'] = $account_array['User']['id'];
										$new_arr['balance'] = $account_array['User']['balance']-1;
										$this->User->save($new_arr);
										$this->updateTicketConsumeCount(); // 5 ticket consume in a day

										/*************** PUSH NOTICATION CODE**************************/
										$pushData =array();
										$pushData['sender_info'] 	= $this->getUserInfoById($this->userId,array('fb_image','full_name','full_name','image'));
										$pushData['receiver_info']  = $this->getUserInfoById($this->request->data['owner_user_id'],array('fb_image','full_name','full_name','image'));
										$pushdata['group_info']		= $this->getGroupInfoById($this->request->data['group_id']);
										$pushData['push_type'] 		= 'DrinkedGroup'; 
										$pushNotificationTokens 	= $this->getSessionInfoById($this->request->data['owner_user_id']);
										$push_notification_message  = $pushData['sender_info']['User']['full_name'].' interst in your group.';
										$notification_count = 0;
										foreach ($pushNotificationTokens as $token) {
											//print_r($token['ApiSession']); exit;
											if(isset($token['ApiSession']['token'])  && !empty($token['ApiSession']['token'])){
												$this->sendPushNotificationOnIOS($token['ApiSession']['token'],$push_notification_message,'@drinks',json_encode($pushData));	
												$notification_count++;
											}
										}
										/*************** END: PUSH NOTICATION CODE **********************/

										$resultArray = array();
										$resultArray['status'] = true;
										$resultArray['drinked_status'] = "drinked"; // direct interest confirmed - removed "waiting"
										$resultArray['message'] = "group drinked successfully";	
										$resultArray['jap_message'] = "グループは正常に飲んだ";
									}else{
										$resultArray = array();
										$resultArray['status'] = false;
										$resultArray['drinked_status'] = "undrinked";
										$resultArray['message'] = "something went wrong. please try again.";
										$resultArray['jap_message'] = "何かが間違っていた。もう一度お試しください。";
									}	
								}else{
									$resultArray = array();
									$resultArray['status'] = true;
									$resultArray['drinked_status'] = "undrinked";
									$resultArray['message'] = "insufficient balance";
									$resultArray['jap_message'] = "残高不足";
								}
						   	}else{

						   		$resultArray = array();
								$resultArray['status'] = false;
								$resultArray['drinked_status'] = "undrinked";
								$resultArray['message'] = "You have already been offered interest by this group";
								$resultArray['jap_message'] = "あなたはすでにこのグループの関心を得ています";

						   	}
							
						}else{
							$resultArray = array();
							$resultArray['status'] = true;
							$resultArray['drinked_status'] = "undrinked";
							$resultArray['message'] = "group already undrinked";
							$resultArray['jap_message'] = "既に飲まれていないグループ";
							
						}
					}
				}else{
					$resultArray = array();
					$resultArray['status'] = false;
					$resultArray['message'] = "Group not exist";
					$resultArray['jap_message'] = "グループが存在しない";
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
			//$this->loadModel('UserAccount');
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
		    	//$account_array = $this->UserAccount->find('first',array('conditions'=>array('user_id' => $resultset['User']['id'])));
				//$resultset['User']['account'] = $account_array['UserAccount'];
				$resultset['User']['reported_status'] = false;
			}

			$resultArray = array();
			$resultArray['status'] = true;
			$resultArray['data'] = $resultset;
			$resultArray['message'] = "user successfully saved";
			$resultArray['jap_message'] = "ユーザーは保存されました";
		}else{
			$resultArray = array();
			$resultArray['status'] = true;
			$resultArray['data'] = $resultset;
			$resultArray['message'] = "header key user_id not found";
			$resultArray['jap_message'] = "ヘッダーキーuser_idが見つかりません";
		}
		echo json_encode($resultArray); die;
		
	}

	/*
	*
	* Method NAme: receivedOffers
	* Decription: beoffered for receivedOffers
	*
	*/
	public function receivedOffers() {
		$this->loadModel('Group');
		$this->loadModel('User');
		$this->loadModel('JobList');
		$this->loadModel('DrinkedGroup');
		$this->loadModel('ReportedUser'); 
		$this->loadModel('ReportedGroup');

		$params = array('DrinkedGroup.owner_user_id' => $this->userId,'DrinkedGroup.is_deleted'=>false,'DrinkedGroup.drinked_status'=> 'drinked');	
		$resultsets = $this->DrinkedGroup->find('all',array(
					'conditions' => $params,
					'order'=>array('_id'=>'DESC'),
				));
		//print_r($results); exit;
		if(!empty($resultsets)){
			
			$new_arr = array();
			foreach ($resultsets as $key => $resultGroup) {
				
				$resultset = $this->Group->find('first',array(
							//'conditions' => array('Group._id' => $resultGroup['DrinkedGroup']['group_id']),
							'conditions' => array('Group.user_id' => $resultGroup['DrinkedGroup']['user_id'],'Group.is_deleted'=>false),
						));
				$which_group_drinked = $this->Group->find('first',array(
							'conditions' => array('Group._id' => $resultGroup['DrinkedGroup']['group_id'],'Group.is_deleted'=>false),
							//'conditions' => array('Group.user_id' => $resultGroup['DrinkedGroup']['user_id']),
						));

				//Binding
				if(!empty($resultset['Group']['user_id']) && !empty($which_group_drinked['Group']['id'])){
					//$user_array = $this->User->find('first',array('conditions'=>array('_id' => $resultset['Group']['user_id'])));
					$user_array = $this->getUserInfoById($resultset['Group']['user_id']);
					$job = $this->JobList->find('first',array('conditions'=>array('_id' => $user_array['job_id']),'fields'=>array("eng_name","jap_name")));
					if(!empty($this->userId)){
						//$drinked_group = $this->DrinkedGroup->find('first',array('conditions'=>array('owner_user_id' => $this->userId,'is_deleted'=>false,'group_id'=>$which_group_drinked['Group']['id'])));
						$drinked_group = $this->DrinkedGroup->find('first',array('conditions'=>array('user_id' => $this->userId,'is_deleted'=>false,'group_id'=>$which_group_drinked['Group']['id'])));
						
						if(!empty($drinked_group)){
							$resultset['Group']['drinked_status'] = $drinked_group['DrinkedGroup']['drinked_status'];
						}else{
							$resultset['Group']['drinked_status'] = "undrinked";
						}

						$reported_user = $this->ReportedUser->find('first',array('conditions'=>array('user_id' => $this->userId,'reported_user_id'=>$resultset['Group']['user_id'])));
						if(!empty($reported_user)){
							$user_array['reported_status'] = true;
						}else{
							$user_array['reported_status'] = false;
						}

						$reported_group = $this->ReportedGroup->find('first',array('conditions'=>array('user_id' => $this->userId,'group_id'=>$resultset['Group']['id'])));
						if(!empty($reported_user)){
							$resultset['Group']['group_reported_status'] = true;
						}else{
							$resultset['Group']['group_reported_status'] = false;
						}
					}else{
						$resultset['Group']['reported_status'] = false;
						$resultset['Group']['drinked_status'] = "undrinked1";
						$user_array['reported_status'] = false;
					}
					
			    	$user_array['job'] = $job['JobList'];
			    	//$account_array = $this->UserAccount->find('first',array('conditions'=>array('user_id' => $user_array['User']['id'])));
				    //$user_array['User']['account'] = $account_array['UserAccount'];
			    	$resultset['Group']['user'] = $user_array;
			    }


			    $lat1 = $resultset['Group']['group_latitude'];
				$lon1 = $resultset['Group']['group_longitude'];
				$lat2 = $this->request->data['current_latitude'];
				$lon2 = $this->request->data['current_longitude'];
				$resultset['Group']['distance'] = $this->distance($lat1, $lon1, $lat2, $lon2);

			    $resultGroup["Group"] = $resultset["Group"];
			    $new_arr[] = $resultGroup;
			
			}
			if(!empty($new_arr)){

				$resultArray = array();
				$resultArray['status'] = true;
				$resultArray['data'] = $new_arr;
				$resultArray['message'] = "success";
				$resultArray['jap_message'] = "成功";
			}else{
				$resultArray = array();
				$resultArray['status'] = true;
				$resultArray['data'] = new stdClass();
				$resultArray['message'] = "no groups found";
				$resultArray['jap_message'] = "グループが見つかりません";
			}
			
			
		}else{
			$resultArray = array();
			$resultArray['status'] = true;
			$resultArray['data'] = new stdClass();
			$resultArray['message'] = "no groups found";
			$resultArray['jap_message'] = "グループが見つかりません";
		}
		 
		echo json_encode($resultArray); die;
	}


	/*
	*
	* Method NAme: sentOffers
	* Decription: offered for sentOffers
	*
	*/
	public function sentOffers() {
		$this->loadModel('Group');
		$this->loadModel('User');
		$this->loadModel('JobList');
		$this->loadModel('DrinkedGroup');
		$this->loadModel('ReportedUser');
		$this->loadModel('ReportedGroup');
		//$this->loadModel('UserAccount');
		$params = array('DrinkedGroup.is_deleted'=>false);
		if(isset($this->userId)){
			$params = array('DrinkedGroup.user_id' => $this->userId,'DrinkedGroup.is_deleted'=>false,'DrinkedGroup.drinked_status'=> 'drinked');	
		}
		
		$resultsets = $this->DrinkedGroup->find('all',array(
					'conditions' => $params,
					'order'=>array('_id'=>'DESC'),
				));

		if(!empty($resultsets)){
			
			$new_arr = array();
			foreach ($resultsets as $key => $resultGroup) {
				
				$resultset = $this->Group->find('first',array(
							'conditions' => array('Group._id' => $resultGroup['DrinkedGroup']['group_id'],'Group.is_deleted'=>false),
						));

				//Binding
				if(!empty($resultset['Group']['user_id'])){
					//$user_array = $this->User->find('first',array('conditions'=>array('_id' => $resultset['Group']['user_id'])));
					$user_array = $this->getUserInfoById($resultset['Group']['user_id']);
					$job = $this->JobList->find('first',array('conditions'=>array('_id' => $user_array['job_id']),'fields'=>array("eng_name","jap_name")));
					if(!empty($this->userId)){
						$drinked_group = $this->DrinkedGroup->find('first',array('conditions'=>array('user_id' => $this->userId,'is_deleted'=>false,'group_id'=>$resultset['Group']['id'])));
						if(!empty($drinked_group)){
							$resultset['Group']['drinked_status'] = $drinked_group['DrinkedGroup']['drinked_status'];
						}else{
							$resultset['Group']['drinked_status'] = "undrinked";
						}
						$reported_user = $this->ReportedUser->find('first',array('conditions'=>array('user_id' => $this->userId,'reported_user_id'=>$resultset['Group']['user_id'])));
						if(!empty($reported_user)){
							$user_array['reported_status'] = true;
						}else{
							$user_array['reported_status'] = false;
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
						$user_array['reported_status'] = false;
					}
					
			    	$user_array['job'] = $job['JobList'];
			    	//$account_array = $this->UserAccount->find('first',array('conditions'=>array('user_id' => $user_array['User']['id'])));
				    //$user_array['User']['account'] = $account_array['UserAccount'];
			    	$resultset['Group']['user'] = $user_array;
			    } 

			    $lat1 = $resultset['Group']['group_latitude'];
				$lon1 = $resultset['Group']['group_longitude'];
				$lat2 = $this->request->data['current_latitude'];
				$lon2 = $this->request->data['current_longitude'];
				$resultset['Group']['distance'] = $this->distance($lat1, $lon1, $lat2, $lon2);

			    $resultGroup["Group"] = $resultset["Group"];
			    $new_arr[] = $resultGroup;
			
			}
			if(!empty($new_arr)){

				$resultArray = array();
				$resultArray['status'] = true;
				$resultArray['data'] = $new_arr;
				$resultArray['message'] = "success";
				$resultArray['jap_message'] = "成功";
			}else{
				$resultArray = array();
				$resultArray['status'] = true;
				$resultArray['data'] = new stdClass();
				$resultArray['message'] = "no groups found";
				$resultArray['jap_message'] = "グループが見つかりません";
			}
			
			
		}else{
			$resultArray = array();
			$resultArray['status'] = true;
			$resultArray['data'] = new stdClass();
			$resultArray['message'] = "no groups found";
			$resultArray['jap_message'] = "グループが見つかりません";
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
			$user_array['User']['last_login'] = date('Y-m-d H:i:s');

			if($this->User->save($user_array)){
				$resultArray = array();
				$resultArray['status'] = true;
				$resultArray['data'] = new stdClass();
				$resultArray['message'] = "Last Login successfully updated";
				$resultArray['jap_message'] = "最終ログインが正常に更新されました";
			}else{
				$resultArray = array();
				$resultArray['status'] = false;
				$resultArray['data'] = new stdClass();
				$resultArray['message'] = "Last Login not updated";
				$resultArray['jap_message'] = "最終ログインは更新されません";
			}	
		}else{
			$resultArray = array();
			$resultArray['status'] = false;
			$resultArray['data'] = new stdClass();
			$resultArray['message'] = "header missing";
			$resultArray['jap_message'] = "ヘッダーがありません";
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
		//$this->loadModel('UserAccount');
		$this->request->data['user_id'] = $this->userId;
		if (!empty($this->request->data['user_id']) && !empty($this->request->data['reported_user_id'])) {

			$exists = $this->ReportedUser->find('first',array('conditions'=>array('user_id' => $this->request->data['user_id'],'reported_user_id' => $this->request->data['reported_user_id'])));	
			if(!empty($exists)){
				if($this->request->data['reported_status'] == true){
					$resultArray = array();
					$resultArray['status'] = true;
					$resultArray['reported_status'] = true;
					$resultArray['message'] = "user already reported";
					$resultArray['jap_message'] = "ユーザーは既に報告済み";
				}else{
					if($this->ReportedUser->delete($exists['ReportedUser']['id'])){
						$resultArray = array();
						$resultArray['status'] = true;
						$resultArray['reported_status'] = false;
						$resultArray['message'] = "user unreported successfully";
						$resultArray['jap_message'] = "ユーザーは正常に報告されなかった";
					}else{
						$resultArray = array();
						$resultArray['status'] = false;
						$resultArray['reported_status'] = "";
						$resultArray['message'] = "something went wrong. please try again.";
						$resultArray['jap_message'] = "何かが間違っていた。もう一度お試しください。";
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
						$resultArray['jap_message'] = "ユーザーは正常に報告しました";
					}else{
						$resultArray = array();
						$resultArray['status'] = false;
						$resultArray['reported_status'] = "";
						$resultArray['message'] = "something went wrong. please try again.";
						$resultArray['jap_message'] = "何かが間違っていた。もう一度お試しください。";
					}			
				}else{
					$resultArray = array();
					$resultArray['status'] = true;
					$resultArray['reported_status'] = false;
					$resultArray['message'] = "user already unreported";
					$resultArray['jap_message'] = "ユーザーは既に報告されていません";
					
				}
			}
		}else{
			$resultArray = array();
			$resultArray['status'] = true;
			$resultArray['data'] = new stdClass();
			$resultArray['message'] = "incomplete data";
			$resultArray['jap_message'] = "不完全なデータ";
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
		//$this->loadModel('UserAccount');
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
				    	//$account_array = $this->UserAccount->find('first',array('conditions'=>array('user_id' => $resultset['User']['id'])));
						//$resultset['User']['account'] = $account_array['UserAccount'];
						$resultset['User']['reported_status'] = false;
					}
					
					$resultArray = array();
					$resultArray['status'] = true;
					$resultArray['data'] = $resultset;
					$resultArray['message'] = "Profile updated successfully ";
					$resultArray['jap_message'] = "プロフィールを正常に更新しました";
				}else{
					$resultArray = array();
					$resultArray['status'] = false;
					$resultArray['data'] = new stdClass();
					$resultArray['message'] = "Profile not updated";
					$resultArray['jap_message'] = "プロフィールが更新されません";
				}	
			}else{
				$resultArray = array();
				$resultArray['status'] = false;
				$resultArray['data'] = new stdClass();
				$resultArray['message'] = "header missing";
				$resultArray['jap_message'] = "ヘッダーがありません";
			}	
		}else{
				$resultArray = array();
				$resultArray['status'] = false;
				$resultArray['data'] = new stdClass();
				$resultArray['message'] = "no data found";
				$resultArray['jap_message'] = "何もデータが見つかりませんでした";
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
					$resultArray['jap_message'] = "既に報告されたグループ";
				}else{
					if($this->ReportedGroup->delete($exists['ReportedGroup']['id'])){
						$resultArray = array();
						$resultArray['status'] = true;
						$resultArray['data'] = ['group_reported_status' => false];
						$resultArray['message'] = "group unreported successfully";
						$resultArray['jap_message'] = "グループが正常に報告されなかった";
					}else{
						$resultArray = array();
						$resultArray['status'] = false;
						$resultArray['data'] = ['group_reported_status' => false];
						$resultArray['message'] = "something went wrong. please try again.";
						$resultArray['jap_message'] = "何かが間違っていた。もう一度お試しください。";
					}
				}
			}else{
				if($this->request->data['group_reported_status'] == true){
					$this->ReportedGroup->create();
					unset($this->request->data['group_reported_status']);
					$this->request->data['is_deleted'] = false;
					if($this->ReportedGroup->save($this->request->data)){

						$resultArray = array();
						$resultArray['status'] = true;
						$resultArray['data'] = ['group_reported_status' => true];
						$resultArray['message'] = "group reported successfully";	
						$resultArray['jap_message'] = "グループは正常に報告しました";
					}else{
						$resultArray = array();
						$resultArray['status'] = false;
						$resultArray['data'] = ['group_reported_status' => false];
						$resultArray['message'] = "something went wrong. please try again.";
						$resultArray['jap_message'] = "何かが間違っていた。もう一度お試しください。";
					}			
				}else{
					$resultArray = array();
					$resultArray['status'] = true;
					$resultArray['data'] = ['group_reported_status' => false];
					$resultArray['message'] = "group already unreported";
					$resultArray['jap_message'] = "既に報告されていないグループ";
					
				}
			}
		}else{
			$resultArray = array();
			$resultArray['status'] = true;
			$resultArray['data'] = new stdClass();
			$resultArray['message'] = "incomplete data";
			$resultArray['jap_message'] = "不完全なデータ";
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
		//$this->loadModel('UserAccount');
		$params = array('Thread.is_deleted'=>false);
		if(isset($this->userId)){
			$params = array('$or'=>array(
	                             array('Thread.receiver_id'=>$this->userId),
	                             array('Thread.sender_id'=>$this->userId ),
                     			),
								'Thread.is_deleted'=>false
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
						$drinked_group = $this->DrinkedGroup->find('first',array('conditions'=>array('user_id' => $this->userId,'is_deleted'=>false,'group_id'=>$resultset['Group']['id'])));
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
				$resultArray['jap_message'] = "成功";
			}else{
				$resultArray = array();
				$resultArray['status'] = true;
				$resultArray['data'] = new stdClass();
				$resultArray['message'] = "no threads found";
				$resultArray['jap_message'] = "スレッドが見つかりません";
			}
			
			
		}else{
			$resultArray = array();
			$resultArray['status'] = true;
			$resultArray['data'] = new stdClass();
			$resultArray['message'] = "no threads found";
			$resultArray['jap_message'] = "スレッドが見つかりません";
		}
		 
		echo json_encode($resultArray); die;
	}


	/* 
	*  Method: getThreadsHistory
    *  Description: This method is used to get history of messages
    *  Author: Lakhvinder Singh
    */

    public function getThreadsHistory() {
		$this->loadModel('Thread');
		$this->loadModel('Message');
		$this->loadModel('Group');
		$this->loadModel('User');
		$this->loadModel('JobList');
		$this->loadModel('DrinkedGroup');
		$this->loadModel('ReportedUser');
		$this->loadModel('ReportedGroup');
		//$this->loadModel('UserAccount');
		$params = array('Thread.is_deleted'=>false);
		if(isset($this->userId)){
			$params = array('$or'=>array(
	                             array('Thread.receiver_id'=>$this->userId),
	                             array('Thread.sender_id'=>$this->userId ),
                     			),
								'Thread.is_deleted'=>true
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
						$drinked_group = $this->DrinkedGroup->find('first',array('conditions'=>array('user_id' => $this->userId,'is_deleted'=>false,'group_id'=>$resultset['Group']['id'])));
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
			    	$new_arr[] = $thread_info['Thread'];
			    }
			    
			
			}
			if(!empty($new_arr)){

				$resultArray = array();
				$resultArray['status'] = true;
				$resultArray['data'] = $new_arr;
				$resultArray['message'] = "success";
				$resultArray['jap_message'] = "成功";
			}else{
				$resultArray = array();
				$resultArray['status'] = true;
				$resultArray['data'] = new stdClass();
				$resultArray['message'] = "no threads found";
				$resultArray['jap_message'] = "スレッドが見つかりません";
			}
			
			
		}else{
			$resultArray = array();
			$resultArray['status'] = true;
			$resultArray['data'] = new stdClass();
			$resultArray['message'] = "no threads found";
			$resultArray['jap_message'] = "スレッドが見つかりません";
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
					$resultArray['jap_message'] = "成功";
				}else{
					$resultArray = array();
					$resultArray['status'] = true;
					$resultArray['data'] = new stdClass();
					$resultArray['message'] = "no messages found";
					$resultArray['jap_message'] = "メッセージが見つかりません";
				}
				
				
			}else{
				$resultArray = array();
				$resultArray['status'] = true;
				$resultArray['data'] = new stdClass();
				$resultArray['message'] = "no messages found";
				$resultArray['jap_message'] = "メッセージが見つかりません";
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
		$this->loadModel('User');
		$this->request->data['sender_id'] = $this->userId;
		$this->request->data['read_status'] = "0";
		$this->request->data['notification_status'] = 1;
		//print_r($this->request->data); die;
		if (!empty($this->request->data['sender_id']) && !empty($this->request->data['thread_id']) && !empty($this->request->data['receiver_id']) && !empty($this->request->data['message'])) {
			$receiver_info = $this->getUserInfoById($this->request->data['receiver_id'],array('fb_image','full_name','full_name','image'));
			if($receiver_info['is_deleted'] == false){
				$this->Message->create();
				if($result = $this->Message->save($this->request->data)){
					//print_R($result); exit;
					$resultArray = array();
					$resultArray['status'] = true;
					$resultArray['data'] = $result['Message'];
					$resultArray['message'] = "message sent successfully";
					$resultArray['jap_message'] = "送信に成功しました";	
					/*************** PUSH NOTICATION CODE**************************/
					
					$pushData =array();
					$pushData['sender_info'] 	= $this->getUserInfoById($this->userId,array('fb_image','full_name','full_name','image'));
					$pushData['receiver_info']  = $receiver_info;
					$pushData['thread_id'] 		= $this->request->data['thread_id'];
					$thread_info  				= $this->getThreadInfoById($this->request->data['thread_id']);
					$pushdata['group_info']		= $this->getGroupInfoById($thread_info['group_id']);
					$pushData['message'] 		= $result['Message'];
					$pushData['push_type'] 		= 'Message'; 
					$pushNotificationTokens 	= $this->getSessionInfoById($this->request->data['receiver_id']);
					$push_notification_message  = $pushData['sender_info']['full_name'].' sent you a new message.';
					$notification_count = 0;
					foreach ($pushNotificationTokens as $token) {
						//print_r($token['ApiSession']); exit;
						if(isset($token['ApiSession']['token'])  && !empty($token['ApiSession']['token'])){
							$this->sendPushNotificationOnIOS($token['ApiSession']['token'],$push_notification_message,'@drinks',json_encode($pushData));	
							$notification_count++;
						}
					}
					if($notification_count == 0){
						$message_array = $this->Message->find('first',array('conditions'=>array('_id' => $result['Message']['id'])));
						$message_array['Message']['notification_status'] = 0;
						$this->Message->save($message_array);

					}
					/*************** END: PUSH NOTICATION CODE **********************/
				}else{
					$resultArray = array();
					$resultArray['status'] = false;
					$resultArray['data'] = new stdClass();
					$resultArray['message'] = "message not sent";
					$resultArray['jap_message'] = "メッセージは送信されません";
				}	
			}else{
				$resultArray = array();
				$resultArray['status'] = false;
				$resultArray['data'] = new stdClass();
				$resultArray['message'] = "User account has been deleted.";
				$resultArray['jap_message'] = "ユーザーアカウントが削除されました。";
			}		
		}else{
			$resultArray = array();
			$resultArray['status'] = true;
			$resultArray['data'] = false;
			$resultArray['message'] = "incomplete data";
			$resultArray['jap_message'] = "不完全なデータ";
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
	public function updateFacebookFriends() {
		if($this->request->data['friends_list']){
			$this->loadModel('Friend');
			$friends_list = json_decode(stripslashes($this->request->data['friends_list']));
			foreach ($friends_list as $key => $value) {
				//print_r($value); exit;
				if(isset($value->id) && !empty($value->id)){
					$params = array(
							'conditions' => array('Friend.user_id' => $this->userId,'Friend.fb_id' => $value->id),
						);
					$Friend_detail = $this->Friend->find('first', $params);
					if(empty($Friend_detail)){
						$this->Friend->create();
					    $Friend['user_id'] 			= $this->userId;
					    $Friend['fb_id'] 			= $value->id;
					    $Friend['name'] 			= $value->name;
					    $Friend['type'] 			= 'facebook';
					    $Friend['image'] 			= $value->image; 
					    $Friend['is_deleted'] 		= false;
					    $this->Friend->save($Friend);
					}
				}
			}
		}else{
			$resultArray = array();
			$resultArray['status'] = false;
			$resultArray['status_code'] = 202;
			$resultArray['data'] = new stdClass();
			$resultArray['message'] = "Friend not added";
			$resultArray['jap_message'] = "友達は追加されません";
			echo json_encode($resultArray); 
			die;
		}
		$resultArray = array();
		$resultArray['status'] = true;
		$resultArray['status_code'] = 200;
		$resultArray['data'] = $result['Friend'];
		$resultArray['message'] = "Friend added successfully";	
		$resultArray['jap_message'] = "友達が正常に追加";
		echo json_encode($resultArray); 
		die;
	} 

	public function countUserFbFriendsById($user_id){
		$this->loadModel('Friend');
		$params = array(
				'conditions' => array('Friend.user_id' => $user_id,'Friend.is_deleted' => false,'Friend.type' => 'facebook'),
			);
		$Friend_detail = $this->Friend->find('all', $params);
		//print_r($Friend_detail); exit;
		return count($Friend_detail);
	}

	public function checkGroupOwnerFbFriendOrNot($user_id,$fb_id){
		$this->loadModel('Friend');
		$params = array(
				'conditions' => array('Friend.user_id' => $user_id,'Friend.is_deleted' => false,'Friend.type' => 'facebook','Friend.fb_id' => $fb_id),
			);
		$Friend_detail = $this->Friend->find('first', $params);
		if(empty($Friend_detail)){
			return false;
		}else{
			return true;
		}
	}
	


		/*
	*
	* Method: 
	* Description:
	*
	*/

	public function getMembershipPlanAndTickets(){
		$this->loadModel('Option');

		$tickets = $this->Option->find('all',array(
											'fields'=>array("eng_name","jap_name","ticket","amount","type","discount"),
											'conditions' => array('Option.type' => 'ticket'),
											'order'=>array('Option.ticket'=>'DESC')
											));
		/*$this->set(array(
            'options' => Hash::extract($tickets, '{n}.Option'),
            '_serialize' => 'options'
        )); */
		if(!empty($tickets)){
			
			$tickets_Array = array();
			foreach ($tickets as $ticket) {
				$tickets_Array[] = $ticket['Option']; 
			}
			//print_r($tickets_Array); exit;
			usort($tickets_Array, function($a, $b) {
			    return $b['amount'] - $a['amount'];
			});
			$updated_Array['tickets'] = $tickets_Array;
		}

		$membership_plans = $this->Option->find('all',array(
													'fields'=>array("eng_name","jap_name","ticket","amount","discount","description","jap_description","type"),
													'conditions' => array('Option.type' => 'membership_plan'),
													'order'=>array('amount'=>'asc')));
		if(!empty($tickets)){
			$membership_plans_Array = array();
			foreach ($membership_plans as $membership_plan) {
				$membership_plans_Array[] = $membership_plan['Option']; 
			}
			usort($membership_plans_Array, function($a, $b) {
			    return $b['amount'] - $a['amount'];
			});
			$updated_Array['membership_plans'] = $membership_plans_Array;
		}
		if(!empty($updated_Array)){

			$resultArray = array();
			$resultArray['status'] = true;
			$resultArray['data'] = $updated_Array;
			$resultArray['message'] = "success";
			$resultArray['jap_message'] = "成功";
			
		}else{
			$resultArray = array();
			$resultArray['status'] = false;
			$resultArray['data'] = new stdClass();
			$resultArray['message'] = "no data found";
			$resultArray['jap_message'] = "何もデータが見つかりませんでした";
		}
		
		header("Content-type:application/json");
		echo json_encode($resultArray);
		die;
	
	}

    /*
    *
    * Author: Lakhvinder Singh
    * API: updateNotificationInfo
    * DEscription: updateNotificationInfo
    */
	public function updateNotificationInfo(){
		$this->loadModel('User');
		$params = array(
							'conditions' => array('User._id' => $this->userId),
						);
		$user_detail = $this->User->find('first', $params);
		$user_detail['User']['notification_receive_offer'] = ($this->request->data['notification_receive_offer'] == 1) ? true : false;
		$user_detail['User']['notification_when_matching'] = ($this->request->data['notification_when_matching'] == 1) ? true : false;			
		$user_detail['User']['notification_message'] = ($this->request->data['notification_message'] == 1) ? true : false;
		$user_detail['User']['notification_notice'] = ($this->request->data['notification_notice'] == 1) ? true : false;
		$user_detail['User']['status'] = true;
		$this->User->save($user_detail);
		$resultArray = array();
		$resultArray['status'] = true;
		$resultArray['data'] = new stdClass();
		$resultArray['message'] = "Updated";
		$resultArray['jap_message'] = "更新しました";
		header("Content-type:application/json");
		echo json_encode($resultArray);
		die;
		
    }

    /*
    *
    * Author: Lakhvinder Singh
    * API: updateUserInfo
    * DEscription: updateUserInfo
    */
	public function updateUserInfo(){
		$this->loadModel('User');
		$params = array(
							'conditions' => array('User._id' => $this->userId),
						);
		$user_detail = $this->User->find('first', $params);

		$user_detail['User']['status'] = true;
		if(!empty($this->request->data['job_id'])){
			$user_detail['User']['job_id'] = $this->request->data['job_id'];
		}
		if(!empty($this->request->data['full_name'])){
			$user_detail['User']['full_name'] = $this->request->data['full_name'];
		}

		if(!empty($this->request->data['dob'])){
			$user_detail['User']['dob'] = $this->request->data['dob'];
		}

		if(!empty($this->request->data['blood_type'])){
			$user_detail['User']['blood_type'] = $this->request->data['blood_type'];
		}

		if(!empty($this->request->data['marriage'])){
			$user_detail['User']['marriage'] = $this->request->data['marriage'];
		}

		if(!empty($this->request->data['tabaco'])){
			$user_detail['User']['tabaco'] = $this->request->data['tabaco'];
		}

		if(!empty($this->request->data['school_career'])){
			$user_detail['User']['school_career'] = $this->request->data['school_career'];
		}

		if(!empty($this->request->data['annual_income'])){
			$user_detail['User']['annual_income'] = $this->request->data['annual_income'];
		}

		if(!empty($_FILES['image'])){
			$user_detail['User']['image'] = BASE_URL."uploads/users/original/".$this->Common->upload("profile_image",$_FILES['image']);	
		}
		if(!empty($this->request->data['gender'])){
			$user_detail['User']['gender'] = $this->request->data['gender'];
		} 
		$this->User->save($user_detail);
		$resultArray = array();
		$resultArray['status'] = true;
		$resultArray['data'] = new stdClass();
		$resultArray['message'] = "Updated";
		$resultArray['jap_message'] = "更新しました";
		header("Content-type:application/json");
		echo json_encode($resultArray);
		die;
		
    }

    /*
    *
    * Author: Lakhvinder Singh
    * API: updateAgeDocument
    * DEscription: updateAgeDocument
    */
	public function updateAgeDocument(){
		$this->loadModel('User');
		$params = array(
							'conditions' => array('User._id' => $this->userId),
						);
		$user_detail = $this->User->find('first', $params);

		$user_detail['User']['status'] = true;
		if(isset($_FILES['age_document']) && !empty($_FILES['age_document'])){
			unlink(WWW_ROOT.'uploads/users/age_document/original/'.$user_detail['User']['age_document']);
			unlink(WWW_ROOT.'uploads/users/age_document/resized/'.$user_detail['User']['age_document']);	
			$user_detail['User']['age_document'] = BASE_URL."uploads/users/age_document/original/".$this->Common->upload("age_document",$_FILES['age_document']);	
		}
		$this->User->save($user_detail);
		$resultArray = array();
		$resultArray['status'] = true;
		$resultArray['data'] = $user_detail;
		$resultArray['message'] = "Updated";
		$resultArray['jap_message'] = "更新しました";
		header("Content-type:application/json");
		echo json_encode($resultArray);
		die;
		
    }

    public function updateTicketConsumeCount(){
    	$this->loadModel('User');		
		$params = array(
							'conditions' => array('User._id' => $this->userId),
						);
		$user_detail = $this->User->find('first', $params);
		if(isset($user_detail['User']['consume_date']) && $user_detail['User']['consume_date'] == date('Y-m-d')){
			$user_detail['User']['consume_total'] = $user_detail['User']['consume_total'] + 1;
		}else{
			$user_detail['User']['consume_date'] = date('Y-m-d');
			$user_detail['User']['consume_total'] = 1;
		}
		$this->User->save($user_detail);		
    }

    /*
    *
    * Author: Lakhvinder Singh
    * API: getUserInfo
    * DEscription: Get user detail
    */
    public function getUserInfo(){
		$this->loadModel('User');		
		$this->loadModel('DrinkedGroup');		
		$params = array(
							'conditions' => array('User._id' => $this->userId),
						);
		$user_detail = $this->User->find('first', $params);
		if($user_detail['User']['premium_plan_last_date'] >= date('Y-m-d')){
			$user_detail['User']['membership_status'] = 'Paid member';
		}else{
			$user_detail['User']['membership_status'] = 'Regular';					
		}
		if($user_detail['User']['membership_status'] == 'Regular'){
			if(isset($user_detail['User']['consume_date']) && $user_detail['User']['consume_date'] == date('Y-m-d')){
				if(isset($user_detail['User']['consume_total']) && $user_detail['User']['consume_total'] >= 5){
					$user_detail['User']['membership_status'] = 'Paid member';
				}
			}
		}
		$params = array(
						'DrinkedGroup.drinked_status'=>'confirmed',
	    				'$or'=>array(		
	                    				array('DrinkedGroup.user_id'=>$this->userId),		
                    					array('DrinkedGroup.owner_user_id'=>$this->userId),		
	         						)		
	            );		
		$resultsets = $this->DrinkedGroup->find('all', array('conditions'=>$params));		
		$user_detail['User']['offer_count'] = sizeof($resultsets);		
		$resultArray = array();
		$resultArray['status'] = true;
		$resultArray['data'] = $user_detail;
		$resultArray['message'] = "Updated";
		$resultArray['jap_message'] = "更新しました";
		header("Content-type:application/json");
		echo json_encode($resultArray);
		die;
		
    }

    /*
    *
    * Author: Lakhvinder Singh
    * API: payByStripe
    * DEscription: payByStripe
    */
	public function payByStripe(){
		if (!empty($this->request->data['plan_id'])) {
		    $this->loadModel('Transaction');
		    $this->loadModel('Option');
		    $this->loadModel('User');
			$plan_id = $this->request->data['plan_id'];
			$plan_detail = $this->Option->find('first',array('conditions' => array('Option._id' => $plan_id)));
			if(!empty($plan_detail)){
				$duration 	= $plan_detail['Option']['duration'];
				$discount 	= $plan_detail['Option']['discount'];
				$amount 	= $plan_detail['Option']['amount'];
				$eng_name 	= $plan_detail['Option']['eng_name'];
				$description 	= $plan_detail['Option']['description'];
				$charge_amount = $amount - $discount;
				if (!empty($this->request->data['stripeToken']) ) {
			    	$data = array(
							'amount' => $charge_amount,
							'stripeToken' => $this->request->data['stripeToken'], // either the token
							'description' => 'Pay for plan -'.$eng_name
						);
			    	$result = $this->Stripe->charge($data);
			    	if(isset($result['stripe_id'])){

					    /********** START:  Transaction data inserted *************************/
					    $this->Transaction->create();
					    $Transaction['user_id'] 		= $this->userId;
					    $Transaction['stripe_id'] 		= $result['stripe_id'];
					    $Transaction['relation_id'] 	= $plan_id; // Relation id is plan id or option id
					    $Transaction['amount'] 			= $charge_amount;
					    $Transaction['coupon_code'] 	= '';
					    $Transaction['type'] 			= 'membership_plan';
					    $Transaction['payment_type'] 	= 'stripe';
					    $Transaction['is_deleted'] 		= false;
					    $this->Transaction->save($Transaction);
					    /********** End  Transaction data inserted *************************/

					    /********** START  Plan date updated *************************/
						$params = array(
								'conditions' => array('User._id' => $this->userId),
							);
						$user_detail = $this->User->find('first', $params);
					    $time = strtotime($user_detail['User']['premium_plan_last_date']);
						$final = date("Y-m-d", strtotime("+".$duration." month", $time));
						$user_detail['User']['premium_plan_last_date'] = $final;
						$this->User->save($user_detail);
					    /********** End  Plan date updated *************************/

				    	$resultArray = array();
						$resultArray['status'] = true;
						$resultArray['data'] = $result;
						$resultArray['message'] = "success";
						$resultArray['jap_message'] = "成功";
						header("Content-type:application/json");
						echo json_encode($resultArray);
						die;
			    	}else{
			    		$resultArray = array();
						$resultArray['status'] = false;
						$resultArray['data'] = new stdClass();
						$resultArray['message'] = $result;
						$resultArray['jap_message'] = $result;
						header("Content-type:application/json");
				    	echo json_encode($resultArray); 
						die;
			    	}
					
				}else{
					/********** START  Plan date updated *************************/
					$params = array(
							'conditions' => array('User._id' => $this->userId),
						);
					$user_detail = $this->User->find('first', $params);
					if($user_detail['User']['premium_plan_last_date'] >= date('Y-m-d')){
						$resultArray = array();
						$resultArray['status'] = false;
						$resultArray['data'] = new stdClass();
						$resultArray['message'] = 'You are already paid member.';
						$resultArray['jap_message'] = "あなたはすでにプレミアムユーザーです。";
						header("Content-type:application/json");
				    	echo json_encode($resultArray); 
						die;
					}else{

						if($user_detail['User']['balance'] >= 5){
						    $balance = $user_detail['User']['balance'] - 5;
							$user_detail['User']['balance'] = $balance;
						    $time = strtotime($user_detail['User']['premium_plan_last_date']);
							//$final = date("Y-m-d", strtotime("+1 day", $time));
							$user_detail['User']['premium_plan_last_date'] = date("Y-m-d");
							$this->User->save($user_detail);
							$resultArray = array();
							$resultArray['status'] = true;
							$resultArray['data'] = $user_detail;
							$resultArray['message'] = "success";
							$resultArray['jap_message'] = "成功";
							header("Content-type:application/json");
							echo json_encode($resultArray);
							die;
						}else{
							$resultArray = array();
							$resultArray['status'] = false;
							$resultArray['data'] = new stdClass();
							$resultArray['message'] = 'Insufficient tickets in your account.';
							$resultArray['jap_message'] = "アカウントのチケットが不足しています。";
							header("Content-type:application/json");
					    	echo json_encode($resultArray); 
							die;
						}
					}
				    /********** End  Plan date updated *************************/
				}
		    }else{
				$resultArray = array();
				$resultArray['status'] = false;
				$resultArray['data'] = new stdClass();
				$resultArray['message'] = 'Plan not exists';
				$resultArray['jap_message'] = "計画は存在しません";
				header("Content-type:application/json");
		    	echo json_encode($resultArray); 
				die;
			}
		}elseif (!empty($this->request->data['stripeToken']) && !empty($this->request->data['ticket_id'])) {
		    $this->loadModel('Transaction');
		    $this->loadModel('Option');
		    $this->loadModel('User');
			$ticket_id = $this->request->data['ticket_id'];
			$plan_detail = $this->Option->find('first',array('conditions' => array('Option._id' => $ticket_id)));
			if(!empty($plan_detail)){
				$ticket 	= $plan_detail['Option']['ticket'];
				$amount 	= $plan_detail['Option']['amount'];
				$eng_name 	= $plan_detail['Option']['eng_name'];
				$charge_amount = $amount;
		    	$data = array(
						'amount' => $charge_amount,
						'stripeToken' => $this->request->data['stripeToken'], // either the token
						'description' => 'Pay for ticket -'.$eng_name
					);
		    	$result = $this->Stripe->charge($data);
		    	if(isset($result['stripe_id'])){

				    /********** START:  Transaction data inserted *************************/
				    $this->Transaction->create();
				    $Transaction['user_id'] 		= $this->userId;
				    $Transaction['stripe_id'] 		= $result['stripe_id'];
				    $Transaction['relation_id'] 	= $ticket_id; // Relation id is plan id or option id
				    $Transaction['amount'] 			= $charge_amount;
				    $Transaction['coupon_code'] 	= '';
				    $Transaction['type'] 			= 'ticket';
				    $Transaction['payment_type'] 	= 'stripe';
				    $Transaction['is_deleted'] 		= false;
				    $this->Transaction->save($Transaction);
				    /********** End  Transaction data inserted *************************/

				    /********** START  Plan date updated *************************/
					$params = array(
							'conditions' => array('User._id' => $this->userId),
						);
					$user_detail = $this->User->find('first', $params);
				    $balance = $user_detail['User']['balance'] + $ticket;
					$user_detail['User']['balance'] = $balance;
					$this->User->save($user_detail);
				    /********** End  Plan date updated *************************/

			    	$resultArray = array();
					$resultArray['status'] = true;
					$resultArray['data'] = $result;
					$resultArray['message'] = "success";
					$resultArray['jap_message'] = "成功";
					header("Content-type:application/json");
					echo json_encode($resultArray);
					die;
		    	}else{
		    		$resultArray = array();
					$resultArray['status'] = false;
					$resultArray['data'] = new stdClass();
					$resultArray['message'] = $result;
					$resultArray['jap_message'] = $result;
					header("Content-type:application/json");
			    	echo json_encode($resultArray); 
					die;
		    	}
		    }else{
				$resultArray = array();
				$resultArray['status'] = false;
				$resultArray['data'] = new stdClass();
				$resultArray['message'] = 'Plan not exists';
				$resultArray['jap_message'] = "計画は存在しません";
				header("Content-type:application/json");
		    	echo json_encode($resultArray); 
				die;
			}
		}else{
			$resultArray = array();
			$resultArray['status'] = false;
			$resultArray['data'] = new stdClass();
			$resultArray['message'] = "no data found";
			$resultArray['jap_message'] = "何もデータが見つかりませんでした";
			header("Content-type:application/json");
	    	echo json_encode($resultArray); 
			die;
		}    
    }

    /*
    *
    * Author: Lakhvinder Singh
    * API: redeemCouponCode
    * DEscription: redeemCouponCode
    */
    public function redeemCouponCode(){
    	if (!empty($this->request->data['coupon_code'])) {
		    $this->loadModel('Transaction');
		    $this->loadModel('User');
			$coupon_code = $this->request->data['coupon_code'];
			$coupon_code_detail = $this->User->find('first',array('conditions' => array('User.coupon_code' => $coupon_code)));
			if(!empty($coupon_code_detail)){				
				$coupon_redeem_info = $this->Transaction->find('first',array('conditions' => array('Transaction.user_id' => $this->userId,'Transaction.type' => 'coupon','Transaction.coupon_code' => $coupon_code)));
		    	//print_r($coupon_redeem_info); exit;
		    	if(empty($coupon_redeem_info)){			    

				    $this->Transaction->create();
				    $Transaction['user_id'] 		= $this->userId;
				    $Transaction['stripe_id'] 		= '';
				    $Transaction['relation_id'] 	= ''; // Relation id is plan id or option id
				    $Transaction['amount'] 			= '';
				    $Transaction['type'] 			= 'coupon';
				    $Transaction['tickets'] 		= 10;
				    $Transaction['coupon_code'] 	= $coupon_code;
				    $Transaction['payment_type'] 	= 'manually';
				    $Transaction['is_deleted'] 		= false;
				    $this->Transaction->save($Transaction);

				    $user_detail = $this->User->find('first',array('conditions' => array('User._id' => $this->userId)));
				    $new_balance = $user_detail['User']['balance'] + 10;
				    $user_detail['User']['balance'] = $new_balance;
				    $this->User->save($user_detail);
				    if(isset($coupon_code_detail['User']['id'])){
					    $owner_user_detail = $this->User->find('first',array('conditions' => array('User._id' => $coupon_code_detail['User']['id'])));
					    $owner_new_balance = $owner_user_detail['User']['balance'] + 10;
					    $owner_user_detail['User']['balance'] = $owner_new_balance;
					    $this->User->save($owner_user_detail);
				    	
				    }

			    	$resultArray = array();
					$resultArray['status'] = true;
					$resultArray['data'] = new stdClass();
					$resultArray['message'] = "success";
					$resultArray['jap_message'] = "成功";
					header("Content-type:application/json");
					echo json_encode($resultArray);
					die;
		    	}else{
		    		$resultArray = array();
					$resultArray['status'] = false;
					$resultArray['data'] = new stdClass();
					$resultArray['message'] = 'Already Used';
					$resultArray['jap_message'] = "既に使われた";
					header("Content-type:application/json");
			    	echo json_encode($resultArray); 
					die;
		    	}
		    }else{
				$resultArray = array();
				$resultArray['status'] = false;
				$resultArray['data'] = new stdClass();
				$resultArray['message'] = 'Coupon not exists';
				$resultArray['jap_message'] = "クーポンは存在しません";
				header("Content-type:application/json");
		    	echo json_encode($resultArray); 
				die;
			}
		}else{
			$resultArray = array();
			$resultArray['status'] = false;
			$resultArray['data'] = new stdClass();
			$resultArray['message'] = "no data found";
			$resultArray['jap_message'] = "何もデータが見つかりませんでした";
			header("Content-type:application/json");
	    	echo json_encode($resultArray); 
			die;
		} 
    }


	/**
	 * add method (testapi)
	 *
	 * @return testapi
	 * @access public
	 */
	public function testapi(){
		$this->loadModel('User');
		/*$data = $this->User->find('all', array(
			    'contain' => array('User')
			));
		foreach ($data as $key => $value) {
			$user_id = $value['User']['id'];
			$coupon_code = $this->generateCouponCode();
			$user_info = $this->User->find('first', array(
			    'conditions' => array('User._id' => $user_id),
			));
			$user_info['User']['coupon_code'] = $coupon_code;
			//print_r($value); exit;
			$this->User->save($user_info);
			//echo $coupon_code; exit;
		}
		exit;
		$this->loadModel('Group');
		$data = $this->Group->find('all', array(
			    'contain' => array('User')
			));
		print_r($data); exit;
		exit;
		$this->loadModel('Message');
		$data['sender_info'] = $this->getUserInfoById('59b8d52aa642bee00bb2d545');
		print_r($data['sender_info']['User']['full_name']); exit;*/
		$pushdata = array();
		$token = 'd42a25c24b0a1e183c2b2a29ee20da819d0a82cc50b8d7395b02bcb469c0a2e5';
		$push_notification_message = 'NEW Push notification working';
		$this->sendPushNotificationOnIOS($token,$push_notification_message,'@testapi',json_encode($pushdata));
		$resultArray = array();
		$resultArray['status'] = true;
		$resultArray['data'] = true;
		$resultArray['message'] = "REsponse";
		$resultArray['jap_message'] = "応答";
		echo json_encode($resultArray); 
		die;
	}





	//Message Module API's end 


}
