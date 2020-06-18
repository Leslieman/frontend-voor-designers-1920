## Description

Ik heb voor de eindopdracht heb ik een json gebruikt met dieren. In de objecten staat de naam en favoriete eten van het desbetreffende dier. Met javascript heb ik deze objecten uit de json ingeladen in de HTML als een string en verbonden aan afbeeldingen. Javascript luistert naar twee vormen van input; button klik en keydown event (spacebar)


## Interface
Ik heb geprobeerd de interface zo simpel mogelijk te houden.

04: Omdat de UI zo vanzelfsprekend is, is er geen ruimte voor de gebruiker om errors te maken. De gebruiker is volledig in controle.

08: De volgende stap is duidelijk voor de gebruiker door de tekstuele instructies. De knop en bovenstaande tekst geven duidelijk aan wat de gebruiker moet doen.

09: Ik heb geprobeerd om, het enige element dat interactief is op de pagina, zo klikbaar mogelijk eruit te laten zien. Dit heb ik gedaan d.m.v grootte, plaatsing en kleurgebruik. Hierdoor kan de gebruiker duidelijk zien dat de knop de call to action is.

11: Ik heb ervoor gezorgd dat de call to action bovenaan de visuele hierarchie staat. Overige visuele elementen zijn minder belangrijk en horen daarom kleiner en minder opvallend te zijn.



UI events: Je kunt deze applicatie bedienen met een Onclick (button) en keypress (spacebar) event.

Loading state: n.v.t
Ideal state: Deze staat is behaalt wanneer alle dieren zijn getoond
Empty state: Deze staat is wanneer er geen dieren zijn getoond.



## Code
Alle data uit de applicatie wordt uit 3 json bestanden gehaald die online staan. De drie bestanden hebben allemaal drie objecten met daarin de informatie over een dier. In javascript laad ik deze data in en zet ik in de variabele 'htmlString'. Deze variabele dient als tekstuele (string) placeholder voor elk object die opgehaald wordt uit de json bestanden. Vervolgens toont de applicatie het volgende dier wanneer de events keydown (spacebar) of onClick (button) voorkomen. Daarnaast heb ik nog beelden verbonden aan elk json object. 

De applicatie gaat door json objecten heen d.m.v een counter, in plaats van een for loop. Ik heb een counter gebruikt omdat ik hierdoor elk object aan een aparte foto kon verbinden. Bij elke click of keydown event telt de counter 1 erbij. Bij elke count staat er else if statement met een string die de foto ophaalt uit de bestanden en een object (en desbetreffende properties) ophaalt uit de json. Deze string wordt vervolgens aan het "beforeend" gedeelte van de animal-info div geplaatst. 

## Link


Demo: https://leslieman.github.io/frontend-voor-designers-1920/opdracht3/
Source code: https://github.com/Leslieman/frontend-voor-designers-1920/tree/master/opdracht3