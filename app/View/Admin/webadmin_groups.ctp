<!--main content start-->
<section id="main-content">
    <section class="wrapper">
        <div class="row">
        <div class="col-lg-12">
        	<h3 class="page-header"><i class="fa fa-th-list"></i> Users Groups</h3>
        	<ol class="breadcrumb">
        		<li><i class="fa fa-home"></i><a href="<?= $this->webroot; ?>webadmin/admin/dashboard">Dashboard</a></li>
        		<li><i class="fa fa-th-list"></i>View Groups</li>
        	</ol>
        </div>
        </div>
        <!-- page start-->
        <div class="row">
            <div class="col-lg-12">
                <section class="panel">
                    
                    <table class="table table-striped table-advance table-hover">
                    <tbody>
                        <tr>
                            <th><i class="icon_mail_alt"></i> Id</th>
                            <th><i class="icon_tag_alt"></i> Description</th>
                            <th><i class="icon_tag_alt"></i> Location</th>
                            <th><i class="icon_tag_alt"></i>  Relationship</th>
                            <th><i class="icon_calendar"></i> Created</th>
                            <th><i class="icon_cogs"></i> Action</th> 
                        </tr>
                        <?php 
                        if(!empty($GroupsData)){
                            foreach ($GroupsData as $key => $Group) { ?>
                                <?php // print_r($Group); exit; ?>
                                <tr>
                                    <td>
                                        <?= $Group['Group']['id']; ?>
                                    </td>
                                    <td>
                                        <?= $Group['Group']['group_description']; ?>
                                    </td>
                                    <td>
                                        <?= $Group['Group']['group_location']; ?>
                                    </td>
                                    <td>
                                        <?= $Group['Group']['relationship']; ?>
                                    </td>
                                    <td>
                                        <?php $unixtime = explode(" ", $Group['Group']['created']);?>
                                        <?= date("d/m/Y h:i:s A T",$unixtime[1]); ?>
                                    </td>
                                    <td>
                                        <div class="btn-group">
                                            <div class="btn-group">
                                                <?php if($Group['Group']['is_deleted'] == true){ ?>
                                                        <span class="label label-danger">Deleted</span>
                                                <?php }else{ ?>
                                                        <a id="<?php echo $Group['Group']['id']; ?>" title="Remove" href="javascript:void(0);" class="btn btn-danger delGroups"><i class="icon_close_alt2"></i></a>
                                                <?php } ?>
                                            </div>
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
                    'controller' => 'group', 
                    'action' => 'groups', 
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
$(".delGroups").click(function () {
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

</script>