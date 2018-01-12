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
                            <th><i class="icon_tag_alt"></i> Title</th>
                            <th><i class="icon_tag_alt"></i> Slug</th>
                            <th><i class="icon_cogs"></i> Action</th> 
                        </tr>
                        <?php 
                        if(!empty($PagesData)){
                            foreach ($PagesData as $key => $Page) { ?>
                                <?php // print_r($Group); exit; ?>
                                <tr>
                                    <td>
                                        <?= $Page['Page']['id']; ?>
                                    </td>
                                    <td>
                                        <?= $Page['Page']['page_title']; ?>
                                    </td>
                                    <td>
                                        <?= $Page['Page']['slug']; ?>
                                    </td>
                                    <td>
                                       <a class="btn btn-success"  href="<?= $this->webroot; ?>webadmin/page/editpage/<?= $Page['Page']['id']; ?>">Edit</a>
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
                    'controller' => 'page', 
                    'action' => 'pages', 
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

