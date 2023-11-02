function myFunction() {
     
        

  var optionValue = document.getElementById("dropdown").value;
  //document.getElementById("output").innerHTML = optionValue;

  console.log(optionValue);

  if (optionValue=="Basico") { console.log("El seguro elegido es el Basico y su costo es de $500");
   costo="Basico $500";} 
  else if(optionValue=="Intermedio") {console.log("El seguro elegido es el Intermedio y su costo es de $1000");
   costo="Intermedio $1000";}
  else {console.log("El seguro elegido es el Premium y su costo es de $1500");
       costo="Premium $1500";
     }

   console.log(costo);
   
   document.getElementById('coste').innerHTML=costo;
 }  