// ===============================
// JISHAN SMART HUB
// dashboard.js - Part 1
// ===============================

import { db, auth } from "./firebase.js";

import {
    collection,
    query,
    where,
    getDocs
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";


// LOAD USER APPLICATIONS

async function loadApplications(){

    const user = auth.currentUser;

    if(!user){
        return;
    }


    const q = query(
        collection(db,"applications"),
        where("userId","==",user.uid)
    );


    const snapshot =
    await getDocs(q);


    const box =
    document.getElementById("applications");


    if(snapshot.empty){

        box.innerHTML =
        "No application found.";

        return;

    }


    box.innerHTML="";


    snapshot.forEach((doc)=>{

        const data =
        doc.data();


        box.innerHTML += `

        <div class="service-card">

        <h3>${data.service}</h3>

        <p>Status: ${data.status}</p>

        </div>

        `;

    });


}


// RUN

setTimeout(()=>{

    loadApplications();

},1000);// ===============================
// dashboard.js - Part 2
// Load Notices
// ===============================

import {
    collection,
    getDocs,
    orderBy,
    query
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";


// LOAD NOTICES

async function loadNotices(){

    const box =
    document.getElementById("notices");


    if(!box){
        return;
    }


    try{


        const q =
        query(
            collection(db,"notices"),
            orderBy("date","desc")
        );


        const snapshot =
        await getDocs(q);



        if(snapshot.empty){

            box.innerHTML =
            "No latest updates.";

            return;

        }


        box.innerHTML="";


        snapshot.forEach((doc)=>{


            const data =
            doc.data();


            box.innerHTML += `

            <div class="service-card">

            <h3>📢 ${data.title}</h3>

            <p>${data.date}</p>

            </div>

            `;


        });


    }
    catch(error){

        box.innerHTML =
        error.message;

    }

}


// RUN NOTICE

setTimeout(()=>{

    loadNotices();

},1000);
