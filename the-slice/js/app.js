//button.onclick = function getEmail() {
//  var txt;
//  var person = prompt("Please enter your email:");
//  if (person == null || person == "") {
//    txt = "User cancelled the prompt.";
//  } else {
//    console.log(person);
//  }

$(".about_p").after("<button>Newsletter</button>")

$("button").click(function() {
    var input = prompt("Please Enter Your Email");
    console.log(input);
})