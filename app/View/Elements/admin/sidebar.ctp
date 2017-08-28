  <!--sidebar start-->
  <aside>
      <div id="sidebar"  class="nav-collapse ">
          <!-- sidebar menu start-->
          <ul class="sidebar-menu">                
              <li class="active">
                  <a class="" href="<?= $this->webroot; ?>webadmin/admin/dashboard">
                      <i class="icon_house_alt"></i>
                      <span>Dashboard</span>
                  </a>
              </li>
			  <li class="sub-menu">
                  <a href="javascript:;" class="">
                      <i class="icon_document_alt"></i>
                      <span>Manage Users</span>
                      <span class="menu-arrow arrow_carrot-right"></span>
                  </a>
                  <ul class="sub">
                      <li><a class="" href="<?= $this->webroot; ?>webadmin/admin/usersList">View Users</a></li>                    
                  </ul>
              </li>              
          </ul>
          <!-- sidebar menu end-->
      </div>
  </aside>
  <!--sidebar end-->