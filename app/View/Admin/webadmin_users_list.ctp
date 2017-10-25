main content start-->
<section id="main-content">
  <section class="wrapper">
  <div class="row">
		<div class="col-lg-12">
			<h3 class="page-header"><i class="fa fa-th-list"></i> Users List</h3>
			<ol class="breadcrumb">
				<li><i class="fa fa-home"></i><a href="<?= $this->webroot; ?>webadmin/admin/dashboard">Dashboard</a></li>
				<li><i class="fa fa-th-list"></i>View Users</li>
			</ol>
		</div>
	</div>
      <!-- page start-->
      <div class="row">
          <div class="col-lg-12">
              <section class="panel">
               <form method="post" class="well">
                  <header class="panel-heading">
                          <label class="col-sm-1 control-label">Keyword</label>
                          <div class="col-sm-2">
                          <input type="text" class="form-control" placeholder="Enter Keyword" name="keyword" value="<?php echo @$keyword; ?>">
                          </div>
                          <span>
                            <button class="btn btn-primary">Search User</button>
                          </span>
                  </header>
                </form>  
                  <table class="table table-striped table-advance table-hover">
                   <tbody>
                      <tr>
                         <!-- <th><i class="icon_profile"></i> Full Name</th> -->
                         <th><i class="icon_mail_alt"></i> Id</th>
                         <th><i class="icon_mail_alt"></i> Name</th>
                         <th><i class="icon_mail_alt"></i> Last Login</th>
                         <th><i class="icon_mail_alt"></i> Balance</th>
                         <th><i class="icon_mail_alt"></i> Premium Last Date</th>
                         <th><i class="icon_mail_alt"></i> Coupon Code</th>
                         <th><i class="icon_calendar"></i> Created</th>
                         <th><i class="icon_cogs"></i> Action</th> 
                      </tr>
                      <?php 
                      if(!empty($UsersData)){
                      foreach ($UsersData as $key => $user) { ?>
                        <tr>
                         <td><?= $user['User']['id']; ?></td>
                         <td><?= $user['User']['full_name']; ?></td> 
                         <td><?= $user['User']['last_login']; ?></td> 
                         <td><span class="badge bg-success"><?= empty($user['User']['balance']) ? 0 : $user['User']['balance']; ?></span></td> 
                         <td><?= $user['User']['premium_plan_last_date']; ?></td> 
                         <td><span class="label label-info"><?= $user['User']['coupon_code']; ?></span></td> 
                         <?php $unixtime = explode(" ", $user['User']['created']);?>
                         <td><?= date("d/m/Y h:i:s A T",$unixtime[1]); ?></td>
                         <td>
                          <div class="btn-group">
                              <!-- <a class="btn btn-primary" href="#"><i class="fa fa-eye" aria-hidden="true"></i></a> -->
                              <?php //echo $this->Html->link($this->Custom->getUserStatus($user['User']['status']), array("controller" => "Admin", "action" => "ChangeUserStatus", "webadmin" => true, base64_encode($user['User']['id'])), array("class" => "btn btn-success", "escape" => false)); ?>
                             
                              <a id="<?php echo $user['User']['id']; ?>" title="Remove" href="javascript:void(0);" class="btn btn-danger deleteUser"><i class="icon_close_alt2"></i></a>
                          </div>
                          </td>
                      </tr>    
                      <?php }}else{ ?>
                      <tr><strong>Notification</strong> - No data available</tr>
                      <?php  } ?> 
                   </tbody>

                </table>
              </section>
              <ul class="pagination pagination-sm no-margin pull-right">
                <?php
                $this->Paginator->options(array(
                        'url'=> array(
                            'controller' => 'admin', 
                            'action' => 'usersList', 
                            'webadmin' => true,
                            '?' => 'keyword='.$keyword
                         )
                    ));

                echo $this->Paginator->prev(__('Previous'), array('tag' => 'li'), null, array('class' => 'disabled', 'disabledTag' => 'a'));
                echo $this->Paginator->numbers(array('separator' => '', 'currentTag' => 'a', 'currentClass' => 'active', 'first' => 1, 'tag' => 'li'));
                echo $this->Paginator->next(__('Next'), array('currentClass' => 'disabled', 'tag' => 'li'), null, array('class' => 'disabled', 'disabledTag' => 'a'));
                ?>
            </ul>  
          </div>
      </div>
      <!-- page end-->
  </section>
</section>
<script>

$(".deleteUser").click(function () {
    var id = $(this).attr('id');
    swal({
        title: "Confirm?",
        text: "Are you sure to delete this User. !",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes, delete it!",
        closeOnConfirm: false
    },
    function () {
        //swal.close();
        $.ajax({
            url: '<?php echo $this->webroot; ?>webadmin/admin/deleteUser',
            type: 'POST',
            data: {user_id: id},
            beforeSend: function () {
                $(".loading").show();
            },
            success: function (data) {
                if (data == 'success') {
                    var msg = 'User is deleted successfully';
                } else {
                    var msg = 'User can not be deleted.';
                }
                $(".loading").hide();
                swal({
                    title: "Response",
                    text: msg,
                    type: data
                },
                function () {
                    location.reload();
                });

            },
            error: function () {
                swal("Oops!", "error in form submission", "warning")
                $(".loading").hide();
            }
        });
    });
});
</script>
<!--main content end