export const MenuView = ({ add, low, high, speedText }) => {
  return ` <button class="add-item">${add}</button>
    <article class="menu__speed">
        <button class="menu__speed--low">${low}</button>
        <span class="menu__speed__text">${speedText}</span>
        <button class="menu__speed--high">${high}</button>
    </article>`;
};
