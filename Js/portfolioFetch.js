import data from '../Portfolios/portfolios.json' with { type: 'json' };
console.log(data);

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const entry = urlParams.get("entry")

console.log(entry);

//if(entry == null) window.location.href = "index.html";

var found = null;
for (let i = 0; i < data.entradas.length; i++) {
    if(entry != data.entradas[i].Nome) continue;
    found = data.entradas[i];
    break;    
}
console.log(found);
if(found == null) console.log("404");
/*window.location.href = "index.html"; /* TODO: Redirect to 404*/


////// Updating page
/// Modifying page header
var ProjectNameText = document.getElementById("Titulo");
var projectDescriptionText = document.getElementById("desc");
var mainPhoto = document.getElementById("mainPhoto");
var photoArea = document.getElementById("photoArea");

console.log(found.NomeFotoCapa);
console.log(mainPhoto.src);


ProjectNameText.textContent = found.Nome;
projectDescriptionText.textContent = found.Descricao;
mainPhoto.src = "../Portfolios/"+found.Nome+"/"+found.NomeFotoCapa;
console.log(projectDescriptionText);


// Add photo album
for (let i = 0; i < found.Fotos.length; i++) {

    const newPhotoRect = document.createElement("div");
    newPhotoRect.setAttribute("class", "squarePhoto");
    newPhotoRect.setAttribute("width", "20%");
    
    photoArea.append(newPhotoRect);
    
    const newPhoto = document.createElement("img");
    var photoSrc = "../Portfolios/"+found.Nome+"/"+found.Fotos[i];
    newPhoto.setAttribute("src", photoSrc);
    newPhoto.setAttribute("class", "Photo");
    
    newPhotoRect.append(newPhoto);
}
