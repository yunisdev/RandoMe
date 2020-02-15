var getData;
var mypromise = new Promise(function(success,fail){
    var request = XMLHttpRequest();
    request.open('GET','https://randomuser.me/api',true);
    request.send();
    request.onerror = fail;
    request.onload = success;
});
mypromise.then(function(data){
    getData = data;
    console.log(data);
}).catch(function(){
    console.log('error');
});