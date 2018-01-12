<!DOCTYPE html>
<html lang="en">
  <head>
    <?= $this->Html->charset() ?>
    <?= $this->Html->meta('icon') ?>
    <link rel="apple-touch-icon" sizes="180x180" href="<?= $this->webroot; ?>favicons/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="<?= $this->webroot; ?>favicons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="<?= $this->webroot; ?>favicons/favicon-16x16.png">
    <link rel="manifest" href="<?= $this->webroot; ?>favicons/manifest.json">
    <link rel="mask-icon" href="<?= $this->webroot; ?>favicons/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="theme-color" content="#ffffff">

    <title>Drinks | <?= $title_for_layout ?></title>

    <!-- Bootstrap CSS -->    
    <?= $this->Html->css('admin/bootstrap.min') ?>
    <!-- bootstrap theme -->
    <?= $this->Html->css('admin/bootstrap-theme') ?>
    <!--external css-->
    <!-- font icon -->
    <?= $this->Html->css('admin/elegant-icons-style') ?>
    <?= $this->Html->css('admin/font-awesome') ?>   
    <?= $this->Html->css('admin/sweetalert') ?>   
    <!-- full calendar css-->
    <!-- <link href="assets/fullcalendar/fullcalendar/bootstrap-fullcalendar.css" rel="stylesheet" />
    <link href="assets/fullcalendar/fullcalendar/fullcalendar.css" rel="stylesheet" /> -->
    <!-- easy pie chart-->
    <!-- <link href="assets/jquery-easy-pie-chart/jquery.easy-pie-chart.css" rel="stylesheet" type="text/css" media="screen"/> -->
    <!-- owl carousel -->
    <!-- <link rel="stylesheet" href="css/owl.carousel.css" type="text/css">
    <link href="css/jquery-jvectormap-1.2.2.css" rel="stylesheet"> -->
    <!-- Custom styles -->
    <!-- <link rel="stylesheet" href="css/fullcalendar.css">
    <link href="css/widgets.css" rel="stylesheet"> -->
    <?= $this->Html->css('admin/style') ?>
    <?= $this->Html->css('admin/style-responsive') ?>
    <!-- <link href="css/xcharts.min.css" rel=" stylesheet"> 
    <link href="css/jquery-ui-1.10.4.min.css" rel="stylesheet"> -->
    <?php echo $this->Html->script(array('admin/jquery.js','admin/jquery-ui-1.10.4.min.js','admin/jquery-1.8.3.min.js','admin/jquery-ui-1.9.2.custom.min.js','admin/bootstrap.min.js','admin/jquery.scrollTo.min.js','admin/jquery.nicescroll.js','admin/jquery.sparkline.js','admin/custom.js','admin/jquery.customSelect.min.js','admin/scripts.js','admin/jquery.validate.min.js','admin/sweetalert.min.js','admin/jquery.form.js')); ?>
    <?= $this->fetch('meta'); ?>
    <?= $this->fetch('css'); ?>
    <?= $this->fetch('script'); ?>
    <script src="//cdn.ckeditor.com/4.8.0/standard/ckeditor.js"></script>
  </head>

  <body>
  <div id="wait-div"></div>
        <?php echo $this->Flash->render(); ?>

        <?php echo $this->Element('admin/header'); ?>
        <?php echo $this->Element('admin/sidebar'); ?>
        <?php echo $this->fetch('content'); ?>

        <?php echo $this->Element('admin/footer'); ?>
  </body>
</html>