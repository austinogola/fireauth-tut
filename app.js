const signForm=document.querySelector('#signup-form')
const loginForm=document.querySelector('#login-form')


signForm.addEventListener('submit',e=>{
    e.preventDefault()
    const email=e.target.email.value
    const name=e.target.name.value
    const password=e.target.password.value

    auth.createUserWithEmailAndPassword(email,password).then(cred=>{
        console.log(cred.user);
    })
})