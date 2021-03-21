var allData;

d3.dsv( ";", "../Data/pets-citizens.csv" )
  .then( function( data ) {
  	allData = data; 
  	localStorage.setItem("dat", JSON.stringify(allData));  
  } )

  .catch( function( error ) {
    // handle error   
  } );


  function add2(){
  
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
    //imagen
    var archivo = document.getElementById("file").files[0];
    var reader = new FileReader();
    var photo;
    if (file) {
    reader.readAsDataURL(archivo); 
  }else{
      console.log("2xd");
    }

    if(microchip != null && species != false && sex != false && size != "0" 
      && potentDangerous != false && neighborhood !="1" && race != null 
      && owner != null && address != null){
      alData.unshift({"microchip" : microchip, "species" : species, "sex" : sex, "size" : size, 
      "potentDangerous" : potentDangerous, "neighborhood" : neighborhood, "race" : race, "owner" : owner,
       "address" : address, "photo" : archivo});
    }
      else {
        console.log("xd");
      }
    
 }

 function updateArray(){
  var microchip = document.getElementById('Microchip').value;
  var neighborhood = document.getElementById('neighborhood').value;
  for (var i = 0; i < alData.length; i++) {
    var probar = alData[i].microchip;
    if ( probar == microchip) {
    alData[i] = {...alData[i],neighborhood : neighborhood};
  }
 }
 printData();
}
// function manojoDeArreglo(){

  //console.log(allData[allData.length-1]);
  //allData.push({"microchip" : "1312312", "species" : "1312312", "sex" : "1312312", "size" : "1312312", "potentDangerous" : "1312312", "neighborhood" : "1312312"});
  //console.log(allData[allData.length-1]);


//}