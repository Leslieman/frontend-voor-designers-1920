var btnOne = document.getElementById('btnOne');
var btnTwo = document.getElementById('btnTwo');
var wList = document.getElementById('watchtlist');



function changeText(event){    
    btnOne.style.display='none';
    btnTwo.style.display='block';
    wList.innerText='watchlist(1)';
}



btnOne.addEventListener('click', changeText);



console.log('hello world');






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
