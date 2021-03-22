var dat = []
var aa = localStorage.getItem('dat');
dat = JSON.parse(aa);

printData();

function printData(){

	var table = document.getElementById('lines')

	for (var i = 0; i < 100; i++) {

		var row = `<tr>
		<td class="table-checkbox"><input type="checkbox"></td>
		<td>${dat[i].microchip}</td>
		<td>${dat[i].species}</td>
		<td>${dat[i].sex}</td>
		<td>${dat[i].size}</td>
		<td>${dat[i].potentDangerous}</td>
		<td>${dat[i].neighborhood}</td>
		<td>${dat[i].race}</td>
		<td>${dat[i].owner}</td>
		<td>${dat[i].address}</td>
		</tr>`

		table.innerHTML += row
	}

	

console.log(dat)
}

function ponerDato(selected){
	$('form').replaceWith('<form>');

	var table = document.getElementById('form')

		table.innerHTML = `<form name="registro" id="form">
                            <p style="color:black";> Microchip: <input type="text" id="Microchip" value=${selected.microchip} required></p>
                            <p style="color:black";> Species: <br />
                                <input style="color:black"; type="radio" name="holi" id= "Canine" value="Canine" required> Canine 
                                <input style="color:black"; type="radio" name="holi" id="Feline" value="Feline"> Feline
                            </p>
                            <p style="color:black";>Sex: <br />
                                <input type="radio" name="holi1" id="m" value="Male" required> Male
                                <input type="radio" name="holi1" id="f" value="Female"> Female
                            </p>
                            <p style="color:black";> Size: 
                                <select required id="size" required>
                                    <option value = "0">Seleccione una opcion</option>
                                    <option >Miniature</option>
                                    <option >Small</option>
                                    <option >Medium</option>
                                    <option >Big</option>
                                </select></p>
                                <p style="color:black";>potentDangerous: <br />
                                    <input type="radio" name="holi2" id="true" value="True" required> Yes
                                    <input type="radio" name="holi2" id="false" value="False"> No
                                </p>
                                <p style="color:black";> neighborhood: 
                                    <select id=neighborhood required>
                                        <option value = "1">Seleccione una opcion</option>
                                        <option value = "A. Nriño">A. Nriño</option>
                                        <option value = "B. Unidos">B. Unidos</option>
                                        <option value = "Bosa">Bosa</option>
                                        <option value = "C.Bolivar">C.Bolivar</option>
                                        <option value = "Chapinero">Chapinero</option>
                                        <option value = "Engativa">Engativa</option>
                                        <option value = "Fontibon">Fontibon</option>
                                        <option value = "Kennedy">Kennedy</option>
                                        <option value = "La candelaria">La candelaria</option>
                                        <option value = "Los martires">Los martires</option>
                                        <option value = "Municipios Aledaños Bogota D.C.">Municipios Aledaños Bogota D.C.</option>
                                        <option value = "P. Aranda">P. Aranda</option>
                                        <option value = "R. Uribe">R. Uribe</option>
                                        <option value = "San Cristobal">San Cristobal</option>
                                        <option value = "Santa Fe">Santa Fe</option>
                                        <option value = "Suba">Suba</option>
                                        <option value = "Sumapaz">Sumapaz</option>
                                        <option value = "Teusaquillo">Teusaquillo</option>
                                        <option value = "Tunjuelito">Tunjuelito</option>
                                        <option value = "Usaquen">Usaquen</option>
                                        <option value = "Usme">Usme</option>
                                        <option value = "Sin Identificar">Sin Identificar</option>
                                    </select></p>
                                    <p style="color:black";> Race: <input type="text" id="race" required></p>
                                    <p style="color:black";> Owner: <input type="text" id="owner" required></p>
                                    <p style="color:black";> Address: <input type="address-line1" id="address" required></p>
                                    <input type="file" id="file" accept="image/*"/><br>
                                    <img id="img"/>
                                    <input type="reset" value="Borrar">
                                </p>
                            </form>`
}


function prueba(){

	$('table').replaceWith('<table>');

	var table = document.getElementById('datatable')

		table.innerHTML = `<table id="datatable" class="datatable">
		<thead>
			<tr>
				
			</tr>
		</thead>
		<tbody id="lines">
		</tbody>

		</table>`
}

class DataTable{

