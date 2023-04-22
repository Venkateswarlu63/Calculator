let outputScreen = document.getElementById("output-screen");
function display(num){
      outputScreen.value += num;
}
function calculate()
{
    try{
        outputScreen.value = eval(outputScreen.value);
    }
    catch{
        alert("Invalid");
    }
}
function Clear(){
    outputScreen.value = "";
}
function dele(){
    outputScreen.value = outputScreen.value.slice(0,-1);
}