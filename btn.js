const forms = document.querySelectorAll('.forms'),
    pwShowHide = document.querySelectorAll('.eye-icon'),
    links = document.querySelectorAll('.link');

const formWrapper = document.getElementById('form-wrapper');
pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener('click', () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll('.password')
        
        pwFields.forEach(password => {
            if (password.type === 'password') {
                password.type = 'text';
            }else if (password.type === 'text') {
                password.type = 'password'
            }
        })
    })
})

links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        formWrapper.classList.toggle("show-signup")
    });
})
