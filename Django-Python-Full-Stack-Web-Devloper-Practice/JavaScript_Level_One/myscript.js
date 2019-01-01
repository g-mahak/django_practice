var name = prompt("ENTER YOUR name")
var age = prompt("enter your age(in cm)")
var petname = prompt("enter your petname")
var height = prompt("enter your height")

if(petname[petname.length - 1] == 'y' && (age > 20 && age < 30) && height >= 170){
  var nameparts = name.split(" ")
  console.log("first nam eis " + nameparts[0])
  console.log("last nam eis " + nameparts[nameparts.length - 1])
  if(nameparts[0][0] == nameparts[nameparts.length -1][0])
  {

    console.log("you are a spy !!!")
  }

}
