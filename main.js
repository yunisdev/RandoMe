function sl(sel){
    return  document.querySelector(sel);
}
function generatePassword(){
    var len =Math.floor(Math.random() * 11+8);
    return len;
}
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
    udt = {
        name:userDataT.name.first + ' ' +userDataT.name.last,
        gender:userDataT.gender,
        login:{
            email:userDataT.email,
            password:generatePassword(),
            userName: userDataT.login.username,
        },
        photoSRC:userDataT.picture.large,
        nat:userDataT.nat,
        dob:userDataT.dob.date.substring(0,10)+'(yyyy-mm-dd)',
        phoneNum:userDataT.phone,
        address:{
            city: userDataT.location.city,
            country: userDataT.location.country,
            post: userDataT.location.postcode,
        }
    };
    main(udt);
    console.log('*************');
    console.log(udt);


}).catch(function(){
    console.log('error');
});

function main(data){
    sl('img#profileimg').setAttribute('src', data.photoSRC);
    sl('#fullname').innerHTML = data.name;
}