require.config({
    baseUrl: 'http://localhost:3000/js',
    paths : {
        "jquery" : ["https://cdn.bootcss.com/jquery/1.9.0/jquery.min",'jquery.min'],
        'slide':'superslide' 
    },
    shim:{
        'slide':['jquery']
    }
}); 

//common
require(["jquery"], function($) {	
    $(function(){
        $('.toggle').on('click',function(){
        	$('#header nav').slideToggle('fast');
        })
    })
});