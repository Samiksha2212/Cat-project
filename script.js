/* document.getElementById("main-heading").textContent="Navgurukul";
document.getElementById("main-heading").style.color="blue"; */

/* function changeStyle(){
    let head = document.getElementById("main-heading");
    head.textContent="Navgurukul";
    head.style.color="blue";
} */

function switchOff(){
    document.getElementById("bulb").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("bulb1").style.backgroundColor="green";
    document.getElementById("bulb2").style.backgroundColor="lightgrey";
    document.getElementById("catimage").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png"
    document.getElementById("head").textContent="switch off";

}
function switchOn(){
    document.getElementById("bulb").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("catimage").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png"
    document.getElementById("bulb2").style.backgroundColor="red";
    document.getElementById("head").textContent="switch on";
    document.getElementById("bulb1").style.backgroundColor="lightgrey";
    
}