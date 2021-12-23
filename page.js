element.css('/css/vsdg.css')
element.section.screen()
element.div('header','body')
element.div('container','header')
element.div('left','container')
element.image('logo','/images/logo.png','left')
element.div('center','container')
element.section.marquee('center')
element.div('right','container')
element.image('call','/images/logo.png','right')
element.div('content','body')
element.div('block','content')
element.div('head','block','','All top-rated insurance companies')

element.div('title','block','','Lowest price in 60 seconds')
element.form('block')
element.ul('insurance',_id)
element.input('zip','number','Zip code','insurance')
element.select ('type','insurance','Insureance type')
element.option('select','type','Select to compare')
element.option('auto','type','auto')
element.option('home','type','home')
element.option('commercial','type','commercial')
element.div('footer','body','footer')
var select = document.getElementById('type')
select.addEventListener('change',function(){
    _dat.selection = this.value;
    var next = this.value
     document.getElementById(this.parentNode.id).remove()

    element.section.address(_id,next)
})

functions.home = function(){
    document.getElementById(_id).firstChild.remove()
element.script('/script/home.js')
var s = document.getElementsByTagName('li')
for(var i = 0; i<s.length; i++){
    s[i].addEventListener('click',function(){
        var name = this.id;
        _dat[name] = this.value
        alert(this.parentNode.id)
    })
}
    
}


functions.auto = function(){
    element.script('auto.js')
}