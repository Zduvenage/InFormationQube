
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


let deferredPrompt;

window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent Chrome from automatically showing the install prompt
  event.preventDefault();
  // Stash the event so it can be triggered later
  deferredPrompt = event;

  // Show the install button
  const installButton = document.getElementById('installButton');
  installButton.style.display = 'block';

  // Attach an event listener to the button to trigger the install prompt
  installButton.addEventListener('click', () => {
    // Show the install prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }

      // Reset the deferredPrompt variable
      deferredPrompt = null;

      // Hide the install button
      installButton.style.display = 'block';
    });
  });
});

// Handle the case where the app is already installed
window.addEventListener('appinstalled', (event) => {
  console.log('IQ Was Installed', event);
});
