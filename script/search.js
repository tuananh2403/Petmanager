const sidebarTitleEl = document.getElementById('sidebar-title');
		const sidebarEl = document.getElementById('sidebar');
		sidebarTitleEl.addEventListener('click', function () {
			sidebarEl.classList.toggle('active');
		});
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
			</tr>`
		});
	document.getElementById('table').innerHTML = table;
}
renderListPet();
// Hàm tìm kiếm Pet
function findPet(){
	let inputName = document.getElementById('input-name');
	let inputId = document.getElementById('input-id');
	let inputBreed = document.getElementById('input-breed');
	let inputType = document.getElementById('input-type');
	let inputDewormed = document.getElementById('input-dewormed')
	let inputSterilized = document.getElementById("input-sterilized");
	let inputVaccinated = document.getElementById("input-vaccinated");

	console.log(inputType.value);
	console.log(inputId.value);
	let data = localStorage.getItem('listPet') ? JSON.parse(localStorage.getItem('listPet')) : [];
	let arr = data.filter(value => {
		return value.Id.includes(inputId.value) && value.Name.includes(inputName.value) && value.Type.includes(inputType.value) && value.Breed.includes(inputBreed.value) && value.Dewormed == inputDewormed.checked && value.Vaccinated == inputVaccinated.checked && value.Sterilized == inputSterilized.checked ;
	})
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
		</tr>
	</thead>
`
arr.forEach((pet,index) => {
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
			</tr>`
		});
	document.getElementById('table').innerHTML = table;
}
function changeType(x){
    let type  = x;
    let listBreed = JSON.parse(localStorage.getItem('listBreed'))
    let typeFilter = listBreed.filter(function(breed){
        return breed.Type === type;
    })
	let option =` <option></option>
			`;
    typeFilter.forEach((breed) => {
        option +=`
			<option>${breed.Breed}</option>
        `
    })
    document.getElementById('input-breed').innerHTML = option;
}