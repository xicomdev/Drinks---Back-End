<div class="container">
  <?php echo $this->Form->create('Member', array("method" => "post","class"=>"login-form")); ?>        
    <div class="login-wrap">
        <p class="login-img"><a href="<?php echo $this->webroot; ?>/webadmin"><h1>DRINKS APP</h1></a></p>
        <div class="input-group">
          <span class="input-group-addon"><i class="icon_profile"></i></span>
          <?php echo $this->Form->input("user_name", array('type' => "text", "class" => "form-control", "placeholder" => "Email", "label" => false, "div" => false, 'required' => false)); ?>
        </div>
        <div class="input-group">
            <span class="input-group-addon"><i class="icon_key_alt"></i></span>
            <?php echo $this->Form->input("password", array('type' => "password", "class" => "form-control", "placeholder" => "Password", "label" => false, "div" => false, 'required' => false)); ?>
        </div>
        <!-- <label class="checkbox">
            <input type="checkbox" value="remember-me"> Remember me
            <span class="pull-right"> <a href="#"> Forgot Password?</a></span>
        </label> -->
        <?php echo $this->Form->input('Log In', array('type' => 'submit', 'label' => false, 'div' => false, "class" => "btn btn-primary btn-lg btn-block")); ?>
    </div>
  <?php echo $this->Form->end(); ?>
</div>


  
