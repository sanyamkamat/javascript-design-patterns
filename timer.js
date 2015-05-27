/**
 * Created by sanyamkamat on 27-05-2015.
 */
var fun = function () {
    setTimeout(function () {

    }, 0);
    setTimeout(function () {

    }, 0);
    setTimeout(function () {

    }, 0);
};

fn();

/*
 * NOTE: Any delay less than 4ms will be bumped to 4ms.
 * Timers will wont start until the outer most function is finished.
 * */