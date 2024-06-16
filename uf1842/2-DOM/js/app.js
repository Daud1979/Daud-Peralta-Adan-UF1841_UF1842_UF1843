
/**
 * ¡Buena suerte! ¡Pasa el mensaje!
 */
const inputmsg = document.getElementById('message');
const btnsend = document.getElementById('btn-send');
const lstmsg = document.getElementById('last-message');
btnsend.addEventListener('click',function(){
    if (inputmsg.value.length>0)
        {
            lstmsg.textContent = inputmsg.value;
            inputmsg.value='';
        }
        else{
           alert("ESCRIBA UNA TEXTO");
        }
});
