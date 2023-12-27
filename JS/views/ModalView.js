export const ModalView = ({ title, placeholder, cancel, submit }) => {
    return `<h3 class="modal__title">${title}</h3>
    <form method="dialog" class="modal__form">
        <textarea id="sentence" name="sentence" type="text" placeholder="${placeholder}" required></textarea>
        <menu class="modal__form__btn-wrapper">
            <button type="button" class="modal__form--close">${cancel}</button>
            <button type="submit" class="modal__form--confirm">${submit}</button>
        </menu>
    </form>`;
};
