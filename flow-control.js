function basicTeenager(age) {
  if(age > 19 || age < 13){
    return
  }
  return "You are a teenager!"
}

function teenager(age) {
  if(age > 19 || age < 13){
    return "You are not a teenager"
  }
  return "You are a teenager!"
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
    return (age > 12 && age < 20) ? "You are a teenager" : "You are not a teenager"
}

function switchAge(age) {
  switch(age){
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
      return "You are a teenager"
    default:
      return "You have an age"
  }
}
