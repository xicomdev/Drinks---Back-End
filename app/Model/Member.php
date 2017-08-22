<?php

    /**
     * Application model for CakePHP.
     *
     * This file is application-wide model file. You can put all
     * application-wide model-related methods here.
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
     * @package       app.Model
     * @since         CakePHP(tm) v 0.2.9
     * @license       http://www.opensource.org/licenses/mit-license.php MIT License
     */
    App::uses('AppModel', 'Model');

    /**
     * Application model for Cake.
     *
     * Add your application-wide methods in the class below, your models
     * will inherit them.
     *
     * @package       app.Model
     */
    class Member extends AppModel {

        public $actsAs = array('Containable');

        public function validateAdminLogin() {
            $this->validationErrors = NULL;
            $this->validate = array(
                'user_name' => array(
                    'required' => array(
                        'rule' => 'notBlank',
                        'message' => 'Please enter your username',
                        'last' => true
                    ),
                ),
                'password' => array(
                    'required' => array(
                        'rule' => 'notBlank',
                        'message' => 'Please enter your password',
                        'last' => true
                    ),
                    'validatePass' => array(
                        'rule' => array("validatePass"),
                        'message' => 'Incorrect Password',
                        'last' => true
                    ),
                )
            );
            return $this->validates();
        }


        public function validatePass() {
            App::import("Model", "Member");
            $obj = new Member();
            $exists = $obj->find("first", array("conditions" => array("Member.user_name" => $this->data["Member"]["user_name"], "Member.password" => md5($this->data["Member"]["password"]))));
            if (!empty($exists)) {
                $this->data = $exists;
                return true;
            }
            return false;
        }


    }
    