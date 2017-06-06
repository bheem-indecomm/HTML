// JavaScript Document
$(document).ready(function () {    
   

  //$("#scroll .scrollBar").mCustomScrollbar({
  //    //setHeight:200,
  //    theme: "minimal",
  //    alwaysShowScrollbar: 0,
  //    autoDraggerLength: true,
  //    advanced: {
  //        updateOnContentResize: true,
  //        updateOnImageLoad: true
  //    }
  //});


  $('select').material_select();


	// JS code for date time picker
	$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year
    format: 'dd-mm-yyyy'
	});

      
  $("a.viewAll").parent("div").css("text-align", "right");

  // datepicker
  $("input.datepicker").parent("td").css("position", "relative");
  $("input.datepicker").after('<span class="assignIcon"><i class="fa fa-calendar assignIconPosition"></i></span>');

  $(".assignIcon").bind("click", (function () {
      var date1 = $(this);
      setTimeout(function () {
          date1.prev('input.datepicker').trigger("click");
      }, 200);
  }));


  /// login modal hide

  $('.loginModalClose').click(function() {
      $("#loginModal").modal('hide');
  });
  


});
        


    
    
    
   // select dropdown : on scrollbar click hide dropdown solved  
   $(function () {
       $(".select-dropdown li").on('click', function (e) {
           var aaa = $(this).parent('ul');
           if (aaa.hasClass('active')) {
               aaa.removeClass("active");
               aaa.css("display", "none");
           }
       });

       function closeDropdown() {
           if ($('.dropdown-content.select-dropdown').hasClass('active')) {
               $('.dropdown-content.select-dropdown').removeClass('active').css("display", "none");
           }
       }       

       $(window).click(function () {
           closeDropdown();
       });

       $('body').on('change', 'select', function () { closeDropdown(); });
   });


   // update / initialize mcustomscrollbar 
   function initializeScrollbar() {      
          $(".mcustomScroll").mCustomScrollbar({          
            theme:"dark-3",
            axis:"yx",
            advanced:{
              updateOnContentResize: true
            }
          });

          $(".mcustomScroll.mcustomScrollVerticalOnly").mCustomScrollbar({          
            theme:"dark-3",
            axis:"y",
            advanced:{
              updateOnContentResize: true
            }
          });
   }
   function updateScrollbar() {
      //$(".mcustomScroll").mCustomScrollbar("update");
   }
   //mcustomscrollbar
   $(window).on("load",function(){
      var md=new MobileDetect(window.navigator.userAgent); //get device type
      if(!md.mobile()){ //apply custom scrollbar if device is not mobile
          if($('body').find('.mcustomScroll').length > 0) {
            initializeScrollbar();                        
          } // inner if
      }// outer if ends - mobile detect
      else {
        $('.mcustomScroll').css({'overflow':'auto', 'overflow-scrolling':'touch', '-webkit-overflow-scrolling':'touch', '-moz-overflow-scrolling':'touch', '-ms-overflow-scrolling':'touch', '-o-overflow-scrolling':'touch'});
      }  
   });

   
   // $(function () {
   //    $('.mcustomScroll').hover(function () {

   //        var md=new MobileDetect(window.navigator.userAgent); //get device type
   //        if(!md.mobile()){ //apply custom scrollbar if device is not mobile
   //            $(".mcustomScroll").mCustomScrollbar("disable");
   //            $(this).mCustomScrollbar({          
   //              theme:"dark-3",
   //              axis:"yx",
   //              advanced:{
   //                updateOnContentResize: true
   //              }
   //            });
   //            $(this).mCustomScrollbar('update');
   //        }
   //    });
   // });

   // show hide / expand collapse box
   $(function () {
      $('.showHideArrowBox').click(function () {
        if($('#boxMainLeft').hasClass('open')) {
            $('#boxMainLeft').removeClass('open').addClass('hiden');
            $(this).find('i').removeClass('zmdi-chevron-left').addClass('zmdi-chevron-right');
        }
        else {
            $('#boxMainLeft').removeClass('hiden').addClass('open');
            $(this).find('i').removeClass('zmdi-chevron-right').addClass('zmdi-chevron-left');
        }
        updateScrollbar();
      });
   });