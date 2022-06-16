var header = '<header class="main-header">'+
    '<nav class="navbar navbar-static-top">'+
      '<div class="navbar-main">'+
        '<div class="container">'+
          '<div class="navbar-header">'+
            '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"'+
              'aria-expanded="false" aria-controls="navbar" onclick="return hideLogo()">'+
              '<span class="sr-only">Toggle navigation</span>'+
              '<span class="icon-bar"></span>'+
              '<span class="icon-bar"></span>'+
              '<span class="icon-bar"></span>'+
            '</button>'+
            '<a class="navbar-brand" href="index.html"><img src="assets/images/logo22.png" style="margin-top: -47px;height: 142px;"  id="logoimg" alt=""></a>'+
          '</div>'+
          '<div id="navbar" class="navbar-collapse collapse pull-right">'+
            '<ul class="nav navbar-nav" id="menuid">'+
              '<li><a href="index.html">HOME</a></li>'+
              '<li><a href="about.html">ABOUT</a></li>'+
			  '<li><a href="team.html">TEAM</a></li>'+
              '<li><a href="gallery.html">GALLERY</a></li>'+
              '<li><a href="contact.html">CONTACT</a></li>'+
            '</ul>'+
          '</div>'+
        '</div>'+
      '</div>'+
    '</nav>'+
  '</header>';
  
  var footercontent='<footer class="main-footer">'+
    '<div class="footer-top">'+
    '</div>'+
    '<div class="footer-main">'+
      '<div class="container">'+
        '<div class="row">'+
          '<div class="col-md-4">'+
            '<div class="footer-col">'+
              '<div class="footer-content">'+
                '<img src="assets/images/logo_l.jpg"> '+
              '</div>'+
            '</div>'+
          '</div>'+
          '<div class="col-md-4">'+
            '<div class="footer-col">'+
              '<h4 class="footer-title">आमचे लक्ष्य<span class="title-under"></span></h4>'+
              '<div class="footer-content">'+
                '<ul class="tweets list-unstyled">'+
                  '<li class="tweet">शिक्षणाचा प्रचार करणे</li>'+
                  '<li class="tweet">सामाजिक एकता व बंधू प्रेम वाढवणे</li>'+
                  '<li class="tweet">समाजामधील कौशल्याला वाव देणे</li>'+
                  '<li class="tweet">भारतीय संस्कृती, कला व क्रीडेला वाव देणे</li>'+
                  '<li class="tweet">सामाजिक आरोग्यासाठी जनजागृती व कार्यक्रम राबवणे</li>'+                  
                '</ul>'+
              '</div>'+
            '</div>'+
          '</div>'+
          '<div class="col-md-4">'+
            '<div class="footer-col">'+
              '<h4 class="footer-title">अनुप्रयोग डाउनलोड करा <span class="title-under"></span></h4>'+
              '<div class="footer-content">'+
                '<div class="footer-form">'+
                  '<div class="footer-form">'+
                    '<img src="assets/images/playstore.png" style="width:150px"/><br><br>'+
					'<img src="assets/images/applestore.png" style="width:150px" />'+
                  '</div>'+
                '</div>'+
              '</div>'+
            '</div>'+
          '</div>'+
          '<div class="clearfix"></div>'+
        '</div>'+
      '</div>'+
    '</div>'+
  '</footer>';
 $("#headercontent").html(header);
 $("#footercontent").html(footercontent);
 activemenu();
 function activemenu(){
	var am = window.location.href.substr(window.location.href.lastIndexOf("/")+1);
	$("#menuid").find('a').each(function(){
	if($(this).attr("href") == am){
		$(this).addClass("is-active");
		}
	});	 
 }
 function hideLogo(){	 
	 $("#logoimg").addClass("height55")
 }