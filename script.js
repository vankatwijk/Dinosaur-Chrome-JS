var character = document.getElementById("character");
var block = document.getElementById("block");

function jump() {
    if (character.classList != "animate") {
        console.log('here');
        character.classList.add("animate");
    }
    setInterval(function() {
        character.classList.remove("animate");
    }, 500)
}

var checkDead = setInterval(function() {
    var characterTop =
        parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft =
        parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
        block.style.animation = "none";
        block.style.dispaly = "none";
        alert("you lost !!");
    }
}, 10);