var s = 0;
var year = {}
var make = {}
var model = {}

page.insured = function(){


  document.getElementById('title').innerHTML = "Currently insured?"
  section.bar.animate(.45)

 // element.text('head','lowest price in 60 sec')
page.removeChildren(_id)
element.ul('insured',_id)
element.li('yes','yes','insured','current')
element.li('no','no','insured','drivers')


}
















page.current = function(){
section.bar.animate(.45)

    var _insured = [
        'allstate',
        'farmers',
        'geico',
        'liberty mutual',
        'nation wide',
        'progressive',
        'statefarm',
        'travelers',
        'usaa',
        'the hartford',
        'other'
    ];
document.getElementById(_id).innerHTML = '<ul id="current" class="coll-3">'
element.text('title','Who are you insured with?')
section.bar.animate(.5)
    var i;
    for(i =0;i<_insured.length;i++){
        element.li(_insured[i],_insured[i],'current','drivers')
    }
  element.li('back','Back','current','insured')
   

  }


















page.drivers = function(){
  section.bar.animate(.6)
element.text('title','How many drivers?')
page.removeChildren(_id)
element.ul('drivers',_id)
element.li('1','1','drivers','year')
element.li('2','2','drivers','year')
element.li('3','3','drivers','year')
element.li('4','4 or more','drivers','year')



if(_dat.insured == 'yes'){
  var insured = 'current'
} else {
var insured = 'insured'
}
  element.li('back','Back','drivers',insured)
}










var t = 0;



page.year = function(){
if(t == 0){
  element.text('title','What is your vehicle year?')
} else if(t==1){
  element.text('title','What is your second vehicle year?')

}else if(t==2){ 
  element.text('title','What is your third vehicle year?')

}else if(t==3){ 
  element.text('title','What is your forth vehicle year?')

}else if(t>3){ 
  element.text('title','What is your other vehicle year?')

}


section.bar.animate(.7)

  page.removeChildren(_id)

element.ul('year'+t,_id,'coll-4')
    var date = new Date(); // date object
          var getYear = date.getFullYear()
          
          var i;
          for (i = getYear; i > 1998; i--) {
        
            element.li(i,i,'year'+t,'make',i)

          }

          element.select('other','year'+t,'other','make',this.value)
          element.option('select','other','other')
          
          
          for (var s = 1998; s > 1950; s--) {
           
            element.option(s,'other',s)
          }
          
element.li('back','Back','year'+t,'drivers')
}


page.make = function(param){
section.bar.animate(.75)
if(t == 0){
  element.text('title','What is your vehicle make?')
} else if(t==1){
  element.text('title','What is your second vehicle make?')

}else if(t==2){ 
  element.text('title','What is your third vehicle make?')

}else if(t==3){ 
  element.text('title','What is your forth vehicle make?')

}else if(t>3){ 
  element.text('title','What is your other vehicle make?')

}

  year.year = param
  page.removeChildren(_id)

    $.getJSON('https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getMakes&year=' + encodeURI(year.year) + '&sold_in_us=1', function (data) {
        
        element.ul('make'+t,_id,'coll-4')
        var i;
        for (i = 0; i < data.Makes.length; i++) {
          if (data.Makes[i].make_is_common == "1") {
            element.li(data.Makes[i].make_display, data.Makes[i].make_display,'make'+t,'model',data.Makes[i].make_display,)
          }
        }
element.li('back','Back','make'+t,'year')

})

}





