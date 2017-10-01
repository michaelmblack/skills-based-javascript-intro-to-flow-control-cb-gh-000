function basicTeenager(age) {
  if(age > 19 || age < 13){
    return
  }
  return "You are a teenager!"
}

function teenager(age) {

}

function ageChecker(age) {
  if(age < 13){
    return "You are a kid"
  }
  else if(age > 19){
    return "You are a grownup"
  }
  else{
    return "You are a teenager!"
  }
}

function ternaryTeenager(age) {
    (age > 12 && age < 20) ? ("You are a teenager") : ("You are not a teenager")
}

function switchAge(age) {

}
