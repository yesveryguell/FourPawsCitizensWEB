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