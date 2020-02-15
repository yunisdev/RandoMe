var mypromise = new Promise(function(res,rej){
    var request = new XMLHttpRequest();
    request.open('get','https://randomuser.me/api/');
    request.onload = res;
    request.onerror = rej;
    request.send();
});
mypromise.then(function(data){
    userDataT = JSON.parse(data.target.response).results[0];
    console.log(userDataT);
    requiredDATA = [];
    

}).catch(function(){
    console.log('error');
});