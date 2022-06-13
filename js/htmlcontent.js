var header = '<header class="main-header">'+
    '<nav class="navbar navbar-static-top">'+
      '<div class="navbar-top">'+
        '<div class="container">'+
          '<div class="row">'+
            '<div class="col-sm-6 col-xs-12">'+
              '<ul class="list-unstyled list-inline header-contact">'+
                '<li> <i class="fa fa-phone"></i> <a href="tel:">+212 658 986 213 </a> </li>'+
                '<li> <i class="fa fa-envelope"></i> <a href="mailto:contact@sadaka.org">contact@sadaka.org</a> </li>'+
              '</ul>'+
            '</div>'+
            '<div class="col-sm-6 col-xs-12 text-right">'+
              '<ul class="list-unstyled list-inline header-social">'+
                '<li> <a href="#"> <i class="fa fa-facebook"></i> </a> </li>'+
                '<li> <a href="#"> <i class="fa fa-twitter"></i> </a> </li>'+
                '<li> <a href="#"> <i class="fa fa-google"></i> </a> </li>'+
                '<li> <a href="#"> <i class="fa fa-youtube"></i> </a> </li>'+
              '</ul>'+
            '</div>'+
          '</div>'+
        '</div>'+
      '</div>'+
      '<div class="navbar-main">'+
        '<div class="container">'+
          '<div class="navbar-header">'+
            '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"'+
              'aria-expanded="false" aria-controls="navbar">'+
              '<span class="sr-only">Toggle navigation</span>'+
              '<span class="icon-bar"></span>'+
              '<span class="icon-bar"></span>'+
              '<span class="icon-bar"></span>'+
            '</button>'+
            '<a class="navbar-brand" href="index.html"><img src="assets/images/sadaka-logo.png" alt=""></a>'+
          '</div>'+
          '<div id="navbar" class="navbar-collapse collapse pull-right">'+
            '<ul class="nav navbar-nav" id="menuid">'+
              '<li><a href="index.html">HOME</a></li>'+
              '<li><a href="about.html">ABOUT</a></li>'+
              '<li><a href="gallery.html">GALLERY</a></li>'+
              '<li><a href="contact.html">CONTACT</a></li>'+
              '<li><a href="form.html">REGISTRATION</a></li>'+
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
              '<h4 class="footer-title">About us <span class="title-under"></span></h4>'+
              '<div class="footer-content">'+
                '<p>'+
                  '<strong>Sadaka</strong> ipsum dolor sit amet, consectetur adipiscing elit. Ut at eros rutrum turpis'+
                  'viverra elementum semper quis ex. Donec lorem nulla, aliquam quis neque vel, maximus lacinia urna.'+
                '</p>'+
                '<p>'+
                  'ILorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at eros rutrum turpis viverra elementum'+
                  'semper quis ex. Donec lorem nulla, aliquam quis neque vel, maximus lacinia urna.'+
                '</p>'+
              '</div>'+
            '</div>'+
          '</div>'+
          '<div class="col-md-4">'+
            '<div class="footer-col">'+
              '<h4 class="footer-title">LAST TWEETS <span class="title-under"></span></h4>'+
              '<div class="footer-content">'+
                '<ul class="tweets list-unstyled">'+
                  '<li class="tweet">'+
                    '20 Surprise Eggs, Kinder Surprise Cars 2 Thomas Spongebob Disney Pixar http://t.co/fTSazikPd4'+
                  '</li>'+
                  '<li class="tweet">'+
                    '20 Surprise Eggs, Kinder Surprise Cars 2 Thomas Spongebob Disney Pixar http://t.co/fTSazikPd4'+
                  '</li>'+
                  '<li class="tweet">'+
                    '20 Surprise Eggs, Kinder Surprise Cars 2 Thomas Spongebob Disney Pixar http://t.co/fTSazikPd4'+
                  '</li>'+
                '</ul>'+
              '</div>'+
            '</div>'+
          '</div>'+
          '<div class="col-md-4">'+
            '<div class="footer-col">'+
              '<h4 class="footer-title">Contact us <span class="title-under"></span></h4>'+
              '<div class="footer-content">'+
                '<div class="footer-form">'+
                  '<div class="footer-form">'+
                    '<form action="php/mail.php" class="ajax-form">'+
                      '<div class="form-group">'+
                        '<input type="text" name="name" class="form-control" placeholder="Name" required>'+
                      '</div>'+
                      '<div class="form-group">'+
                        '<input type="email" name="email" class="form-control" placeholder="E-mail" required>'+
                      '</div>'+
                      '<div class="form-group">'+
                        '<textarea name="message" class="form-control" placeholder="Message" required></textarea>'+
                      '</div>'+
                      '<div class="form-group alerts">'+
                        '<div class="alert alert-success" role="alert">'+
                        '</div>'+
                        '<div class="alert alert-danger" role="alert">'+
                        '</div>'+
                      '</div>'+
                      '<div class="form-group">'+
                        '<button type="submit" class="btn btn-submit pull-right">Send message</button>'+
                      '</div>'+
                    '</form>'+
                  '</div>'+
                '</div>'+
              '</div>'+
            '</div>'+
          '</div>'+
          '<div class="clearfix"></div>'+
        '</div>'+
      '</div>'+
    '</div>'+
    '<div class="footer-bottom">'+
      '<div class="container text-right">'+
        'Sadaka @ copyrights 2015 - by <a href="http://www.ouarmedia.com" target="_blank">Ouarmedia</a>'+
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