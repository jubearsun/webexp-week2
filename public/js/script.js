document.onreadystatechange = function () {
    var state = document.readyState;
    if (state == 'complete') {
        // Place all your clicking logic here.
        $('#about').click(function() {
            $('html, body').animate({
                scrollTop: $(".about-container").offset().top
            }, 1000);
        });
        $('#pictures').click(function() {
            $('html, body').animate({
                scrollTop: $(".picture-container").offset().top
            }, 1000);
        });
        $('#members').click(function() {
            $('html, body').animate({
                scrollTop: $(".member-container").offset().top
            }, 1000);
        });
    }
};

// This will help you with finding how much to scroll the window.
// elem is DOM element
function findPos(elem) {
    var top = 0;
    if (elem.offsetParent) {
        do {
            top += elem.offsetTop;
        } while (elem = elem.offsetParent);
        return [top];
    }
}
