'use strict';
const sidebarTitleEl = document.getElementById('sidebar-title');
		const sidebarEl = document.getElementById('sidebar');
		sidebarTitleEl.addEventListener('click', function () {
			sidebarEl.classList.toggle('active');
	});
let inputBreed = document.getElementById('input-breed')
let inputType = document.getElementById('input-type')
let btnSubmit = document.getElementById('btn-submit')
// Add Type
function addBreed(){
	let listBreed = localStorage.getItem('listBreed') ? JSON.parse(localStorage.getItem('listBreed')) :[];
	let breed = {
		Breed: inputBreed.value,
		Type: inputType.value
	}
	listBreed.push(breed)
	localStorage.setItem('listBreed', JSON.stringify(listBreed))
	rederBreed();
}
// render ra bảng
function rederBreed(){
	let listBreed = localStorage.getItem('listBreed') ? JSON.parse(localStorage.getItem('listBreed')) :[];
	let table = `
	<thead>
		<tr>
			<th scope="col">#</th>
			<th scope="col">Breed</th>
			<th scope="col">Type</th>
			<th scope="col">Action</th>
		</tr>
	</thead>
	`
	listBreed.forEach((breed,index) => {
		let ibBreed = index;
		index++;
		table += `
		<tr>
			<td>${index}</td>
			<th>${breed.Breed}</th>
			<th>${breed.Type}</th>
			<td><button type="button" class="btn btn-danger" onclick = "removeBreed(${ibBreed})">Delete</button></td>
		</tr>
		`
	})
	document.getElementById("table").innerHTML = table
}
rederBreed();
// Xóa breed
function removeBreed(id){
	console.log(id)
	let listBreed =localStorage.getItem('listBreed') ? JSON.parse(localStorage.getItem('listBreed')) : [];
	listBreed.splice(id,1);
    localStorage.setItem('listBreed', JSON.stringify(listBreed));
    rederBreed();
}