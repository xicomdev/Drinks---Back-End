<!--main content start-->
<section id="main-content">
    <section class="wrapper">
        <div class="row">
        <div class="col-lg-12">
        	<h3 class="page-header"><i class="fa fa-th-list"></i> Plans List</h3>
        	<ol class="breadcrumb">
        		<li><i class="fa fa-home"></i><a href="<?= $this->webroot; ?>webadmin/admin/dashboard">Dashboard</a></li>
        		<li><i class="fa fa-th-list"></i>View Plans</li>
        	</ol>
        </div>
        </div>
        <!-- page start-->
        <div class="row">
            <div class="col-lg-12">
                <section class="panel">
                    <form method="POST" id="add_plan" class="add_plan" class="well" action="<?php echo $this->webroot; ?>admin/add_plan">
                        <input type="hidden" name="option_type" value="membership_plan">
                        <header class="panel-heading">
                            <div class="col-sm-6">
                                <label class="col-sm-6 control-label">Eng Name</label>
                                <input type="text" required minlength="2" class="form-control" placeholder="Enter Eng Name" name="eng_name" value="<?php echo isset($options_edit_data['Option']['eng_name']) ? $options_edit_data['Option']['eng_name'] : ''; ?>">
                            </div>
                            <div class="col-sm-6">
                                <label class="col-sm-6 control-label">Jap Name</label>
                                <input type="text" required minlength="2"  class="form-control" placeholder="Enter Jap Name" name="jap_name" value="<?php echo isset($options_edit_data['Option']['jap_name']) ? $options_edit_data['Option']['jap_name'] : ''; ?>">
                            </div>
                            <div class="clearfix"></div>
                            <div class="col-sm-4">
                                <label class="col-sm-4 control-label">Duration</label>
                                <input type="text" required class="form-control" placeholder="Enter Duration" name="duration" value="<?php echo isset($options_edit_data['Option']['duration']) ? $options_edit_data['Option']['duration'] : ''; ?>">
                            </div>
                            <div class="col-sm-4">
                                <label class="col-sm-4 control-label">Amount</label>
                                <input type="text" required class="form-control" placeholder="Enter Amount" name="amount" value="<?php echo isset($options_edit_data['Option']['amount']) ? $options_edit_data['Option']['amount'] : ''; ?>">
                            </div>
                            <div class="col-sm-4">
                                <label class="col-sm-4 control-label">Discount</label>
                                <input type="text" required class="form-control" placeholder="Enter Discount" name="discount" value="<?php echo isset($options_edit_data['Option']['discount']) ? $options_edit_data['Option']['discount'] : ''; ?>">
                            </div>
                            <div class="clearfix"></div>
                            <div class="col-sm-12">
                                <label class="col-sm-12 control-label">Description</label>
                                <input type="text" required class="form-control" placeholder="Enter Description" name="description" value="<?php echo isset($options_edit_data['Option']['description']) ? $options_edit_data['Option']['description'] : ''; ?>">
                            </div>
                            <div class="clearfix"></div>
                            <div class="col-sm-12">
                                <label class="col-sm-12 control-label">Jap Description</label>
                                <input type="text" required class="form-control" placeholder="Enter Jap Description" name="jap_description" value="<?php echo isset($options_edit_data['Option']['jap_description']) ? $options_edit_data['Option']['jap_description'] : ''; ?>">
                            </div>
                            <div class="clearfix"></div>
                            <br>
                            <div class="col-sm-12">
                                <input type="hidden" name="option_id" value="<?php echo isset($options_edit_data['Option']['id']) ? $options_edit_data['Option']['id'] : ''; ?>">
                                <button class="btn btn-primary"><?php echo isset($options_edit_data['Option']['id']) ? 'Update' : 'Add'; ?> Ticket</button>
                            </div>
                            <div class="clearfix"></div>
                            <br>
                        </header>
                    </form>  
                    <table class="table table-striped table-advance table-hover">
                    <tbody>
                        <tr>
                            <!-- <th><i class="icon_profile"></i> Full Name</th> -->
                            <th><i class="icon_mail_alt"></i> Id</th>
                            <th><i class="icon_tag_alt "></i> Title</th>
                            <th><i class="icon_tag_alt "></i> Jap Title</th>
                            <th><i class="icon_tag_alt"></i> Duration</th>
                            <th><i class="icon_currency"></i> Amount</th>
                            <th><i class="icon_currency"></i> Discount</th>
                            <th><i class="icon_tag_alt"></i> Description</th>
                            <th><i class="icon_tag_alt"></i> Jap Description</th>
                            <th><i class="icon_calendar"></i> Created</th>
                            <th><i class="icon_cogs"></i> Action</th> 
                        </tr>
                        <?php 
                        if(!empty($OptionsData)){
                            foreach ($OptionsData as $key => $Option) { ?>
                                <tr>
                                    <td>
                                        <?= $Option['Option']['id']; ?>
                                    </td>
                                    <td>
                                        <?= $Option['Option']['eng_name']; ?>
                                    </td>
                                    <td>
                                        <?= $Option['Option']['jap_name']; ?>
                                    </td>
                                    <td>
                                        <?= $Option['Option']['duration']; ?>
                                    </td>
                                    <td>
                                        <?= $Option['Option']['amount']; ?>
                                    </td>
                                    <td>
                                        <?= $Option['Option']['discount']; ?>
                                    </td>
                                    <td>
                                        <?= $Option['Option']['description']; ?>
                                    </td>
                                    <td>
                                        <?= $Option['Option']['jap_description']; ?>
                                    </td>
                                    <td>
                                        <?php $unixtime = explode(" ", $Option['Option']['created']);?>
                                        <?= date("d/m/Y h:i:s A T",$unixtime[1]); ?>
                                    </td>
                                    <td>
                                        <div class="btn-group">
                                            
                                            <a class="btn btn-success" href="<?php echo $this->webroot; ?>webadmin/admin/getPlans/<?php echo $Option['Option']['id']; ?>"><i class="icon_check_alt2"></i></a>
                                            <a id="<?php echo $Option['Option']['id']; ?>" title="Remove" href="javascript:void(0);" class="btn btn-danger del_option"><i class="icon_close_alt2"></i></a>
                                        </div>
                                    </td>
                                </tr>    
                                <?php 
                            }
                        }else{ ?>
                            <tr><strong>Notification</strong> - No data available</tr>
                            <?php  
                        } ?> 
                    </tbody>

                    </table>
                </section>
                <ul class="pagination pagination-sm no-margin pull-right">
                    <?php
                    $this->Paginator->options(array(
                    'url'=> array(
                    'controller' => 'admin', 
                    'action' => 'getTicket', 
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
<!--main content end-->

<script>
 //Delete option
$(".del_option").click(function () {
    var id = $(this).attr('id');
    swal({
        title: "Confirm?",
        text: "Are you sure to delete this Option. !",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes, delete it!",
        closeOnConfirm: false
    },
    function () {
        //swal.close();
        $.ajax({
            url: '<?php echo $this->webroot; ?>webadmin/admin/delete_option',
            type: 'POST',
            data: {option_id: id},
            beforeSend: function () {
                $(".loading").show();
            },
            success: function (data) {
                if (data == 'success') {
                    var msg = 'Option is deleted successfully';
                } else {
                    var msg = 'Option can not be deleted.';
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

$("#add_plan").validate({
    rules: {
        duration: {
            required: true,
            digits: true
        },
        amount: {
            required: true,
            digits: true
        },
        discount: {
            required: true,
            digits: true
        }
    },
    submitHandler: function (form) {
        submit_ajax_form('add_plan');
    }
});

</script>