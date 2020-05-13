var btnOne = document.querySelector('#btnOne');
var btnTwo = document.querySelector('#btnTwo');
var wList = document.querySelector('#watchtlist');





function changeText(event){    
    btnOne.style.display='none';
    btnTwo.style.display='block';
}



btnOne.addEventListener('click', changeText);









//var btn = document.querySelector("button");
//var watchlist = document.querySelector(".watchlist");
//
//
//function addToWatch(Event) {
//    var btnText = document.querySelector(".buttonText");
//    btnText.innerHTML("Movie has been added!");
//
//}
//
//
//btn.addEventListener('Click', addToWatch);
//
//
//
//console.log('hello world');
