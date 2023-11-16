
document.addEventListener('DOMContentLoaded', function()
{
    const button = document.querySelector('.button');
    const menu = document.querySelector('.nav');

    button.addEventListener('click', function()
    {
        menu.classList.toggle('show');
    });
});
