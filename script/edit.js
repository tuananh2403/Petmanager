'use strict';
const sidebarTitleEl = document.getElementById('sidebar-title');
		const sidebarEl = document.getElementById('sidebar');
		sidebarTitleEl.addEventListener('click', function () {
			sidebarEl.classList.toggle('active');
		});
		let idPet = document.getElementById("input-id");
		let namePet = document.getElementById("input-name");
		let agePet = document.getElementById("input-age");
		let typePet = document.getElementById("input-type");
		let weightPet = document.getElementById("input-weight");
		let lengthPet = document.getElementById("input-length");
		let colorPet = document.getElementById("input-color-1");
		let breedPet = document.getElementById("input-breed");
		let vaccinatedPet = document.getElementById("input-vaccinated");
		let dewormedPet = document.getElementById("input-dewormed");
		let sterilizedPet = document.getElementById("input-sterilized");
		let tableBodyEl = document.getElementById("table")
		function renderListPet(){
			let data = localStorage.getItem('listPet') ? JSON.parse(localStorage.getItem('listPet')) : [];
			let table = `
				<thead>
				<tr>
					<th scope="col">ID</th>
					<th scope="col">Name</th>
					<th scope="col">Age</th>
					<th scope="col">Type</th>
					<th scope="col">Weight</th>
					<th scope="col">Length</th>
					<th scope="col">Breed</th>
					<th scope="col">Color</th>
					<th scope="col">Vaccinated</th>
					<th scope="col">Dewormed</th>
					<th scope="col">Sterilized</th>
					<th scope="col">Date Added</th>
					<th scope="col">Action</th>
				</tr>
			</thead>
		`
		data.forEach((pet,index) => {
			let petId = index;
			index++; 
			table +=`<tr>
					<th>${pet.Id}</th>
					<td>${pet.Name}</td>
					<td>${pet.Age}</td>
					<td>${pet.Type}</td>
					<td>${pet.Weight} kg</td>
					<td>${pet.Length} cm</td>
					<td>${pet.Breed}</td>
					<td>
						<i class="bi bi-square-fill" style="color: ${pet.Color}"></i>
					</td>
					<td><i class="bi bi-${pet.Vaccinated ? "check" : "x"}-circle-fill"></i></td>
					<td><i class="bi bi-${pet.Dewormed ? "check" : "x"}-circle-fill"></i></td>
					<td><i class="bi bi-${pet.Sterilized ? "check" : "x"}-circle-fill"></i></td>
					<td>${pet.Date}</td>
					<td><button type="button" class="btn btn-warning" onclick = "editPet('${pet.Id}')">
					Edit</button>
					</td>
					</tr>`
				});
			document.getElementById('table').innerHTML = table;
		}
		renderListPet();
		// Hàm Edit pet
function editPet(x) {
		let form = document.getElementById('container-form')
		form.style.display = 'block'; // Hiển thị form
		let data = localStorage.getItem('listPet') ? JSON.parse(localStorage.getItem('listPet')) : [];
		data.forEach((pet,value) => {
		if (pet.Id == x) {
			idPet.value = pet.Id;
			 namePet.value = pet.Name;
			 agePet.value = pet.Age;
			 changeType(pet.Type);
			 typePet.value = pet.Type;
			 weightPet.value = pet.Weight;
			 lengthPet.value = pet.Length;
			 colorPet.value = pet.Color;
			 breedPet.value = pet.Breed;
			 vaccinatedPet.checked = pet.Vaccinated;
			 dewormedPet.checked = pet.Dewormed;
			 sterilizedPet.checked = pet.Sterilized
	}
}
)
}
function add() {
    let data = localStorage.getItem('listPet') ? JSON.parse(localStorage.getItem('listPet')): [];
    let date = new Date();
    let day = `${date.getDate()}/${date.getMonth() + 1}/${date.getYear()}`
    
    let inforPet = {
        Id: idPet.value,
        Name: namePet.value,
        Age: parseInt(agePet.value),
        Type: typePet.value,
        Weight: parseInt(weightPet.value),
        Length: parseInt(lengthPet.value),
        Color: colorPet.value,
        Breed: breedPet.value,
        Vaccinated: vaccinatedPet.checked,
        Dewormed: dewormedPet.checked,
        Sterilized: sterilizedPet.checked,
        Date : day,
    }
	
	let index = data.findIndex((c) => c.Id == inforPet.Id)
	console.log(index)
	if (index > -1) {
		data.splice(index,1,inforPet)
	}else {
		data.push(inforPet)
	}
	console.log(index)
    localStorage.setItem('listPet',JSON.stringify(data));
   renderListPet();
}
function changeType(x){
    let type  = x;
    let listBreed = JSON.parse(localStorage.getItem('listBreed'))
    let typeFilter = listBreed.filter(function(breed){
        return breed.Type === type;
    })
    let option =``;
    typeFilter.forEach((breed) => {
        option +=`
			<option>${breed.Breed}</option>
        `
    })
    document.getElementById('input-breed').innerHTML = option;
}