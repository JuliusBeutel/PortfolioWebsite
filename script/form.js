function checkUserInput(){
    const form = document.getElementById("myForm")
    const inputs = document.querySelectorAll('[id^="input"]');
    const inputEmail = document.getElementById("inputEmail");
    const emailRegex = /\S+@\S+\.\S+/;;

    let allFieldsValid = true;
    inputs.forEach(input => {
        if  (input.value === "") {
            input.classList.add('invalid');
            allFieldsValid = false;
        } else {
        input.classList.remove('invalid');            
        }
        if(!emailRegex.test(inputEmail.value)){
                inputEmail.classList.add('invalid');
                allFieldsValid = false;
        }else {
            inputEmail.classList.remove('invalid');            
        }
    });
    
    if(allFieldsValid === true){
        SubForm(form);
    }
}

function SubForm (form){


    $.ajax({
        url:"https://api.apispreadsheets.com/data/WaoPNiu7H6gthGVt/",
        type:"post",
        data:$("#myForm").serializeArray(),
        success: function(){
                    showCheckmark();
                    setTimeout(function(){
                        hideCheckmark();
                }, 5000);
                form.reset();
                recaptcha.reset();
            },
        error: function(){
                alert("There was an error :(")
            }
        });
} 

function showCheckmark(){
    document.querySelector(".wrapper").style.display = "flex";
    setTimeout(function(){
        hideCheckmark();
    }, 5000);
}

function hideCheckmark(){
    document.querySelector(".wrapper").style.display = "none";
}