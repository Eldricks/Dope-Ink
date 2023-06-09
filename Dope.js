   $(".num")
    .parent()
    .click(function () {
        if ($(this).children(".num").get(0).paused) {
            $(this).children(".num").get(0).play();
            $(this).children(".playpause").fadeOut();
        } else {
            $(this).children(".num").get(0).pause();
            $(this).children(".playpause").fadeIn();
        }
    });