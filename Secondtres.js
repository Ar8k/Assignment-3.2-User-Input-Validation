function alarm() //this is a function to play my sound
{
    var mySound = new Sound("mixkit-classic-alarm-995.wav")
    mySound.play();
}
function Sound(src) //build the constructor to create a sound
{
//create new sound elemnt
this.sound = document.createElement("audio");
//set the source
this.sound.src = src;
this.play = function() {
    this.sound.play();
}
}

function Enter() //function when the button is pressed
{
    var fcode = document.getElementById("finalCode").value;

    if (fcode == 5731) //if  code is correct, do this
    {
        document.getElementById("Status").innerHTML = "Correct Code! Enjoy your Treasure"
    }
    else //anything else, do this
    {
        document.getElementById("Status").innerHTML = "incorrect Code! Intruder Alert!"
        alarm();//this is how the alarm is played
    }
}

