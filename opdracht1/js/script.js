var btnOne = document.querySelector('#btnOne');
//var btnTwo = document.querySelector('#btnTwo');
var wList = document.querySelector('#watchlist');


function changeText(event){    
    btnOne.addEventListener('click', changeBack);
    btnOne.textContent='Added';
    btnOne.classList.add('fade');
    btnOne.style.background = "#56B13B";
    wList.textContent='watchlist(1)';
    wList.classList.add('fade');
}

function changeBack(event){
    btnOne.textContent='add to watchlist';
    btnOne.style.background = '#3a75c9';
    wList.textContent='watchlist';
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
