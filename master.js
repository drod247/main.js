
console.log('Developed by | David Rodriguez @vsdg_group | https://vsdg.net');

const _dat = {};
const vsdg = {};
const element = {};
const email = {};
var functions = {};
const image = [];
var tag = {};
var page = {};
const section = {};
var json = {};
var range = [];
var form = {};
var title = {};
var post = {};
const track = {}
var cookie = {}
const action = {};




track._id = 'id-'+new Date().getTime().toString()
_dat.id = track._id
track.form = Math.floor(Math.random() * 1000) + 100;
track.redi = document.referrer;
_dat.url = window.location.href;
track.url = _dat.url
track.dimentions = window.innerWidth + ' X '+ window.innerHeight;
track.string = window.location.search;
track.code = track.string.substring(1, 5)
track.domain = window.location.hostname
cookie.dat = document.cookie.split(";").reduce( (ac, cv, i) => Object.assign(ac, {[cv.split('=')[0]]: cv.split('=')[1]}), {});
const firstPath = window.location.pathname.split('/')[1];








form.json = (parent,id,tag) => {
  tag = tag.replace('#','')
  form[parent.replace('#','')] = {
    [tag]: id
  }
}





action.ajax = (serialized,url,subj) => {
if(subj){
  _dat.subj = subj
}
  if(url){
    post.url = url
  }
$.ajax({
      async: true,
      type: "POST",
      url: post.url,
      data: serialized
    }).done(function(d){
   
    }).fail(function(e){
  console.log(e)
    });
  }











  clicked = () => {

    $.ajax({
      async: true,
      type: "POST",
      url: "https://safeguardcasualty.com/ppc-click.php",
      data: $('form').serialize(),
    })
  }
  
  
  lead = () => {
  
    $.ajax({
      async: true,
      type: "POST",
      url: "https://safeguardcasualty.com/in-lead.php",
      data: $('form').serialize(),
    })
  }
  







page.ajax = (serialized,url) => {
if(url){
  post.url = url
}

  $.ajax({
    async: true,
    type: "POST",
    url: post.url,
    data: serialized

  }).done(function(d){
 
  }).fail(function(e){
console.log(e)
  });
}











 




 page.abort = (missing) =>
{
   throw new Error('This is not an error. missing '+ missing);
}







page.call = (tagListener,tel) => {
document.querySelector(tagListener).addEventListener('click',function(){

  for(var key in _dat) {
    track[key] = _dat[key]
    
      }
  track.code = tel.split('tel:').join('')  +' ' +track.code
  track.subj = 'Called :'+  tel.split('tel:').join('')  +' ' +track.code
  track.called = 'Yes'
  page.ajax(track,track.post)
  window.open(tel, "_self")

})
}





















if (cookie.dat){

  for(var key in cookie.dat) {
    track[key] = cookie.dat[key]
    
      }

}
    if(track.code == ''){
     var eq = "not privided";
    }
    form.id = track._id
    const _id = track._id;

    





















page.track = (url,info) =>{

if(url){
  post.url = url
}

if(!info){
  console.log('Missing ' + info)
}
  if(track.code == 'test'){
    track.ip = 'Test'
     track.latitude = 'Test'
     track.longitude = 'Test'
     track.Internet = 'Test'
     page.device()
  } else {

 $.getJSON("https://ip-api.io/api/json",
 
 function(data){
   track.zip = data.zip_code
    track.ip = data.ip
     track.latitude = data.latitude
     track.longitude = data.longitude
     track.Internet = data.organisation
 }).done(function(){
page.device()
 }).fail(function(){
   page.device()
 });
   }
}


















