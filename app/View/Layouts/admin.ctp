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
    <!-- Custom styles -->
    <?= $this->Html->css('admin/style') ?>
    <?= $this->Html->css('admin/style-responsive') ?>

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 -->
    <!--[if lt IE 9]>
    <script src="js/html5shiv.js"></script>
    <script src="js/respond.min.js"></script>
    <![endif]-->
    <?= $this->fetch('meta'); ?>
    <?= $this->fetch('css'); ?>
    <?= $this->fetch('script'); ?>
</head>

    <body class="login-img3-body">
            
        <?php echo $this->Flash->render(); ?>
            
        <?php echo $this->fetch('content'); ?>
    
    </body>
</html>