const header = document.querySelector('h1');
const par = document.querySelector('p');
const btn = document.querySelector('button');

var ourRequest = new XMLHttpRequest();
var RequestSource = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';





btn.addEventListener('click', function(){
ourRequest.open('GET', RequestSource);
ourRequest.onload = function(){ //testen of de json is ingeladen
    const ourData = JSON.parse(ourRequest.responseText); // parsed de json naar javascript
 


    for (let i = 0; i < ourData.length; i++){
    console.log(ourData[i].title);
    par.textContent = ourData[i].title + ourData[i].plot;
}
};
ourRequest.send();
});





