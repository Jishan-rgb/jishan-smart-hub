let services = JSON.parse(localStorage.getItem("services")) || [

{name:"Online Form",price:"80"},
{name:"Black & White Print",price:"4"},
{name:"Color Print",price:"8"},
{name:"Passport Photo",price:"25"}

];

function saveData(){

localStorage.setItem("services",JSON.stringify(services));

}

function showServices(){

let table=document.getElementById("serviceTable");

table.innerHTML="";

services.forEach((item,index)=>{

table.innerHTML+=`

<tr>

<td contenteditable="true"
onblur="editName(${index},this.innerText)">
${item.name}
</td>

<td contenteditable="true"
onblur="editPrice(${index},this.innerText)">
₹ ${item.price}
</td>

<td>

<button onclick="deleteService(${index})">

Delete

</button>

</td>

</tr>

`;

});

}

function addService(){

let name=document.getElementById("serviceName").value;

let price=document.getElementById("servicePrice").value;

if(name==""||price=="") return;

services.push({

name:name,

price:price

});

saveData();

showServices();

document.getElementById("serviceName").value="";

document.getElementById("servicePrice").value="";

}

function deleteService(index){

services.splice(index,1);

saveData();

showServices();

}

function editName(index,value){

services[index].name=value;

saveData();

}

function editPrice(index,value){

services[index].price=value.replace("₹","").trim();

saveData();

}

showServices();
