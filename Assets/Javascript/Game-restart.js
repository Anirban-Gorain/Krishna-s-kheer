class _game_Restart
{

    _create_Pop_up()
    {

        // Pausing the bird nature sound

        // _bird_Nature_Sound.pause();

        // Ladder animation can be fast counter

        _count_10_Times = 0;

        // Resetting the variables values

        _can_User_Press_Keys = true;
        _interval_Handel_Who_Control_Time_Limit_For_Key_Pressing;
        _interval_Handel_Who_Control_The_Remaining_Time;
        _remaining_Round = 10;
        _Count_Each_10_Seconds = 10;
        _can_Need_To_Start_Timer_Again = true;
        _send_On_The_Main_Script_File = false;

        // After _main_Object element will append pop up

        let _main_Object = document.querySelector("._score_Container");
        
        // Creating the pop up

        let _main_Pop_Up = document.createElement("div");
        let _score_Monitor = document.createElement("div");
        let _restart_Button = document.createElement("div");
        let _close_Button = document.createElement("div");

        // Adding essential classes

        _main_Pop_Up.classList.add("_main_Pop_Up");
        _score_Monitor.classList.add("_score_Monitor");
        _restart_Button.classList.add("_restart_Button");
        _close_Button.classList.add("_close_Button");

        // Appending data

        let _score = document.querySelector("#_score");
        _score_Monitor.append("Thanks for play, Your score is " + _score.innerText);

        _close_Button.appendChild(document.createTextNode("Close"));
        _restart_Button.appendChild(document.createTextNode("Restart"));

        // appending the created nodes

        _main_Pop_Up.appendChild(_score_Monitor);
        _main_Pop_Up.appendChild(_restart_Button);
        _main_Pop_Up.appendChild(_close_Button);

        document.querySelector("body").insertBefore(_main_Pop_Up, _main_Object.nextSibling);

        // Adding buttons event

        _close_Button.addEventListener("click", () =>
        {

            window.close();

        });

        // Making the score 0, And Changing the kheer level text

        document.querySelector("#_score").innerText = "0";
        document.querySelector("#_remaining_Monitor").innerText = "let's stat, Click arrow up key to start";

        // Resetting level indicator hand
        
        document.querySelector("._indicator_Hand").style.width = 0 + "px";

        // Removing all the ladders

        let _ladder_Container = document.querySelector("._ladder_Container");
        let _ladder_Container_Children = document.querySelectorAll("._ladder_Container > div");
        let _quantity_Of_Child_Elements = _ladder_Container.childElementCount;

        for(let _index = 0; _index < _quantity_Of_Child_Elements; _index++)
        {

            _ladder_Container.removeChild(_ladder_Container_Children[_index]);

        }

        // Removing the created background images

        let _background = document.querySelector("._background");
        let _background_Children = document.querySelectorAll("._background > img");
        _quantity_Of_Child_Elements = _background.childElementCount;

        for(let _index = 0; _index < _quantity_Of_Child_Elements; _index++)
        {

            _background.removeChild(_background_Children[_index]);

        }

        _restart_Button.addEventListener("click", () =>
        {

            // Starting the game again

            document.addEventListener("keydown", _start_Game_Store);

            /* Initial necessary methods calling */

            _ladder_Object._create_Ladder();
            _ladder_Object._create_Ladder();
            _ladder_Object._create_Ladder();

            _background_Object._add_New_Background();
            _background_Object._add_New_Background();

            _main_Kheer_Object._kheer_Initial();

            setTimeout(() =>
            {

                _main_Pop_Up.remove();

            }, 500);



        });



    }

}