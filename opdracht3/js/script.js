
var header = document.querySelector('h1');
var btn = document.querySelector('#btn');
var info = document.querySelector('.animal-info');
var request = new XMLHttpRequest();

var counter = 1; //teller om door de objecten te rouleren


var pageCounter = 1; //teller om door de 3 json pagina's te rouleren 
var pageCounterTwo = 1; //teller om de eerste teller te helpen


btn.addEventListener("click", function(){
    request.open('GET', 'https://learnwebcode.github.io/json-example/animals-'+ pageCounter +'.json');
    request.responseType = 'json';

request.onload = function(){
const data = request.response;  
renderHTML(data);
};
request.send();


}); 




//luistert naar keydown event van de spacebar
window.addEventListener('keydown', checkKeyPress);

function checkKeyPress(key){
    if (key.keyCode == 32){
        request.open('GET', 'https://learnwebcode.github.io/json-example/animals-'+ pageCounter +'.json');
        request.responseType = 'json';
    
    request.onload = function(){
    const data = request.response;  
    renderHTML(data);
    };
    request.send();
    
    }
};

function renderHTML(data){
    var htmlString ="";
    
    if (counter === 1){
        htmlString += "<p>" + "<img src='images/01/01.jpg'>" + data[0].name + " is a " + data[0].species + " and likes: " + data[0].foods.likes + "</p>";
        counter++;
        info.insertAdjacentHTML('beforeend', htmlString);
    }
    else if (counter === 2){
        htmlString += "<p>" + "<img src='images/01/03.jpg'>" + data[1].name + " is a " + data[1].species + " and likes: " + data[1].foods.likes + "</p>";
        counter++;
        info.insertAdjacentHTML('beforeend', htmlString);
    }
    else if (counter === 3){
        htmlString += "<p>" + "<img src='images/01/02.jpg'>" + data[2].name + " is a " + data[2].species + " and likes: " + data[2].foods.likes + "</p>";        
        pageCounter++;
        counter++;
        info.insertAdjacentHTML('beforeend', htmlString);
    }
    else if (counter === 4){
        htmlString += "<p>" + "<img src='images/02/01.jpg'>" + data[0].name + " is a " + data[0].species + " and likes: " + data[0].foods.likes + "</p>";
        counter++;
        info.insertAdjacentHTML('beforeend', htmlString);
    }
    else if (counter === 5){
        htmlString += "<p>" + "<img src='images/02/03.jpg'>" + data[1].name + " is a " + data[1].species + " and likes: " + data[1].foods.likes + "</p>";
        counter++;
        info.insertAdjacentHTML('beforeend', htmlString);
    }
    else if (counter === 6){
        htmlString += "<p>" + "<img src='images/02/02.jpg'>" + data[2].name + " is a " + data[2].species + " and likes: " + data[2].foods.likes + "</p>";
        counter++;
        pageCounter++;
        info.insertAdjacentHTML('beforeend', htmlString);
    }
    else if (counter === 7){
        htmlString += "<p>" + "<img src='images/03/01.jpg'>" + data[0].name + " is a " + data[0].species + " and likes: " + data[0].foods.likes + "</p>";
        counter++;
        info.insertAdjacentHTML('beforeend', htmlString);
    }
    else if (counter === 8){
        htmlString += "<p>" + "<img src='images/03/03.jpg'>" + data[1].name + " is a " + data[1].species + " and likes: " + data[1].foods.likes + "</p>";
        counter++;
        info.insertAdjacentHTML('beforeend', htmlString);
    }
    else if (counter === 9){
        htmlString += "<p>" + "<img src='images/03/02.jpg'>" + data[2].name + " is a " + data[2].species + " and likes: " + data[2].foods.likes + "</p>";
        counter = 1;
        pageCounter = 1;
        info.insertAdjacentHTML('beforeend', htmlString);
    }
        
};

