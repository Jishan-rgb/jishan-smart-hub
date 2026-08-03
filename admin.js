// =================================
// JISHAN SMART HUB
// admin.js - Part 1
// Firebase Admin Connection
// =================================

import { auth, db } from "./firebase.js";

import {
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

import {
    collection,
    addDoc,
    getDocs
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";


// ===============================
// ADMIN LOGIN
// ===============================

window.adminLogin = async function(){

    const email =
    document.getElementById("username").value;

    const password =
    document.getElementById("password").value;

    const msg =
    document.getElementById("loginMsg");


    try{

        await signInWithEmailAndPassword(
            auth,
            email,
            password
        );


        msg.innerHTML =
        "✅ Login Successful";


        document.getElementById("dashboard").style.display =
        "block";


    }
    catch(error){

        msg.innerHTML =
        "❌ "+error.message;

    }

}


// ===============================
// ADD SERVICE
// ===============================

window.addService = async function(){


    await addDoc(
        collection(db,"services"),
        {

            category:
            document.getElementById("serviceCategory").value,

            name:
            document.getElementById("serviceName").value,

            charge:
            document.getElementById("serviceCharge").value,

            lastDate:
            document.getElementById("serviceLastDate").value,

            time:
            document.getElementById("serviceTime").value,

            documents:
            document.getElementById("serviceDocuments").value,

            official:
            document.getElementById("officialLink").value,

            apply:
            document.getElementById("applyLink").value,

            image:
            document.getElementById("serviceImage").value

        }
    );


    alert("✅ Service Added Successfully");

}// =================================
// admin.js - Part 2
// Load Services From Firestore
// =================================


import {
    collection,
    getDocs
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";


// LOAD SERVICES

window.loadServices = async function(){

    const list =
    document.getElementById("adminServiceList");


    if(!list){
        return;
    }


    list.innerHTML =
    "Loading Services...";


    const snapshot =
    await getDocs(
        collection(db,"services")
    );


    list.innerHTML = "";


    snapshot.forEach((doc)=>{


        const data =
        doc.data();


        list.innerHTML += `

        <div class="service-card">

        <h3>${data.name}</h3>

        <p>
        Category: ${data.category}
        </p>

        <p>
        Charge: ${data.charge}
        </p>

        <p>
        Last Date: ${data.lastDate}
        </p>

        <small>
        ID: ${doc.id}
        </small>


        </div>

        `;


    });


}



// AUTO LOAD

setTimeout(()=>{

    loadServices();

},1000);// =================================
// admin.js - Part 3
// Update & Delete Service
// =================================


import {
    doc,
    updateDoc,
    deleteDoc
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";


// UPDATE SERVICE

window.updateService = async function(){

    const id =
    document.getElementById("editId").value;


    if(!id){

        alert("Please enter Service ID");

        return;

    }


    await updateDoc(
        doc(db,"services",id),
        {

            name:
            document.getElementById("editName").value,

            charge:
            document.getElementById("editCharge").value,

            lastDate:
            document.getElementById("editLastDate").value,

            documents:
            document.getElementById("editDocuments").value,

            official:
            document.getElementById("editOfficial").value,

            apply:
            document.getElementById("editApply").value

        }
    );


    alert("✅ Service Updated Successfully");


    loadServices();

}



// DELETE SERVICE

window.deleteService = async function(){

    const id =
    document.getElementById("editId").value;


    if(!id){

        alert("Please enter Service ID");

        return;

    }


    await deleteDoc(
        doc(db,"services",id)
    );


    alert("🗑 Service Deleted Successfully");


    loadServices();

}// =================================
// admin.js - Part 4
// Website Settings + Notice Save
// =================================


import {
    setDoc,
    doc
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";


// SAVE WEBSITE SETTINGS

window.saveSettings = async function(){

    await setDoc(
        doc(db,"settings","website"),
        {

            websiteName:
            document.getElementById("websiteName").value,

            ownerName:
            document.getElementById("ownerName").value,

            contactNumber:
            document.getElementById("contactNumber").value,

            email:
            document.getElementById("emailAddress").value,

            whatsapp:
            document.getElementById("whatsappNumber").value,

            notice:
            document.getElementById("noticeBoard").value

        }
    );


    alert("✅ Settings Saved Successfully");

}// =================================
// admin.js - Part 5
// Counter + Admin Protection
// =================================


import {
    getCountFromServer
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

import {
    collection
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";


// LOAD STATISTICS

window.loadStatistics = async function(){


    try{


        const serviceCount =
        await getCountFromServer(
            collection(db,"services")
        );


        document.getElementById("totalServices").innerHTML =
        serviceCount.data().count;



        const userCount =
        await getCountFromServer(
            collection(db,"users")
        );


        if(document.getElementById("totalUsers")){

            document.getElementById("totalUsers").innerHTML =
            userCount.data().count;

        }


    }
    catch(error){

        console.log(error);

    }

}


// ADMIN SECURITY CHECK

window.adminCheck = function(){


    if(!auth.currentUser){

        window.location.href =
        "login.html";

    }


}


// AUTO LOAD

setTimeout(()=>{

    loadStatistics();

},1000);