	element;
	headers;
	items;
	copyItems;
	selected;
	pagination;
	numberOfEntries;
	headerButtons;
	constructor(selector, headerButtons){
		this.element = document.querySelector(selector);

		this.headers = [];
		this.items = [];
		this.pagination = {total: 0,
			noItemsPerPage: 0, 
			noPages: 0, 
			actual: 0, 
			pointer: 0, 
			diff: 0,
			lastPageBeforeDots: 0, 
			noButtonsBeforeDots: 4};

			this.selected = [];
			this.numberOfEntries = 10;
			this.headerButtons = headerButtons;
		}

		

		parse(){

			const headers = [...this.element.querySelector('thead tr').children];
			const trs = [...this.element.querySelector('tbody').children];

			headers.forEach(element =>{
				this.headers.push(element.textContent);
			});

			trs.forEach(tr =>{
				const cells = [...tr.children];

				const item = {
					id: this.generateUUID(),
					values:[]
				};

				cells.forEach(cell =>{
					if (cell.children.length > 0) {

					}else{
						item.values.push(cell.textContent);
					}
				});	
				this.items.push(item);
			});

			//console.log(this.items);

			this.makeTable();
		}

		makeTable(){
			this.copyItems = [...this.items];

			this.initPagination(this.items.length, this.numberOfEntries);

			const container = document.createElement('div');
			container.id = this.element.id;
			this.element.innerHTML = '';
			this.element.replaceWith(container);
			this.element = container;

			this.createHTML();
			this.renderHeaders();
			this.renderRows();
			this.renderPagesButtons();
			this.renderHeaderButtons();
			this.renderSearch();
			// this.renderSelectEntries();
		}

		initPagination(total, entries){
			this.pagination.total = total;
			this.pagination.noItemsPerPage = entries;
			this.pagination.noPages = Math.ceil(this.pagination.total/this.pagination.noItemsPerPage);
			this.pagination.actual = 1;
			this.pagination.pointer = 0;
			this.pagination.diff = this.pagination.noItemsPerPage - (this.pagination.total % this.pagination.noItemsPerPage);
		}

		generateUUID(){
			return (Date.now() * Math.floor(Math.random() * 100000)).toString();
		}

		createHTML(){
			this.element.innerHTML = `
			<div class="datatable-container">
			<div class="header-tools">
			<div class="tools">
			<ul class="header-buttons-container">
			</ul>
			</div>
			<div class="search">
			<input type="text" class="search-input">
			</div>
			</div>	
			<table class="datatable">
			<thead>
			<tr>	
			</tr>
			</thead>
			<tbody>
			</tbody>
			</table>
			<div class="footer-tools">
			<div class="list-items">
			Show
			<select name="n-entries" id="n-enties" class="n-entries">
			</select>
			entries
			</div>

			<div class="pages">	
			</div>
			</div>
			</div>
			</div>

			`;
		}

		renderHeaders(){
			this.element.querySelector('thead tr').innerHTML = '';

			this.headers.forEach(header =>{
				this.element.querySelector('thead tr').innerHTML += `<th>${header}</th>`;
			});

		}
		renderRows(){
			this.element.querySelector('tbody').innerHTML = '';

			let i = 0;
			const {pointer, total} = this.pagination;
			const limit = this.pagination.actual * this.pagination.noItemsPerPage;

			for(i = pointer; i < limit; i++){
				if (i == total) break;
				const {id, values} = this.copyItems[i];
				const checked = this.isChecked(id);

				let data = '';

				data += `<td class="table-checkbox">
				<input type="checkbox" class="datatable-checkbox" data-id="${id}" ${checked? "checked":""} />
				</td>`;

				values.forEach(cell =>{
					data += `<td>${cell}</td>`;
				});

				this.element.querySelector('tbody').innerHTML += `<tr>${data}</tr>`;

				//listener para el checkbox

				document.querySelectorAll('.datatable-checkbox').forEach(checkbox =>{
					checkbox.addEventListener('click', e =>{
						const element = e.target;
						const id = element.getAttribute('data-id');

						if(element.checked){
							const item = this.getItem(id);
							this.selected.push(item);
						}else{
							this.removeSelected(id);
						}
						console.log(this.selected);

						return this.selected;
					});
				});
			}
		}

		isChecked(id){
			const items = this.selected;
			let res = false;

			if(items.length == 0) return false;

			items.forEach(item =>{
				if(item.id == id) res = true;
			});

			return res;
		}

		getItem(id){
			const res = this.items.filter(item => item.id == id);
			if(res.length == 0) return null;
			return res[0];
		}

		removeSelected(id){
			const res = this.selected.filter(item => item.id != id);
			this.selected = [...res];
		}

