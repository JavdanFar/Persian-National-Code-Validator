function gbi(id) {
    return document.getElementById(id)
}

document.addEventListener("DOMContentLoaded", function () {
    gbi("changeThemeIcon").addEventListener("click", function () {
        let theme = document.body.dataset.neoTheme;
        if (theme == "light") {
            document.body.dataset.neoTheme = "dark";
            gbi("changeThemeIcon").classList.remove("bi-moon-fill");
            gbi("changeThemeIcon").classList.add("bi-sun-fill")
        }
        else {
            document.body.dataset.neoTheme = "light";
            gbi("changeThemeIcon").classList.remove("bi-sun-fill");
            gbi("changeThemeIcon").classList.add("bi-moon-fill")
        }
    });
});

gbi("validationButton").addEventListener("click", function () {
    let nationalCode = gbi("nationalCode").value;

    if (isValidNationalCode(nationalCode)) {
        gbi("container").dataset.state = "success";
        gbi("result").innerText = "National Code is valid";
    }
    else {
        gbi("container").dataset.state = "error";
        gbi("result").innerText = "National Code is not valid";
    }
});

function isValidNationalCode(nationalCode) {

    if (!(/^(?!([\d])\1{9})\d{10}$/.test(nationalCode))) {
        return false
    }

    let nums = 0;
    for (i = 0; i < 9; i++) {
        nums += nationalCode[i] * (10 - i);
    }

    let last = nationalCode[9];

    let remain = nums % 11;

    if (remain == 0 && last == 0) {
        return true
    } else if (remain == 1 && last == 1) {
        return true
    } else if (remain > 1 && last == 11 - remain) {
        return true
    } else {
        return false
    }
}
