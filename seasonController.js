     
  //  var loading_img = "<img src='../images/loading.gif' alt='loading image' />";
    
  // var lat = '';
  //    var lng = '';     
  //    var sort = 'name_'; 
     var SHARE_URL = 'http://www.seasonalfoodguide.org/';
     var split_URL = document.URL.split("/");
     var GLOBAL_URL = 'http://'+ split_URL[2] +'/seasonalfoodguide/getState.php';
     var GLOBAL_MONTH = '';
     // var img = 'http://www.sustainabletable.org/images/seasonal_food_banner.png';
     
   // $('html, body').animate({scrollTop:0},'slow');
         
   //       var d = new Date();
   //       var day = d.getDate();
   //       var month = d.getMonth();
   //       var months = new Array();
         
   //       var early_late = 0;
   //       if (day > 14) {
   //         early_late = 1;
   //        }
        
     
    
      
         
    
    function success(position) {
         var mapcanvas = document.createElement('div');
         mapcanvas.id = 'mapcontainer';
         mapcanvas.style.height = '400px';
         mapcanvas.style.width = '600px';
       
         //document.querySelector('article').appendChild(mapcanvas);
       
         var coords = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
         document.getElementById('lat').value = position.coords.latitude;
         document.getElementById('lng').value = position.coords.longitude;
       //  console.log(position.coords.longitude);
      //   console.log(position.coords.latitude);          
        
         lat = position.coords.latitude;
         lng = position.coords.longitude;
         
         getInitialState(lat,lng);
                
    }
         
     if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success);     
     } else {         
    console.log('Geo Location is not supported');
     }
    
     function getInitialState(lat,lng){
                     
        var lat = $('#lat').val();
        var lng = $('#lng').val();    
        
        var types = new Array();
        
        if (lat != "" && lng != "") {
        $('#state_info').html(loading_img);
        var month = $('#select_season').val();
        var url = GLOBAL_URL;
        $.post(url,{lat:lat,lng:lng,types:types,month:month},function(data){
             $('#state_info').html(data).slideDown('slow');
             $('#state_select').val($('#get_state').val());
             $('html, body').animate(
              {scrollTop: $('#select_section').offset().top - 20}, 1000
               );
        });
        }else{
         
         alert('no location');
        }
       
        
        
        /*
        $.post(url+'?FILTER=1',{lat:lat,lng:lng,types:types,month:month},function(data){
             $('#filter_info').html(data);
        });
         */     
         }
    
    $(document).ready(function(){
         
          
         var ua = navigator.userAgent,
         touchClick = (ua.match(/iPad/i)) ? "touchstart" : "click";
         
        $('#wrapper').css({'min-height':$(window).height()});
         
         $('.get_state').attr('href','#').removeAttr('target');
         
         $('body').delegate('#select_season,#produce','change',function(){
          
          if (this.id == "select_season") {
      $('#produce').val('');
          }else{
      $('#select_season').val('');
          }         
          
         });
         
         $("body").delegate("#get_list",touchClick,function(e){
                
        var types = new Array();
       // types[0] = 'Produce';
       // types[1] = 'None';
       // types = JSON.stringify(types);
        
        var month = $('#select_season').val();
        var state = $('#state_select').val();
        var produce = $('#produce').val();
        if(state == ""){
           $('#state_select').addClass('in_valid');
        }else if(month == "" && produce == "" ){
        $('#select_season').addClass('in_valid'); 
        $('#produce').addClass('in_valid'); 
        }else{
          $('#state_select').removeClass('in_valid');
          $('#select_season').removeClass('in_valid'); 
          $('#produce').removeClass('in_valid'); 
         $('#state_select').val(state);
         $('#state_info').slideUp('fast');
         var url = GLOBAL_URL;
         $('#state_info').html(loading_img);
         $.ajax({
               type:"POST",
               data:{state:state,month:month,produce:produce,sort:sort},
               url:url,
               success:function(data){
            //  alert('good' + $('#state_info').css('display') );
              
              $('#state_info').html(data).slideDown('slow');
              
              $('html, body').animate(
              {scrollTop: $('#select_section').offset().top - 20}, 1000
               );
              

// curl -X POST -d "{state: 'California',month: 'Late August',sort: 'name_'}" http://www.sustainabletable.org/seasonalfoodguide/getState.php
           //  alert('good' + $('#state_info').css('display') );
               //console.log(data);
          },
          error: function(xhr, textStatus, error){
            //  alert(xhr.statusText);
            //  alert(textStatus);
            //  alert(error);
          }
         });
        }
        
            
        /*
        $.post(url+'?FILTER=1',{state:state,types:types},function(data){
             $('#filter_info').html(data);
        });
        */
         return false;
           
        
         });
         
         /*
          $("#state_select, #select_season").change(function(e){
        
        var types = new Array();
       // types[0] = 'Produce';
       // types[1] = 'None';
       // types = JSON.stringify(types);
        
        var month = $('#select_season').val();
        var state = $('#state_select').val();
        if(state == ""){
           $('#state_select').addClass('in_valid');
        }else if(month == "" ){
        $('#select_season').addClass('in_valid'); 
        }else{
          $('#state_select').removeClass('in_valid');
          $('#select_season').removeClass('in_valid');
         $('#state_select').val(state);
         var url = 'http://www.gcfdev.org/getState.php';
         $('#state_info').html(loading_img);
         alert(state+' '+month);
         $.ajax({
               type:"POST",
               data:{state:state,month:month,order_N:order_N,order_T:order_T},
               url:url,
               success:function(data){
              $('#state_info').html(data);
             $('html, body').animate(
             {scrollTop: $('#state_info').offset().top}, 1000
              );
               //console.log(data);
          },
          error: function(XMLHttpRequest, textStatus, errorThrown) {
              alert(XMLHttpRequest.responseText);
          }
         });
        }
        
            
      
         return false;
           
        
         });
         */
         
         $('body').delegate('.eat_well_search',touchClick,function(){
        
        var state =  $('#get_state_short').val();
        if(state == ""){
           $('#state_select').addClass('in_valid');
        }else{
         $('#state_select').removeClass('in_valid');
        
        
        var data = new Array();
        data['Search'] = new Array();
        data['Search']['iframe'] = '11';
        data['Search']['device'] = 'iframe';
        data['Search']['submit2'] = 'None';
        data['Search']['keyword'] = 'None';
        data['Search']['match'] = 'None';
        data['Search']['zip_code'] = 'None';
        data['Search']['distance'] = 'None';
        data['Search']['city'] = 'None';
        data['Search']['state_province'] = new Array();
        data['Search']['state_province'][0] = state;
        //data = JSON.stringify(data);
        
        
        var food = $(this).attr('data-food');
        
        
        var url = 'search/advanced/find';
        var iframe = 'iframe';
        var device = '11';
        var distance = 'Mi';
        var keyword = encodeURIComponent(food);     
        
        
        var url_data = "data[Search][iframe]=11&"+
        "data[Search][device]=iframe&"+
        "data[Search][submit2]=submit&"+
        "data[Search][keyword]="+ encodeURIComponent(food) +"&"+
        "data[Search][match]=all&"+
        "data[Search][zip_code]=&"+
        "data[Search][distance]=20&"+
        "data[Search][city]=&"+
        "data[Search][state_province][0]="+encodeURIComponent(state);
        
        //url_data = encodeURIComponent(url_data);
        
        
        var all_data = url_data+"&url="+ url +"&state="+state+"&iframe="+iframe+"&device="+device+"&distance="+distance+"&keyword="+keyword+"&widgetscall=season_guide&SEASON_GUIDE=1&data[Summary][vendor_category][]=farmers_markets";
        
        
        var url_ = "http://www.eatwellguide.org/search/advanced/find?"+all_data;     
      var url_ = "http://www.eatwellguide.org/";     
        // window.location = url_;
        var win = window.open(url_, '_blank');
         win.focus();
         
         }
         });
         
         $('body').delegate('.chooseMonth',touchClick,function(){
        
        var state =  $('#state_select').val();
        var month = $(this).attr('data-month');
        var id = this.id;
        if(state == ""){
           $('#state_select').addClass('in_valid');
        }else if(month == "" ){
        $('#select_season').addClass('in_valid'); 
        }else{
          $('#state_select').removeClass('in_valid');
          $('#select_season').removeClass('in_valid');
        
            // $('#state_info').html(loading_img);
        var url = GLOBAL_URL;
        $.ajax({
              type:"POST",
              data:{state:state,month:month,sort:sort},
              url:url,
              success:function(data){
              $('#state_info').html(data);
            //  console.log(data);
            $(window).scrollTop($('#result_table').offset().top - 115);
            $()
              $('#select_season').val(month);
              },
          error: function(xhr, textStatus, error){
           //   alert(xhr.statusText);
           //   alert(textStatus);
           //   alert(error);
          }
        });
         }
        
        
         });
         
         $('body').delegate('.order',touchClick,function(){
        
        var state =  $('#state_select').val();
        var month = $('#select_season').val();
        
        var id = this.id;
        if (id == "") {
         return false;
        }
        if (id == "nArrow") {
         if (sort == 'name_') {
          sort = '_name';
         }else{
          sort = 'name_';     
         }
        }else{
        if (sort == 'type_') {
          sort = '_type';
         }else{
          sort = 'type_';     
         } 
        }
             
        if(state == ""){
           $('#state_select').addClass('in_valid');
        }else if(month == "" ){
        $('#select_season').addClass('in_valid'); 
        }else{
          $('#state_select').removeClass('in_valid');
          $('#select_season').removeClass('in_valid');
        
        // $('#state_info').html(loading_img);
        
        var url = GLOBAL_URL;
        $.ajax({
              type:"POST",
              data:{state:state,month:month,sort:sort},
              url:url,
              success:function(data){
              $('#state_info').html(data);
            //  console.log(data);
              $('#select_season').val(month);
              },
          error: function(xhr, textStatus, error){
           //   alert(xhr.statusText);
           //   alert(textStatus);
          //    alert(error);
          }
        });
        }
        
         });
         
          $('body').delegate('.social,.social_bottom',touchClick,function(e){
      
      e.preventDefault();
      
       if($(this).hasClass('fb')){
         shareFB();
       }else if($(this).hasClass('tw')){
         shareTweet();
       }else if($(this).hasClass("gp")){
         shareGP();
       }else if($(this).hasClass( "pin")){
         sharePIN();
       }
         });
         
         function shareTweet()
         {
      var msg = "Learn what's in season with Sustainable Table's Seasonal Food Guide. "+SHARE_URL+" #seasonalfoodguide #sustainabletable #eatwellguide ";
            window.open('http://twitter.com/home?status=' + encodeURIComponent(msg), '_blank' );
         }
         
         function shareFB()
         {         
       window.open('http://www.facebook.com/share.php?u=' + SHARE_URL, '_blank');
         }http://pinterest.com/pin/create/button/?url=http%3A%2F%2Fwww.epicurious.com%2Frecipes%2Ffood%2Fviews%2Fgrilled-turkey-burgers-with-cheddar-and-smoky-aioli-354289&media=http%3A%2F%2Fwww.epicurious.com%2Fimages%2Frecipesmenus%2F2009%2F2009_august%2F354289.jpg&description=Grilled%20Turkey%20Burgers%20with%20Cheddar%20and%20Smoky%20Aioli

          function shareGP()
          {           
      window.open('https://plus.google.com/share?url=' + SHARE_URL, '_blank');
          }
          
          function sharePIN()
          {        
      img = 'http://www.sustainabletable.org/images/seasonal_food_banner.png';
      window.open('http://pinterest.com/pin/create/button/?url=' + SHARE_URL+'&media=' + encodeURIComponent(img) + '&description=' + encodeURIComponent('Find out whats in season in your state. www.SeasonalFoodGuide.org'), '_blank');
          }
          
          $('body').delegate('.sendPIN',touchClick,function(){
         
         var media = $(this).attr('data-media');
         var descr = $(this).attr('data-description')
         window.open('http://pinterest.com/pin/create/button/?url=' + SHARE_URL+'&media=' + encodeURIComponent(media) +'&description=' + encodeURIComponent(descr) , '_blank');
         
          });
          //http://pinterest.com/pin/create/button/?url=http%3A%2F%2Fwww.epicurious.com%2Frecipes%2Ffood%2Fviews%2Fgrilled-turkey-burgers-with-cheddar-and-smoky-aioli-354289&media=http%3A%2F%2Fwww.epicurious.com%2Fimages%2Frecipesmenus%2F2009%2F2009_august%2F354289.jpg&description=Grilled%20Turkey%20Burgers%20with%20Cheddar%20and%20Smoky%20Aioli
          
          $('body').delegate('.sendEmail',touchClick,function(){
         
         window.location = 'mailto:programs@gracelinks.org?subject=Seasonal Food Guide';
         
          });
          
          $(window).scroll(function(){
      
      if($('#result_table').length > 0){
         var o = $('#result_table').offset().top - $(window).scrollTop();
         if (o <= 110) {
           if (!$('#banner_wrap').hasClass('make_nav_fixed')){
             $('#banner_wrap').addClass('make_nav_fixed');
             $('#result_table').addClass('top_margin_100');
              var w = $('#state_info').width();  
              var nW = w;
              $('#banner_wrap').width(nW);
           }      
         }else{
           if ($('#banner_wrap').hasClass('make_nav_fixed')){
             $('#banner_wrap').removeClass('make_nav_fixed');
             $('#result_table').removeClass('top_margin_100');
             $('#banner_wrap').width('');
           } 
         }   
      }
      
          });
          
          
           $(window).resize(function(){
         
         if ($('#banner_wrap').hasClass('make_nav_fixed')){
            var w = $('#state_info').width();  
            var nW = w;
           $('#banner_wrap').width(nW);
         }
      
         
           });
           
           $('body').delegate('.produce_img','click',function(){
    
         var img = $(this).find(".zoom");
         if (img.length > 0) {
         $('#lightBoxInner').html("<br>"+$(img).html());
          
          $('#lightBox').fadeIn();
          $('#lightBoxInner').animate({"width":"40%"},'700');     //code
         }
         
         
       });
       
       $('#lightBoxInner,#lightBox').click(function(){
         
         $('#lightBoxInner').animate({"width":"0"});
         $('#lightBox').fadeOut();
         
       });
           
             
    });
    
    