// ===============================
// JISHAN SMART HUB - script.js
// Part 1
// ===============================

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e){
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior:"smooth"
            });
        }
    });
});


// ===============================
// Back To Top Button
// ===============================

const topBtn = document.getElementById("topBtn");

window.onscroll = function(){

    if(topBtn){

        if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300){

            topBtn.style.display="block";

        }else{

            topBtn.style.display="none";

        }

    }

};

function topFunction(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}


// ===============================
// Counter Animation
// ===============================

const counters=document.querySelectorAll(".counter-card h3");

counters.forEach(counter=>{

    const updateCounter=()=>{

        const target=counter.innerText.replace("+","");

        const number=+target.replace(/[^\d]/g,"");

        let current=+counter.getAttribute("data-count")||0;

        const increment=Math.ceil(number/100);

        if(current<number){

            current+=increment;

            counter.setAttribute("data-count",current);

            counter.innerText=current+"+";

            setTimeout(updateCounter,20);

        }else{

            counter.innerText=target+"+";

        }

    };

    updateCounter();

});


// ===============================
// Search Service
// ===============================

function searchService(){

    let input=document.getElementById("searchInput");

    if(!input) return;

    let filter=input.value.toUpperCase();

    let cards=document.querySelectorAll(".service-card");

    cards.forEach(card=>{

        let text=card.innerText.toUpperCase();

        if(text.indexOf(filter)>-1){

            card.style.display="block";

        }else{

            card.style.display="none";

        }

    });

}

console.log("Jishan Smart Hub Loaded Successfully");
// ===============================
// HERO IMAGE SLIDER
// ===============================

const heroImages = [
"https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200",
"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200",
"https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200"
];

let heroIndex = 0;

function changeHeroImage(){

const img=document.querySelector(".hero-image img");

if(!img) return;

heroIndex++;

if(heroIndex>=heroImages.length){

heroIndex=0;

}

img.src=heroImages[heroIndex];

}

setInterval(changeHeroImage,4000);


// ===============================
// NOTICE AUTO CHANGE
// ===============================

const notices=[

"🎓 UP Scholarship Form Open",

"🚆 Railway Online Form Available",

"🏦 Banking Services Available",

"📄 Income, Caste & Residence Certificate",

"💳 PAN Card & Aadhaar Services"

];

let noticeIndex=0;

function updateNotice(){

const notice=document.querySelector(".notice marquee");

if(!notice) return;

notice.innerHTML=notices[noticeIndex];

noticeIndex++;

if(noticeIndex>=notices.length){

noticeIndex=0;

}

}

setInterval(updateNotice,5000);


// ===============================
// LOADING EFFECT
// ===============================

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});


// ===============================
// CARD HOVER EFFECT
// ===============================

document.querySelectorAll(".service-card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});


// ===============================
// CURRENT YEAR
// ===============================

const year=document.getElementById("year");

if(year){

year.innerHTML=new Date().getFullYear();

}

console.log("Script Part 2 Loaded");
// ===============================
// SERVICE MANAGER (Admin Ready)
// Part 3
// ===============================

let services = JSON.parse(localStorage.getItem("jsh_services")) || [

{
name:"PAN Card Apply",
price:"₹120"
},

{
name:"Passport Size Photo",
price:"₹25"
},

{
name:"Black & White Print",
price:"₹4"
},

{
name:"Colour Print",
price:"₹8"
},

{
name:"Online Form Fill-up",
price:"₹80"
}

];

// Save Data
function saveServices(){

localStorage.setItem("jsh_services",JSON.stringify(services));

}

// Show Services
function renderServices(){

const table=document.getElementById("serviceTable");

if(!table) return;

table.innerHTML="";

services.forEach((item,index)=>{

table.innerHTML+=`

<tr>

<td>${item.name}</td>

<td>${item.price}</td>

<td>

<button onclick="editService(${index})">

✏ Edit

</button>

<button onclick="deleteService(${index})">

🗑 Delete

</button>

</td>

</tr>

`;

});

}

// Add Service
function addService(){

const name=document.getElementById("serviceName");

const price=document.getElementById("servicePrice");

if(!name || !price) return;

if(name.value=="" || price.value==""){

alert("Please enter service name and price.");

return;

}

services.push({

name:name.value,

price:price.value

});

saveServices();

renderServices();

name.value="";

price.value="";

}

// Delete
function deleteService(index){

if(confirm("Delete this service?")){

services.splice(index,1);

saveServices();

renderServices();

}

}

// Edit
function editService(index){

const newName=prompt("Service Name",services[index].name);

const newPrice=prompt("Service Price",services[index].price);

if(newName && newPrice){

services[index].name=newName;

services[index].price=newPrice;

saveServices();

renderServices();

}

}

// Load
document.addEventListener("DOMContentLoaded",()=>{

renderServices();

});

console.log("Service Manager Loaded");
// ===============================
// SERVICE MANAGER (Admin Ready)
// Part 3
// ===============================

let services = JSON.parse(localStorage.getItem("jsh_services")) || [

{
name:"PAN Card Apply",
price:"₹120"
},

{
name:"Passport Size Photo",
price:"₹25"
},

{
name:"Black & White Print",
price:"₹4"
},

{
name:"Colour Print",
price:"₹8"
},

{
name:"Online Form Fill-up",
price:"₹80"
}

];

// Save Data
function saveServices(){

localStorage.setItem("jsh_services",JSON.stringify(services));

}

// Show Services
function renderServices(){

const table=document.getElementById("serviceTable");

if(!table) return;

table.innerHTML="";

services.forEach((item,index)=>{

table.innerHTML+=`

<tr>

<td>${item.name}</td>

<td>${item.price}</td>

<td>

<button onclick="editService(${index})">

✏ Edit

</button>

<button onclick="deleteService(${index})">

🗑 Delete

</button>

</td>

</tr>

`;

});

}

// Add Service
function addService(){

const name=document.getElementById("serviceName");

const price=document.getElementById("servicePrice");

if(!name || !price) return;

if(name.value=="" || price.value==""){

alert("Please enter service name and price.");

return;

}

services.push({

name:name.value,

price:price.value

});

saveServices();

renderServices();

name.value="";

price.value="";

}

// Delete
function deleteService(index){

if(confirm("Delete this service?")){

services.splice(index,1);

saveServices();

renderServices();

}

}

// Edit
function editService(index){

const newName=prompt("Service Name",services[index].name);

const newPrice=prompt("Service Price",services[index].price);

if(newName && newPrice){

services[index].name=newName;

services[index].price=newPrice;

saveServices();

renderServices();

}

}

// Load
document.addEventListener("DOMContentLoaded",()=>{

renderServices();

});

console.log("Service Manager Loaded");
// ===============================
// JISHAN SMART HUB
// Script Part 4
// ===============================

// Dark Mode
const darkBtn = document.getElementById("darkModeBtn");

if (darkBtn) {
    darkBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem(
            "theme",
            document.body.classList.contains("dark-mode") ? "dark" : "light"
        );
    });
}

