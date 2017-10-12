<?php
App::uses('Component', 'Controller');
App::uses('CakeEmail', 'Network/Email');

    class CommonComponent extends Component {

        var $name = 'Common';
        
        var $controller = "";
        
        public function initialize(\Controller $controller) {
            parent::initialize($controller);
            $this->Controller = $controller;
        }
        
        public function validateRecaptcha($response){
            if(empty($response)){
                return false;
            }
            $url = "https://www.google.com/recaptcha/api/siteverify";
            $curl = curl_init();
            curl_setopt_array($curl, array(
                CURLOPT_RETURNTRANSFER => 1,
                CURLOPT_URL => $url,
                CURLOPT_POST => 1,
                CURLOPT_POSTFIELDS => array(
                    'secret' => RECAPTCHA_SECRET,
                    'response' => $response
                )
            ));
            $resp = curl_exec($curl);
            curl_close($curl);
            $resp = json_decode($resp);
            return @$resp->success;
        }

        public function upload($type=NULL,$file_array = array())
        {
            switch ($type) {
                case 'profile_image':
                $temp = explode(".", $file_array['name']);
                $filename = "User_" . date("Y") . "_" . round(microtime(true)) . '.' . end($temp);
                move_uploaded_file($file_array['tmp_name'], "uploads/users/original/" . $filename);

                App::import('Component', 'image');
                $MyImageCom = new ImageComponent();
                $MyImageCom->prepare("uploads/users/original/" . $filename);
                $MyImageCom->resize(240, 240);
                $MyImageCom->save("uploads/users/resized/" . $filename);
                return $filename;    
                break;

                case 'group_image':
                //echo "2";
                //print_r($file_array);
                $temp = explode(".", $file_array['name']);
                $filename = "User_" . date("Y") . "_" . round(microtime(true)) . '.' . end($temp);
                move_uploaded_file($file_array['tmp_name'], "uploads/groups/original/" . $filename);

                App::import('Component', 'image');
                $MyImageCom = new ImageComponent();
                $MyImageCom->prepare("uploads/groups/original/" . $filename);
                $MyImageCom->resize(240, 240);
                $MyImageCom->save("uploads/groups/resized/" . $filename);
                return $filename;    
                break;

                case 'gear_image':
                $filename = $file_array['name'];
                move_uploaded_file($file_array['tmp_name'], "uploads/gears/original/" . $filename);

                App::import('Component', 'image');
                $MyImageCom = new ImageComponent();
                $MyImageCom->prepare("uploads/gears/original/" . $filename);
                $MyImageCom->resize(300, 300);
                $MyImageCom->save("uploads/gears/resized/" . $filename);
                return $filename;    
                break;
            }
            
        }


        public function multiUpload($type=NULL,$file_array = array())
        {
            switch ($type) {

                case 'gear_image':
                $filenames = array();
                for ($i=0; $i <count($file_array['name']); $i++) { 
                    $filename = $file_array['name'][$i];
                    move_uploaded_file($file_array['tmp_name'][$i], "uploads/gears/original/" . $filename);

                    App::import('Component', 'image');
                    $MyImageCom = new ImageComponent();
                    $MyImageCom->prepare("uploads/gears/original/" . $filename);
                    $MyImageCom->resize(300, 300);
                    $MyImageCom->save("uploads/gears/resized/" . $filename);
                    $filenames[$i] = $filename;    
                }
                return $filenames;   
                break;
            }
            
        }

        public function deleteFile($type=NULL,$file=NULL)
        {
            switch ($type) {
                case 'profile_image':
                unlink(WWW_ROOT.'uploads/users/original/'.$file);
                //unlink(WWW_ROOT.'uploads/users/resized/'.$file);
                break;
                case 'gear_image':
                unlink(WWW_ROOT.'uploads/gears/original/'.$file);
                //unlink(WWW_ROOT.'uploads/gears/resized/'.$file);
                return true;
                break;
            }   
        } 

        public function sendEmail($stringArray, $emailSlug, $userData){
        
            $this->EmailTemplates = ClassRegistry::init('EmailTemplates');
            $email_content = $this->EmailTemplates->findBySlug($emailSlug);
            
            $subject    = $email_content['EmailTemplates']['subject'];
            $content    = $email_content['EmailTemplates']['content'];
            $from       = $email_content['EmailTemplates']['from_email'];
            $reply_to   = $email_content['EmailTemplates']['reply_to'];
            
            $content    = str_replace(array_keys($stringArray), array_values($stringArray), $content);

            $subject    = str_replace(array_keys($stringArray), array_values($stringArray), $subject);
            
            //$userData['User']['email'] = 'xicom.ashwanikocher@gmail.com';

            $email = new CakeEmail('smtp');
            $email->from($from);
            $email->to($userData['User']['email']);
            $email->subject($subject);
            $email->replyTo($reply_to);
            $email->emailFormat('html');
            
            $email->send($content);
            return true;
        }

        public function randomDigits($len, $chars = '0123456789')
        {
            $string = '';
            for ($i = 0; $i < $len; $i++)
            {
                $pos = rand(0, strlen($chars)-1);
                $string .= $chars{$pos};
            }
            return $string;
        }

        public function makeUsername($full_name, $user_id = NULL){
            if($user_id == NULL){
                if($full_name != ""){
                    $exist = 0;
                    while ($exist <= 0) {
                        $username = "";
                        $username = strtolower($full_name);    
                        $username = substr($username, 0,4);
                        $username = $username.$this->randomDigits(3);
                        $users = ClassRegistry::init('User');
                        $check = $users->find('first',array('conditions'=>array('User.username'=>$username)));
                        
                        if(isset($check['User']['id']) && $check['User']['id'] == ""){
                            $exist = 0;
                        }else{
                            $exist++;
                        }
                    }
                    return $username;
                }else{
                    return 0;
                }    
            }
        }


    }
?>