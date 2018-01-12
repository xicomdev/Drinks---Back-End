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
                <ul class="sub"  style='display:<?php echo (isset($page) && $page == 'user') ? 'block' : 'none'; ?>'>
                    <li class='<?php echo (isset($sub_page) && $sub_page == 'user') ? 'active' : ''; ?>'><a class="" href="<?= $this->webroot; ?>webadmin/admin/usersList">View Users</a></li>      
                    <li class='<?php echo (isset($sub_page) && $sub_page == 'deleted_user') ? 'active' : ''; ?>'><a class="" href="<?= $this->webroot; ?>webadmin/admin/deletedUsers">View Deleted Users</a></li>                    
                </ul>
            </li>              
            <li class="sub-menu">
                <a href="javascript:;" class="">
                    <i class="icon_document_alt"></i>
                    <span>Manage Groups</span>
                    <span class="menu-arrow arrow_carrot-<?php echo (isset($page) && $page == 'group') ? 'down' : 'right'; ?>"></span>
                </a>
                <ul class="sub" style='display:<?php echo (isset($page) && $page == 'group') ? 'block' : 'none'; ?>'>
                    <li class="<?php echo (isset($sub_page) && $sub_page == 'groups') ? 'active' : ''; ?>"><a  href="<?= $this->webroot; ?>webadmin/group/groups">View Groups</a></li>                    
                </ul>
            </li>
            <li class="sub-menu">
                <a href="javascript:;" class="">
                    <i class="icon_document_alt"></i>
                    <span>Manage Options</span>

                    <span class="menu-arrow arrow_carrot-<?php echo (isset($page) && $page == 'option') ? 'down' : 'right'; ?>"></span>
                </a>
                <ul class="sub" style='display:<?php echo (isset($page) && $page == 'option') ? 'block' : 'none'; ?>'>
                    <li class='<?php echo (isset($sub_page) && $sub_page == 'membership_plan') ? 'active' : ''; ?>'><a class="" href="<?= $this->webroot; ?>webadmin/admin/getPlans">View Plans</a></li>                    
                    <li class='<?php echo (isset($sub_page) && $sub_page == 'ticket') ? 'active' : ''; ?>'><a class="" href="<?= $this->webroot; ?>webadmin/admin/getTickets">View Tickets</a></li>                    
                    <li class='<?php echo (isset($sub_page) && $sub_page == 'education') ? 'active' : ''; ?>'><a class="" href="<?= $this->webroot; ?>webadmin/admin/getOptions/education">View Education</a></li>                    
                    <li class='<?php echo (isset($sub_page) && $sub_page == 'salary') ? 'active' : ''; ?>'><a class="" href="<?= $this->webroot; ?>webadmin/admin/getOptions/salary">View Salary</a></li>                    
                    <li class='<?php echo (isset($sub_page) && $sub_page == 'marriage_type') ? 'active' : ''; ?>'><a class="" href="<?= $this->webroot; ?>webadmin/admin/getOptions/marriage_type">View Marriage Type</a></li>                    
                    <li class='<?php echo (isset($sub_page) && $sub_page == 'tobacco') ? 'active' : ''; ?>'><a class="" href="<?= $this->webroot; ?>webadmin/admin/getOptions/tobacco">View Tobacco</a></li>                    
                    <li class='<?php echo (isset($sub_page) && $sub_page == 'relationship') ? 'active' : ''; ?>'><a class="" href="<?= $this->webroot; ?>webadmin/admin/getOptions/relationship">View Relationship</a></li>                    
                    <li class='<?php echo (isset($sub_page) && $sub_page == 'place') ? 'active' : ''; ?>'><a class="" href="<?= $this->webroot; ?>webadmin/admin/getOptions/place">View Place</a></li>                    
                    <li class='<?php echo (isset($sub_page) && $sub_page == 'drinking') ? 'active' : ''; ?>'><a class="" href="<?= $this->webroot; ?>webadmin/admin/getOptions/drinking">View Drinking</a></li>                    
                </ul>
            </li>              
        </ul>
        <!-- sidebar menu end-->
    </div>
</aside>
<!--sidebar end-->