page.device = () =>{
 
   var browser = (function() {
     var test = function(regexp) {return regexp.test(window.navigator.userAgent)}
     switch (true) {
         case test(/edg/i): return "Microsoft Edge";
         case test(/trident/i): return "Microsoft Internet Explorer";
         case test(/firefox|fxios/i): return "Mozilla Firefox";
         case test(/opr\//i): return "Opera";
         case test(/ucbrowser/i): return "UC Browser";
         case test(/samsungbrowser/i): return "Samsung Browser";
         case test(/chrome|chromium|crios/i): return "Google Chrome";
         case test(/safari/i): return "Apple Safari";
         default: return "Other";
     }
 })();
 
 track.browser=browser
 
 
 







 
  var userAgent = window.navigator.userAgent,
      platform = window.navigator.platform,
      macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
      windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
      iosPlatforms = ['iPhone', 'iPad', 'iPod'],
      os = null;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = 'Mac OS';
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = 'iOS';
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = 'Windows';
  } else if (/Android/.test(userAgent)) {
    os = 'Android';
  } else if (!os && /Linux/.test(platform)) {
    os = 'Linux';
  }

  track.os = os;











     
        
     if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
 
     track.device='Mobile'
  } else {
    
    track.device='Desktop'
  }
  if(!track.code){
    track.code = firstPath
  }
  track.subj = 'Landing'
 page.exit(_id)
 }



















page.exit = (_id) => {
page.ajax(track,track.post)
  
  var count = 0;
setInterval(function() {
  if (count > 60) { // We check if the timer is in seconds or mins
    var time = ++count; // We get a copy of the time in 'seconds'
    time = parseInt(time / 60); // We convert it to mins
    _dat.timming =  ++count + 'm'
  } else { // Simmilarly we can also add a condition to check hours with s=3600
  _dat.timming =  ++count + 's'
  }
}, 1000);
  window.addEventListener("beforeunload", function(event) {







  if(!track.code){
    track.code = firstPath
  }





  track.subj = 'exit'
  if(!track.called ){
  page.ajax(track,track.post)
  } else {
    console.log(_dat)
  }
 
})
},

























element.hidden = function(inputId, inputValue ) {
      var q = document.createElement("input");
      q.id = inputId;
      q.name = inputId;
      q.type = "hidden";
      q.value = inputValue;
      q.textContent = inputValue;
      document.querySelector(_dat._id).append(q);
}





















element.modal = function(){
    
      var e = document.getElementsByTagName('html')[0]
      e.addEventListener('mouseleave',function(){

    _test()

    })
}

























element.script = function(url,next){
   
  $.ajax({
    async: true,
    type: "GET",
    url: url,
   

  }).done(function(){
    if(next){
      page[next]()
    }

  }).fail(function() { 
   
}); 

}
element.form = function(parent,classname){
      
      var form = document.createElement('form')
      form.id = _dat._id;
      if(classname){
        form.className = classname;
      }
      if(parent){
        document.querySelector(parent).appendChild(form)
      } 
    
    
}

element.create = (tag,id,classname,parent) =>{
  var e = document.createElement(tag)
  e.id = id
  e.className = classname
  document.querySelector(parent).appendChild(e)
  
var name = e.tagName
  json[name] = id
  
}



page.loop = (tag, parent, next,max) => {
    if (json.text.length >= 6) {
      document.querySelector(parent).setAttribute('class', 'row-3')
    }
    if (json.text.length <= 5) {
      document.querySelector(parent).setAttribute('class', 'row-1')
  
    }
    if (json.text.length >= 7 ) {
      document.querySelector(parent).setAttribute('class', 'row-4')
  
  
    }
  
  
  
  
  
    if(json.text.length > max){
  
      var part1 = []
      var part2 = []
    
  
  
  
      for(var i = 0; i < max; i++){
        part1.push(json.text[i])
      }
  
      for(var i = max; i < json.text.length; i++){
        part2.push(json.text[i])
      }
  
  
  if(json.item){
  
    part1.forEach(e => {
  
  
      element[tag](e[json.item],e[json.item],parent,next)
      
      })
          
      
      part2.forEach(e => {
      
      
      element[tag](e[json.item],e[json.item],parent,next,'','load')
      document.querySelector('.load').setAttribute('style','display:none;')
      
      });
    
  } else {
  
    part1.forEach(e => {
      element[tag](e,e,parent,next)
      
      })
          
      
      part2.forEach(e => {
      
      
      element[tag](e,e,parent,next,'','displaynone')
      
      });
  }
   
    
  element.li('load_more','Load more',parent,'display')
  page.display = () =>{
    document.querySelectorAll('form > ul > li').forEach(el =>{
      el.removeAttribute('class','load')})
      
    }
  
  
    } else {
  
  if(json.item){
  
  
    json.text.forEach(e => {
      element[tag](e[item],e[item],parent,next)
  
      });
  
  } else {
  json.text.forEach(e => {
    element[tag](e,e,parent,next)
  
    });
  }
      }
    }
  
  
  