		renderPagesButtons(){
			const pagesContainer = this.element.querySelector('.pages');
			let pages = '';

			const buttonsToShow = this.pagination.noButtonsBeforeDots;
			const actualIndex = this.pagination.actual;

			let limI = Math.max(actualIndex - 2, 1);
			let limS = Math.min(actualIndex + 2, this.pagination.noPages);
			const missinButtons = buttonsToShow - (limS - limI);

			if(Math.max(limI - missinButtons, 0)){
				limI = limI - missinButtons;
			}else if(Math.min(limS + missinButtons, this.pagination.noPages) != this.pagination.noPages){
				limS = limS + missinButtons;
			}

			if(limS < (this.pagination.noPages - 2)){
				pages += this.getIteratedButtons(limI, limS);
				pages += `<li>...</li>`;
				pages += this.getIteratedButtons(this.pagination.noPages - 1, this.pagination.noPages);
			}else{
				pages += this.getIteratedButtons(limI, this.pagination.noPages);
			}

			pagesContainer.innerHTML = `<ul>${pages}</ul>`;

			this.element.querySelectorAll('.pages li button').forEach(button =>{
				button.addEventListener('click', e =>{
					this.pagination.actual = parseInt(e.target.getAttribute('data-page'));
					this.pagination.pointer = (this.pagination.actual * this.pagination.noItemsPerPage) - this.pagination.noItemsPerPage;
					this.renderRows();
					this.renderPagesButtons();
				});
			});
		}

		getIteratedButtons(start, end){
			let res = '';
			for(let i = start; i <= end; i++){
				if (i == this.pagination.actual) {
					res += `<li><span class="active">${i}</span></li>`;
				}else{
					res += `<li><button data-page="${i}">${i}</button></li>`;
				}
			}

			return res;
		}


		renderHeaderButtons(){
			let html = '';
			const buttonsContainer = this.element.querySelector('.header-buttons-container');
			const headerButtons = this.headerButtons;

			headerButtons.forEach(button =>{
				html += `<li><button id="${button.id}"><i class="material-icons">${button.icon}</i></button></li>`;
			});

			buttonsContainer.innerHTML = html;

			headerButtons.forEach(button =>{
				document.querySelector('#' + button.id).addEventListener('click', button.action);
			})

		}
		renderSearch(){
			this.element.querySelector('.search-input').addEventListener('input', e =>{
				const query = e.target.value.trim().toLowerCase();

				if(query == ''){
					this.copyItems = [...this.items];
					this.initPagination(this.copyItems.length, this.numberOfEntries);
					this.renderRows();
					this.renderPagesButtons();
					return;
				}

				this.search(query);

				this.initPagination(this.copyItems.length, this.numberOfEntries);
				this.renderRows();
				this.renderPagesButtons();
			});
		}

		search(query){
			let res = [];

			this.copyItems = [...this.items];

			for(let i = 0; i < this.copyItems.length; i++){
				const {id, values} = this.copyItems[i];
				const row = values;

				for(let j = 0; j < row.length; j++){
					const cell = row[j];

					if(cell.toLowerCase().indexOf(query) >= 0){
						res.push(this.copyItems[i]);
						break;
					}
				} 
			}

			this.copyItems = [...res];
		}

// 		renderSelectEntries(){
// 			const select = this.element.querySelector('#n-entries');

// 			const html = [5,10,15].reduce((acc, item) => {
// 				return acc += `<option value="${item}" ${this.numberOfEntries == item? 'selected'} />`
// 			}, '');

// 			select.innerHTML = html;

// 			this.innerHTML = html;

// 			this.element.querySelector('#n-entries').addEventListener('change', e =>{
// 				const numberOfEntries = parseInt(e.target.value);
// 				this.numberOfEntries = numberOfEntries;

// 				this.initPagination(this.copyItems.length, this,numberOfEntries);
// 				this.renderRows();
// 				this.renderRows();
// 				this.renderPagesButtons();
// 				this.renderSearch();
// 			}); 
// //
// 		}

getSelected(){
	return this.selected;

}

add(item){
	const row = {
		id: this.generateUUID(),
		values:[]
	};

	row.values = [...item];
	this.items = [row, ...this.items];
	this.makeTable();
}

add2(){
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
      dat.unshift({"microchip" : microchip, "species" : species, "sex" : sex, "size" : size, 
      "potentDangerous" : potentDangerous, "neighborhood" : neighborhood, "race" : race, "owner" : owner,
       "address" : address, "photo" : archivo});
    }
      else {
        alert("Llene los campos vacios del formulario para agregar una nueva mascota.")
      }
}


update(){

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

}