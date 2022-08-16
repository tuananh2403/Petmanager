
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
// Hàm thêm Pet vào trong bảng
function add() {
    // Lấy dữ liệu trong localStorage
    let data = localStorage.getItem('listPet') ? JSON.parse(localStorage.getItem('listPet')): []; 
    let date = new Date();
    let day = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
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
    data.push(inforPet) // Thêm dữ liệu vào trong mảng
    localStorage.setItem('listPet',JSON.stringify(data)); // Lưu dữ liệu vào localStorage
   renderListPet();
}
// Hàm render ra bảng
function renderListPet(){
    let data = localStorage.getItem('listPet') ? JSON.parse(localStorage.getItem('listPet')) : [];
    table = `
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
            <td><button type="button" class="btn btn-danger" onclick =deletePet(${petId})>
            Delete</button>
            </td>
            </tr>`
        });
    tableBodyEl.innerHTML = table;
}
renderListPet();
// Xóa Pet trong localstoge
function deletePet(id){
    let data = localStorage.getItem('listPet') ? JSON.parse(localStorage.getItem('listPet')) : [];
    data.splice(id, 1);
    localStorage.setItem('listPet', JSON.stringify(data));
    renderListPet();
}
// Thay đổi type 
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