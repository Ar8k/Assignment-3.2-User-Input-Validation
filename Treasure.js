function Check() 
{
   var firstname = document.getElementById("fn").value; //this is to get the value of what the person inputs for first name
   var lastname = document.getElementById("ln").value;//this is to get the value of what the person inputs for last name
   var social = document.getElementById("ssn").value;//this is to get the value of what the person inputs for ssn
   var phone = document.getElementById("phn").value;//this is to get the value of what the person inputs for phone number
   var zcode = document.getElementById("zc").value;//this is to get the value of what the person inputs for zip code

var fullname = firstname + " " + lastname;// add the first name and last names amount of letters
if (fullname.length > 20 || fullname.length < 3 )// if they add up to more than 20 or less than 3 then display that message
    { 
    document.getElementById ("Status").innerHTML = "Invalid Name, Must be <20 and >3";
    }
else if (social.length != 9) //  if the  ssn is not 9 numbbers then show that message
    {
    document.getElementById ("Status").innerHTML = "Invalid SSN, Must be 9 digits";
    }
else if (phone.length != 10) //same thing but 10 numbers
    {
    document.getElementById ("Status").innerHTML = "Invalid Phone number, Must be 10 digits";
    }
else if (zcode.length != 5) //same thing but 5 numbers
    {
    document.getElementById ("Status").innerHTML = "Invalid zipcode, Must be 5 digits";
    }
else //if none of the above is true, which means everything is correct, show that message
//and when they click ok, take them to that website
{
    alert ("Congrats Here's your code: 5731.  Dont lose it");
    location.replace ("Secondtres.html")
}
}