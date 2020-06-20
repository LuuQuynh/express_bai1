var express =require('express');
var app=express();
var port=3000;
app. get('/',function(request,response){
    response.send('<a href="https://coders-x.com/">CoderTokyo</a> ');
});
app.listen(port,function(){
    console.log("sever listenning on port"+port)
}) ;