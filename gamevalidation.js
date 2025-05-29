 var inputNumber = document.getElementById("number");
    var ckCheck = document.getElementById("ck");
    var resultCheck = document.getElementById("rs");

    var csNumber = Math.floor(Math.random()*10)+1;
    console.log(csNumber);

    function player(){

        var nNum = Number(inputNumber.value);
        

        if(isNaN(nNum)){
            resultCheck.textContent = "Please enter a number between 1 and 10";
            return;
        }

        var testResult = "Result : ";

        if (nNum == csNumber){
            resultCheck.textContent = testResult+"Player Win";
            return;
        }
            resultCheck.textContent = testResult+"Player Loss";
        
    }