page.lo = (tag, parent, next) => {
if(!json.text){
  console.log('Missing array data')
}



    if (json.text.length == 6) {
      
      document.querySelector(parent).setAttribute('class', 'row-3')
    }
    if (json.text.length <= 5) {
      document.querySelector(parent).setAttribute('class', 'row-1')
  
    }
    if (json.text.length > 6) {
      document.querySelector(parent).setAttribute('class', 'row-4')
  
   
    }
    if(json.text.length > 50){
      var part1 = []
      var part2 = []
  
      for(var i = 0; i < 42; i++){
        part1.push(json.text[i])
      }
  
      for(var i = 43; i < json.length; i++){
        part2.push(json.text[i])
      }
  
  part1.forEach(e => {
  
    
    if(e[json.item].length > 13){
      var short = e[json.item].substring(0,10) +'...'
    } else {
      var short = e[json.item]
  }
  
  element[tag](short,short,parent,next)
  });
  
  element.select('other',parent,'',next)
  element.option('other','#other','other')
  part2.forEach(e => {
    if(e[json.item].length > 13){
      var short = e[json.item].substring(0,10) +'...'
    } else {
      var short = e[json.item]
  }
    element.option(short,'#other',short)
  });
    } else {
  
      json.text.forEach(e => {
        if(json.item){
          if(e[json.item].length > 13){
            var short = e[json.item].substring(0,10) +'...'
          } else {
            var short = e
        }
        element[tag](short,short,parent,next)
        } else {
        if(e.length > 13){
          var short = e.substring(0,10) +'...'
        } else {
          var short = e
      }
        element[tag](short,short,parent,next)
  
        }
      });
    }
  }























 
/*

<div class="container">
<!-- Btn-->
<button class="btn"><span>Account Settings</span><i class="material-icons">public</i>
<ul class="dropdown">
<li class="active"><a href="#">Profile Information</a></li>
<li><a href="#">Change Password</a></li>
<li><a href="https://codepen.io/pro">Become <b>PRO</b></a></li>
<li><a href="#">Help</a></li>
<li><a href="#">Log Out</a></li>
</ul>
</button>
</div>

*/

page.load = (listener,load) =>{

	window.addEventListener( listener, function() {
		page[load]()
	} );
}









page.getjson = (next,results) => {

  $.getJSON(page.url, function (data) {

json.string = data
  }).done(function (d) {

    page[next]()

  }).fail(function(jqxhr, textStatus, error ){
    var err = textStatus + ", " + error;
    console.log( "Request Failed: " + err );
  })
}





element.slider = function(ele,listenerEvent){
      var s = document.getElementsByTagName(ele)
      for(var i = 0; i<s.length;i++){
          s[i].addEventListener(listenerEvent,function(){
           
      
              
  $(this).parent().slideUp()
  
          })
      }
      
}
element.css = function(url){
      var s = document.createElement('link')
      s.rel = "stylesheet";
      s.type = 'text/css';
      s.href = url;
      document.head.appendChild(s)
      
              
}



element.link = function(param){
  window.location.href = param;
}










element.select = function(id,parent,next,param){
  var e = document.createElement('select')
  e.id = id;
    e.onchange = function(){

     var name = this.id
     _dat[name] = this.value 
  if(next){
     page[next](param)
    }
  }
  
  document.querySelector(parent).appendChild(e)
  
var name = e.tagName
  json[name] = id
  var name = e.tagName +1
  tag[name]= _id + 1


}









element.option = function(id,parent,value){
  var e = document.createElement('option')
  e.id = id;
  e.name = id;


  if(!value){
    e.textContent = id
  } else {
    e.textContent = value
  }

  document.querySelector(parent).appendChild(e)
  
var name = e.tagName
  json[name] = id

}








