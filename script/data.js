const sidebarTitleEl = document.getElementById('sidebar-title');
		const sidebarEl = document.getElementById('sidebar');
		sidebarTitleEl.addEventListener('click', function () {
			sidebarEl.classList.toggle('active');
		});
// Hàm download file localStorage ve
function download(){
    let data = localStorage.getItem('listPet')
    let file = new Blob([data],{type: 'text/plain'});
    let anchor = document.createElement('a');
    anchor.href = URL.createObjectURL(file)
    anchor.download = 'listPet.json'
    anchor.click();
}
// Hàm upload file JSON
function  upload(){
    let file = document.getElementById('input-file').files[0];
    let reader = new FileReader();
    reader.onloadend = () =>{
        let load = JSON.parse(reader.result);
        localStorage.setItem('listPet', JSON.stringify(load));
    }
    reader.readAsText(file);
}