page.model = function(param){
section.bar.animate(.79)
if(t == 0){
  element.text('title','What is your vehicle model?')
} else if(t==1){
  element.text('title','What is your second vehicle model?')

}else if(t==2){ 
  element.text('title','What is your third vehicle model?')

}else if(t==3){ 
  element.text('title','What is your forth vehicle model?')

}else if(t>3){ 
  element.text('title','What is your other vehicle model?')

}

  make.make = param
page.removeChildren(_id)
    $.getJSON('https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getModels&make=' + encodeURI(make.make) + '&year=' + year.year + '&sold_in_us=1', function (data) {
      element.ul('model'+t,_id)
  
  
      if (data.Models.length != 0) {
  
  
  
  
        var i;
        for (i = 0; i < data.Models.length; i++) {
  
          element.li(data.Models[i].model_name,data.Models[i].model_name,'model'+t,'more')
  
        }
      } else {
        element.input('other_model','text','Other not listed','model'+t)
        element.li('next','Next' ,'model'+t, 'more')
      }

      
      if (data.Models.length >= 6){
        document.getElementById('model'+t).className = 'coll-4'
      } else {
        document.getElementById('model'+t).className = 'coll-3'
  
      }
    })
t++
  
  }










  page.more = function(){
    if(t == 1){
      element.text('title','Add a second vehicle?')
    } else if(t==2){
      element.text('title','Add a third vehicle?')
    
    }else if(t==3){ 
      element.text('title','Add a fourth vehicle?')
    
    
    }else if(t>3){ 
      element.text('title','What is your other vehicle year?')
    
    }
      page.removeChildren(_id)
s++

      element.ul('more',_id,'w-5')
      element.li('yes','Yes','more','year')
      element.li('no','No','more','home')
  }
  










  page.home = function(){
  element.text('title','Are you a homeowner?')
section.bar.animate(.8)
    
    page.removeChildren(_id)
    element.ul('home',_id,'w-5')
    element.li('yes','Yes','home','rates')
    element.li('no','No','home','rates')
  }




  page.rates = function(){
section.bar.animate(.85)

page.removeChildren(_id)
    element.section.image_folder('/images/logos/')
    element.div('mySlide',_id,'mySlide')
  //document.getElementById("loc").style.display = "none!important";


  var slideIndex = 0;

  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < image.length; i++) {
     slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > image.length) {
      slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 100); // Change image every 2 seconds
  }
  element.div('loadingDiv',_id)
  element.div('','loadingDiv','loader')

  $(_id).append(
    '<div style="" id="loadingDiv"><div class="loader" style="width:1%"></div></div>'
  );

  var loading = Math.random() * (600 - 300) + 300;

  $(".loader").animate({ width: "20%" }, +loading, function () {


    var carriers = Math.random() * (600 - 300) + 600;

    $(".loader").animate({ width: "40%" }, +carriers, function () {

      element.div("carriers-containers", _id);

      $('#title')
        .fadeIn()
        .text("Connecting to all Home Insurance companies...");
        section.bar.animate(.89)

      for (var i = 0; i < image.length; i++) {
        $("#carriers-containers").append(
          "<div class='mySlides'><img src=" +
            image[i] +
            " style='width:100%'></div>"
        );
      }

      showSlides();

      var discounts = Math.floor(Math.random() * (10000 - 300) + 600);
      $(".loader").animate({ width: "60%" }, +discounts, function () {
        
        $('#title').fadeIn().text("Applying Discounts...");

        var Calculating = Math.floor(Math.random() * (10000 - 600) + 600);
        $(".loader").animate({ width: "80%" }, +Calculating, function () {
         // onLoad(".95", "13", "Calculating rates.");
          //$('#title').fadeIn().text("Calculating rates...");

          $("#carriers-containers").slideUp("slow");


          var done = Math.floor(Math.random() * (10000 - 600) + 600);
          $(".loader").animate(
            { width: "100%" },
            +Calculating,
            function () {
              $('#title').fadeIn().text("Finished!");
              $("#loadingDiv").slideUp("slow",function(){

  document.getElementById('title').className = "mobile-extended";
  
  fetch("https://raw.githubusercontent.com/drod247/prices/main/dat.json").then(function(r){
    return r.json()
}).then(function(d){
 
  section.bar.animate(1)

  document.getElementById('title').innerHTML = "Advance technology just  shopped & compared the rates of all the top companies for lowest price...<br> <span>Send lowest price to:</span>";

    
    

})
              page.contact();

              });

            }
          );
        });
      });
    });
  });
}
  
  page.contact = function(){
    element.div('contact',_id,'w-5')
    element.section.contact('contact')

    element.li('send','Get lowest rate','contact','ajax')
  }
    // Models[0].model_make_id



    page.ajax = function(){
      for(var i = 0; i<page.input.length;i++){
        var name = page.input[i].name
        _dat[name] = page.input[i].value
      }
      page.removeChildren(_id)
      element.action.ajax()
      document.getElementById('title').innerHTML = "Done"
      document.getElementById(_id).innerHTML = "<div id='done'><p class='mess'>We have received your request for an auto Insurance quote.</p><p class='mess'> We are shopping the rates with all of the top insurance companies</p><p class='mess'> to present you the lowest price!</p><p class='mess'>Please note...&nbsp;</p><p class='mess'>If we need additional information to complete your quote</p><p class='mess'> we will call you at the number you provided...</p> <p class='mess'>Please be sure to answer your phone to avoid any delays.</p><p class='mess'>Can't wait? We get it... <br>You can call us at: 1-877-613-5041</p><p class='in'>The InsuranceNetwork</p><p class='num'>1-877-613-5041</p><p class='save'>Our passion is saving people money!</p></div>"
    }

page.insured()