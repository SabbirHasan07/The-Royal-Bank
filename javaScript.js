document.getElementById('btn-submit').addEventListener('click', function(){
    const emailValue = document.getElementById('email-value');
    const email = emailValue.value;
    //console.log(email);
    const passwordValue = document.getElementById('password-Value');
    const password = passwordValue.value;
   // console.log(password);
   if ( email === 'sabbir@hero.com' && password === 'hasan'){
    
    window.location.href = 'profile.html';


   }
   else{
    alert('Please enter the right email ID or Password');
   }
})