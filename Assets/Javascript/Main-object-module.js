let _send_On_The_Main_Script_File = false ;

class _main_Kheer
{

    _kheer_Initial()
    {

        // Here will append the main kheer

        let _ladder_Container_Last_Child = document.querySelector("._ladder_Container").lastChild;

        // Creating the main kheer

        let _main_Object = document.createElement("div");
        let _combine_Main_Object = document.createElement("div");
        let _main_Kheer = document.createElement("img");

        // Adding attributes to the created nodes

        _main_Object.setAttribute("class", "_main_Object");
        _main_Object.style.margin = "auto";
        _main_Kheer.setAttribute("src", "/Assets/Images/Kheer-object.png");
        _main_Kheer.setAttribute("width", "130");
        _main_Kheer.setAttribute("class", "_main_Kheer");
        _combine_Main_Object.setAttribute("class", "_combine_Main_Object");

        // Appending the top side created nodes

        _combine_Main_Object.appendChild(_main_Kheer);
        _main_Object.appendChild(_combine_Main_Object);

        _ladder_Container_Last_Child.insertBefore(_main_Object, _ladder_Container_Last_Child.firstChild);

    }

    _kheer_Up()
    {

        let _next_Ladder = document.querySelector("._ladder_Container").lastChild.previousSibling;
        let _main_Object = document.querySelector("._main_Object");

        // Capturing Left of main kheer

        let _left = _main_Object.getBoundingClientRect().left;
                
        // Inserting the _main_Kheer at the last of all the elements of the body tag but before all the script tag

        let _body = document.querySelector("body");
        _body.insertBefore(_main_Object, _body.querySelector("._score_Container").nextSibling);

        // Setting the new captured _left

        _main_Object.style.position = "absolute";
        _main_Object.style.left = _left + "px";
        _main_Object.style.bottom = 80 + 32 + "px";

        // Increasing the bottom the ladder

        let _bottom_Value = 230 + 30 + 82;
        let _terminate_Point = 80 + 32;
        let _clear_Interval;

        _clear_Interval = setInterval(() =>
        {

            if (_terminate_Point >= _bottom_Value)
            {
                
                clearInterval(_clear_Interval);

                let _fetch_Return_Value =  this._is_Perfect_Jump_Of_The_Kheer();

                // capturing the X of the next ladder

                let _data_Of_Next_Ladder = _next_Ladder.getBoundingClientRect();
                let _data_Of_Main_Object = _main_Object.getBoundingClientRect();

                // Now again putting the main kheer to the next ladder where jumped

                if(_fetch_Return_Value == true)
                {

                    let _final_Left = (_data_Of_Next_Ladder.left - _data_Of_Main_Object.left);

                    _final_Left = (_final_Left < 0) ? (_final_Left * -1) : (_final_Left + 22 /*This 22 adding because for perfect accuracy*/);
                    _next_Ladder.insertBefore(_main_Object, _next_Ladder.firstChild);
                    _main_Object.style.left = _final_Left + "px";
                    _main_Object.style.margin = "initial";
                    _main_Object.style.bottom = 82 + "px";

                    // Through of this variable this true will send to the _script.js

                    _send_On_The_Main_Script_File = true;

                    return 0;

                }

                /*  
                
                    This _send_On_The_Main_Script_File variable's value "L" means left most & "R" means right most, These "L" and "R" will use to execute a animation for 
                    Drop the kheer from the ladder.

                    So the logic will be to find the "L" or "R" is find the left value of the second ladder, Let m and the left of the kheer let k

                    if k > m then return "R"
                    if k < m then return "L"
                    
                */

                // When the kheer jump will be unsuccessful removing the left right animation from the next ladder

                if(_next_Ladder.classList.length > 0)
                {

                    /*
                    
                        Capturing the current left, Because when I will remove the animation class from the next ladder then next 
                        ladder left will be 0, To fix it the below 2 lines of code.
                    
                    */

                   let _current_Left = _next_Ladder.getBoundingClientRect().left;
                   _next_Ladder.style.left = _current_Left + "px";
                   _next_Ladder.style.animationDuration = "0s";



                }

                // Through of this variable this L/R will send to the _script.js

               _send_On_The_Main_Script_File = (_data_Of_Next_Ladder.left < _data_Of_Main_Object.left) ? "R" : "L";

                // This bottom setting because to send the main object to the top of the next ladder

               _main_Object.style.bottom = 343 + "px";

               return 0;
                
            }

            _main_Object.style.bottom = _terminate_Point + "px";
            _terminate_Point += 10;
            
        }, 1);

        _main_Object.style.bottom = _bottom_Value;

    }

    _is_Perfect_Jump_Of_The_Kheer()
    {
        /*
        
            This function's work is to find the jumping of the Kheer is successful or not

        */

        let _next_Ladder_Data = document.querySelector("._ladder_Container").lastChild.previousSibling.getBoundingClientRect(); // Let x (Go to the logic.png image on the Game information folder)
        let _the_Main_Kheer_Image_Data = document.querySelector("._main_Kheer").getBoundingClientRect(); // Let y (Go to the logic.png image on the Game information folder)
        
        /*
        
            This down ward IF condition's logic is available on the logic.png image (Go to the logic.png image on the Game information folder)
        
        */

        if((_next_Ladder_Data.top <= _the_Main_Kheer_Image_Data.bottom) && ((_next_Ladder_Data.left + 100) /* 100 adding because to increasing the accuracy */ < _the_Main_Kheer_Image_Data.right) && ((_next_Ladder_Data.right - 100) /* 100 adding because to decreasing the accuracy */ > _the_Main_Kheer_Image_Data.left))
        {

            // If jumping is successful then returning true

            return true;

        }
        else
        {

            // If jumping is successful then returning true

            return false;

        }
    
    }

}

let _kheer_Test = new _main_Kheer;

_kheer_Test._kheer_Initial();