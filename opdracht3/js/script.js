var pageCounter = 1;
var header = document.querySelector('h1');
var btn = document.querySelector('#btn');
var info = document.querySelector('.animal-info');
var request = new XMLHttpRequest();

btn.addEventListener("click", function(){
    request.open('GET', 'https://learnwebcode.github.io/json-example/animals-'+ pageCounter +'.json');
    request.responseType = 'json';

request.onload = function(){
const data = request.response;  
renderHTML(data);
};
request.send();
pageCounter++;
if (pageCounter > 3){
    pageCounter = 1;
}
}); 

function renderHTML(data){
    var htmlString ="";
    for (i = 0; i < data.length; i++){
        htmlString += "<p>" + data[i].name + " is a " + data[i].species + " and likes: " + data[i].foods.likes + "</p>";
    }

    info.insertAdjacentHTML('beforeend', htmlString);
};