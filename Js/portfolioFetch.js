import data from '../Portfolios/portfolios.json' with { type: 'json' };
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const entry = urlParams.get("entry")

var ProjectNameText = document.getElementById("Titulo");
var projectDescriptionText = document.getElementById("desc");
console.log(projectDescriptionText);


console.log(entry);

//if(entry == null) window.location.href = "index.html";

var found = false;
for (let i = 0; i < data.entradas.length; i++) {
    if(entry != data.entradas[i].Nome) continue;
    found = true;

    ProjectNameText.textContent = entry;
    projectDescriptionText.textContent = data.entradas[i].Descricao;

    /*var fs = require('fs');
    var files = fs.readdirSync('../Portfolios/'+entry);

    console.log(files.length);*/
    
}

if(!found) console.log("404");
/*window.location.href = "index.html"; /* TODO: Redirect to 404*/
