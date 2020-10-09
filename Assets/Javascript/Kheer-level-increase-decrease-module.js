class _kheer_Level
{

    _increase_Kheer_Level()
    {
        /*

            To update the kheer images I want to check that which image appeared last, So which images was appeared last that 
            image will be the first child of the "_combine_Main_Object", Now to evaluate the last and which image will push over
            there I will extract the "src" attribute of the first child of "_combine_Main_Object", And all the "src" contain serial
            number I will extract the serial number and will push a appropriate image which serial number will be next.

        */

        let _combine_Main_Object = document.querySelector("._combine_Main_Object");

        let _count_Nodes_Quantity = _combine_Main_Object.childElementCount;
        
        if(_count_Nodes_Quantity >= 9)
        {

            return "No image remaining";

        }
        
        let _next_Image_src;
        
        if(_count_Nodes_Quantity > 1)
        {

            // When the control will come here than means one image is set, Now times for 2nd, 3rd, ... 6th
            
            let _last_Image_Src_Attribute = _combine_Main_Object.firstChild.getAttribute("src");

            _next_Image_src = parseInt(_last_Image_Src_Attribute.match(/\d/g).join(""));

        }

        // All kheer images

        let _kheer_Images = ["/Assets/Images/Kheer-increasing (1).png", "/Assets/Images/Kheer-increasing (2).png", "/Assets/Images/Kheer-increasing (3).png", "/Assets/Images/Kheer-increasing (4).png", "/Assets/Images/Kheer-increasing (5).png", "/Assets/Images/Kheer-increasing (6).png", "/Assets/Images/Kheer-increasing (7).png", "/Assets/Images/Kheer-increasing (8).png"];

        // Creating the image

        let _image = document.createElement("img");

        // Appending the image

        _combine_Main_Object.insertBefore(_image, _combine_Main_Object.firstChild);

        // Setting common style

        _image.classList.add("_kheer_Increasing_Common_Style");

        _image.style.transition = "1s";

        if(_count_Nodes_Quantity == 1)
        {

            // Control here means there are no kheer increased related images till now

            _image.setAttribute("src", _kheer_Images[0]);
            this._smooth_Add_And_Remove_Animation("A");

            return 0;

        }

        _image.setAttribute("src", _kheer_Images[_next_Image_src]);

        this._smooth_Add_And_Remove_Animation("A");
        
    }

    _smooth_Add_And_Remove_Animation(_create_Or_Remove)
    {

        let _element = document.querySelector("._combine_Main_Object").firstChild;

        if(_create_Or_Remove === "A")
        {

            let _opacity = 0.1;

            let _clear_interval = setInterval(() => 
            {

                if(_opacity >= 1)
                {

                    clearInterval(_clear_interval);
                    return 0;

                }

                _element.style.opacity = _opacity;
                _opacity += 0.1;
                
            }, 200);

        }
        else if(_create_Or_Remove === "R")
        {

            let _combine_Main_Object = document.querySelector("._combine_Main_Object");

            if(_combine_Main_Object.childElementCount === 1)
            {

                return "No image remains to delete";

            }
            else
            {

                _combine_Main_Object.firstChild.style.opacity = 0;

                setTimeout(() =>
                {
                
                    _combine_Main_Object.removeChild(_element);

                }, 1000);

            }

            
        }

    }
    
    _drop(_left_Or_Right_Most_Animation)
    {

        let _main_Object = document.querySelector("._main_Object");
        
        // Adding the animation class

        if(_left_Or_Right_Most_Animation === "R")
        {

            _main_Object.classList.add("_kheer_Drop_Animation_For_Right_Most");


        }
        else if(_left_Or_Right_Most_Animation === "L")
        {

            _main_Object.classList.add("_kheer_Drop_Animation_For_Left_Most");


        }

        
    }

}