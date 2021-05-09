// // // var numberofword = document.querySelectorAll(".drum").length;
// // // for (var i = 0; i < numberofword; i++) {
// // //     document.querySelectorAll("button")[i].addEventListener("click", function() {
// // //             alert("I got Drum");
// // //         }

// // //     );
// // // }

// // var clickone = document.querySelectorAll(".drum").length;
// // for (var i = 0; i < clickone; i++) {
// //     document.querySelectorAll("button")[i].addEventListener("click", myYou);

// //     function myYou() {
// //         var buttonHTML = this.innerHTML;
// //         makeSound(buttonHTML);
// //     }
// // }
// // document.addEventListener("keypress", KeyboardEvent);

// // function KeyboardEvent(event) {
// //     makeSound(event.key);
// // }

// // function makeSound(key) {
// //     switch (key) {
// //         case "w":
// //             var tom1 = new Audio("sounds/tom-1.mp3");
// //             tom1.play();
// //             break;
// //         case "a":
// //             var tom2 = new Audio("sounds/tom-1.mp3");
// //             tom2.play();
// //             break;
// //         case "s":
// //             var tom3 = new Audio("sounds/tom-3.mp3");
// //             tom3.play();
// //             break;
// //         case "d":
// //             var tom4 = new Audio("sounds/tom-4.mp3");
// //             tom4.play();
// //             break;
// //         case "j":
// //             var crash = new Audio("sound/crash.mp3");
// //             crash.play();
// //             break;
// //         default:
// //     }
// // }

// var clickvao = document.querySelectorAll(".drum").length;
// for (var i = 0; i < clickvao; i++) {
//     document.querySelectorAll(".drum")[i].addEventListener("click", function() {
//         // document.querySelectorAll(".drum")[i].addEventListener("click", function() {
//         var youHave = this.innerHTML;
//         makeupSound(youHave);
//         buttonAni(youHave);
//     });
// }
// // function Daclick() {
// //     var youHave = this.innerHTML;
// //     makeupSound(youHave);
// // }
// document.addEventListener("keypress", keyBoard);

// function keyBoard(event) {
//     makeupSound(event.key);
//     buttonAni(event.key);
// }

// function makeupSound(key) {
//     switch (key) {
//         case "w":
//             var tom1 = new Audio("sounds/tom-1.mp3");
//             tom1.play();
//             break;
//         case "a":
//             var tom2 = new Audio("sounds/tom-2.mp3");
//             tom2.play();
//             break;
//         case "s":
//             var tom3 = new Audio("sounds/tom-3.mp3");
//             tom3.play();
//             break;
//         case "d":
//             var tom4 = new Audio("sounds/tom-4.mp3");
//             tom4.play();
//             break;
//         case "j":
//             var snare = new Audio("sounds/snare.mp3");
//             snare.play();
//             break;

//         case "k":
//             var crash = new Audio("sounds/crash.mp3");
//             crash.play();
//             break;

//         case "l":
//             var kick = new Audio("sounds/kick-bass.mp3");
//             kick.play();
//             break;

//         default:
//             console.log(key);
//     }
// }

function buttonAni(currentkey) {
    var buttonAniOne = document.querySelector("." + currentkey);
    buttonAniOne.classList.add("pressed");
    setTimeout(function() {
        buttonAniOne.classList.remove("pressed"), 100;
    });
}

var clickVao = document.querySelectorAll(".drum").length;

for (var i = 0; i < clickVao; i++) {
    var daClick = document
        .querySelectorAll(".drum")[i].addEventListener("click", function() {
            var youHave = this.innerHTML;

            mekeSound(youHave);

            hoverClick(youHave);
        });
}

function mekeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default:
            console.log(key);
    }
}
document.addEventListener("keypress", function(event) {
    mekeSound(event.key);
    hoverClick(event.key);
});

function hoverClick(currend) {
    var clickHover = document.querySelector("." + currend);
    clickHover.classList.add("pressed");
    setTimeout(function() {
        clickHover.classList.remove("pressed"), 100;
    });
}