element.input = function(name,type,placeholder,parent,value){
      var e = document.createElement('input')
      e.name = name;
      e.type = type;
      e.placeholder = placeholder;
      e.parent = parent;
      e.id = name;
      if(value){
        e.value = value;
      }
      if(type == 'tel'){
        e.pattern = "[0-9]{3}-[0-9]{3}-[0-9]{4}"
        e.addEventListener('keydown',enforceFormat);
        e.addEventListener('keyup',formatToPhone);
      }
      e.addEventListener('blur',function(){
        track[this.name] = this.value

        _dat[this.name] = this.value
      })
      document.querySelector(parent).appendChild(e)
      
var name = e.tagName
  json[name] = id
  

      
      
}




element.label = function(text,parent){
       var e = document.createElement('label')
      e.textContent = text
      e.title = text
      document.querySelector(parent).appendChild(e)
      
var name = e.tagName
  json[name] = id

      
}
element.div = function(id,parent,classname,text){
        var e = document.createElement('div')
        e.id = id;
        if(classname){
        e.className = classname;
        } else{
          e.classname = id;
        }
        if(text){
          e.innerHTML = text;
        }
        if(parent == 'body'){
          document.body.appendChild(e)
       
var name = e.tagName
  json[name] = id

        }else{
          if(!document.querySelector(e.id)){
            
        document.querySelector(parent).appendChild(e)
        
var name = e.tagName
  json[name] = id
          } else {console.log(e + 'Exist')}

        }
}
element.span = function(id,parent){
      var e = document.createElement('span')
      e.id = id;
      document.querySelector(parent).appendChild(e)
      
var name = e.tagName
  json[name] = id

}
element.image = function(id,src,parent,classname){
        var e = document.createElement('img')
        if(id){
          e.id = id;

        }if(src){
        e.src = src;
        }
        if(classname){
        e.className = classname;
        }
        document.querySelector(parent).appendChild(e)
       
var name = e.tagName
  json[name] = id

}
element.ul = function(id,parent,classname){
        var e = document.createElement('ul')
        e.id = id;
        
        if(classname){
          e.className = classname;
        }
       if(parent){
         tag.parent = parent
        document.querySelector(parent).appendChild(e)
        
       
var name = e.tagName
  json[name] = id
      } 
},


element.footer = function(classname,id){
var x = document.createElement('footer')
if(id){
x. id = id;
}
if(classname){
  x.className = classname;
}
document.getElementsByTagName('body')[0].appendChild(x)


},

element.tag = function(ele,id,parent,text){
  var x = document.createElement(ele)
  if(id){
    x.id = id;

  }
if(parent){
  document.querySelector(parent).appendChild(x)
}
if(text){
  x.textContent = text;
}
},

element.tagname = function(tag){


  var e = document.createElement(tag.tag)

  if(tag.id){
    e.id = tag.id;
  }
  if(tag.text){
    e.textContent = tag.text;
  }
  if(tag.url){
    e.href = tag.url
  }
  if(tag.parent){
    document.querySelector(tag.parent).appendChild(e)
  }
}
element.li = function(id,text,parent,next,param,classname){

  var e = document.createElement('li')
  e.id = id;

  e.textContent = text;
  if(classname){
    e.className = classname;
  }
  e.addEventListener('click',function(){
    
    var value = this.id;
    var parent = this.parentNode.id;
    _dat[parent] = value;
//m++
var i = 0;
    if(next){
      tag.current = current = [next]

page[next](param)
tag.parent = tag.current[i]
//this.parentNode.remove();

 i++
  }
  })
  form[id] = id
  document.querySelector(parent).appendChild(e)
  
var name = e.tagName
  json[name] = id

}




element.range = (min,max) => {
  for (var i = min; i < max; i++){
    range.push(i)
  }
 }




 element.range_desc = (min,max) => {
  for (var i = max; i > min; i--){
    range.push(i)
  }
 }















element.rootVAR = function(e) {
  // append 'px' to the end of spacing and blur variables
  const suffix = (this.id === 'base' ? '' : 'px');
  document.documentElement.style.setProperty(`--${this.id}`, this.value + suffix);
}


