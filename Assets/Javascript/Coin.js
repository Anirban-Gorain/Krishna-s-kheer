
let _animation_Clear_Interval;

class _coin
{

    /* 
    
        Finding the appropriate place for place the coin, Coin always will add on the top most ladder. But the condition is 
        after the topmost ladder must contain left-right animation.
    
    */

    _add_Coin()
    {

        let _ladder_Container = document.querySelector("._ladder_Container");

        let _first_Child_Of_Ladder_Container = _ladder_Container.firstChild
        let _second_Child_Of_Ladder_Container = _first_Child_Of_Ladder_Container.nextSibling;

        // Finding _second_Child_Of_Ladder_Container's class having the _left_Right substring or not if have means having left-right animation otherwise will not coin

        let _class_Of_The_Second_Child = _second_Child_Of_Ladder_Container.classList.value;

        if(_class_Of_The_Second_Child.includes("_left_Right"))
        {

            let _coin_Container = document.createElement("div");

            _coin_Container.classList.add("_coin_Container");

            _first_Child_Of_Ladder_Container.insertBefore(_coin_Container, _first_Child_Of_Ladder_Container.firstChild);
            
            return _coin_Container;

        }
        else
        {

            return null;

        }

    }

    _complement_For_Coin_Collecting()
    {

        let _complements = ["Good", "Awesome", "Confident", "Hot", "Outstanding", "Wonderful", "Perfect"];

        // Generating a number between 1-7, Because we have 7 complements

        let _option = Math.floor(Math.random() * (7 - 1 + 1)) + 1;

        console.log(_option);

        switch (_option) 
        {
            case 1:

                _play_Complement_Sound("Assets/Audio/Perfect.mp3");
                this._add_Complement_Effect("Perfect");
                
            break;
            
            case 2:

                _play_Complement_Sound("Assets/Audio/Awesome.mp3");
                this._add_Complement_Effect("Awesome");
                
            break;

            case 3:

                _play_Complement_Sound("Assets/Audio/Confident.mp3");
                this._add_Complement_Effect("Confident");
                
            break;

            case 4:

                _play_Complement_Sound("Assets/Audio/Good.mp3");
                this._add_Complement_Effect("Good");
                
            break;

            case 5:

                _play_Complement_Sound("Assets/Audio/Hot.mp3");
                this._add_Complement_Effect("Hot");
                
            break;

            case 6:

                _play_Complement_Sound("Assets/Audio/Outstanding.mp3");
                this._add_Complement_Effect("Outstanding");
                
            break;

            case 7:

                _play_Complement_Sound("Assets/Audio/Wonderful.mp3");
                this._add_Complement_Effect("Wonderful");
                
            break;
            
        }

    }

    _add_Complement_Effect(_complement_Value)
    {

        let _complement_Container = document.querySelector("._complement_Container");

        // Setting the complement text

        _complement_Container.innerHTML = `<span>${_complement_Value}</span>`;

        setTimeout(() =>
        {

            _complement_Container.querySelector("span").remove();
            
        }, 1.5 * 1000);

    }

    _coin_Collision_Detection()
    {
        
        let _main_Kheer = document.querySelector("._main_Object");

        // Finding the last coin

        let _ladder_Container = document.querySelector("._ladder_Container").lastChild.previousSibling;

        let _down_Most_Coin = _ladder_Container.querySelector("._coin_Container");
        
        // Finding that when will be bottom of the main object >= 200px
        
        let _capture_Top;

        if(_down_Most_Coin != null /* If any coin is generated, Then this condition will be true */)
        {
        
            _animation_Clear_Interval = setInterval(() =>
            {

                _capture_Top = _main_Kheer.getBoundingClientRect();

                if(_capture_Top.top < 280)
                {

                        
                    let _data_Of_Main_Kheer = _main_Kheer.getBoundingClientRect();
                    let _data_Of_Down_Most_Coin = _down_Most_Coin.getBoundingClientRect();

                    // Collision detection, To learn just open this link https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
                    
                    if(_data_Of_Down_Most_Coin.x < _data_Of_Main_Kheer.x + _data_Of_Main_Kheer.width && _data_Of_Down_Most_Coin.x + _data_Of_Down_Most_Coin.width > _data_Of_Main_Kheer.x && _data_Of_Down_Most_Coin.y < _data_Of_Main_Kheer.y + _data_Of_Main_Kheer.height && _data_Of_Down_Most_Coin.y + _data_Of_Down_Most_Coin.height > _data_Of_Main_Kheer.y)
                    {
                        
                        _down_Most_Coin.classList.add("_coin_Removing_Animation");
                        
                        setTimeout(() =>
                        {

                            this._complement_For_Coin_Collecting();
                            _down_Most_Coin.remove();
                            
                        }, 1 * 500);
                        
                    }
                        
                    // Clearing the clear interval

                    clearInterval(_animation_Clear_Interval);

                    return 0;

                }

            }, 1);

        }

    }

}

function _play_Complement_Sound(_which_Audio_Have_To_Play)
{

    let _complement_Sound = new Audio(_which_Audio_Have_To_Play);
    _complement_Sound.volume = 0.5;
    _complement_Sound.play();

}