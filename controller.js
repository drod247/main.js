
console.log('Developed by | David Rodriguez | @vsdg_group | https://vsdg.net' );

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
const path = {};
var date = new Date(); // date object
_dat.currentYear = date.getFullYear()
var ua = window.navigator.userAgent;
var isIE = /MSIE|Trident/.test(ua);

if ( isIE ) {
  document.body.innerHTML = '<h1>Please Update your browser or switch to chrome</h1>'
}


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





action.ajax = (serialized,url,subject) => {
if(subject){
  track.subj = subject
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


  action.fetch = (url,name) => {
    fetch(url, {
      
    }).then(d => {
      return d.json()
    
    }).then(d =>{
      json[name] = d
      console.log('Success:', d);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
  




action.post = (url,dat) =>{


 fetch(url, {
              method: 'POST',
              credentials: 'same-origin',
              mode: 'same-origin',
              headers: {
                'Accept':       'application/json',
                'Content-Type': 'application/json',

              },
              body: JSON.stringify({search: dat}),
          }).then(d => {
            // console.log('Success:', d);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
     
        }




        const axiosPostCall = async (url,dat) => {
          try {
            const { data } = await axios.post(url,  {
            // your expected POST request payload goes here
            title: "My post title",
            body: dat
            })
         // enter you logic when the fetch is successful
            console.log(`data: `, data)
         
          } catch (error) {
        // enter your logic for when there is an error (ex. error toast)
            console.log(`error: `, error)
          }
        }
      










action.fetch3 = () => {
  fetch('../functions/post-test.php', {
    method: 'POST',
    credentials: 'same-origin',
    mode: 'same-origin',
    headers: {
      'Accept':       'application/json',
      'Content-Type': 'application/json',

    },
    body: JSON.stringify({track}),
}).then(d => {
    console.log('Success:', d);
  })
  .catch((error) => {
    console.error('Error:', error);
  });


}



action.fetch2 = () => {
 fetch('../functions/post-test.php', {
    method: 'POST',
    credentials: 'same-origin',
    mode: 'same-origin',
    headers: {
      'Accept':       'application/json',
      'Content-Type': 'application/json',

    },
    body: JSON.stringify({track}),
});


}


action.post3 = (url,dt) => {

  const jsonString = JSON.stringify(Object.assign({}, dt)) 
  const json_obj = JSON.parse(jsonString);
  fetch(url, {
    method: 'POST', // or 'PUT'
    body: json_obj,
  })
  .then(d => {
    console.log('Success:', d);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

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
  
  //page.ajax(track,track.post)
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
  track.facebook = this.is_fb_loggedin

if(url){
  track.url = url
} else {
  alert('Missing track.url')
  throw new Error("Something went badly wrong!");
}

if(!info){
  console.log('Missing tracking data ')
}
    
    fetch('https://api.freegeoip.app/json/?apikey=f93d03d0-8d54-11ec-abbd-215a257d2458',{
    
    }).then(function(response) {
      return response.json()
    }).then(function(d){
      track.loaction = '----------------------'
      track.city = d.city
      track.ip = d.ip
      track.latitude = d.latitude
      track.longitude = d.longitude
      track.landing_zip = d.zip_code
 }).then(function(){
page.device()
 })
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
 page.exit(_id)
 }


















page.exit = (_id) => {
  if(!track.url){
    console.log('mising track.url')
  } 

  if(!track.page){
    track.page = firstPath
  }
var url = track.url

action.post(url,track)
//action.ajax(track,url,'Landing')

  document.body.onmouseleave = () => {

    


    track.brake = '---------------------------'
  for(var key in _dat) {
    track[key] = _dat[key]
    
      }
  }
  var count = 0;
setInterval(function() {
  if (count > 60) { // We check if the timer is in seconds or mins
    var time = ++count; // We get a copy of the time in 'seconds'
    time = parseInt(time / 60); // We convert it to mins
    track.timming =  ++count + 'm'
  } else { // Simmilarly we can also add a condition to check hours with s=3600
  track.timming =  ++count + 's'
  }
}, 1000);

window.addEventListener('beforeunload', function (e) {

  // Cancel the event

  e.preventDefault(); // If you prevent default behavior in Mozilla Firefox prompt will always be shown
  // Chrome requires returnValue to be set
  e.returnValue = 'Hello';
action.post(url,track)
  
  //action.ajax(track,url,'Exit')

});
       
  //window.alert('not')

  /*track.subj = 'exit'
  page.ajax(track,track.post)


var message = "60 seconds away from saving $$$.",
e = e || window.event;
// For IE and Firefox
if (e) {
e.returnValue = message;
}

// For Safari
return message;
*/












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
      form.id = _dat.id;
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
  
  
  





    


page.loop_tag = (json,max) => {
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

    var e = document.createElement(tag)
    if(json.id){
    e.id = json.id
    }
    if(json.classname){
      e.className = json.clasname
    }
    if(json.value){
      e.value = json.value
    }
    if(type){
      e.type = json.type
    }
   
      e.name = json.id
    



    if(json.tagname == 'input'){
      e.addEventListener('keydown , blur',function(){
        var name = this.name
        track[name] = this.value

      })
    }

    if(json.tagname == 'select'){
      e.addEventListener('change',function(){
        var name = this.name
        track[name] = this.value

      })
    }

    if(json.tagname == 'li'){
      e.addEventListener('click',function(){
        var name = this.name
        track[name] = this.value

      })
    }



    if(json.next){
      e.addEventListener(listener,function(){
        page[next](id)
      })
    }
    


    document.querySelector(parent).appendChild(e)

    var name = e.tagName
    json[name] = id
    var name = e.tagName +1
    tag[name]= _id + 1


    element[tag](e[json.item],e[json.item],parent,next)
    
    })
        
    
    part2.forEach(e => {
    
    
    //element[tag](e[json.item],e[json.item],parent,next,'','load')
    //document.querySelector('.load').setAttribute('style','display:none;')
    
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










element.select = function(id,parent,next,param,classname){
  var e = document.createElement('select')
  
  e.id = id;
  if(classname){
    e.className = classname
  }
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
        var name = e.name
        track[name] = this.value

        _dat[name] = this.value
      })
      document.querySelector(parent).appendChild(e)
      
var nam = e.tagName
  json[nam] = name
  

      
      
}




element.label = function(text,parent){
       var e = document.createElement('label')
      e.textContent = text
      e.title = text
      document.querySelector(parent).appendChild(e)
      
var name = e.tagName
  json[name] = id

      
}












element.div = function(id,parent,classname,text,setattribute){
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

        if(setattribute){
        e.attribute
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

        }
        if(src){
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




element.range = (min,max,name) => {
  json[name] = []
  for (var i = min; i < max; i++){
    json[name].push(i)
  }
 }




 element.range_desc = (min,max,name) => {
   json[name] = []
  for (var i = max; i > min; i--){
    json[name].push(i)
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
      
        import(url).then(function(){
  
    element.div('ele',parent)
var x = document.getElementById('ele')
x.style.height = '10px'
  }).then(function(){

    section.bar = new ProgressBar.line(ele, {
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
selector = (selector) => {
  return document.querySelector(selector)
}





tag.p = document.createElement('p')
tag.body = document.getElementsByTagName('body')
tag.head = document.getElementsByTagName('head')
tag.input = document.getElementsByTagName('input')
tag.li = document.getElementsByTagName('li')
tag.div = document.getElementsByTagName('div')
tag.p = document.getElementsByTagName('p')
tag.ul = document.getElementsByTagName('ul')
element.text = function(id,text){
  document.querySelector(id).textContent = text;
}
page.remove = (id) => {
  if(document.querySelector(id)){
  document.querySelector(id).remove()
}
}

page.removeChildren = (id) => {
  if(document.querySelector(id)){
  let element = document.querySelector(id);
  
while (element.firstChild) {
  element.removeChild(element.firstChild);
}
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
  var name = this.name
  track[name] = this.value
};

const formatToPhone = (event) => {

  var name = this.name
  track[name] = this.value
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














page.slide = (id,parent,duration,folder) => {
  tag.id = id
  tag.parent = parent
  
var obj = parent.split('#').join('')
json[obj] = []

 element.div(id,parent)

  fetch(folder)
  .then(res => res.text()) 
  .then(text => {

    var doc = document.createElement("html");
    doc.innerHTML = text;
    var links = doc.getElementsByTagName("a")
    
    for (var i=0; i<links.length; i++) {
      if( links[i].getAttribute("href").match(/\.(jpe?g|png|gif)$/) ){
        json[obj].push(links[i].getAttribute("href"));
      }
    }

    element.div('container','#'+tag.id,'dsd')


  }).then(function(){
   


  for (var i = 0; i < json[obj].length; i++) {
    console.log(folder+ '/'+ json[obj][i])

   // element.div('#container','mySlide')
    var img = folder +  '/'+json[obj][i]
    element.image('',img,'#container','mySlide')
   
  }
  }).then(function(){
    var slideIndex = 0;
    function showSlides() {
      var i;
      json.slides = document.querySelectorAll(".mySlide");
      for (i = 0; i < json.slides.length; i++) {
        json.slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > json.slides.length) {
        slideIndex = 1;
      }

      json.slides[slideIndex - 1].style.display = "block";
      setTimeout(showSlides, duration); // Change image every 2 seconds
    }
    showSlides()
  })


  }















page.marquee = (parent,folder) => {
   json.parent =  parent;
 
 page.image(folder)
 page.time('prep',100)
 page.prep = () => {
   element.div('marquee',json.parent,'marquee')
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
 }
























page.fetch = (url,typeofresponse) => {
fetch(url)
.then(res => res[typeofresponse]())
.then(typeofresponse => {
  return typeofresponse
})
}


































page.image = (folder,next) => {
    
  fetch(folder)
  .then(res => res.text()) 
  .then(text => {
  


    var doc = document.createElement("html");
    doc.innerHTML = text;
    var links = doc.getElementsByTagName("a")
    
    for (var i=0; i<links.length; i++) {
      if( links[i].getAttribute("href").match(/\.(jpe?g|png|gif)$/) ){
        image.push(links[i].getAttribute("href"));
      }
    }



  }).then(function(){
    if(next){
      page[next]()
    }
  })

},

































      //section.bar.animate(.2) to animate
      page.progress = (parent,color,size,container,percentage,textcolor,type) => {
        if(!container){
          container = 'container'
        }
style[container] ={
  width: '156px',
margin: 'auto',
background: 'white',
borderRadius: '50%',
height: '156px',
top: '-75px',
position: 'relative'
}

        element.div(container,parent)

        if(type || type == 'Line'){
         var jsfile = 'progressbar.js'
        } else {
          var jsfile = 'progressbar.js'
          
        }
      import('/scr/'+jsfile).then(function(){    
      
      page.progressbar = new ProgressBar[type]('#'+container, {
        strokeWidth: size,
        easing: 'easeInOut',
       // duration: duration,
        color: color,
        trailColor: '#eee',
        trailWidth: size,
        svgStyle: {width: '100%', height: '100%'},
        text: {
          style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: textcolor,
            padding: 0,
            margin: 0,
            transform: null
          },
          autoStyleContainer: false
        },
        from: {color: '#FFEA82'},
        to: {color: '#ED6A5A'},
        step: (state, bar) => {
          bar.setText(Math.round(bar.value() * 100) + ' %');
        }

      })


}).then(function(){
page.progressbar.animate('.'+percentage)
if(style != 'Line'){
page.style('#'+container,style[container])
}

})


}
    




page.time = (current,next, time_miliseconds,) => {
  page[current]()
    setTimeout(function() {

        page[next]();
    }, time_miliseconds )
    
}




page.address_fields = (parent) =>{
console.log(parent)
element.div('street_add',parent)

element.div('street','#street_add')
element.label('Address','#street')
element.input('street-address','text','Street address','#street')

element.div('sta','#street_add')

element.label('State','#sta')
element.input('state','text','State','#sta','FL')

element.div('zip','#street_add')
element.label('Zip code','#zip')
if(_dat.zip){
var elem = document.querySelector("#state");
// it's a good idea to check whether the element exists
if (elem != null && elem != undefined) {
  elem.disabled = "disabled";
}
element.input('postal-code','text','Zip code','#zip',_dat.zip)
} else {

element.input('postal-code','text','Zip code','#zip')
}
}




page.contact = (parent,id,classname) =>{
 
  if(!id){
    id = 'contact'
  }
  if(!classname){
    classname = id
  }
  element.div(id,parent)

  element.div('_first','#'+id)
  element.label('First name','#_first')
element.input('first','text','First name', '#_first','',classname)

element.div('_last','#'+id)
element.label('Last name','#_last')
element.input('last','text','Last name', '#_last','',classname)

element.div('_phone','#'+id)
element.label('Phone number','#_phone')
element.input('phone','tel','Phone number', '#_phone','',classname)

element.div('_email','#'+id)
element.label('Email address','#_email')
element.input('email','email','Email address', '#_email','',classname)
//page.style(input)

//document.querySelector(parent > id > +'div >input').setAttribute('stile',page.s)

}








action.split = (objName, data_to_split,count) => {
  console.log(data_to_split)
var name = objName
var name1 = objName+1
json[name] = []
json[name1] = []
json[name] = data_to_split.slice(0,count).reverse()
json[name1] = data_to_split.slice(count).reverse()
}











page.bar = (parent,color,backgroundcolor,speed,next,time_miliseconds) =>{
  background = backgroundcolor.split('#').join('')
  forground = color.split('#').join('')

  element.div(background,parent)
  element.div('bar'+forground,'#'+background)
  var e = document.querySelector('#bar'+forground)
  var s = document.querySelector('#'+background)
  e.style.width = '1%',
  e.style.height = '30px',
  e.style.backgroundColor = color
  e.style.transition = 'ease-in-out 1s'
  s.style.width = '100%',
  s.style.backgroundColor = backgroundcolor


  var i = 0;
  page.move = () => {

    if (i == 0) {
      i = 1;
      var elem = document.querySelector('#bar'+forground);
      var width = 1;
      var id = setInterval(frame, speed);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          i = 0;
        } else {
          width++;
          elem.style.width = width + "%";
        }
      }
    }
  }
  if(next){
  page.time('move',next,time_miliseconds)
  }
}














page.slide = (id,parent,duration,folder,next) => {
  tag.id = id
  tag.parent = parent
  
var obj = parent.split('#').join('')
json[obj] = []

 element.div(id,parent)

  fetch(folder)
  .then(res => res.text()) 
  .then(text => {

    var doc = document.createElement("html");
    doc.innerHTML = text;
    var links = doc.getElementsByTagName("a")
    
    for (var i=0; i<links.length; i++) {
      if( links[i].getAttribute("href").match(/\.(jpe?g|png|gif)$/) ){
        json[obj].push(links[i].getAttribute("href"));
      }
    }

    element.div('container','#'+tag.id,'dsd')


  }).then(function(){
   


  for (var i = 0; i < json[obj].length; i++) {
    console.log(folder+ '/'+ json[obj][i])

   // element.div('#container','mySlide')
    var img = folder +  '/'+json[obj][i]
    element.image('',img,'#container','mySlide')
   
  }
  }).then(function(){
    var slideIndex = 0;
    function showSlides() {
      var i;
      json.slides = document.querySelectorAll(".mySlide");
      for (i = 0; i < json.slides.length; i++) {
        json.slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > json.slides.length) {
        slideIndex = 1;
      }

      json.slides[slideIndex - 1].style.display = "block";
      setTimeout(showSlides, duration); // Change image every 2 seconds
    }
    showSlides()
  }).then(function(){
    if(next){
    page[next]()
    }
  })






  }







page.css = ()=>{

var spin = {
  position: 'fixed',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}



var spin_after = {
  content: '""',
width: '80px',
height: '80px',
border: '2px solid #f3f3f3',
borderTop: '3px solid #2f9ee9',
borderRadius: '100%',
willChange: 'transform',
animation: 'spin 1s infinite linear'
}


  var style = {
    width: '1px',
    height: '1px',
    backgroundColor: 'red',
    transform: 'rotateZ(45deg)',
}
var styleToString = (style) => {
    return Object.keys(style).reduce((acc, key) => (
        acc + key.split(/(?=[A-Z])/).join('-').toLowerCase() + ':' + style[key] + ';'
    ), '');
};


}






page.spin = ()=>{

  var spinner = {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
  
  
  
  var spinner_after = {
    content: '""',
  width: '80px',
  height: '80px',
  border: '2px solid #f3f3f3',
  borderTop: '3px solid #2f9ee9',
  borderRadius: '100%',
  willChange: 'transform',
  animation: 'spin 1s infinite linear'
  }
  
  




  
    var style = {
      width: '1px',
      height: '1px',
      backgroundColor: 'red',
      transform: 'rotateZ(45deg)',
  }
  var styleToString = (style) => {
      return Object.keys(style).reduce((acc, key) => (
          acc + key.split(/(?=[A-Z])/).join('-').toLowerCase() + ':' + style[key] + ';'
      ), '');
  };
  
  
  }
  



  page.styleToString = (style) => {
    return Object.keys(style).reduce((acc, key) => (
        acc + key.split(/(?=[A-Z])/).join('-').toLowerCase() + ':' + style[key] + ';'
    ), '');
  };
  
  
  page.style = (id,css) => {
  page.styleToString = (style) => {
      return Object.keys(style).reduce((acc, key) => (
          acc + key.split(/(?=[A-Z])/).join('-').toLowerCase() + ':' + style[key] + ';'
      ), '');
  };
  document.querySelector(id).setAttribute('style',page.styleToString(css))
  }
  
  


  page.check = (tagname,next) => {

    var e = document.querySelectorAll(tagname)
    for(var i = 0; i < e.length; i++){
      if(e[i].value == ''){
        alert('Please type '+ e[i].placeholder.toLowerCase())
        e[i].focus()
        break;
      } else {
        page[next]()
        break
      }
    }
    
    }












import('/script/content.js')


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