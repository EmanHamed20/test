
// task1
 var myButton=document.getElementById("button");
 myButton.addEventListener("click",function(){
   let num1=prompt("enter first number")
    let num2 =prompt ("enter secon number")
     result=Number(num1)+Number(num2)
     console.log(result)
 })
// task2
function lessThan100(x,y){
(x+y)<100?console.log("true"):console.log(false)
}
lessThan100(60,30)
lessThan100(40+70)
// task3
function stringInt(x){
    console.log(parseInt(x))
}
stringInt("6")
stringInt("9 eman")
// task 4
for( let i=0;i<=5; i++){
    console.log("*".repeat(i))
}
function strored(x){
    word=x.split("").sort().join("")
    console.log(word)
}
strored("hello")
// task6


   
function deleteElement1(){
    var elementdelete=document.getElementById('one');
    elementdelete.parentNode.removeChild(elementdelete)
}
function deleteElement2(){
    var elementdelete=document.getElementById('two');
    elementdelete.parentNode.removeChild(elementdelete)
}
function deleteElement3(){
    var elementdelete=document.getElementById('three');
    elementdelete.parentNode.removeChild(elementdelete)
}
function deleteElement4(){
    var elementdelete=document.getElementById('four');
    elementdelete.parentNode.removeChild(elementdelete)
}


