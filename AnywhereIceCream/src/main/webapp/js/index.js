$(document).ready(() => {
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
});
