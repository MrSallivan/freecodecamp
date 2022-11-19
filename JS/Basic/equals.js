// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");

// Setup
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);
/////////////////////////////

function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }

  if (val > 10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);

/////////////////////////////////////////////////
function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >= 25) {
    return 'Yes'
  }

  // Only change code above this line
  return "No";
}

testLogicalAnd(10);

////////////////////////
function testElse(val) {
  let result = "";
  // Only change code below this line

  if (val > 5 && val <=5 ) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  } 

  // Only change code above this line
  return result;
}

testElse(4);
//////////////////////////////////////
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
if (strokes === 1) {
  return names[0]
}
if(strokes <= par - 2) {
  return names[1]
}
if(strokes == par - 1) {
  return names[2]
}
if(strokes == par) {
  return names[3]
}
if(strokes == par + 1) {
  return names[4]
}
if(strokes == par + 2) {
  return names[5]
}
if(strokes >= par + 3) {
  return names[6]
}

  return "Change Me";
  // Only change code above this line
}

golfScore(5, 4);
//////////////////////////////////////////switch
function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
switch (val){
  case 1:
    answer = 'alpha'
    break
  case 2:
    answer = 'beta'
    break
  case 3:
    answer = 'gamma'
    break
  case 4:
    answer = 'delta'
    break
}


  // Only change code above this line
  return answer;
}

caseInSwitch(1);
