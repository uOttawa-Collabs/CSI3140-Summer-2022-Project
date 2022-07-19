$(document).ready(() => {
    // Scrolling animation
    $("#order-now").fadeTo(500, 1);
    $(window).scroll(() => {
        let windowBottom = $(this).scrollTop() + $(this).innerHeight();
        $(".fade").each((_, element) => {
            let objectBottom = $(element).offset().top + $(element).outerHeight();
            if (objectBottom < windowBottom * 1.25) {
                if ($(element).css("opacity") === "0") {
                    $(element).fadeTo(500, 1);
                }
            }
        });
    });
    $(window).scroll();

    // Sign in & Sign up dialog
    let signModal = $("#nav-modal");
    let signTitle = $("#sign-title");
    let modalClose = $("#modal-close");
    let modalSubmit = $("#modal-submit");

    let inputEmail = $("input#email");
    let inputPassword = $("input#pwd");

    let signAction = (text) => {
        alert(text + " successfully");
        signModal.css("display", "none");
    };

    $("button#navbar-button-sign-in").click(() => {
        inputEmail.val("");
        inputPassword.val("");
        signTitle.text("Sign In");
        modalSubmit.text("Sign In");
        modalSubmit.off("click");
        modalSubmit.click((e) => {
            e.preventDefault();
            signAction("Signed in");
        });

        signModal.css("display", "block");
    });

    $("button#navbar-button-sign-up").click(() => {
        inputEmail.val("");
        inputPassword.val("");
        signTitle.text("Sign Up");
        modalSubmit.text("Sign Up");
        modalSubmit.off("click");
        modalSubmit.click((e) => {
            e.preventDefault();
            signAction("Signed up");
        });

        signModal.css("display", "block");
    });

    modalClose.click(() => {
        $("#nav-modal").css("display", "none");
    });

    function sendFunction(){

        var userName = document.getElementById("contact-us-form-input-name").value;
        var userEmail = document.getElementById("contact-us-form-input-email").value;
        var userMsg = document.getElementById("contact-us-form-input-message").value;

        if(userName == ""){
            alert("Please enter your name!");
        }
        else if(userEmail == ""){
            alert("Please enter your email!");
        }
        else if(userMsg == ""){
            alert("Please enter your message!");
        }
        else{
            alert("Thank you, " + userName + "! We have received your message!");
        }
    }

});
