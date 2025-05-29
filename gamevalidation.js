var inputNumber = document.getElementById("number");
var ckCheck = document.getElementById("ck");
var resultCheck = document.getElementById("rs");
var scoreCount = document.getElementById("score");

    var csNumber = Math.floor(Math.random()*10)+1;
    console.log(csNumber);
var score = 10;
    function player(){

        var nNum = Number(inputNumber.value);

        if(nNum ==""){
            resultCheck.textContent ="Please enter a number";
            return;
        }

        if(isNaN(nNum)){
            resultCheck.textContent = "Please enter number";
            return;
        }

        if(nNum<1 || nNum>=10){
            resultCheck.textContent = "Please enter number 1 to 10 only";
            return;
        }

        var testResult = "Result : ";

        if (nNum == csNumber){
            resultCheck.textContent = testResult+"Player Win";
            return;
        }
            resultCheck.textContent = testResult+"Player Loss";
            score=score-1
            scoreCount.textContent="Score:"+score;
    }

    const refresh = ()=>{
        location.reload()
    };