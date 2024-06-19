const formFirstName = document.getElementById("formFirstName");
const formLastName = document.getElementById("formLastName");
const formEmail = document.getElementById("formEmail");
const formVerifyEmail = document.getElementById("formVerifyEmail");
const message = document.getElementById("message");
const messageSentText = document.getElementById("messageSentText");

function handleFormSubmission(){
    if(formFirstName.value.trim() === "" || formLastName.value.trim() === "" || formEmail.value.trim() === "" || formVerifyEmail.value.trim() === ""){
        alert("Please fill in all the required fields.");
        return;
    }

    if(formEmail.value !== formVerifyEmail.value){
        alert("The email addresses do not match.");
        formVerifyEmail.value = "";
        return;
    }

    messageSentText.classList.remove("hide-sent-text");
    messageSentText.classList.add("show-sent-text");

    formFirstName.value = "";
    formLastName.value = "";
    formEmail.value = "";
    formVerifyEmail.value = "";
    message.value = "";

    setTimeout(() => {
        messageSentText.classList.remove("show-sent-text");
        messageSentText.classList.add("hide-sent-text");
    }, 1000);
}