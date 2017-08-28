<style type="text/css">
    /* Alert notifications */
.gear-alerts{
  position: fixed;
  left: 0px;
  bottom: 0px;
  width: 300px;
  z-index: 99999;
}
.alert-info{
  background-color: rgba(47,150,180,0.8);
}
.alert-info:hover{
  background-color: rgba(47,150,180,1);
}
.gear-alert{
  display: inline-block;
  text-align: left;
  width: 100%;
  position: relative;
  margin: 3px 0;
  padding: 15px 15px ;
  transition: all 300ms ease-in-out 0s;
  -o-transition: all 300ms ease-in-out 0s;
  -ms-transition: all 300ms ease-in-out 0s;
  -moz-transition: all 300ms ease-in-out 0s;
  -webkit-transition: all 300ms ease-in-out 0s;
}
.icon{
  display: inline-block;
  padding: 0 10px 0;
  vertical-align: middle;
  width: 15%;
}
.icon img{
  max-width: 25px;
}
.alert-txt{
  display: inline-block;
  vertical-align: middle;
  text-align: left;
  width: 83%;
}
.alert-txt h4{
  color: #fff;
  font-family: 'lato-bold';
  margin: 0;
  font-weight: normal;
}
.alert-txt p{
  color: #fff;
}
.close-alert{
  position: absolute;
  right: 10px;
  top: 8px;
  z-index: 1;
  cursor: pointer;
}
.close-alert img{
  max-width: 10px;
}
.close{
    color:#fff;
}
</style>
<section>
<div class="gear-alerts custom">

  <div class="gear-alert alert-info">
    <div class="alert-text">
      <div class="icon">
        <img src="<?php echo $this->webroot;?>img/info.png" alt="" />
      </div> 
      <div class="alert-txt">
        <h4>Infomation</h4>
        <p><?php echo $message; ?></p>
      </div>
      <div class="close-alert">
        <button type="button" class="close" data-dismiss="custom" aria-hidden="true">×</button>
      </div><!-- @end close-alert -->
    </div><!-- @end alert-text -->
  </div><!-- @end alert-info -->

</div><!-- @end gear alerts -->
</section>
<script type="text/javascript">
setTimeout(function() {
    $('.custom').fadeOut('slow');
}, 3000);
</script>