// element.actions

element.action = { 

tags: function(){
var all = document.getElementsByTagName('*')
var i;
for(i=0, max=all.length;i<max; i++){
}
},

  back: function(prevFunction){
    
    if(prevFunction){
    element[prevFunction]()
  }
},

  next: function(next){
    if(next){
      elemen[next]()
    }
  },
  check: function(){
                
  var c = document.getElementsByTagName('input')

        
    for(var i = 0;i<c.length;i++){
        
        if(c[i].value == ''){
            alert('Please fill ' +c[i].placeholder)
            c[i].focus()
            break; 


    } else {
      var element = c[i].name
      _dat[element] = c[i].value
    }
    }


}, 



















  ajax: function(subject){
    
    if(!email.to){
      document.body.innerHTML = "<h1> Missing email to</h1>"
      abort('email.to')
   } else {
     console.log(email.to)
   }
  if(subject){
  _dat.subj = subject

  } 
       

var is_root = location.pathname == "/";
if(is_root == true){    
post.url = _dat.url;
console.log(post.url)
  } else { 

    if(!post.url){
      console.log('Enter post url file url "post.url = "../file""')
    } 
  }


if(track.id) {
_dat.break = '------------------------------------------';

  for(var key in track) {
_dat[key] = track[key]

  }


}






  $.ajax({
    async: true,
    type: "POST",
    url: post.url,
    data: _dat

  }).done(function(response){
  }).fail(function(){
    console.log(response)


  });

},
























 







 listener: function(id,tagname,trigger,next){
  if(id){
    document.querySelector(id).addEventListener(trigger,function(){

      page[next]()
    })
  }
  if(tagname == 'body'){
    var c = document.getElementsByTagName('body')[0]
    c.addEventListener(trigger,function(){
      page[next]()
    })
  }
  if(tagname == 'html'){
    document.getElementsByTagName('html')[0].addEventListener(trigger,function(){
      element[next]()
    })

  }
}
}


// element.sections 


