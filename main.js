/************************ CONSTANTS AND VARIABLES *******************/ 
let needs = [];
let number = 0;
const promises = [11,12,13,14,15,21,22,23,24,32,33,34,35];
const blurbs = document.getElementsByClassName('blurb');
const downarrows = document.getElementById('down');

/************************ FUNCTIONS ***************************/
/* function forceToHidden : change the class to forbid element display */
function forceToHidden(element) {
    document.getElementById(element).className = "hidden";
}
/* function forceToVisible : change the class to enable element display */
function forceToVisible(element) {
    document.getElementById(element).classList = "visible"; 
}

/* function forceToFront : display the front face of the card */
function forceToFront(element) {
    document.getElementById(element).classList = "front"; 
}

/* function forceToBack : display the back face of the card */
function forceToBack(element) {
    document.getElementById(element).classList = "back"; 
}

/* function scrolldown : to move down from needs to promises */
function scrolldown() {
    document.querySelector('#promesses').scrollIntoView({
        behavior: 'smooth'
      });
}

/******************************* CODE *****************************/
/* loading page : all the cards and down/up arrows are hidden because no needs yet */
for (let number = 1; number <= 3; number++) {
    forceToHidden('P'+number);
}
    forceToHidden('downarrows');
    forceToHidden('titledown');

/* then examine every blurb to detect a clic on it and display the right front card and right li */
for(let blurb of blurbs) {
    blurb.addEventListener('click', (e) => {
        if(!blurb.style.boxShadow || e.currentTarget.style == '-webkit-box-shadow:  0px ') {
            e.currentTarget.style = '-webkit-box-shadow: 0px 0px 8px 3px #9bcafe, 0px 0px 4px 1px #245099; box-shadow: 0px 0px 8px 3px #9bcafe, 0px 0px 4px 1px #245099; border-radius: 15px; border: 3px solid #FFF';
        } else {
            e.currentTarget.style = '-webkit-box-shadow:  0px; box-shadow: 0px;';
          };
        if(needs.includes(e.currentTarget.id)) {
            needs = needs.filter(need => need !== e.currentTarget.id);
        } else {
            needs.push(e.currentTarget.id);
        }; 
        
        if(needs.length == 0) {
            forceToHidden('downarrows');
            forceToHidden('titledown');
            for (let number = 1; number <= 6; number++) {
                forceToHidden('P'+number);
            }
        } else {
            forceToVisible('downarrows');
            forceToVisible('titledown');
            forceToBack('P1');
            forceToBack('P2');
            forceToBack('P3');
            for(let i = 0; i < promises.length; i++) {
                forceToHidden('PR'+promises[i]);
            };
            if(needs.includes('1')){
                forceToFront('P1');
                forceToFront('P3');
                forceToVisible('PR11');
                forceToVisible('PR15');
                forceToVisible('PR32');
                forceToVisible('PR33');
                forceToVisible('PR34');
                forceToVisible('PR35');
            } 
            if(needs.includes('2')){
                forceToFront('P1');
                forceToVisible('PR12');
            } 
            if(needs.includes('3')){
                forceToFront('P1');
                forceToFront('P2');
                forceToVisible('PR13');
                forceToVisible('PR21');
                forceToVisible('PR22');
            }
            if(needs.includes('4')){
                forceToFront('P1');
                forceToFront('P2');
                forceToVisible('PR14');
                forceToVisible('PR24');
            } 
            if(needs.includes('5')){
                forceToFront('P2');
                forceToVisible('PR23');
            }
            if(needs.includes('6')){
                forceToFront('P1');
                forceToFront('P2');
                forceToVisible('PR14');
                forceToVisible('PR23');
                forceToVisible('PR24');
            }
            downarrows.addEventListener('click', (e) => {
                scrolldown()});
        }
    });}



