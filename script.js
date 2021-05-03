function loadSale() {
    fetch('http://snau.herokuapp.com/laater')
	.then(response => response.json())
	.then(fillSalesList);
}

function fillSalesList(laatData) {
    
    let salesList = document.querySelector("ul");
    for(let i = 0; i < laatData.length; i++) {
	let newLaatElement = document.createElement("li");
	let lineBreak = document.createElement("br");
	let tittelText = document.createTextNode(laatData[i].tittel);
	let pdfUrlText = document.createTextNode(laatData[i].pdfUrl);

	newLaatElement.appendChild(tittelText);
	newLaatElement.appendChild(lineBreak);
	newLaatElement.appendChild(pdfUrlText);
	
	salesList.appendChild(newLaatElement)
    }
}

function init(event) {
    loadSale();
}

window.addEventListener('load', loadSale);
