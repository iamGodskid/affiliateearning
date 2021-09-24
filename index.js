let show = true;
var arr = [
    "Easy Withdrawal direct to Your Paypal",
    "No Deposits, No Upfronts...",
    "Earn More By Doing Less",
    "AFFILIATE EARNING.."
];
function mott(){
    const target = document.getElementById("txt");

if(show){
    for(i=0; i<=arr.length; i++){
    var index = Math.floor(Math.random()*arr.length);
var output=arr[index];
    }
}
target.innerText = output;

}
setInterval("mott()", 3000);


function stats(){
    var counter = 3570;
var valid = 0;
    var elem = document.getElementById("stattxt");
    if(show){
counter++;
valid = counter;
    }

    elem.innerText = valid;
}
setInterval("stats()", 3000);