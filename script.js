function volume_sphere() {
    //Write your code here
// let radius = document.Myform.getElementById("radius").value;
// let calculate =  document.getElementById("submit");
// calculate.addElementListner("click", CalculatingVolume);
// 	function calculatingVolume() {
// 		let volumeOfSphere = 4/3 *7.14*radius*radius*radius;
		
// 	}
	const radius = document.getElementById('radius').value;
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    document.getElementById('volume').value = volume.toFixed(2);
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
