const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const hangmanAnswers = [['France','The Capital is Paris','Country'],['Lewandowski','Best polish soccer Player','Person'],['Mozart','famous czlowiek orkiestra composer','Person'],['Banana', 'Long fucking popular something','Fruit']];
const hangmanContainer = document.getElementById('hangmanContainer')
const alphabetContainer = document.getElementById('alphabetContainer');



for(let i = 0; i < alphabet.length; i++){
    const letter = document.createElement('div');
    letter.innerHTML = alphabet.split('')[i];
    letter.className = 'letter';
    letter.addEventListener('click', function(){
        
        if(word[0].toUpperCase().includes(alphabet[i])){
        console.log(alphabet[i]);
        };
        
    })
    alphabetContainer.appendChild(letter);
}


var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

//glowa
ctx.beginPath();
ctx.arc(250, 90, 30, 0, 2 * Math.PI);
ctx.stroke();


function lineCreator(X1,X2,Y1,Y2){
    ctx.beginPath();
    ctx.moveTo(X1, Y1);
    ctx.lineTo(X2, Y2);
    ctx.stroke();
}

//stickman
lineCreator(250,200,120,170);
lineCreator(250,300,120,170);
lineCreator(250,250,120,220);
lineCreator(250,200,220,270);
lineCreator(250,300,220,270);
// szubienica
lineCreator(250,300,220,270);
lineCreator(250,300,220,270);
lineCreator(250,300,220,270);
lineCreator(250,300,220,270);
lineCreator(250,300,220,270);

hangmanContainer.className = 'answers';
let word = hangmanAnswers[Math.floor(Math.random() * hangmanAnswers.length)];

for(let i = 0; i < word[0].length; i++){
const answer = document.createElement('div');
// answer.innerHTML = word[0][i];
answer.className = 'eachLetter';
hangmanContainer.appendChild(answer);
};

function showHint(){
    const hintText = document.getElementById('hintText');
    hintText.innerHTML = word[1];
};

const category = document.getElementById('category');
category.innerHTML = 'Category: ' + word[2];