// Load Theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}

// ===============================
// Visitor Counter
// ===============================

let visitors = localStorage.getItem("visitors");

if (!visitors) {
    visitors = 1;
} else {
    visitors = Number(visitors) + 1;
}

localStorage.setItem("visitors", visitors);

const visitorBox = document.getElementById("visitorCount");

if (visitorBox) {
    visitorBox.innerHTML = visitors;
}

// ===============================
// Welcome Popup
// ===============================

window.addEventListener("load", () => {

    setTimeout(() => {

        alert("🙏 Welcome to Jishan Smart Hub");

    }, 800);

});

// ===============================
// Current Date
// ===============================

const currentDate = document.getElementById("currentDate");

if (currentDate) {

    currentDate.innerHTML = new Date().toLocaleDateString("en-IN");

}

// ===============================
// Live Time
// ===============================

function updateClock() {

    const clock = document.getElementById("liveClock");

    if (!clock) return;

    clock.innerHTML = new Date().toLocaleTimeString("en-IN");

}

setInterval(updateClock, 1000);

updateClock();

console.log("Script Part 4 Loaded Successfully");
// ===============================
// JISHAN SMART HUB
// Script Part 5 (Final)
// ===============================

// Mobile Menu Toggle
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });
}

// Notification Popup
function showNotification(message) {

    const notify = document.createElement("div");

    notify.className = "notification";

    notify.innerHTML = message;

    document.body.appendChild(notify);

    setTimeout(() => {

        notify.classList.add("show");

    }, 100);

    setTimeout(() => {

        notify.classList.remove("show");

        setTimeout(() => {

            notify.remove();

        }, 500);

    }, 3000);

}

// Welcome Notification
window.addEventListener("load", () => {

    showNotification("🎉 Welcome to Jishan Smart Hub");

});

// Search Box
const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const filter = this.value.toLowerCase();

        document.querySelectorAll(".service-card").forEach(card => {

            const text = card.innerText.toLowerCase();

            card.style.display = text.includes(filter) ? "block" : "none";

        });

    });

}

// Button Ripple Effect
document.querySelectorAll(".btn,.btn2,.card-btn").forEach(btn => {

    btn.addEventListener("click", function () {

        this.classList.add("clicked");

        setTimeout(() => {

            this.classList.remove("clicked");

        }, 300);

    });

});

// Footer Year
const footerYear = document.getElementById("footerYear");

if (footerYear) {

    footerYear.innerHTML = new Date().getFullYear();

}

console.log("✅ Jishan Smart Hub Loaded Successfully");
// ===============================
// JISHAN SMART HUB
// Script Part 5 (Final)
// ===============================

// Mobile Menu Toggle
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });
}

// Notification Popup
function showNotification(message) {

    const notify = document.createElement("div");

    notify.className = "notification";

    notify.innerHTML = message;

    document.body.appendChild(notify);

    setTimeout(() => {

        notify.classList.add("show");

    }, 100);

    setTimeout(() => {

        notify.classList.remove("show");

        setTimeout(() => {

            notify.remove();

        }, 500);

    }, 3000);

}

// Welcome Notification
window.addEventListener("load", () => {

    showNotification("🎉 Welcome to Jishan Smart Hub");

});

// Search Box
const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const filter = this.value.toLowerCase();

        document.querySelectorAll(".service-card").forEach(card => {

            const text = card.innerText.toLowerCase();

            card.style.display = text.includes(filter) ? "block" : "none";

        });

    });

}

// Button Ripple Effect
document.querySelectorAll(".btn,.btn2,.card-btn").forEach(btn => {

    btn.addEventListener("click", function () {

        this.classList.add("clicked");

        setTimeout(() => {

            this.classList.remove("clicked");

        }, 300);

    });

});

// Footer Year
const footerYear = document.getElementById("footerYear");

if (footerYear) {

    footerYear.innerHTML = new Date().getFullYear();

}

console.log("✅ Jishan Smart Hub Loaded Successfully");
