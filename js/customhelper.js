//================================================================================
// My custom 'helper.js' file, because I wanted a different layout.
//================================================================================

var mainName = '<h1 id="main-name"> %data%</h1>';

var mainPic = ' <div class="row about-image"> <img class="img-responsive main-image" src="%data%" alt="picture of me"> </div>';

var mainNickname = '<div class="main-item col-lg-4 col-md-4 col-sm-4"><div class="my-contact clearfix"><div class="contact-icon"><span class="glyphicon glyphicon-user"></span></div><div class="contact-info"><h4>Nickname:</h4><p id="contact-Nickname">%data%</p></div></div>';

var mainRole ='<h2><p class="rolep"><span class="typer" id="main" data-words="%data%" data-colors="#ff669a" data-delay="100" data-deletedelay="1000" style=""></span><span class="cursor" data-owner="main" style="transition: all 0.1s; opacity: 1;">_</span></p></h2>';

var mainEmail = '<div class="main-item col-lg-4 col-md-4 col-sm-4"><div class="my-contact clearfix"><div class="contact-icon"><span class="glyphicon glyphicon-envelope"></span></div><div class="contact-info"><h4 class="email-header">Email:</h4><p id="contact-email">%data%</p></div></div></div>';

var mainPhone = '<div class="main-item col-lg-4 col-md-4 col-sm-4"><div class="my-contact clearfix"><div class="contact-icon"><span class="glyphicon glyphicon-phone"></span></div><div class="contact-info"><h4>Phone:</h4><p id="contact-phone">%data%</p></div></div></div>';

var mainBirth = '<div class="main-item col-lg-4 col-md-4 col-sm-4"> <div class="my-contact clearfix"> <div class="contact-icon"> <span class="glyphicon glyphicon-calendar"></span> </div> <div class="contact-info"> <h4 >Birth: </h4> <p id="contact-birth">%data%</p> </div> </div> </div>';

var mainLocation = '<div class="main-item col-lg-4 col-md-4 col-sm-4"> <div class="my-contact clearfix"> <div class="contact-icon"> <span class="glyphicon glyphicon-map-marker"></span> </div> <div class="contact-info"> <h4>Location: </h4> <p id="contactAddress">%data%</p> </div> </div>';

var mainNationality = '<div class="main-item col-lg-4 col-md-4 col-sm-4"> <div class="my-contact clearfix"> <div class="contact-icon"> <span class="glyphicon glyphicon-flag"></span> </div> <div class="contact-info"> <h4>Nationality: </h4> <p id ="contact-nationality">%data%</p> </div> </div>';

var mainDescription ='<p id ="desc-text">%data%</p>';

var socialArray = ['<li><a class="hvr-buzz" href="#"><i class="fa fa-facebook"></i></a></li>', '<li><a class="hvr-buzz" href="#"><i class="fa fa-twitter"></i></a></li>', '<li><a class="hvr-buzz" href="#"><i class="fa fa-github"></i> </a></li>', '<li><a class="hvr-buzz" href="#"><i class="fa fa-linkedin"></i> </a></li>'];

var HTMLworkItem ='<div class="row experience-block"><div class="col-lg-6 col-md-6 col-sm-6"><div class="resume-icon"><span class="glyphicon glyphicon-briefcase"></span></div><div class="resume-name"><h3>%employer%</h3><span>%dates%&nbsp;&nbsp;</span><span class="location-span">%location%</span></div></div><div class="col-lg-6 col-md-6 col-sm-6"><div class="resume-info"><h3>%title%</h3><p class="">%description%</p></div></div></div>';

var HTMLprojectItem ='<div class="row resume-block project-item"><div class="col-lg-4 col-md-4 col-sm-4"><div class="project-box"><img class="border-white img-responsive project-img" src="%images%"></div></div><div class="col-lg-8 col-md-8 col-sm-8"><div class="project-info"><h3 class="clearfix">%title%</h3><h4>%client%</h4><h4>&nbsp;|&nbsp;</h4><h4 class="project-date">%dates%</h4><p>%description%</p><span><a href="%url%">Project URL</a></span></div></div></div>';

var HTMLbachelorItem ='<div class="school-inner-item"> <h4>%degree%</h4> <span>%name%</span><br> <span>%majors%</span><span class="clearfix"></span> <p>%location%</p>&nbsp;&nbsp;<p>%dates%</p> </div>';

var HTMLonlineItem ='<div class="online-inner-item"> <h4>%title%</h4> <span>%school%</span> <span class="clearfix"></span> <p>%date%</p> <p class="spacer-line">  |  </p><a href="%url%">URL</a></p> </div>';

var HTMLknowledgeItem = '<li><i class="fa fa-angle-double-right" aria-hidden="true"></i>%data%</li>';

var HTMLprogressItem ='<div class="progress"> <div class="progress-bar %colorclass%" role="progressbar" aria-valuenow="%level%" aria-valuemin="0" aria-valuemax="100" style="width: %level%%"> <span class="sr-only">%level%% Complete </span> </div> <span class="progress-type">%name%</span> <span class="progress-completed">%level%%</span> </div>';

var HTMLworkItem ='<div class="row resume-block"><div class="col-lg-6 col-md-6 col-sm-6"><div class="resume-icon"><span class="glyphicon glyphicon-briefcase"></span></div><div class="resume-name"><h3>%employer%</h3><span>%dates%</span><span class="blocker">%location%</span></div></div><div class="col-lg-6 col-md-6 col-sm-6"><div class="resume-info"><h3>%title%</h3><p class="">%description%</p></div></div></div>';

var googleMap = '<div id="map"></div>';