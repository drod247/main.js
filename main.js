const _dat = {};
const vsdg = {};
const element = {};
const email = {};
const functions = {};
const image = [];
const tag = {};
const page = {};
const section = {};

console.log('Developed by | David Rodriguez @vsdg_group | https://vsdg.net');





    _dat._id = 'id-'+new Date().getTime().toString()
    _dat.form = Math.floor(Math.random() * 1000) + 100;
    _dat.redi = document.referrer;
    _dat.url = window.location.href;

    _dat.dimentions = window.innerWidth + ' X '+ window.innerHeight;
    const queryString = window.location.search;
    _dat.code = queryString.substring(1, 5)
    _dat.domain = window.location.hostname
    _dat.cookie = document.cookie.split(";").reduce( (ac, cv, i) => Object.assign(ac, {[cv.split('=')[0]]: cv.split('=')[1]}), {});

    if(_dat.code == ''){
     var eq = "not privided";
    }
    const _id = _dat._id;
    
page.track = () =>{

  if(_dat.code == 'test'){
    _dat.ip = 'Test'
     _dat.latitude = 'Test'
     _dat.longitude = 'Test'
     _dat.Internet = 'Test'
  } else {

 $.getJSON("https://ip-api.io/api/json",
 
 function(data){
    _dat.ip = data.ip
     _dat.latitude = data.latitude
     _dat.longitude = data.longitude
     _dat.Internet = data.organisation
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
 
 _dat.browser=browser
 
 
 





 _dat.detectPhone = function()
 {
     var check = false;
     (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
     return check + ' mobile';
 }





 
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

  _dat.os = os;











     
        
     if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
 
     _dat.device='Mobile'
  } else {
    
    _dat.device='Desktop'
  }
 
 element.action._exit(_id)
 }




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

element.select = function(id,parent,text,next,param){
  var e = document.createElement('select')
  e.id = id;
  if(next){
    e.onchange = function(){

     var name = this.id
     _dat[name] = this.value 
     element[next](param)
     this.parentNode.remove()
    }
  }
  e.textContent = text
  document.querySelector(parent).appendChild(e)

}
element.option = function(id,parent,value){
  var e = document.createElement('option')
  e.id = id;
  e.name = id;
  e.textContent = value;
  document.querySelector(parent).appendChild(e)
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
      document.querySelector(parent).appendChild(e)
      
      
}
element.label = function(text,parent){
       var e = document.createElement('label')
      e.textContent = text
      e.title = text
      document.querySelector(parent).appendChild(e)
      
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
        }else{
        document.querySelector(parent).appendChild(e)
        }
}
element.span = function(id,parent){
      var e = document.createElement('span')
      e.id = id;
      document.querySelector(parent).appendChild(e)
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
}
element.ul = function(id,parent,classname){
        var e = document.createElement('ul')
        e.id = id;
        if(classname){
          e.className = classname;
        }
       if(parent){
        document.querySelector(parent).appendChild(e)
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

    if(next){
page[next](param)

//this.parentNode.remove();

 
  }
  })
  document.querySelector(parent).appendChild(e)
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
  ajax: function(subject,url){
  if(subject){
    _dat.subj = subject

  } 
  var is_root = location.pathname == "/";
  if(is_root == true){
var post = _dat.url;
  } else {
    var post = '../load.php'
  }

  $.ajax({
    async: true,
    type: "POST",
    url: post,
    data: _dat

  }).done(function(data){
  });

},
  _exit: function(_id){
  element.action.ajax("landing")
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
//document.getElementsByTagName('html')[0].addEventListener('mouseleave',function(event){
  var s = document.getElementsByTagName('input')
  
  if(!document.querySelector('modal')){
    var x = document.createElement('div')
    x.id = 'modal'
    document.body.appendChild(x)

  for(var i =0; i<s.length;i++){
    if(s[i].value !== ''){
    var key = s[i].name
    _dat[key] = s[i].value
    }

  } 
  //if(!event.target.getElementsByTagName('select')[0].value == 'type'){
    element.action.ajax('Exit')
  //}
  }
})
},
 listener: function(id,tagname,trigger,next){
  if(id){
    document.querySelector(id).addEventListener(trigger,function(){

      window[next]()
    })
  }
  if(tagname == 'body'){
    var c = document.getElementsByTagName('body')[0]
    c.addEventListener(trigger,function(){
      window[next]()
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
            var url = `https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(currentValue)}%20${_dat.zip}&limit=5&type=street&filter=countrycode:us&bias=proximity:${_dat.longitude},${_dat.latitude}|countrycode:none&apiKey=${apiKey}`;
            
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
       element.action.ajax('address')
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
  progress: function(parent,percentage,color,width,next){
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
  var url = '/script/line.js'
  $.getScript( url, function() {
    element.div('ele',parent)
var x = document.getElementById('ele')
x.style.height = '10px'
  }).done(function(){

    section.bar = new ProgressBar.Line(ele, {
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
  document.querySelector(id).remove()
}


page.removeChildren = function(id){
  let element = document.querySelector(id);
  
while (element.firstChild) {
  element.removeChild(element.firstChild);
}
}
 

page.emptyForm = page.removeChildren('#'+_id)






document.addEventListener("DOMContentLoaded", function(event) {
  //domain = _dat.domain.substring(0, _dat.domain.lastIndexOf("."))
  domain =_dat.domain.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('.')[0]
  //  element.css('/css/'+firstPath+'.css')
  element.script('/script/content.js')
  //element.css('/css/bootstrap.css')
  element.css('/css/style.css')

 // var content = '/script/content.js'

  //$.get(content)
  //.done(function() { 
      //exists code 
    //  console.log('loaded')
  //}).fail(function() { 
      // not exists code
      
 //})
  
  })

  

const firstPath = window.location.pathname.split('/')[1];
if(firstPath){
  _dat.selection = firstPath;
  element.script('/script/'+firstPath+'.js')
  element.css('/css/'+firstPath+'.css')

}
      
