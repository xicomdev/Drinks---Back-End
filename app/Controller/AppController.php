<?php
/**
 * Application level Controller
 *
 * This file is application-wide controller file. You can put all
 * application-wide controller-related methods here.
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

App::uses('Controller', 'Controller');

/**
 * Application Controller
 *
 * Add your application-wide methods in the class below, your controllers
 * will inherit them.
 *
 * @package		app.Controller
 * @link		http://book.cakephp.org/2.0/en/controllers.html#the-app-controller
 */
class AppController extends Controller {

    public $components = array(
        'Session',
        'Cookie',
        'Common',
        'Auth' => array(
            'loginRedirect' => array(
                'controller' => 'admin',
                'action' => 'dashboard',
                'webadmin' =>true
            ),
            'loginAction' => array(
                'controller' => 'admin',
                'action' => 'index',
                'webadmin' =>true
            ),
            'logoutRedirect' => array(
                'controller' => 'admin',
                'action' => 'index',
                'webadmin' =>true
            ),
    ));
    public $uses = array("AppModel");
    public function beforeFilter() {        
        if (@$this->Session->read('AdminUser')) {
            $this->set("AdminUser", $this->Session->read('AdminUser'));
        }
    }

        /** 
     * Purpose : This method is use to send push notification to the android device
     *
     * @author Xicom
     * @param  $device, msg and badge
     * @access public
     * @return successfull message
     */
    public function sendPushNotificationOnIOS($device,$msg,$badges,$data)
    {    
    
        //$device='21cae7e1f71b82b9ce62f6bb4ad4a61291add61b45fc4fda2f86b2ef3bd9198f';       
        //$device = 'c9d92ea758237ea79d31c5a04a3c3b4981d3b11eb7e9f67898822ad1cb6e3a67';
        //print_R($data); exit;
        //$data = array();
        //$data = json_encode($data);
        $env = 'developement';
        $devices = array($device);
        if(!empty($devices))
        {       
            foreach($devices as $deviceToken)
            {
                if(!$deviceToken)
                {
                    continue;
                }   
                if($env =='developement')
                {           
                 $user_key = WWW_ROOT . 'pem/CertificatesPushP12Drinks.pem';
                 $url = 'ssl://gateway.sandbox.push.apple.com:2195';
                }
                elseif($env=='production')
                {
                 $user_key = WWW_ROOT . 'pem/CertificatesPushP12Drinks.pem';
                 $url = 'ssl://gateway.push.apple.com:2195';
                }
                //echo $url; exit;
                $ctx = stream_context_create();
                stream_context_set_option($ctx, 'ssl', 'local_cert', $user_key);
                stream_context_set_option($ctx, 'ssl', 'passphrase', 'Lunchserved');                
                $fp = stream_socket_client(
                    $url, $err,
                    $errstr, 60, STREAM_CLIENT_CONNECT|STREAM_CLIENT_PERSISTENT, $ctx
                );
                $message = $msg;
            
                $body['aps'] = array(
                    'alert' =>$message,
                    'badge' =>intval($badges),
                    'sound' => 'default',                   
                    'data'  => json_decode($data)
                 );
            
                $payload = json_encode($body);              
                $deviceToken = str_replace(' ', '', $deviceToken);
                try
                {
                    $msg = chr(0) . pack('n', 32) . pack('H*', $deviceToken) . pack('n', strlen($payload)) . $payload . chr(3) . pack('n', 4) . pack('N', $deviceToken) . chr(4) . pack('n', 4). pack('N', time() + 86400) . chr(5) . pack('n', 1). chr(10);;           
                    $result = fwrite($fp, $msg, strlen($msg));                  
                    
                    if (!$result)
                    {
                        $res=0;                    
                    } 
                    else
                    {
                        $res=1;                 
                    }
                    $retmsg = $res;             
                } 
                catch(Exception $eee)
                {               
                    $this->log('Message Push - ' . $eee);
                }
                fclose($fp);
                $retmsg =  '<br>'.date("Y-m-d H:i:s").' Connection closed to APNS' . PHP_EOL;   
                
            }           
        } 
        else
        {
            $retmsg = '<br>'.date("Y-m-d H:i:s").' Queue is empty!';
        }
        return $retmsg; 
        exit;
    }
}
