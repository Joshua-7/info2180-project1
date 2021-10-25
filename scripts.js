

(function(window, document, undefined){
    window.onload = init;
    
      function init()
      {
        var pushy = document.getElementsByClassName("btn")[1];
        pushy.addEventListener("click",(pv) =>{
            pv.preventDefault();
            var gtinpu = document.getElementById("email").value;
            var mess = document.getElementsByClassName("message");
            if(valeml(gtinpu))
            {
                mess[0].textContent = "Thank you! Your email address "+gtinpu+" has been added to our mailing list!";
            }
            else
            {
                mess[0].textContent = "Please enter a valid email address.";
            }

        })
      }
    
    })(window, document, undefined);

function valeml(emal)
{
    var test = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return test.test(emal);
}

