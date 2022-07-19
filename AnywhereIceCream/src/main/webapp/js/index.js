
function navBtn_Click(para) {
    var signInModal = document.getElementById("navModal");
    signInModal.style.display = "block";

    if(para == "In"){
        document.getElementById("signTitle").textContent = "Sign In";
        document.getElementById("modalSubmit").textContent = "Sign In";
    }else{
        document.getElementById("signTitle").textContent = "Sign Up";
        document.getElementById("modalSubmit").textContent = "Sign Up";
        
    }
}

function span_Click() {
    var signInModal = document.getElementById("navModal");
    signInModal.style.display = "none";
}

function SignIn_Click(){
    var para = document.getElementById("signTitle").textContent;
    if(para == "Sign In"){
        alert("Sign In Successfully.");
    }else{
        alert("Sign Up Successfully.")
    }
    
}

window.onclick = function(event) {
    var signInModal = document.getElementById("navModal");
    if (event.target == signInModal) {
        signInModal.style.display = "none";
    }
}



