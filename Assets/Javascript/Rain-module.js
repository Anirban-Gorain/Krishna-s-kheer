class _rain
{

    // Adding the rain image with animation

    _create_Rain()
    {

        // Making the rain image

        let _rain = document.createElement("img");

        _rain.setAttribute("class", "_rain");
        _rain.setAttribute("src", "/Assets/Images/Rain.png");
        _rain.style.opacity = 1;

        // Appending the rain image into appropriate position

        let _appropriate_Position = document.querySelector("._rain_Container");
        _appropriate_Position.appendChild(_rain);

    }

    // Removing rain's method with animation

    _stop_Animation(_rain_Remove_After)
    {

        let _appropriate_Position = document.querySelector("._rain_Container");
        let _rain_Image = document.querySelector("._rain_Container ._rain");

        // Reducing the opacity of rain image

        let _for_Clear_Interval;
        let _count_The_Number_Of_Second = 0;
        let _opacity_Reducing_Value = 0.1
        let _store_Opacity;

        setTimeout(() =>
        {
            
            _for_Clear_Interval = setInterval(() =>
            {
    
                if(_count_The_Number_Of_Second == 10)
                {

                    clearInterval(_for_Clear_Interval);
    
                    _appropriate_Position.removeChild(_rain_Image);

                    return 0;
                    
    
                }
    
                _store_Opacity = parseFloat(_rain_Image.style.opacity);
    
                _rain_Image.style.opacity = _store_Opacity - _opacity_Reducing_Value;
    
                _count_The_Number_Of_Second++;
                
            }, 0.8 * 1000);
            
        }, _rain_Remove_After * 1000);

    }
    
}