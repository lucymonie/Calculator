var calculator = document.getElementById('calc');
var display = document.getElementById('screen');
var clearAll = document.getElementById('all-clear');
var clearEntry = document.getElementById('clear-entry');
var divide = document.getElementById('divide');
var times = document.getElementById('times');
var plus = document.getElementById('plus');
var minus = document.getElementById('minus');
var equals = document.getElementById('equals');
var point = document.getElementById('point');
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');
var seven = document.getElementById('seven');
var eight = document.getElementById('eight');
var nine = document.getElementById('nine');
var zero = document.getElementById('zero');

clearAll.addEventListener('click', function(){
  display.innerHTML = '0';
  mathObj.first = null;
  mathObj.second = null;
  mathObj.op1 = null;
  mathObj.op2 = null;
  mathObj.temp = null;
  mathObj.numString = '';
});

clearEntry.addEventListener('click', function(){
  display.innerHTML = '0';
  mathObj.numString = '';
  mathObj.second = null;
});

var mathObj = {
  temp: null,
  numString: '',
  first: null,
  second: null,
  op1: null,
  op2: null
}

function addition() {
   mathObj.temp = mathObj.first + mathObj.second;
};

function subtraction() {
   mathObj.temp = mathObj.first - mathObj.second;
};

function division() {
   mathObj.temp = mathObj.first / mathObj.second;
};

function multiplication() {
   mathObj.temp = mathObj.first * mathObj.second;
};

function evalNum() {
  if(mathObj.first === null) {
    mathObj.first = Math.abs(mathObj.numString);
    display.innerHTML = mathObj.first;
  } else if(mathObj.first !== null && mathObj.second === null) {
    mathObj.second = Math.abs(mathObj.numString);
    display.innerHTML = mathObj.second;
  }
  mathObj.numString = '';
}

function callOperator() {
  if(mathObj.op1 === 'addition') {
      addition();      
    } else if(mathObj.op1 === 'subtraction') {
      subtraction();      
    } else if(mathObj.op1 === 'division') {
      division();      
    } else if(mathObj.op1 === 'multiplication') {
      multiplication();      
    }
    mathObj.first = mathObj.temp;
    display.innerHTML = mathObj.first;
    mathObj.second = null;
    mathObj.op1 = mathObj.op2;
    mathObj.op2 = null;
}

equals.addEventListener('click', function(e) {
  evalNum();
  if(mathObj.op1===null) { 
    mathObj.op1 = 'equals'; 
  } else { 
    mathObj.op2 = 'equals';
  }
  callOperator();
});

divide.addEventListener('click', function(e) {
  evalNum();
  if(mathObj.op1===null) { 
    mathObj.op1 = 'division'; 
  } else { 
    mathObj.op2 = 'division'; 
    callOperator();
  }
});

times.addEventListener('click', function(e) {
  evalNum();
  if(mathObj.op1===null) { mathObj.op1 = 'multiplication'; } 
  else { 
    mathObj.op2 = 'multiplication';
    callOperator();
  }
});

plus.addEventListener('click', function(e) {
  evalNum();
  if(mathObj.op1===null) { mathObj.op1 = 'addition'; } 
  else { 
    mathObj.op2 = 'addition';
    callOperator(); 
  }
});

minus.addEventListener('click', function(e) {
  evalNum();
  if(mathObj.op1===null) { mathObj.op1 = 'subtraction'; }
  else { 
    mathObj.op2 = 'subtraction';
    callOperator();
  }
});

point.addEventListener('click', function(e) {
  mathObj.numString += '.';
});

one.addEventListener('click', function(e) {
  mathObj.numString += '1';
  display.innerHTML = mathObj.numString;
});

two.addEventListener('click', function(e) {
  mathObj.numString += '2';
  display.innerHTML = mathObj.numString;
});

three.addEventListener('click', function(e) {
  mathObj.numString += '3';
  display.innerHTML = mathObj.numString;
});

four.addEventListener('click', function(e) {
  mathObj.numString += '4';
  display.innerHTML = mathObj.numString;
});

five.addEventListener('click', function(e) {
  mathObj.numString += '5';
  display.innerHTML = mathObj.numString;
});

six.addEventListener('click', function(e) {
  mathObj.numString += '6';
  display.innerHTML = mathObj.numString;
});

seven.addEventListener('click', function(e) {
  mathObj.numString += '7';
  display.innerHTML = mathObj.numString;
});

eight.addEventListener('click', function(e) {
  mathObj.numString += '8';
  display.innerHTML = mathObj.numString;
});

nine.addEventListener('click', function(e) {
  mathObj.numString += '9';
  display.innerHTML = mathObj.numString;
});

zero.addEventListener('click', function(e) {
  mathObj.numString += '0';
  display.innerHTML = mathObj.numString;
});