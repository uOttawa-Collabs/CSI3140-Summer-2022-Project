$(document).ready(() => {
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
});
