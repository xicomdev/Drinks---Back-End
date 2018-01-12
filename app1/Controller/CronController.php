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
class CronController extends AppController {

/**
 * This controller does not use a model
 *
 * @var array
 */
    public function beforeFilter() {    
        $this->Auth->allow();   
    }

    public function deleteAllGroups() {
        $this->loadModel('Group');
        $this->loadModel('Thread');
        $this->loadModel('DrinkedGroup');
        $this->Group->updateAll(
                                array('is_deleted' => true),
                                array('is_deleted' => false)
                            );
        $this->Thread->updateAll(
                                array('is_deleted' => true),
                                array('is_deleted' => false)
                            );
        $this->DrinkedGroup->updateAll(
                                array('is_deleted' => true),
                                array('is_deleted' => false)
                            );
        echo "Success";
        exit;
    }


    public function createGroups($count = 50) {
        $this->loadModel('Group');
        $this->loadModel('User');
        $this->loadModel('JobList');
        //$this->loadModel('UserAccount');
        $params = array('User.is_deleted'=>false);  
        $UsersData = $this->User->find('all',array(
                'conditions' => array('User.is_deleted'=>false),
                'limit' => $count,
                'order' => 'rand()',
            ));
        //print_r($UsersData); exit;
        $i=1;
        foreach ($UsersData as $key => $value) {
            $this->request->data['user_id'] = $value['User']['id'];
            $check_group = $this->checkGroupExists($this->request->data['user_id']);
            if($check_group == "0"){
                $this->Group->create();
                
                if(!empty($_FILES['image'])){
                    //print_r($_FILES['image']);
                    $this->request->data['image'] = BASE_URL."uploads/groups/original/".$this->Common->upload("group_image",$_FILES['image']);
                }else{
                    $login_user_info = $this->getUserInfoById($this->request->data['user_id']);
                    if(isset($login_user_info['image']) && !empty($login_user_info['image'])){
                        $this->request->data['image'] = $login_user_info['image'];                  
                    }elseif(isset($login_user_info['fb_image']) && !empty($login_user_info['fb_image'])){
                        $this->request->data['image'] = $login_user_info['fb_image'];                   
                    }else{
                        $this->request->data['image'] = '';             
                    }
                }
                $group_latitude = array('30.378179','30.72793178908115','35.693840','35.6726231798862');
                $group_longitude = array('76.776697','76.84586432000771','139.703549','139.606965892147');
                $group_location = array("ambala haryana, Panchkula","Saketri Village, Panchkula","tokyo shinjuku","南烏山, 世田谷区");

               /* $group_latitude = array('30.378179','30.72793178908115','30.704649','30.339781');
                $group_longitude = array('76.776697','76.84586432000771','76.717873','76.386880');
                $group_location = array("ambala haryana, Panchkula","Saketri Village, Panchkula","mohali punjab","patiala");*/
                
                $relationship = array("Family","Open","Family","Open");
                $group_conditions = array(
                                            '[   {     "id" : "59a545e241a73f9c5a7711c5",     "Age" : 31,     "eng_name" : "Foreign finance",     "jap_name" : "外資金融"   },   {     "id" : "59a545e241a73f9c5a7711ca",     "Age" : 32,     "eng_name" : "pilot",     "jap_name" : "パイロット"   } ]',
                                            '[  [  "id" : "59a545e241a73f9c5a7711be",  "Age" : 22,  "eng_name" : "A doctor",  "jap_name" : "医師"  ] ]',
                                            '[  [  "id" : "59a545e241a73f9c5a7711be",  "Age" : 20,  "eng_name" : "A doctor",  "jap_name" : "医師"  ] ]',
                                            '[   {     "id" : "59a545e241a73f9c5a7711be",     "Age" : 21,     "eng_name" : "A doctor",     "jap_name" : "医師"   },   {     "id" : "59a545e241a73f9c5a7711bf",     "Age" : 21,     "eng_name" : "lawyer",     "jap_name" : "弁護士"   } ]',
                                        );
                $random_index = rand(1,3);
                $this->request->data['group_conditions'] = $group_conditions[$random_index];
                $this->request->data['group_description'] = rand(1,10000).' group test description';
                $this->request->data['group_latitude'] = $group_latitude[$random_index];
                $this->request->data['group_longitude'] = $group_longitude[$random_index];
                $this->request->data['group_location'] = $group_location[$random_index];
                $this->request->data['group_tag'] = '';
                $this->request->data['relationship'] = $relationship[$random_index];
                $this->request->data['is_deleted'] = false;
            /*    echo "rand".$rand;
                print_r($this->request->data);
                exit;*/
                if($this->Group->save($this->request->data)){
                    $last_inserted_id = $this->Group->getLastInsertID();
                    $params = array(
                        'conditions' => array('Group._id' => $last_inserted_id),
                    );
                    $resultset = $this->Group->find('first', $params);
                    if(!empty($resultset['Group']['user_id'])){
                        $user_array = $this->User->find('first',array('conditions'=>array('_id' => $resultset['Group']['user_id'])));
                        $job = $this->JobList->find('first',array('conditions'=>array('_id' => $user_array['User']['job_id']),'fields'=>array("eng_name","jap_name")));
                        $user_array['User']['job'] = $job['JobList'];
                        $user_array['User']['reported_status'] = false;
                        $resultset['Group']['user'] = $user_array['User'];
                    } 
                    $resultArray['message'] = "group successfully added";
                    echo $i.'. '.$resultArray['message']."<br>";
                }else{
                    $resultArray['message'] = "group not added";
                    echo $i.'. '.$resultArray['message']."<br>";
                }
            }else if($check_group == "2"){
                $resultArray['message'] = "user deleted by admin. please register again";
                echo $i.'. '.$resultArray['message']."<br>";
            }else {
                $resultArray['message'] = "only one group is allowed";
                echo $i.'. '.$resultArray['message']."<br>";
            }
            $i++;
        }        
        exit;
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