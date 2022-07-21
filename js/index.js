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
    const signModal = $("#nav-modal");
    const signTitle = $("#sign-title");
    const modalClose = $("#modal-close");
    const modalSubmit = $("#modal-submit");

    const inputEmail = $("input#email");
    const inputPassword = $("input#pwd");

    const inputFeedbackName = $("input#contact-us-form-input-name");
    const inputFeedbackEmail = $("input#contact-us-form-input-email");
    const inputFeedbackMessage = $("textarea#contact-us-form-input-message");

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

    $("button#contact-us-form-button-submit").click((e) => {
        e.preventDefault();

        if (inputFeedbackName.val() === "") {
            alert("Please enter your name!");
            return;
        }

        if (inputFeedbackEmail.val() === "") {
            alert("Please enter your email!");
            return;
        }

        if (inputFeedbackMessage.val() === "") {
            alert("Please enter your message!");
            return;
        }

        alert("Thank you, " + inputFeedbackName.val() + "! We have received your message!");
        inputFeedbackName.val("");
        inputFeedbackEmail.val("");
        inputFeedbackMessage.val("");
    });
});
