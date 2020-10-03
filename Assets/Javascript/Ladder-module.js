// Counting 10 times, For after 10 times will increase the difficulty level

let _count_10_Times = 0;

class _ladder
{

    // Creating a ladder

    _create_Ladder()
    {

        // Here will append all the ladders

        let _ladder_Container = document.querySelector("._ladder_Container");

        // This followings are width of the ladder images, Will associate with the ladder image and theirs parents

        let _width_Of_The_Ladders = ["952px", "524px", "350px", "177px"];

        // Making the ladder

        let _ladder_Parent = document.createElement("div");
        let _ladder = document.createElement("img");
		
        _ladder.classList.add("_ladder_Common_Style");

        // Appending ladder parent and ladder

        _ladder_Parent.appendChild(_ladder);

        // All the parent of the ladder's having the same height, Because the parent all the ladder images having the same height

        _ladder_Parent.style.height = "auto";
                
        // The downward concept is we will select a image according to a number

        let _Number = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
        let _animation_Speed = Math.floor(Math.random() * (6 - 2) + 2);
        
        if (_Number == 1)
        {

            _ladder.setAttribute("src", "/Assets/Images/Steps-full.png");
            _ladder_Parent.style.width = _width_Of_The_Ladders[0];

            
        }
        else if (_Number == 2)
        {

            _ladder.setAttribute("src", "/Assets/Images/Steps-half.png");
            _ladder_Parent.style.width = _width_Of_The_Ladders[1];
            
        }
        else if (_Number == 3)
        {

            _ladder_Parent.classList.add("_left_Right_Steps_Short");

            if(_count_10_Times >= 10)
            {

                _ladder_Parent.style.animationDuration = _animation_Speed + "s";

            }

            _ladder_Parent.style.margin = "initial";
            _ladder_Parent.style.width = _width_Of_The_Ladders[2];
            _ladder.setAttribute("src", "/Assets/Images/Steps-short.png");
            
        }
        else
        {

            _ladder_Parent.classList.add("_left_Right_Steps_Too_Short");

            if(_count_10_Times >= 10)
            {

                _ladder_Parent.style.animationDuration = _animation_Speed + "s";

            }

            _ladder_Parent.style.margin = "initial";
            _ladder_Parent.style.width = _width_Of_The_Ladders[3];
            _ladder.setAttribute("src", "/Assets/Images/Steps-too-short.png");

        }

        // Prepend to the main section

        _ladder_Container.insertBefore(_ladder_Parent, _ladder_Container.firstChild);

        // Making the gap between two ladder

        let _ladder_Length = _ladder_Container.childElementCount;
        let _bottom_Value = (_ladder_Length == 1) ? 30 : ((_ladder_Length * 30) + ((_ladder_Length - 1) * 200));

        // Insides of the ladder parent's ladder image 

        _ladder_Parent.style.bottom = _bottom_Value + "px";

    }

    // Deleting the down-most ladder 

    _delete_Down_Most()
    {

        _count_10_Times++;

        // Getting the ladder container

        let _ladder_Container = document.querySelector("._ladder_Container");

        // Removing the down most ladder, And shifting the top most ladder one ladder's step down

        let _terminate_Point = 0

        let _clear_Interval = setInterval(() =>
        {

            _terminate_Point++;
            
            if(_terminate_Point >= 231)
            {
                
                clearInterval(_clear_Interval);
				
                _ladder_Container.removeChild(_ladder_Container.lastChild);
				
                return 0;
                
            }
            
            for(let _index = 0; _index < _ladder_Container.childNodes.length; _index++)
            {
                
                _ladder_Container.childNodes[_index].style.bottom = parseFloat(_ladder_Container.childNodes[_index].style.bottom) - 1 + "px";

            }
            
        }, 1);
        
    }

}