var numArray = [],randomNum,compNum;
var divTag, text, attID, attClass, onclikckAtt;
var uniqueArray;

//generating all the 9 div with their attributes
    for(var i=0; i<9; i++){
        divTag = document.createElement("div");
        divTag.className = "grid-item";
        divTag.id = i;
        //onclickAtt = document.createAttribute("onclick");
        //onclickAtt.value = "myFunc(numArray[" +i+ "])";
        //divTag.setAttributeNode(onclickAtt);
        document.getElementById("divID").appendChild(divTag); 
        divTag.setAttribute("role","button");
        console.log(divTag);
    }
    
    //call to generate random numbers to be displayed in the 9 divs
    generateNumbers();

    //creating comp generated random num
    console.log("after the generatedNumber func is called: "+compNum);
    document.querySelector(".answer").textContent = " ";

    //generating unique random numbers
function generateNumbers(){             
    for(var i=0; i<9; i++){
        randomNum = Math.floor((Math.random() * 100)+1);
        numArray[i] = randomNum;
    }
    uniqueArray = [...new Set(numArray)];

    while(uniqueArray.length<9){
        uniqueArray[uniqueArray.length++]  = Math.floor((Math.random() * 100)+1);
        uniqueArray = [...new Set(uniqueArray)];
        
    }
    console.log(numArray);
    console.log(uniqueArray);
    for(var i=0 ; i<9; i++){
        document.getElementById(i).textContent = uniqueArray[i];
    }
    compNum = numArray[Math.floor(Math.random() * numArray.length)-1];
}

    //for new game button
function newGame(){
    generateNumbers();
    console.log("when new game is pressed: "+compNum);
}

  //comparison function using event listeners(bubbling concept)
document.getElementById("divID").addEventListener('click', function(event) {
   // if(event.target !== event.currentTarget){
        var selected = event.target.id;
        // console.log(event.target.id);
        // console.log(uniqueArray[selected]);
        if(compNum == uniqueArray[selected]){
            document.querySelector(".answer").textContent = "Success!!!!!";
        }else if(uniqueArray[selected] < compNum){
            document.querySelector(".answer").textContent = "lesser";
        }else{
            document.querySelector(".answer").textContent = "greater";
        }
   // }
});