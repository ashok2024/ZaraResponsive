document.addEventListener('DOMContentLoaded', () => {
    const desktopNav = document.getElementById('desktopNav');
    const addFileBtn = document.querySelector('.record-btn');
    const addFileModal = document.getElementById('add-file-modal');
    const cancelUploadBtn = document.getElementById('cancel-upload-btn');
    const closeBtn = document.querySelector('.modal-close-btn');
    if (addFileBtn && addFileModal) {
        addFileBtn.addEventListener('click', () => {
            addFileModal.classList.add('active');
        });
        const closeFileModal = () => {
            addFileModal.classList.remove('active');
        };
        if (cancelUploadBtn) {
            cancelUploadBtn.addEventListener('click', closeFileModal);
        }
        if (closeBtn) {
            closeBtn.addEventListener('click', closeFileModal);
        }
        addFileModal.addEventListener('click', (event) => {
            if (event.target === addFileModal) {
                closeFileModal();
            }
        });
    }
});