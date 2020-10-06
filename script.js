// Removing draggable from all the image.

let _all_Image_In_Document = document.querySelectorAll("img");

for(let _index = 0; _index < _all_Image_In_Document.length; _index++)
{

    _all_Image_In_Document[_index].setAttribute("draggable", "false");

}