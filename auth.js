// ===============================
// JISHAN SMART HUB
// auth.js - Part 1
// Firebase Authentication
// ===============================

import { auth, db } from "./firebase.js";

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";


import {
    doc,
    setDoc
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";


// ===============================
// SIGNUP FUNCTION
// ===============================

window.signup = async function(){

    const name =
    document.getElementById("name").value;

    const email =
    document.getElementById("email").value;

    const password =
    document.getElementById("password").value;

    const phone =
    document.getElementById("phone").value;

    const message =
    document.getElementById("message");


    try{

        const userCredential =
        await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );


        const user =
        userCredential.user;


        await setDoc(
            doc(db,"users",user.uid),
            {

                name:name,
                email:email,
                phone:phone,
                role:"customer"

            }
        );


        message.innerHTML =
        "✅ Account Created Successfully";


    }
    catch(error){

        message.innerHTML =
        "❌ "+error.message;

    }
// ===============================
// LOGIN FUNCTION
// auth.js - Part 2
// ===============================

import {
    getDoc,
    doc
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";


// LOGIN

window.login = async function(){

    const email =
    document.getElementById("email").value;

    const password =
    document.getElementById("password").value;

    const message =
    document.getElementById("message");


    try{

        const userCredential =
        await signInWithEmailAndPassword(
            auth,
            email,
            password
        );


        const user =
        userCredential.user;


        // Check User Data

        const userData =
        await getDoc(
            doc(db,"users",user.uid)
        );


        if(userData.exists()){

            const data =
            userData.data();


            if(data.role === "admin"){

                message.innerHTML =
                "✅ Admin Login Successful";

                setTimeout(()=>{

                    window.location.href =
                    "admin.html";

                },1000);


            }else{


                message.innerHTML =
                "✅ Login Successful";

                setTimeout(()=>{

                    window.location.href =
                    "dashboard.html";

                },1000);


            }


        }else{

            message.innerHTML =
            "User Data Not Found";

        }


    }
    catch(error){

        message.innerHTML =
        "❌ "+error.message;

    }

}// ===============================
// LOGIN FUNCTION
// auth.js - Part 2
// ===============================

import {
    getDoc,
    doc
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";


// LOGIN

window.login = async function(){

    const email =
    document.getElementById("email").value;

    const password =
    document.getElementById("password").value;

    const message =
    document.getElementById("message");


    try{

        const userCredential =
        await signInWithEmailAndPassword(
            auth,
            email,
            password
        );


        const user =
        userCredential.user;


        // Check User Data

        const userData =
        await getDoc(
            doc(db,"users",user.uid)
        );


        if(userData.exists()){

            const data =
            userData.data();


            if(data.role === "admin"){

                message.innerHTML =
                "✅ Admin Login Successful";

                setTimeout(()=>{

                    window.location.href =
                    "admin.html";

                },1000);


            }else{


                message.innerHTML =
                "✅ Login Successful";

                setTimeout(()=>{

                    window.location.href =
                    "dashboard.html";

                },1000);


            }


        }else{

            message.innerHTML =
            "User Data Not Found";

        }


    }
    catch(error){

        message.innerHTML =
        "❌ "+error.message;

    }

}// ===============================
// auth.js - Part 3
// Logout + User Check
// ===============================

import {
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";


// LOGOUT FUNCTION

window.logout = async function(){

    try{

        await signOut(auth);

        alert("✅ Logout Successful");

        window.location.href = "login.html";

    }
    catch(error){

        alert(error.message);

    }

}


// CHECK LOGIN STATUS

window.checkUser = function(){

    onAuthStateChanged(auth,(user)=>{


        if(user){

            console.log(
                "Logged In User:",
                user.email
            );


        }else{


            console.log(
                "No User Login"
            );


        }


    });

}


// Run Check

checkUser();// ===============================
// auth.js - Part 4
// User Profile Data
// ===============================

import {
    getDoc,
    doc
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";


// SHOW USER PROFILE

window.loadProfile = async function(){

    const user = auth.currentUser;

    if(!user){
        return;
    }


    const profile =
    await getDoc(
        doc(db,"users",user.uid)
    );


    if(profile.exists()){

        const data =
        profile.data();


        const nameBox =
        document.getElementById("userName");


        const emailBox =
        document.getElementById("userEmail");


        const phoneBox =
        document.getElementById("userPhone");


        if(nameBox){
            nameBox.innerHTML =
            data.name;
        }


        if(emailBox){
            emailBox.innerHTML =
            data.email;
        }


        if(phoneBox){
            phoneBox.innerHTML =
            data.phone;
        }

    }

}


// AUTO LOAD PROFILE

onAuthStateChanged(auth,(user)=>{

    if(user){

        loadProfile();

    }

});
}// ===============================
// auth.js - Part 5
// Security Check + Page Protection
// ===============================


// PROTECT DASHBOARD PAGE

window.protectPage = function(){

    onAuthStateChanged(auth,(user)=>{


        if(!user){

            alert("Please Login First");

            window.location.href =
            "login.html";

        }


    });

}



// ADMIN CHECK

window.checkAdmin = async function(){

    const user = auth.currentUser;


    if(!user){

        window.location.href =
        "login.html";

        return;

    }


    const userDoc =
    await getDoc(
        doc(db,"users",user.uid)
    );


    if(userDoc.exists()){


        const data =
        userDoc.data();


        if(data.role !== "admin"){

            alert("Access Denied");

            window.location.href =
            "dashboard.html";

        }


    }

}
