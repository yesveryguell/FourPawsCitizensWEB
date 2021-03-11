var alData;

d3.dsv( ";", "../Data/pets-citizens.csv" )
  .then( function( data ) {
  	alData = data; 
  	printData(); 
    prueba();
  } )

  .catch( function( error ) {
    // handle error   
  } );

  function printData(){
  	console.log(alData);
  }

  function prueba(){

    //animal species
    var especie = document.getElementById("Canine");
    var especie2 = document.getElementById("Feline");
    //sex of the animals
    var sexo = document.getElementById("m");
    var sexo2 = document.getElementById("f");
    //dangerous of the 
    var peligroso = document.getElementById("true");
    var peligroso2 = document.getElementById("false");

    var microchip = document.getElementById('Microchip').value;
    var species;
    if(especie.checked == true)
      species = especie.value;
    else if (especie2.checked == true)
      species = especie2.value;

    var sex;
    if(sexo.checked == true)
      sex = sexo.value;
    else if (sexo2.checked == true)
      sex = sexo2.value;

    var size = document.getElementById('size').value;

    var potentDangerous;
    if(peligroso.checked == true)
      potentDangerous = peligroso.value;
    else if (peligroso2.checked == true)
      potentDangerous = peligroso2.value;

    var neighborhood = document.getElementById('neighborhood').value;
    var race = document.getElementById('race').value;
    var owner = document.getElementById('owner').value;
    var address = document.getElementById('address').value;

    alData.push({"microchip" : microchip, "species" : species, "sex" : sex, "size" : size, 
      "potentDangerous" : potentDangerous, "neighborhood" : neighborhood, "race" : race, "owner" : owner,
       "address" : address});
     

    
 }

 function manojoDeArreglo(){

  console.log(allData[allData.length-1]);
  allData.push({"microchip" : "1312312", "species" : "1312312", "sex" : "1312312", "size" : "1312312", "potentDangerous" : "1312312", "neighborhood" : "1312312"});
  console.log(allData[allData.length-1]);


}
