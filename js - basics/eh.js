// var divs = document.getElementsByTagName("div");
// console.log(divs);
// for(var i=0; i<divs.length; i++){
//     var ids = divs[i].onclick = function(event){
//         event = event || windows.event;
//         if(event.stopPropagation){
//             event.stopPropagation();
//         }
//         this.style.borderColor = 'red';
//     }
// }

// console.warn("ffff");
// var di = document.getElementById("hi");
// console.log("text:"+di.getAttribute("data-test"));

// if(di.getAttribute("data-test"))
//     console.log("yes");
// else    
//     console.log("no");


// // if(localStorage){
// //     localStorage.setItem("name","qwerty");
// //     document.querySelector("#hi").innerHTML = localStorage.getItem("name");
// // }else{
// //     console.log("not supported");
// // }
// i();
// function i(){
//     var q =6;
//     j();
//     function j(){
//         var w =7;
//         console.log(q,w);
//     }
// }

var abc = function(name){
    this.name = name;
    this.age = function(){
        console.log("in age");
    }
}

abc.prototype.init = function(){
this.qa = "qa";
    //console.log(qa);
    who();
    this.age();
    this.him = function(){
        console.log("in him");
    }
    function who(){
        console.log("private func");
    }
}

 var ABC = new abc("hi");
 ABC.init();
ABC.him();
console.log(ABC.qa);

function validate(obj, lowval, hival) {
    console.log(obj);
    if ((obj.value < lowval) || (obj.value > hival))
      console.log('Invalid Value!');
      else{
        console.log('valid Value!'); 
      }
  }