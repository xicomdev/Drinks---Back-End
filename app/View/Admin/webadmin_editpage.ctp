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
                <form method="POST" id="updatepage" class="updatepage" action="<?= $this->webroot; ?>webadmin/page/updatepage" novalidate="novalidate">
                        <div class="ajax_report" style=" height: 27px; margin: 20px;"><div class="ajax_message"></div></div>
                        <header class="panel-heading">
                            <div class="col-sm-12">
                                <label class="col-sm-12 control-label">Title</label>
                                <input required="" minlength="2" class="form-control" placeholder="Enter Page Title" name="page_title" value="<?= $PageData['Page']['page_title']; ?>" type="text">
                            </div>
                            <div class="col-sm-12">
                                <label class="col-sm-12 control-label">Slug</label>
                                <input required="" minlength="2" disabled class="form-control" placeholder="Enter Page Slug" name="slug" value="<?= $PageData['Page']['slug']; ?>" type="text">
                            </div>
                            <div class="col-sm-12">
                                <label class="col-sm-12 control-label">Jap Description</label>
                                <textarea required="" name="page_content" class="form-control" id="editor1" rows="10"  placeholder="Enter Jap Description"><?= $PageData['Page']['page_content']; ?></textarea>
                            </div>
                            <div class="clearfix"></div>
                            <br>
                            <div class="col-sm-12">
                                <input name="page_id" value="<?php echo $page_id; ?>" type="hidden">
                                <button class="btn btn-primary">Update</button>
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
        for ( instance in CKEDITOR.instances ) {
            CKEDITOR.instances[instance].updateElement();
        }
        submit_ajax_form('updatepage');
    }
});
</script>
<!--main content end-->

