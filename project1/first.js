//use for loop
for (i=5 ;i>=0; i--){
  document.write(i + "","<br>");
}

// while loop
x=100;
while (x<105) {
  document.write(x + "","<br>");
  x++;
  
}

//do while
x=15;
do{
  document.write(x + "","<br>");
  x++;
  }while(x < 20);




// continue
for (i=5; i>=0;i--){
  if (i==3){
    continue;
  }
  document.write(i + "","<br>");
}

//break
for (i=25; i>=20;i--){
  if (i==23) {
    break;    
  }
  document.write(i + "","<br>");
}

// function
function add2num(num1,num2) {
  return num1 + num2;  
}
sum = add2num(76,99);
document.write("76 + 99=" + sum,"<br>");

// Event handling
function alertMessage(message) {
  alert(message)
  
}

