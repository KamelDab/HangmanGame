const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const hangmanAnswers = [['France','The Capital is Paris','Country'],['Lewandowski','Best polish soccer Player','Person'],['Mozart','famous czlowiek orkiestra composer','Person'],['Banana', 'Long fucking popular something','Fruit']];
const hangmanContainer = document.getElementById('hangmanContainer')
const alphabetContainer = document.getElementById('alphabetContainer');
let errorCount = 0;


for(let i = 0; i < alphabet.length; i++){
    const letter = document.createElement('div');
    letter.innerHTML = alphabet.split('')[i];
    letter.className = 'letter';
    letter.addEventListener('click', function(){
        if(word[0].toUpperCase().includes(alphabet[i])){
        //wyswietl litere w odpowiednim miejscu w hasle
        let indexOfWord = indexOfAll(word[0].toUpperCase(),letter.innerHTML);
            for(let j = 0; j < indexOfWord.length; j ++){
                hangmanContainer.children[indexOfWord[j]].innerHTML = letter.innerHTML;
            }
        // console.log(alphabet[i]);
        }else{
            //glowa
           
            errorCount ++;
            
            switch(errorCount){
            case 1:
                ctx.beginPath();
                ctx.arc(250, 90, 30, 0, 2 * Math.PI);
                ctx.stroke();
                break;
            case 2:
                lineCreator(250,200,120,170);
                break;
            case 3:
                lineCreator(250,300,120,170);
                break;
            case 4: 
                lineCreator(250,250,120,220);
                break;
            case 5:
                lineCreator(250,200,220,270);
                break;
            case 6:
                lineCreator(250,300,220,270);
                //game over funkcja czy cos wymyslec
                break;
            };
           
            //wyswietlaj szubienice w odpowiedniej kolejnosci
      

        };
        

    })
    alphabetContainer.appendChild(letter);
}


var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");



function lineCreator(X1,X2,Y1,Y2){
    ctx.beginPath();
    ctx.moveTo(X1, Y1);
    ctx.lineTo(X2, Y2);
    ctx.stroke();
}

function indexOfAll(array, searchItem) {
    var i = array.indexOf(searchItem),
        indexes = [];
    while (i !== -1) {
      indexes.push(i);
      i = array.indexOf(searchItem, ++i);
    }
    return indexes;
  }


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


