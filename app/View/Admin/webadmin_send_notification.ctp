<!--main content start-->
<section id="main-content">
<script type="text/javascript">
$(document).ready(function(){
    CKEDITOR.replace('editor1');
    CKEDITOR.config.autoParagraph = false;

});
</script>
    <section class="wrapper">
        <div class="row">
        <div class="col-lg-12">
        	<h3 class="page-header"><i class="fa fa-th-list"></i> Send Notification</h3>
        	<ol class="breadcrumb">
        		<li><i class="fa fa-home"></i><a href="<?= $this->webroot; ?>webadmin/admin/dashboard">Dashboard</a></li>
        		<li><i class="fa fa-th-list"></i>Send Notification</li>
        	</ol>
        </div>
        </div>
        <!-- page start-->
        <div class="row">
            <div class="col-lg-12">
                <form method="POST" id="sendPushNotificationForm" class="sendPushNotificationForm" action="<?= $this->webroot; ?>webadmin/page/sendPushNotification" novalidate="novalidate">
                        <div class="ajax_report" style=" height: 27px; margin: 20px;"><div class="ajax_message"></div></div>
                        <header class="panel-heading">
                            <div class="col-sm-12">
                                <label class="col-sm-12 control-label">User</label>
                                <input required="" minlength="2" class="form-control" placeholder="Enter Page Title" name="page_title"  type="text">
                            </div>
                            <div class="col-sm-12">
                                <label class="col-sm-12 control-label">Message</label>
                                <input required="" minlength="2" class="form-control" placeholder="Enter message" name="slug"  type="text">
                            </div>
                            <div class="clearfix"></div>
                            <br>
                            <div class="col-sm-12">
                                <input name="page_id" value="<?php echo $page_id; ?>" type="hidden">
                                <button class="btn btn-primary">Send Notification</button>
                            </div>
                            <div class="clearfix"></div>
                            <br>
                        </header>
                    </form> 
            </div>
        </div>
        <!-- page end-->
  </section>
</section>
<script type="text/javascript">


$("#updatepage").validate({
    rules: {
        users: {
            message: true,
            digits: true
        },
        message: {
            message: true,
            digits: true
        }
    },
    submitHandler: function (form) {
        submit_ajax_form('sendPushNotificationForm');
    }
});
</script>
<!--main content end-->