element.section = {




 slideshow: function(id,interval,parent) {
      element.div(id,parent,)


    var slideIndex = 0;

    function showSlides() {
      var i;
      var slides = document.querySelector(id)
      for (i = 0; i < image.length; i++) {
       slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > image.length) {
        slideIndex = 1;
      }

      slides[slideIndex - 1].style.display = "block";
      setTimeout(showSlides, interval); // Change image every 2 seconds
    }
        for (var i = 0; i < image.length; i++) {
          $("#carriers-containers").append(
            "<div class='mySlides'><img src=" +
              image[i] +
              " style='width:100%'></div>"
          );
        }

        showSlides();

      },











  address: function(parent,next,classname){
      
if(!page.api){
  alert('Missing key')
  
}
    element.div('address',parent)
    element.ul('street','#address')
    document.querySelector('#street').setAttribute('style','grid-template-columns: minmax(0, 1fr);')
    
    function _address(containerElement, callback, options) {
        // create input element
        var inputElement = document.createElement("input");
        inputElement.setAttribute("type", "text");
        inputElement.setAttribute("placeholder", options.placeholder);
        if(classname){
        inputElement.setAttribute("class", classname);

        }
        inputElement.setAttribute("id", 'street-address');

        containerElement.appendChild(inputElement);
      
        // add input field clear button
        var clearButton = document.createElement("div");
        clearButton.classList.add("clear-button");
        addIcon(clearButton);
        clearButton.addEventListener("click", (e) => {
          e.stopPropagation();
          inputElement.value = '';
          callback(null);
          clearButton.classList.remove("visible");
          closeDropDownList();
        });
        containerElement.appendChild(clearButton);



        /* Current autocomplete items data (GeoJSON.Feature) */
        var currentItems;
      
        /* Active request promise reject function. To be able to cancel the promise when a new request comes */
        var currentPromiseReject;
      
        /* Focused item in the autocomplete list. This variable is used to navigate with buttons */
        var focusedItemIndex;
      
        /* Execute a function when someone writes in the text field: */
        inputElement.addEventListener("input", function(e) {
          var currentValue = this.value;
      
          /* Close any already open dropdown list */
          closeDropDownList();
      
          // Cancel previous request promise
          if (currentPromiseReject) {
            currentPromiseReject({
              canceled: true
            });
          }
      
          if (!currentValue) {
            clearButton.classList.remove("visible");
            return false;
          }
      
          // Show clearButton when there is a text
          clearButton.classList.add("visible");
      
          /* Create a new promise and send geocoding request */
          var promise = new Promise((resolve, reject) => {
            currentPromiseReject = reject;
            var requestOptions = {
              method: 'GET',
            };
            
    
            var apiKey = page.api;
            var url = `https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(currentValue)}&limit=5&type=street&filter=countrycode:us&bias=proximity:${track.longitude},${track.latitude}&apiKey=${apiKey}`;
            
            if (options.type) {
                url += `&type=${options.type}`;
            }
      
            fetch(url)
              .then(response => {
                // check if the call was successful
                if (response.ok) {
                  response.json().then(data => resolve(data));
                } else {
                  response.json().then(data => reject(data));
                }
              });
          });
      
          promise.then((data) => {
            currentItems = data.features;
            /*create a DIV element that will contain the items (values):*/
            var autocompleteItemsElement = document.createElement("div");
            autocompleteItemsElement.setAttribute("class", "autocomplete-items");
            containerElement.appendChild(autocompleteItemsElement);
      
            /* For each item in the results */
            data.features.forEach((feature, index) => {
              /* Create a DIV element for each element: */
              var itemElement = document.createElement("DIV");
              /* Set formatted address as item value */
              itemElement.innerHTML = feature.properties.formatted.split('United')[0];
      
              /* Set the value for the autocomplete text field and notify: */
              itemElement.addEventListener("click", function(e) {
                inputElement.value = currentItems[index].properties.formatted.split('United')[0];
                _dat.address = currentItems[index].properties.formatted.split('United')[0];
                callback(currentItems[index]);
      
                /* Close the list of autocompleted values: */
                closeDropDownList();
                //page[next]()
              });
      
              autocompleteItemsElement.appendChild(itemElement);
            });
          }, (err) => {
            if (!err.canceled) {
            }
          });
        });
      
        /* Add support for keyboard navigation */
        inputElement.addEventListener("keydown", function(e) {
          var autocompleteItemsElement = containerElement.querySelector(".autocomplete-items");
          if (autocompleteItemsElement) {
            var itemElements = autocompleteItemsElement.getElementsByTagName("div");
            if (e.keyCode == 40) {
              e.preventDefault();
              /*If the arrow DOWN key is pressed, increase the focusedItemIndex variable:*/
              focusedItemIndex = focusedItemIndex !== itemElements.length - 1 ? focusedItemIndex + 1 : 0;
              /*and and make the current item more visible:*/
              setActive(itemElements, focusedItemIndex);
            } else if (e.keyCode == 38) {
              e.preventDefault();
      
              /*If the arrow UP key is pressed, decrease the focusedItemIndex variable:*/
              focusedItemIndex = focusedItemIndex !== 0 ? focusedItemIndex - 1 : focusedItemIndex = (itemElements.length - 1);
              /*and and make the current item more visible:*/
              setActive(itemElements, focusedItemIndex);
            } else if (e.keyCode == 13) {
              /* If the ENTER key is pressed and value as selected, close the list*/
              e.preventDefault();
              if (focusedItemIndex > -1) {
                closeDropDownList();
              }
            }
          } else {
            if (e.keyCode == 40) {
              /* Open dropdown list again */
              var event = document.createEvent('Event');
              event.initEvent('input', true, true);
              inputElement.dispatchEvent(event);
            }
          }
        });
      
        function setActive(items, index) {
          if (!items || !items.length) return false;
      
          for (var i = 0; i < items.length; i++) {
            items[i].classList.remove("autocomplete-active");
          }
      
          /* Add class "autocomplete-active" to the active element*/
          items[index].classList.add("autocomplete-active");
      
          // Change input value and notify
          inputElement.value = currentItems[index].properties.formatted.split('United')[0];
          callback(currentItems[index]);
        }
      
        function closeDropDownList() {
          var autocompleteItemsElement = containerElement.querySelector(".autocomplete-items");
          if (autocompleteItemsElement) {
            containerElement.removeChild(autocompleteItemsElement);
          }
      
          focusedItemIndex = -1;
        }
      
        function addIcon(buttonElement) {
          var svgElement = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
          svgElement.setAttribute('viewBox', "0 0 24 24");
          svgElement.setAttribute('height', "24");
      
          var iconElement = document.createElementNS("http://www.w3.org/2000/svg", 'path');
          iconElement.setAttribute("d", "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z");
          iconElement.setAttribute('fill', 'currentColor');
          svgElement.appendChild(iconElement);
          buttonElement.appendChild(svgElement);
        }
        
          /* Close the autocomplete dropdown when the document is clicked. 
            Skip, when a user clicks on the input field */
        document.addEventListener("click", function(e) {
          if (e.target !== inputElement) {
            closeDropDownList();
          } else if (!containerElement.querySelector(".autocomplete-items")) {
            // open dropdown list again
            var event = document.createEvent('Event');
            event.initEvent('input', true, true);
            inputElement.dispatchEvent(event);
          }
        });
      
      }
      
_address(document.querySelector("#address"), (data) => {
       
      }, {
          placeholder: "Enter address"
      });

      },

  image_folder: function(folder){
  
        
  
  $.ajax({
      url : folder,
      success: function (data) {
          $(data).find("a").attr("href", function (i, val) {
              if( val.match(/\.(jpe?g|png|gif)$/) ) { 
                  image.push(folder + val);
              } 
          });
      }
  })
},



  marquee: function(parent){
    _dat.parent =  parent;
  
        var images = [];
        var folder = "/images/logos/";
  
  $.ajax({
      url : folder,
      success: function (data) {
          $(data).find("a").attr("href", function (i, val) {
              if( val.match(/\.(jpe?g|png|gif)$/) ) { 
  
                  images.push(folder + val);
              } 
          });
      }
  }).done(function(){
  _prep()
  })
  
  function _prep(){
    element.div('marquee',_dat.parent,'marquee')
    element.ul('marquee-content','marquee','marquee-content')
    var i;
    for(var i =0;i<images.length;i++){
     element.li('image' + i,'','marquee-content')
    element.image('',images[i],'image' + i)
    }
    slideit()
      }
  function slideit(){
      
  const root = document.documentElement;
  const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
  const marqueeContent = document.querySelector("ul.marquee-content");
  
  root.style.setProperty("--marquee-elements", marqueeContent.children.length);
  
  for(let i=0; i<marqueeElementsDisplayed; i++) {
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
  }      
  }
  },
  contact: function(parent){
        element.input('first','text','First name',parent)
        element.input('last','text','Last name',parent)
        element.input('phone','number','Phone Number',parent)
        element.input('email','email','Email address',parent)
  
      },


      //section.bar.animate(.2) to animate
  progress: function(parent,percentage,color,width,next,style){
    var ProgressBar = import('../script/progress.js')
const bar = {}
      if(!percentage){
        bar.number = '0';
      } else {
        bar.number = percentage;
      
      }
      if(!color){
        bar.style = 'blue';
      }else {
        bar.style = color;
      }
      if(!width){
        bar.size = '1';
      } else {
        bar.size = width
      }

        if(!style){
          console.log('missing progress bar type defaulting to line')
          style = 'line'
        }
        var url = '/script/' + style + '.js'
      

  
  $.getScript( url, function() {
    element.div('ele',parent)
var x = document.getElementById('ele')
x.style.height = '10px'
  }).done(function(){

    section.bar = new ProgressBar.Circle(ele, {
      strokeWidth: bar.size,
      easing: 'easeInOut',
      duration: 1400,
      color: bar.style,
      textShadow: '0rem 0rem 1rem #9283ff',
      trailColor: '#eee',
      trailWidth: 1,
      svgStyle: {width: '100%', height: '100%'},
      text: {
        style: {
          // Text color.
          // Default: same as stroke color (options.color)
          color: 'aliceblue',
          padding: 0,
          margin: 0,
          transform: null,
        },
        autoStyleContainer: true
      },
      from: {color: '#FFEA82'},
      to: {color: '#ED6A5A'},
      step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + ' %');
      }
    });
  }).then(function(){
section.bar.animate(bar.number)
if(next){
page[next]()
}
  })
    
  
    },

    
  screen: function(){
        var i = 0;
        document.addEventListener('click',function(e){
          i++
  
          var position = 'pos'+ i
          _dat[position] = e.screenX +' X '+ e.screenY;
  
          var x = document.getElementsByTagName('input')
          if(x){
          for(var s = 0; s<x.length;s++){
            var name = x[s].name;
            _dat[name] = x[s].value
          }
        }
        })
        
  
        
  
        
  },


  background: function(){


    var i = 0;
    function change() {
      var x = document.getElementsByTagName('body')[0]
      
      x.style.backgroundImage = 'url('+image[i]+')'
      i = (i + 1) % image.length;
    }
    setInterval(change, 10000);
    },




  next: function(id,parent,classname,text){
    element.div(id,parent,classname,text)
  }
}


