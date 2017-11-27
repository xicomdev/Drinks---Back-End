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
                         <!-- <th><i class="icon_mail_alt"></i> Id</th>-->
                         <th><i class="icon_mail_alt"></i> Name</th>
                         <th><i class="icon_mail_alt"></i> Last Login</th>
                         <th><i class="icon_mail_alt"></i> Balance</th>
                         <th><i class="icon_mail_alt"></i> Premium Last Date</th>
                         <th><i class="icon_mail_alt"></i> Coupon Code</th>
                         <th><i class="icon_mail_alt"></i> Age Verified</th>
                         <th><i class="icon_calendar"></i> Created</th>
                         <th><i class="icon_cogs"></i> Action</th> 
                      </tr>
                      <?php 
                      if(!empty($UsersData)){
                      foreach ($UsersData as $key => $user) { ?>
                        <tr>
                         <!--<td><?= $user['User']['id']; ?></td>-->
                         <td><?= $user['User']['full_name']; ?></td> 
                         <td><?= $user['User']['last_login']; ?></td> 
                         <td><span class="badge bg-success"><?= empty($user['User']['balance']) ? 0 : $user['User']['balance']; ?></span></td> 
                         <td><?= $user['User']['premium_plan_last_date']; ?></td> 
                         <td><span class="label label-info"><?= $user['User']['coupon_code']; ?></span></td> 
                         <?php
                         if($user['User']['is_age_verified'] == "approve"){ ?> 
                          <td>
                            <!-- <a id="<?php echo $user['User']['id']; ?>" title="verfied" href="javascript:void(0);" class="btn btn-success ageUnverfied">Verified</a> -->
                            <a data-toggle="modal" data-id="<?php echo $user['User']['id']; ?>" data-username="(<?php echo $user['User']['full_name']; ?>)" data-document="<?php echo $user['User']['age_document']; ?>" title="Verified" class="open-addVerifyDialog btn btn-success" href="#addVerifyDialog">Verified</a>
                          </td> 
                         <?php }else { ?>
                          <td>
                            <!-- <a id="<?php echo $user['User']['id']; ?>" title="Unverfied" href="javascript:void(0);" class="btn btn-danger ageVerfied">Unverfied</a> -->
                            <a data-toggle="modal" data-id="<?php echo $user['User']['id']; ?>" data-username="(<?php echo $user['User']['full_name']; ?>)" data-document="<?php echo $user['User']['age_document']; ?>" title="Unverfied" class="open-addUnVerifyDialog btn btn-danger" href="#addUnVerifyDialog">Unverfied</a>
                          </td> 
                         <?php }?>

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

<div class="modal fade bs-example-modal-sm" tabindex="-1" id="addVerifyDialog">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
        <h4 class="modal-title">Age Verfied</h4><div class="verify_user_name"></div>
      </div>
      <div class="modal-body">
        <div class="document_download"></div>
        <a id=""  style=" margin-left: 40%;margin-top: 10px;" title="verfied" href="javascript:void(0);" class="btn btn-danger ageUnverfied">Unverify</a>
      </div>
    </div>
  </div>
</div>

<div class="modal fade bs-example-modal-sm" tabindex="-1" id="addUnVerifyDialog">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
        <h4 class="modal-title">Age Verfied</h4> <div class="verify_user_name"></div>
      </div>
      <div class="modal-body">
        <div class="document_download"></div>
        <a id="" style=" margin-left: 40%;margin-top: 10px;" title="verfied" href="javascript:void(0);" class="btn btn-success ageVerfied">Verify</a>
      </div>
    </div>
  </div>
</div>
<script>

$(document).on("click", ".open-addVerifyDialog", function () {
    var verifiedId = $(this).data('id');
    var username = $(this).data('username');
    var document_is = $(this).data('document');
    $(".modal-body .ageUnverfied").attr( 'id',verifiedId);
    $(".modal-header .verify_user_name").html( username);
    if(document_is == ''){
        document_is_html = 'Age document not exist'; 
     }else{
        document_is_html = '<a target="_blank"  href="'+document_is+'">Click here to view age document</a>';
     }
     $(".modal-body .document_download").html( document_is_html);
});

$(document).on("click", ".open-addUnVerifyDialog", function () {
    var unVerifiedId = $(this).data('id');
    var username = $(this).data('username');
    var document_is = $(this).data('document');
     $(".modal-body .ageVerfied").attr( 'id',unVerifiedId);
     $(".modal-header .verify_user_name").html( username);
     if(document_is == ''){
        document_is_html = 'Age document not exist'; 
     }else{
        document_is_html = '<a target="_blank" href="'+document_is+'">Click here to view age document</a>';
     }
     $(".modal-body .document_download").html( document_is_html);
});
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


$(".ageVerfied").click(function () {
    var id = $(this).attr('id');
    swal({
        title: "Confirm?",
        text: "Are you sure to Verfied this User age verfication request. !",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes, Verfiy it!",
        closeOnConfirm: false
    },
    function () {
        //swal.close();
        $.ajax({
            url: '<?php echo $this->webroot; ?>webadmin/admin/ageVerficationStatusChange',
            type: 'POST',
            data: {user_id: id},
            beforeSend: function () {
                $(".loading").show();
            },
            success: function (data) {
                if (data == 'success') {
                    var msg = 'User is age verfiy successfully';
                } else {
                    var msg = 'User can not verify.';
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

$(".ageUnverfied").click(function () {
    var id = $(this).attr('id');
    swal({
        title: "Confirm?",
        text: "Are you sure to Unverfied this User age verfication request. !",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes, Unverfiy it!",
        closeOnConfirm: false
    },
    function () {
        //swal.close();
        $.ajax({
            url: '<?php echo $this->webroot; ?>webadmin/admin/ageVerficationStatusChange',
            type: 'POST',
            data: {user_id: id},
            beforeSend: function () {
                $(".loading").show();
            },
            success: function (data) {
                if (data == 'success') {
                    var msg = 'User is age unverfiy successfully';
                } else {
                    var msg = 'User can not unverfiy.';
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