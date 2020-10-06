class _score
{

    _increase_Indicator_Hand(_level)
    {

        let _indicator_Hand = document.querySelector("._indicator_Hand");

        if(_level <= 88)
        {

            _indicator_Hand.style.width = _level + "%";

        }

    }

    // Update score

    _update_Score(_new_Score)
    {

        // Level increase sound

        let _music = new Audio("/Assets/Audio/Level-up-sound.mp3");
        _music.volume = 0.2;
        _music.play();

        let _score_Section = document.querySelector("#_score");
        _score_Section.innerHTML = _new_Score;

    }

}