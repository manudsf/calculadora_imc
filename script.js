var idade = document.getElementById("idade");  
var altura = document.getElementById("altura");  
var peso = document.getElementById("peso");  
var masculino = document.getElementById("m");  
var feminino = document.getElementById("f");  
var form = document.getElementById("form");  
function validateForm(){  
 if(idade.value=='' || altura.value=='' || peso.value=='' || (masculino.checked==false && feminino.checked==false)){  
  alert("Preencha todas as informações!");  
  document.getElementById("submit").removeEventListener("click", countBmi);  
 }else{  
  countBmi();  
 }  
}  
document.getElementById("submit").addEventListener("click", validateForm);  
function countBmi(){  
 var p = [idade.value, altura.value, peso.value];  
 if(masculino.checked){  
  p.push("masculino");  
 }else if(feminino.checked){  
  p.push("feminino");  
 }  
 form.reset();  
 var bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100);  
 var result = '';  
 if(bmi<18.5){  
  result = 'Abaixo do peso';  
   }else if(18.5<=bmi&&bmi<=24.9){  
  result = 'Saudável';  
   }else if(25<=bmi&&bmi<=29.9){  
  result = 'Sobrepeso';  
   }else if(30<=bmi&&bmi<=34.9){  
  result = 'Obeso';  
   }else if(35<=bmi){  
  result = 'Obesidade extrema';  
   }  
 var h1 = document.createElement("h1");  
 var h2 = document.createElement("h2");  
 var t = document.createTextNode(result);  
 var b = document.createTextNode('IMC: ');  
 var r = document.createTextNode(parseFloat(bmi).toFixed(2));  
 h1.appendChild(t);  
 h2.appendChild(b);  
 h2.appendChild(r);  
 document.body.appendChild(h1);  
 document.body.appendChild(h2);  
 document.getElementById("submit").removeEventListener("click", countBmi);  
 document.getElementById("submit").removeEventListener("click", validateForm);  
}  