// test
element.one = { test:function(stopper){
  if(stopper){
    alert(stopper)
  }
  alert('id')
}}



element.p = document.createElement('p')
page.body = document.getElementsByTagName('body')
page.head = document.getElementsByTagName('head')
page.input = document.getElementsByTagName('input')
page.li = document.getElementsByTagName('li')
page.div = document.getElementsByTagName('div')
page.p = document.getElementsByTagName('p')
page.ul = document.getElementsByTagName('ul')
element.text = function(id,text){
  document.querySelector(id).textContent = text;
}
page.remove = function(id){
  if(document.querySelector(id)){
  document.querySelector(id).remove()
}
}

page.removeChildren = function(id){
  let element = document.querySelector(id);
  
while (element.firstChild) {
  element.removeChild(element.firstChild);
}
}
 
//page.emptyForm = page.removeChildren('#'+_id)











const isNumericInput = (event) => {
	const key = event.keyCode;
	return ((key >= 48 && key <= 57) || // Allow number line
		(key >= 96 && key <= 105) // Allow number pad
	);
};

const isModifierKey = (event) => {
	const key = event.keyCode;
	return (event.shiftKey === true || key === 35 || key === 36) || // Allow Shift, Home, End
		(key === 8 || key === 9 || key === 13 || key === 46) || // Allow Backspace, Tab, Enter, Delete
		(key > 36 && key < 41) || // Allow left, up, right, down
		(
			// Allow Ctrl/Command + A,C,V,X,Z
			(event.ctrlKey === true || event.metaKey === true) &&
			(key === 65 || key === 67 || key === 86 || key === 88 || key === 90)
		)
};

const enforceFormat = (event) => {
	// Input must be of a valid number format or a modifier key, and not longer than ten digits
	if(!isNumericInput(event) && !isModifierKey(event)){
		event.preventDefault();
	}
};

const formatToPhone = (event) => {
	if(isModifierKey(event)) {return;}

	// I am lazy and don't like to type things more than once
	const target = event.target;
	const input = event.target.value.replace(/\D/g,'').substring(0,10); // First ten digits of input only
	const zip = input.substring(0,3);
	const middle = input.substring(3,6);
	const last = input.substring(6,10);

	if(input.length > 6){target.value = `(${zip}) ${middle} - ${last}`;}
	else if(input.length > 3){target.value = `(${zip}) ${middle}`;}
	else if(input.length > 0){target.value = `(${zip}`;}
};





























document.addEventListener("DOMContentLoaded", function(event) {
  //domain = _dat.domain.substring(0, _dat.domain.lastIndexOf("."))
  domain = track.domain.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('.')[0]
  

  
  })

  page.path = () => {

if(firstPath){
  _dat.selection = firstPath;
  element.script('/script/content.js')
  element.css('/css/vsdg-style.css')
 element.script('/script/'+firstPath+'.js')
 element.css('/css/'+firstPath+'.css')

}
  }