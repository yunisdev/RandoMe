let userDataT;
var mypromise = new Promise(function(res,rej){
    var request = new XMLHttpRequest();
    request.open('get','https://randomuser.me/api/');
    request.onload = res;
    request.onerror = rej;
    request.send();
});
mypromise.then(function(data){
    userDataT = data.target.response;
    console.log(userDataT);
}).catch(function(){
    console.log('error');
});
var UserData = '';
console.log(UserData);