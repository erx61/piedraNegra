console.log('Running');


const d = new Date();
let hour = d.getHours();
// console.log('time -> ' + hour);

var menuType = hour > 7 && hour < 15 ? false : true;
// console.log('menuType -> ' +menuType);



                // MENU PIEDRA NEGRA
if(menuType){
    document.getElementById("piedraNegra-menu").style.display='block';
    // var piedraNegraMenu = document.getElementById("piedraNegra-menu");
    // piedraNegraMenu.style.display = "block";
    var piedraNegraBtn = document.getElementById("piedraNegra-btn");
    piedraNegraBtn.style.opacity = "30%";
    piedraNegraBtn.style.borderRadius = "30%";
    piedraNegraBtn.style.border = "5px solid red";

    // piedraNegraMenu.style.opacity = "30%";


}else{
    document.getElementById("donBirria-menu").style.display = "block";
    var donBirriaBtn = document.getElementById("donBirria-btn");
    donBirriaBtn.style.opacity = "30%";
    donBirriaBtn.style.borderRadius = "30%";
    donBirriaBtn.style.border = "5px solid red";
    // donBirriaBtn.style.hov
}

function showPiedraNegra(){
    console.log('show piedra negra');
    
    document.getElementById("piedraNegra-menu").style.display='block';
    document.getElementById("donBirria-menu").style.display = "none";    

    // Don birria botton
    var piedraNegraBtn = document.getElementById("donBirria-btn");
    piedraNegraBtn.style.opacity = "1";
    piedraNegraBtn.style.borderRadius = "20px";
    piedraNegraBtn.style.border = "none";

    // Piedra negra botton
    var piedraNegraBtn = document.getElementById("piedraNegra-btn");
    piedraNegraBtn.style.opacity = "30%";
    piedraNegraBtn.style.borderRadius = "30%";
    piedraNegraBtn.style.border = "5px solid red";    
}

function showDonBirria(){
    console.log('show DON BIRRIA');
    
    document.getElementById("donBirria-menu").style.display='block';
    document.getElementById("piedraNegra-menu").style.display = "none";

    // Don birria botton
    var piedraNegraBtn = document.getElementById("piedraNegra-btn");
    piedraNegraBtn.style.opacity = "1";
    piedraNegraBtn.style.borderRadius = "20px";
    piedraNegraBtn.style.border = "none";

        // Piedra negra botton
    var piedraNegraBtn = document.getElementById("donBirria-btn");
    piedraNegraBtn.style.opacity = "30%";
    piedraNegraBtn.style.borderRadius = "30%";
    piedraNegraBtn.style.border = "5px solid red";    
    document.getElementById("donBirria-menu").style.transition = "all 20s";
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


// function hideElement(){
//     document.getElementById("divDon").style.display = "block";
//  }