let modalMode = null; // 'add', 'edit', 'stock-in', 'stock-out'

const modal = document.getElementById('modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const openModalBtn = document.getElementById('open-modal-btn');


const openModal = () => {
  modal.classList.remove('hidden');
    // modal.classList.remove('hidden');
    console.log('Modal opened');
}

const closeModal = () => {
    modal.classList.add('hidden');
    console.log('Modal closed');
};


modalCloseBtn.addEventListener('click', closeModal);
openModalBtn.addEventListener('click', openModal);