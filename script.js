let buttons= [...document.querySelectorAll(".accordion-item button")];

buttons.forEach(function(button)
{
    button.addEventListener("click", function(event)
    {
        event.stopPropagation(); //всплытие событий
            buttons.forEach(function(button){
                button.nextElementSibling.classList.remove("opened");
                button.nextElementSibling.style.height = null;
            });
        let el = event.target;
        let height = el.nextElementSibling.scrollHeight;
        if(el.nextElementSibling.style.height)
        {
            el.nextElementSibling.style.height = null;
        }
        else{
            el.nextElementSibling.style.height = `${height}px`;
        }
    });
        document.body.addEventListener("click", function(event)
        {
            buttons.forEach(function(button){
                button.nextElementSibling.style.height = null;
            });
 });
});
function preventLink(event){
    event.preventDefault();
}