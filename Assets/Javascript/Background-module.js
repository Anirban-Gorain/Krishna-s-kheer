class _background
{

    // Methods

    _add_New_Background()
    {

        // Main section background container

        let _background_Container = document.querySelector("._background");

        // Creating a image node to make background

        let _image = document.createElement("img");

        _image.setAttribute("src", "/Assets/Images/Green-Background.png");
        _image.style.top = 0 + "px";

        // Appending the created image node

        _background_Container.appendChild(_image);

        return 0;

    }

    _move_Background_Image()
    {

        // Selecting two backgrounds

        let _the_Background_Image = document.querySelectorAll("._background img");

        /*
        
        Whenever first background top will be > 635 then the its top will be -635, And for the second background when the top will 
        be > 0 then its the top will be -1270

        */

        if (parseInt(_the_Background_Image[0].style.top) >=635)
        {

            _the_Background_Image[0].style.top = "-635px";
            
        }

        if (parseInt(_the_Background_Image[1].style.top) >= 0)
        {

            _the_Background_Image[1].style.top = "-1270px";
            
        }

        // This means top assign already which value have as top and adding more 1

        _the_Background_Image[0].style.top = (parseInt(_the_Background_Image[0].style.top)) + 1 + "px";
        _the_Background_Image[1].style.top = (parseInt(_the_Background_Image[1].style.top)) + 1 + "px";

        return 0;

    }

    _move_Background_Image_With_Animation(_terminate_Point)
    {

        // The entire concept is how many milli second the background will move

        let _count_Millisecond = 0;
        let _clear_Interval;

        _clear_Interval = setInterval(() =>
        {

            if(_terminate_Point <= _count_Millisecond)
            {

                clearInterval(_clear_Interval);
                return 0;

            }

            this._move_Background_Image();
            _count_Millisecond++;
            
        }, 1);

    }

}