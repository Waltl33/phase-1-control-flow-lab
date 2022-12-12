function scuberGreetingForFeet(distance){
  // Write your code here!
  if(distance <= 400)
  return "This one is on me!";

} 
// else if (distance > 400 && distance < 2000) {
//   return "That will be twenty bucks."
// }
// } else if (distance > 2000) {
//   return "That will be thirty bucks"

function ternaryCheckCity(city){
  // Write your code here!
// const city = "NYC"
let response 

city==="NYC"? response = "Ok, sounds good." : response = "No go."
return response;
}
function switchOnCharmFromTip(){
  // Write your code here!
  let tip
  if (tip === "generous") {
    return "Thank you so much."
  } else if (tip === "!generous"){
    return "Thank you"
  }else{
    return "Bye."
  }
}