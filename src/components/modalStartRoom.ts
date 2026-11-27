export const modalStartRoom = (): void => {
  const createModal = (): HTMLElement => {
    const modal = document.createElement('div');
    modal.className = 'modal__overlay';
    modal.innerHTML = `
          <div class="modal">
            <h3 class="modal__title">Ваш никнейм</h3>
            <input type="text" class="modal__input modal__input-name" placeholder="nagibator67">
            <h3 class="modal__title">Название комнаты</h3>
            <input type="text" class="modal__input modal__input-name" placeholder="room123">  

            <div class="modal__close">Закрыть</div>
          </div>
      `;
    document.body.appendChild(modal);
    document.body.classList.add('no-scroll');

    document.querySelector('.modal__close')?.addEventListener('click', () => {
      modal.remove();
    });

    // Удаление при нажатие вне области модалки
    modal.addEventListener('click', (e) => {
      if (e.target instanceof HTMLElement && e.target.classList.contains('modal__overlay')) {
        modal.remove();
      }
    });

    return modal;
  };

  document.querySelector('.main__fight')?.addEventListener('click', () => {
    createModal();
  });
};
