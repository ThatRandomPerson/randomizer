var firstnum = document.getElementById("firstnum").value;
var secondnum = document.getElementById("secondnum").value;
var num = Math.floor(Math.random() * secondnum) + firstnum;
document.getElementById('answer').innerHTML= num;
