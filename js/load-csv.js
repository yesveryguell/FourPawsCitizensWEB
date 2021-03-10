var alData;

d3.dsv( ";", "../Data/pets-citizens.csv" )
  .then( function( data ) {
  	alData = data; 
  	printData(); 
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
    var species = document.getElementById('cf').value; 
    var species = document.getElementById('mh').value; 
    console.log(escribir); 

    allData.push({"microchip" : "1312312", "species" : "1312312", "sex" : "1312312", "size" : "1312312", "potentDangerous" : "1312312", "neighborhood" : "1312312"});
    printData(); 

    
 }

 function manojoDeArreglo(){

  console.log(allData[allData.length-1]);
  allData.push({"microchip" : "1312312", "species" : "1312312", "sex" : "1312312", "size" : "1312312", "potentDangerous" : "1312312", "neighborhood" : "1312312"});
  console.log(allData[allData.length-1]);


}
