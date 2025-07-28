document.addEventListener('DOMContentLoaded', () => {
    const expandButtons = document.querySelectorAll('.expand-btn');

    expandButtons.forEach(button => {
        button.addEventListener('click', () => {
            const rowGroup = button.closest('.table-row-group');
            const subTableContainer = rowGroup.querySelector('.sub-table-container');

            button.classList.toggle('open');
            subTableContainer.classList.toggle('open');
        });
    });
});