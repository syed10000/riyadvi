		    function validation() 
    {

        var username = document.getElementById("usern");

 if(username.value =="" ||username.value.length<5)

             if(username.value =="")
         {

             alert("fill the field empty ");
             return false;
      }	

        if(username.value.length<5)
        {
            alert("usernmae must be greater than 5 letters");
            return false;
        }
else
        {

         true;
        }

    }