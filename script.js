document.addEventListener('DOMContentLoaded', () => {
    const artItems = document.querySelectorAll('.art-item');

    artItems.forEach(item => {
        item.addEventListener('click', () => {
            alert('В будущем здесь будет открываться большое фото картины!');
        });
    });
});
