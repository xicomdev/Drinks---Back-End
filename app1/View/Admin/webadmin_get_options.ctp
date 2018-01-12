<section id="main-content">
    <section class="wrapper">
        <div class="row">
            <div class="col-lg-12">
                <h3 class="page-header"><i class="fa fa-th-list"></i> <?php echo ucfirst($sub_page); ?> List</h3>
                    <ol class="breadcrumb">
                        <li><i class="fa fa-home"></i><a href="<?= $this->webroot; ?>webadmin/admin/dashboard">Dashboard</a></li>
                        <li><i class="fa fa-th-list"></i>View <?php echo ucfirst($sub_page); ?></li>
                    </ol>
            </div>
        </div>
        <!-- page start-->
        <div class="row">
            <div class="col-lg-12">
                <section class="panel">
                    <div id="cl-wrapper">
                        <div class="container-fluid" id="pcont">
                            <div class="page-head">
                            </div>  
                            <div class="cl-mcont">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="block-flat">
                                            <div class="content">
                                                <div>
                                                    <div role="grid" class="dataTables_wrapper form-inline" id="datatable-icons_wrapper">
                                                        <div class="row">
                                                            <div class="col-sm-12">
                                                                <form method="POST" id="add_option" class="add_option" class="well" action="<?php echo $this->webroot; ?>admin/add_option">
                                                                    <input type="hidden" value="<?php echo $sub_page; ?>" class="form-control add_option valid" id="option_type" name="option_type" aria-invalid="false">
                                                                    <div class="col-sm-5">
                                                                        <label class="col-sm-5 control-label">Eng Name</label>
                                                                        <input type="text" required minlength="2" class="form-control" placeholder="Enter Eng Name" name="eng_name" value="">
                                                                    </div>
                                                                    <div class="col-sm-5">
                                                                        <label class="col-sm-5 control-label">Jap Name</label>
                                                                        <input type="text" required minlength="2"  class="form-control" placeholder="Enter Jap Name" name="jap_name" value="">
                                                                    </div>
                                                                    <div class="col-sm-2">
                                                                        <label class="col-sm-2 control-label">&nbsp</label>
                                                                        <div class="clearfix"></div>
                                                                        <input type="submit" class="btn btn-primary btn-sm add-title-button" value="Add <?php echo ucfirst($sub_page); ?>"/>
                                                                    </div>
                                                                    <div class="clearfix"></div>
                                                                    <br>
                                                                     
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                            <hr>
                                                      <?php //echo '<pre>';print_r($social);die; ?>
                                                       <div class="row">
                                                            <div class="col-sm-12">
                                                                <ul id="sortable_options">
                                                                    <?php
                                                                    foreach ($OptionsData as $key=>$value) { 
                                                                        //print_r($value); exit;                                           
                                                                    ?>
                                                                    <li id="<?php echo $value['Option']['id']; ?>">
                                                                        <div class="col-sm-8">
                                                                            <span class="icon-span"></span>
                                                                            <span class="heading-span">
                                                                            <div>
                                                                            <h2><?php echo $value['Option']['eng_name']; ?> ( <?php echo $value['Option']['jap_name']; ?> ) </h2>
                                                                            </div>
                                                                            </span>
                                                                        </div>
                                                                        <div class="col-sm-2">
                                                                            <input type="hidden" type="type" class="edit_type" value="<?php echo $type; ?>" name="type">
                                                                        </div>
                                                                        <div class="col-sm-2 add-dlt-buttons">
                                                                            <a id="<?php echo $value['Option']['id']; ?>" title="Remove" href="javascript:void(0);" class="btn btn-danger  btn-sm  del_option">
                                                                               Delete
                                                                            </a>
                                                                        </div>
                                                                    </li>
                                                                    <?php
                                                                    }
                                                                    ?>
                                                                </ul>
                                                           </div>
                                                       </div>
                                                    </div>                          
                                                </div>
                                            </div>
                                        </div>              
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section> 
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



$(function() {
    $('#sortable_options').sortable({
        axis: 'y',
        opacity: 0.7,
        handle: 'span',
        update: function(event, ui) {
            var list_sortable = $(this).sortable('toArray').toString();
            // change order in the database using Ajax
            $.ajax({
                url: '<?php echo $this->webroot; ?>webadmin/admin/set_order',
                type: 'POST',
                data: {list_order:list_sortable},
                beforeSend: function () {
                    $('#wait-div').show();
                },
                success: function(data) {
                    $('#wait-div').hide();
                    //finished
                }
            });
        }
    }); // fin sortable
});
$("#add_option").validate({
    submitHandler: function (form) {
        submit_ajax_form('add_option');
    }
});

</script>