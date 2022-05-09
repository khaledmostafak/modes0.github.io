function myFunction(){
    var text=document.getElementById("username").value ;
    var password=document.getElementById("password").value ;
    var email=document.getElementById("email").value ;
    
       if(text=="Rehabsayed"&&password=="272003"&&email=="rehabsayed@gmail.com")
        {
            alert("welcome to our website");
            return true;
        }
        else
        {
            alert("Data not valid");
        }
        }
        function fun(){
            var message;
            var x =prompt("enter your number to contact you ")
               if(x==123){
                  message= alert("you'll be contacted in minutes" );
               }
            else{
               message= alert("wrong number ,please try again");
            }
            document.getElementById("forgot").innerHTML=message;
        }