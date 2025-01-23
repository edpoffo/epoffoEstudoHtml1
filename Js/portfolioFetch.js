import data from '../Portfolios/portfolios.json' with { type: 'json' };
console.log(data);

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const entry = urlParams.get("entry")

var ProjectNameText = document.getElementById("Titulo");
var projectDescriptionText = document.getElementById("desc");
console.log(projectDescriptionText);


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
