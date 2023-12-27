export const ItemView = (itemData, props) => {
    return `<li id="${itemData.id}" class="item">
    <p class="item__text">${itemData.text}</p>
    <menu class="item__menu">
        <nav class="item__menu__control-btns">
            <button class="update-item">${props.update}</button>
            <button class="delete-item">${props.delete}</button>
        </nav>
        <button class="read-item">${props.read}</button>
    </menu>
</li>`;
};
