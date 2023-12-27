const dialog = document.querySelector(".modal");

export const showDialog = () => {
    dialog.showModal();
};

export const closeDialog = (form) => {
    form.reset();
    dialog.close();
};
