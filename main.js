var session_minutes = 25;
var session_seconds = "00";

//var pause = document.querySelector('.button_pause');

//Audio files
var click = new Audio("Mouse-Click-00-c-FesliyanStudios.com.mp3");
var bell = new Audio("bell.mp3");

// Starting template for the timer
function template(){
    document.getElementById("minutes").innerHTML = session_minutes;
    document.getElementById("seconds").innerHTML = session_seconds;
}

function start(){
    click.play();

    //Change the minutes and seconds to the start time
    session_minutes = 24;
    session_seconds = 59;

    document.getElementById("minutes").innerHTML = session_minutes;
    document.getElementById("seconds").innerHTML = session_seconds;

    var min_interval = setInterval(minutesTimer, 60000);
    var sec_interval = setInterval(secondsTimer, 1000);

    function minutesTimer(){
        session_minutes = session_minutes - 1;
        document.getElementById("minutes").innerHTML = session_minutes;
    }

    function secondsTimer(){
        session_seconds = session_seconds - 1;
        document.getElementById("seconds").innerHTML = session_seconds;

        /*
            Check if the minute and second counter have reached 0
            If the timer reaches 0, then the session ends. For testing
            session_seconds <= 57 and session_minutes <= 24
        */
        if(session_seconds <= 0){
            if(session_minutes <= 0){

                //Clear the interval
                clearInterval(min_interval);
                clearInterval(sec_interval);

                //Add the message to the HTML
                document.getElementById("done").innerHTML = "Session Completed!! Take a Break";

                //make the HTML message div visible
                document.getElementById("done").classList.add("show_message");

                //play the bell sound at the end of the session
                bell.play();
            }
            //reset session seconds to 60
            session_seconds = 60;
        }
    }
    
    pause.addEventListener('click',function(e){
        e.preventDefault();
        clearInterval(min_interval);
        clearInterval(sec_interval);
    }
)};

/*function pause(){
    pause.addEventListener('click',function(e){
        e.preventDefault();
        clearInterval(min_interval);
        clearInterval(sec_interval);
    }
)};*/

