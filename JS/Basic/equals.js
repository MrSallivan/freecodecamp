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
