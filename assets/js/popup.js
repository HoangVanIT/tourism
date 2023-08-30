function toggleContainers(showSignIn) {
    const signInContainer = document.querySelector('.sign-in-container');
    const signUpContainer = document.querySelector('.sign-up-container');

    if (showSignIn) {
        signInContainer.style.transform = 'translateX(0)';
        signUpContainer.style.transform = 'translateX(150%)';
    } else {
        signInContainer.style.transform = 'translateX(-150%)';
        signUpContainer.style.transform = 'translateX(0)';
    }
}

const signInButton = document.getElementById('signIn');
const signUpButton = document.getElementById('signUp');

signInButton.addEventListener('click', () => {
    toggleContainers(true);
});

signUpButton.addEventListener('click', () => {
    toggleContainers(false);
});


