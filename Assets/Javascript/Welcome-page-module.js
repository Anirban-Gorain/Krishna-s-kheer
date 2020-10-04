// Validation of the user name field

let _name_Field;
const _play_Button = document.querySelector("._play");

function _page_Removing_Animation()
{

    let _welcome_Container = document.querySelector("._welcome_Container");

    // Following variables for making the page removing animation

    let _circle_Radius = 70;
    let _X_Position = 50;
    let _Y_Position = 50;
    let _terminate_Point = 1;

    let _clear_Interval;

    _clear_Interval = setInterval(() =>
    {

        // Whenever the _terminate_Point reach to the 120 the animation will turn off

        if(_terminate_Point >= 120)
        {

            document.querySelector("body").removeChild(_welcome_Container);
            clearInterval(_clear_Interval);

        }

        

        if(_circle_Radius <= 15)
        {

            // Reducing the radius, X and Y

            _welcome_Container.style.clipPath = `circle(${_circle_Radius}% at ${_X_Position}% ${_Y_Position}%)`;

            _X_Position -= 2;
            _Y_Position += 2;

        }
        else
        {

            // Reducing only the radius

            _welcome_Container.style.clipPath = `circle(${_circle_Radius}% at 50% 50%)`;


        }

        // Radius will reduce till it garter 10

        if(_circle_Radius >= 10)
        _circle_Radius -= 1;

        _terminate_Point += 1;
        
    }, 5);

}

function _validation()
{

    _name_Field = document.querySelector("._user_Name").value.split("");
    let _regular_Expression = /^[A-Za-z]+$/;

    // Validating

    if(_name_Field.length == 0)
    {

        document.querySelector("._error_Button").style.visibility = "visible";
        return false;
        
    }
    else
    {
        
        document.querySelector("._error_Button").style.visibility = "hidden";
        
    }
    
    if((_name_Field.length >= 5) && (_name_Field.length <= 10)  && (_name_Field.join("").match(_regular_Expression)))
    {
        
        document.querySelector("._error_User_Name").style.visibility = "hidden";
        
        // Setting the user name to the score board
        
        document.querySelector("._your_Score_Text").innerHTML = _name_Field.join("") + "'s  SCORE"

        return true;
        
    }
    else
    {
        
        document.querySelector("._error_User_Name").style.visibility = "visible";
        
    }

    return false;

}