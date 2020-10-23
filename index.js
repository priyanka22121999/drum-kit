var numbers=document.getElementsByClassName("drum");
for (var i = 0; i < numbers.length; i++) {
  document.getElementsByClassName("drum")[i].addEventListener("click", handle);
  function handle(){
    var sound= this.innerHTML;
makeSound(sound);
buttonAnimation(sound);
}
}
 document.addEventListener("keypress", function(event) {
   makeSound(event.key);
   buttonAnimation(event.key);
 })
 function makeSound(key){
   switch (key) {
     case "w":
     var audio= new Audio("sounds/tom-1.mp3");
     audio.play();
       break;
       case "a":
       var audio= new Audio("sounds/tom-2.mp3");
       audio.play();
         break;
         case "s":
         var audio= new Audio("sounds/tom-3.mp3");
         audio.play();
           break;
           case "d":
           var audio= new Audio("sounds/tom-4.mp3");
           audio.play();
             break;
             case "j":
             var audio= new Audio("sounds/snare.mp3");
             audio.play();
               break;
               case "k":
               var audio= new Audio("sounds/crash.mp3");
               audio.play();
                 break;
                 case "l":
                 var audio= new Audio("sounds/kick-bass.mp3");
                 audio.play();
                   break;
     default:
    console.log(sound);

   }
 }
function buttonAnimation(currentkey){
var activeButton =  document.querySelector("." + currentkey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
