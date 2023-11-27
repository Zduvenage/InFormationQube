
document.getElementById("B1Link").href = `${buttonContent.B1Href} ${buttonContent.B1content}`;
document.getElementById("B1Link").innerHTML = buttonContent.B1Txt;

document.getElementById("B2Link").href = `${buttonContent.B2Href} ${buttonContent.B2content}`;
document.getElementById("B2Link").innerHTML = buttonContent.B2Txt;

document.getElementById("B3Link").href = `${buttonContent.B3Href} ${buttonContent.B3content}`;
document.getElementById("B3Link").innerHTML = buttonContent.B3Txt;


document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll('.icon-button');

    buttons.forEach(button => {
        let timeout;

        button.addEventListener('mouseenter', function () {
            timeout = setTimeout(function () {
                button.querySelector('.popup').style.display = 'block';
            }, 1500);
        });

        button.addEventListener('mouseleave', function () {
            clearTimeout(timeout);
            button.querySelector('.popup').style.display = 'none';
        });
    });
});
