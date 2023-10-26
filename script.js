let docBody = document.querySelector("body");
docBody.style.backgroundImage = "url(reserve.jpg)";
docBody.style.backgroundRepeat = "no-repeat"
docBody.style.backgroundSize = "100% 100%"
docBody.style.backgroundAttachment = "fixed";
docBody.style.fill = "white";

let mainDiv = document.createElement("div");
mainDiv.style.height = "100%";
mainDiv.style.width = "100%"; 
mainDiv.style.display = "flex";
mainDiv.style.justifyContent = "center";
mainDiv.style.alignItems = "center";
mainDiv.style.backgroundColor = "#0000002d";
docBody.appendChild(mainDiv);

let sphereDiv = document.createElement("div");
sphereDiv.style.height = "80%";
sphereDiv.style.width = "35%";
sphereDiv.style.display = "flex";
sphereDiv.style.justifyContent = "center";
sphereDiv.style.alignItems = "center";
sphereDiv.style.border = "5px solid #b0dfd5";
sphereDiv.style.boxShadow = "0px 0px 30px #8db4ac";
mainDiv.appendChild(sphereDiv);

let customForm = document.createElement("form");
customForm.style.height = "100%";
customForm.style.width = "100%";
customForm.style.display = "flex";
customForm.style.flexDirection = "column";
customForm.style.alignItems = "center";
customForm.style.fontFamily = "'Zeyada', cursive";
customForm.style.textAlign = "center";
customForm.style.color = "#b0dfd5";
customForm.style.textShadow = "0px 0px 40px #8db4ac";
sphereDiv.appendChild(customForm);

let customText = document.createElement("div");
customText.style.height = "10%";
customText.style.width = "100%";
customText.style.fontSize = "70px";
customText.style.margin = "30px 10px 30px 10px";
customText.style.top;
customText.innerHTML = "Enter your question";
customForm.appendChild(customText);

let customInput = document.createElement("input");
customInput.style.height = "7%";
customInput.style.width = "70%";
customInput.style.borderRadius = "20px";
customInput.style.margin = "10px";
customInput.style.fontFamily = "'Zeyada', cursive";
customInput.style.fontSize = "48px";
customInput.style.textAlign = "center";
customInput.style.color = "#b0dfd5";
customInput.style.backgroundColor = "#0000002d";
customInput.style.border = "0px";
customInput.style.boxShadow = "0px 0px 30px #8db4ac";
customInput.style.textShadow = "0px 0px 40px #8db4ac";
customForm.appendChild(customInput);

let spherePlace = document.createElement("div");
spherePlace.style.height = "59%";
spherePlace.style.width = "71%";
spherePlace.style.margin = "40px 10px 10px 10px";
spherePlace.style.display = "flex";
spherePlace.style.justifyContent = "center";
spherePlace.style.alignItems = "center";
spherePlace.style.borderRadius = "50%";
spherePlace.style.backgroundImage = "url(balls.png)";
spherePlace.style.backgroundRepeat = "no-repeat";
spherePlace.style.backgroundPosition = "center center";
spherePlace.style.backgroundSize = "113% 114%";
spherePlace.style.backgroundClip = "border-box";
spherePlace.style.boxShadow = "0px 0px 30px #1d6656, 0px 0px 40px #155346";
customForm.appendChild(spherePlace);


let sphereAnswer = document.createElement("div");
sphereAnswer.style.fontSize = "160px";
sphereAnswer.style.height = "100%";
sphereAnswer.style.width = "100%";
sphereAnswer.style.display = "flex";
sphereAnswer.style.justifyContent = "center";
sphereAnswer.style.alignItems = "center";
sphereAnswer.style.borderRadius = "100%";
sphereAnswer.style.opacity = "1";

spherePlace.onclick = () => {
    if(customInput.value != "")
    {
        let rnd = Math.floor(Math.random()*2);
        let trigger;
        if(rnd == 0){
            shake();
            setTimeout(()=>{
                stopShake();
                sphereAnswer.innerHTML = "Yes";
                spherePlace.appendChild(sphereAnswer);
                sphereAnswer.style.backgroundColor = "#2c7e3a31";
                spherePlace.style.boxShadow = "0px 0px 30px #2c7e3a";
                customInput.style.color = "#398145";
                customForm.style.color = "#398145";
                sphereDiv.style.border = "5px solid #2c7e3a";
                sphereDiv.style.boxShadow = "0px 0px 30px #2c7e3a";
                customInput.style.backgroundColor = "#2c7e3a31";
                mainDiv.style.backgroundColor = "#2c7e3a31";
                setTimeout(clearFunc,2000);
            },2000);
        }
        if(rnd == 1){
            shake();
            setTimeout(()=>{
                stopShake();
                sphereAnswer.innerHTML = "No";
                spherePlace.appendChild(sphereAnswer);
                sphereAnswer.style.backgroundColor = "#91191931";
                spherePlace.style.boxShadow = "0px 0px 30px #911919";
                customInput.style.color = "#b33232";
                customForm.style.color = "#b33232";
                sphereDiv.style.border = "5px solid #b33232";
                sphereDiv.style.boxShadow = "0px 0px 30px #b33232";
                customInput.style.backgroundColor = "#91191931";
                mainDiv.style.backgroundColor = "#91191931";
                setTimeout(clearFunc,2000);
            },2000);
        }
    }
};

let trigger;

function shake(){
    trigger = setInterval(()=>{
        let rndMargin = Math.floor(Math.random()*4);
        let rndSide = Math.floor(Math.random()*4);
        let top = 40;
        let right = 10;
        let bottom = 10;
        let left = 10;
        if(rndSide == 0){
            top+=rndMargin;
            spherePlace.style.marginTop = top+"px";
        }
        if(rndSide == 1){
            right+=rndMargin;
            spherePlace.style.marginRight = right+"px";
        }
        if(rndSide == 2){
            bottom+=rndMargin;
            spherePlace.style.marginBottom = bottom+"px";
        }
        if(rndSide == 3){
            left+=rndMargin;
            spherePlace.style.marginLeft = left+"px";
        }
    },1)
}

function stopShake(){
    clearInterval(trigger);
    spherePlace.style.margin = "40px 10px 10px 10px";
}

function clearFunc(){
    sphereAnswer.innerHTML = "";
    customInput.value = "";
    sphereAnswer.style.backgroundColor = "";
    spherePlace.style.boxShadow = "0px 0px 30px #1d6656, 0px 0px 40px #155346";
    customForm.style.color = "#b0dfd5";
    customInput.style.color = "#b0dfd5";
    sphereDiv.style.border = "5px solid #b0dfd5";
    sphereDiv.style.boxShadow = "0px 0px 30px #8db4ac";
    customInput.style.backgroundColor = "#0000002d";
    mainDiv.style.backgroundColor = "#0000002d";
}