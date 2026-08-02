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
// =========================
// JISHAN SMART HUB
// script.js Part 1
// =========================

let services = JSON.parse(localStorage.getItem("services")) || [
  { name: "Online Form Fill-up", price: 80 },
  { name: "Black & White Print", price: 4 },
  { name: "Colour Print", price: 8 },
  { name: "Passport Size Photo", price: 25 },
  { name: "PAN Card Apply", price: 120 }
];

const table = document.getElementById("serviceTable");

function saveServices() {
  localStorage.setItem("services", JSON.stringify(services));
}

function renderServices() {
  if (!table) return;

  table.innerHTML = "";

  services.forEach((service, index) => {
    table.innerHTML += `
      <tr>
        <td contenteditable="true"
            onblur="updateName(${index}, this.innerText)">
          ${service.name}
        </td>

        <td contenteditable="true"
            onblur="updatePrice(${index}, this.innerText)">
          ${service.price}
        </td>

        <td>
          <button onclick="deleteService(${index})">
            Delete
          </button>
        </td>
      </tr>
    `;
  });

  saveServices();
}

function addService() {

  const name =
    document.getElementById("serviceName").value.trim();

  const price =
    document.getElementById("servicePrice").value.trim();

  if (name === "" || price === "") {
    alert("Please enter service name and rate.");
    return;
  }

  services.push({
    name,
    price
  });

  document.getElementById("serviceName").value = "";
  document.getElementById("servicePrice").value = "";

  renderServices();
}

function deleteService(index) {
  if (confirm("Delete this service?")) {
    services.splice(index, 1);
    renderServices();
  }
}

function updateName(index, value) {
  services[index].name = value;
  saveServices();
}

function updatePrice(index, value) {
  services[index].price = value;
  saveServices();
}

renderServices();
