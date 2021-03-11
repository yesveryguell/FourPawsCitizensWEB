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

    console.log("robin hijo de la verga");
    var microchip = document.getElementById('Microchip').value; 
    var species = document.getElementById('c').value; 
    var species2 = document.getElementById('f').value; 
    var sex = document.getElementById('m').value;
    var sex2 = document.getElementById('f').value;
    var size = document.getElementById('size').value;
    var potentDangerous = document.getElementById('t').value;
    var potentDangerous2 = document.getElementById('f').value;
    var neighborhood = document.getElementById('neighborhood').value;
    var race = document.getElementById('race').value;
    var owner = document.getElementById('owner').value;
    var address = document.getElementById('address').value;
    /*console.log(escribir); */

    alData.push({"microchip" : microchip, "species" : species || species2, "sex" : sex || sex2, "size" : size, 
      "potentDangerous" : potentDangerous || potentDangerous2, "neighborhood" : neighborhood, "race" : race, "owner" : owner, "address" : address});
    printData(); 

    
 }

 function manojoDeArreglo(){

  console.log(allData[allData.length-1]);
  allData.push({"microchip" : "1312312", "species" : "1312312", "sex" : "1312312", "size" : "1312312", "potentDangerous" : "1312312", "neighborhood" : "1312312"});
  console.log(allData[allData.length-1]);


}
