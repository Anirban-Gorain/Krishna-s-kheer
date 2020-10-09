// Removing draggable from all the image.

let _all_Image_In_Document = document.querySelectorAll("img");

for(let _index = 0; _index < _all_Image_In_Document.length; _index++)
{

    _all_Image_In_Document[_index].setAttribute("draggable", "false");

}

/* Necessary objects */

let _ladder_Object = new _ladder;
let _background_Object = new _background;
let _coin_Object = new _coin;
let _main_Kheer_Object = new _main_Kheer;
let _kheer_Level_Object = new _kheer_Level;
let _score_Object = new _score;
let _game_Restart_Object = new _game_Restart;

/* Initial necessary methods calling */

_ladder_Object._create_Ladder();
_ladder_Object._create_Ladder();
_ladder_Object._create_Ladder();

_background_Object._add_New_Background();
_background_Object._add_New_Background();

_main_Kheer_Object._kheer_Initial();

/* Necessary variables */

let _can_User_Press_Keys = true;
let _interval_Handel_Who_Control_Time_Limit_For_Key_Pressing;
let _interval_Handel_Who_Control_The_Remaining_Time;
let _remaining_Round = 10;
let _Count_Each_10_Seconds = 10;
let _can_Need_To_Start_Timer_Again = true;
let _bird_Nature_Audio = new Audio("/Assets/Audio/Bird-nature-sound.mp3");
_bird_Nature_Audio.loop = true;

let _start_Game_Store =  function (_event_Object)
{

    if ((_event_Object.key === " " || _event_Object.key === "ArrowUp") && _can_User_Press_Keys === true)
    {

        // For, User should not able to move the main kheer for 1 second

        _can_User_Press_Keys = false;

        _interval_Handel_Who_Control_Time_Limit_For_Key_Pressing = setTimeout(() =>
        {

            _can_User_Press_Keys = true;
            
        }, 1300);

        /* 
        
            Starting a timer which will define for every jump user will get only 10 second,
            And also user will get 10 round, If user will not complete a round in 10 second
            then user round will become 9 and so on till round will not become 0

        */

        if(_can_Need_To_Start_Timer_Again === true)
        {

            _can_Need_To_Start_Timer_Again = false;

            _score_Object._increase_Indicator_Hand(88);

            /* First time the kheer level will be maximum */

            for(let _max = 1; _max <= 8; _max++)
            {

                _kheer_Level_Object._increase_Kheer_Level();

            }

            _interval_Handel_Who_Control_The_Remaining_Time = setInterval(() =>
            {

                if(_remaining_Round === 0)
                {

                    // Control here mean the game is over for showing score 0 and round is 0

                    document.querySelector("#_remaining_Monitor").innerHTML = "You left only " + 0 + " Round " + "And " + 0 + " second";

                    // And, Also clearing this interval for not need to count the second further

                    clearInterval(_interval_Handel_Who_Control_The_Remaining_Time);

                    // And, Also clearing this interval for not need to count that after how much time user will able to click again

                    clearInterval(_interval_Handel_Who_Control_Time_Limit_For_Key_Pressing);

                    // Preventing to come here again

                    _can_User_Press_Keys = false;

                    // And, Also not need t detect the key event

                    document.removeEventListener("keydown", _start_Game_Store);

                    // Drop animation of the kheer

                    _kheer_Level_Object._drop(_send_On_The_Main_Script_File);

                    // Restarting the game

                    setTimeout(() =>
                    {

                        _game_Restart_Object._create_Pop_up();
                        
                    }, 1000 * 2.5);

                    return 0;

                }

                if(_Count_Each_10_Seconds === 0 && _remaining_Round != 0)
                {

                    _Count_Each_10_Seconds = 10;
                    
                    _remaining_Round--;

                    // Decreasing the kheer level

                    _kheer_Level_Object._smooth_Add_And_Remove_Animation("R");
                    _score_Object._increase_Indicator_Hand(parseInt(document.querySelector("._indicator_Hand").style.width) - 8);


                }

                document.querySelector("#_remaining_Monitor").innerHTML = "You left only " + _remaining_Round + " Round " + "And " + _Count_Each_10_Seconds + " second";

                _Count_Each_10_Seconds--;
                
            }, 1 * 1000);

        }


        /* 
        
            This reason of this waiting is after jumping the main kheer if the jumping is successful then we need to execute the
            statements of inside of the if body, For this need some time, Mainly for the jumping animation of main kheer. 
        
        */

        _main_Kheer_Object._kheer_Up();

        // Coin collision detection

        // _coin_Object._coin_Collision_Detection();

        setTimeout(() =>
        {

            
            if(_send_On_The_Main_Script_File === true)
            {

                _Count_Each_10_Seconds = 10;
                
                // _can_User_Press_Keys = true;
                
                // Creating a new ladder
                
                _ladder_Object._create_Ladder();
                
                // Adding coin
                
                // _coin_Object._add_Coin();
                
                // Removing the down most ladder
                
                _ladder_Object._delete_Down_Most();
                
                // Shifting the background from top to bottom
                
                _background_Object._move_Background_Image_With_Animation(230);
                
                // Updating the score
                
                _score_Object._update_Score((parseInt(document.querySelector("#_score").innerText)) + 1);
                
            }
            else
            {
                
                // Control here mean the game is over for showing score 0 and round is 0
                
                document.querySelector("#_remaining_Monitor").innerHTML = "You left only " + 0 + " Round " + "And " + 0 + " second";
                
                // And, Also clearing this interval for not need to count the second further

                clearInterval(_interval_Handel_Who_Control_The_Remaining_Time);

                // And, Also clearing this interval for not need to count that after how much time user will able to click again
                
                clearInterval(_interval_Handel_Who_Control_Time_Limit_For_Key_Pressing);
                
                // And, Also not need t detect the key event
                
                document.removeEventListener("keydown", _start_Game_Store);
                
                // Preventing to come here again
                
                _can_User_Press_Keys = false;

                // Drop animation of the kheer

                _kheer_Level_Object._drop(_send_On_The_Main_Script_File);

                // Resetting the kheer level

                _score_Object._increase_Indicator_Hand(0);

                // Restarting the game

                setTimeout(() =>
                {

                    _game_Restart_Object._create_Pop_up();
                    
                }, 1000 * 2.5);

                return 0;
                

            }
            
        }, 300);
        
    }
    
    
}

// Selecting the Play

const _play = document.querySelector("._play");

_play.addEventListener("click", () => 
{

    let _return_From_Validation = _validation();

    // If the validation is successful

    if(_return_From_Validation === true)
    {

        /* The reason to play the audio here is this block will execute once for just playing the audio here */

        _bird_Nature_Audio.play();

        // Removing the validation page after 500 ms

        setTimeout(() =>
        {

            _page_Removing_Animation();
            
        }, 800);

        document.addEventListener("keydown", _start_Game_Store);

    }

});