document.addEventListener('DOMContentLoaded', () => {

    // --- Element Selectors ---
    const desktopNav = document.getElementById('desktopNav');
    const navExpandBtn = document.getElementById('nav-expand-btn');
    const navCollapseBtn = document.getElementById('nav-collapse-btn');
    const mainContent = document.querySelector('.main-content');
    
    const hamburger = document.getElementById('hamburger');
    const navMobile = document.querySelector('.navMobile');

    // --- Initial State for Desktop ---
    // Start with the navigation collapsed on larger screens
    if (window.innerWidth >= 768 && desktopNav && mainContent) {
        desktopNav.classList.add('collapsed');
        mainContent.classList.add('nav-collapsed');
    }

    // --- Event Listeners ---

    // Desktop/Tablet: Expand navigation
    if (navExpandBtn) {
        navExpandBtn.addEventListener('click', (e) => {
            e.preventDefault();
            desktopNav.classList.remove('collapsed');
            if (mainContent) mainContent.classList.remove('nav-collapsed');
        });
    }

    // Desktop/Tablet: Collapse navigation
    if (navCollapseBtn) {
        navCollapseBtn.addEventListener('click', (e) => {
            e.preventDefault();
            desktopNav.classList.add('collapsed');
            if (mainContent) mainContent.classList.add('nav-collapsed');
        });
    }

    // Mobile: Toggle navigation
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            if (navMobile) navMobile.classList.toggle('active');
            // Add logic here to show/hide your .navMobile element
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {

    // --- Element Selectors ---
    const desktopNav = document.getElementById('desktopNav');
    const navExpandBtn = document.getElementById('nav-expand-btn');
    const navCollapseBtn = document.getElementById('nav-collapse-btn');
    const mainContent = document.querySelector('.main-content');
    
    // Mobile Navigation Selectors
    const hamburger = document.getElementById('hamburger');
    const navMobile = document.querySelector('.navMobile');
    const navMobileClose = document.querySelector('.nav-mobile-close');

    // --- Initial State for Desktop ---
    // Start with the navigation collapsed on larger screens
    if (window.innerWidth >= 768 && desktopNav && mainContent) {
        desktopNav.classList.add('collapsed');
        mainContent.classList.add('nav-collapsed');
    }

    // --- Event Listeners ---

    // Desktop/Tablet: Expand navigation
    if (navExpandBtn) {
        navExpandBtn.addEventListener('click', (e) => {
            e.preventDefault();
            desktopNav.classList.remove('collapsed');
            if (mainContent) mainContent.classList.remove('nav-collapsed');
        });
    }

    // Desktop/Tablet: Collapse navigation
    if (navCollapseBtn) {
        navCollapseBtn.addEventListener('click', (e) => {
            e.preventDefault();
            desktopNav.classList.add('collapsed');
            if (mainContent) mainContent.classList.add('nav-collapsed');
        });
    }

    // Mobile: Open navigation
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            if (navMobile) navMobile.classList.add('active');
        });
    }

    // Mobile: Close navigation
    if (navMobileClose) {
        navMobileClose.addEventListener('click', () => {
            if (navMobile) navMobile.classList.remove('active');
        });
    }

    // --- Unified Dropdown Logic (for both navs) ---
    const allDropdownToggles = document.querySelectorAll('.dropdown-toggle');
    allDropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const isMobile = toggle.closest('.navMobile');
            const dropdownContainer = toggle.closest(isMobile ? '.nav-mobile-dropdown' : '.nav-dropdown');
            const menu = toggle.nextElementSibling;
            
            // Prevent toggling on collapsed desktop nav
            if (desktopNav && desktopNav.classList.contains('collapsed') && !isMobile) {
                return;
            }

            dropdownContainer.classList.toggle('open');

            if (dropdownContainer.classList.contains('open')) {
                menu.style.maxHeight = menu.scrollHeight + "px";
            } else {
                menu.style.maxHeight = null;
            }
        });
    });
});

// --- Filter Modal Logic ---
const openFilterBtn = document.getElementById('open-filter-btn');
const filterModal = document.getElementById('filter-modal');
const closeFilterBtn = document.getElementById('modal-close-btn');
const modalOverlay = document.getElementById('modal-overlay');

// Function to open the modal
if (openFilterBtn) {
    openFilterBtn.addEventListener('click', () => {
        if (filterModal) {
            filterModal.classList.add('active');
        }
    });
}

// Function to close the modal
const closeModal = () => {
    if (filterModal) {
        filterModal.classList.remove('active');
    }
};

// Add close event listeners
if (closeFilterBtn) {
    closeFilterBtn.addEventListener('click', closeModal);
}

if (modalOverlay) {
    modalOverlay.addEventListener('click', closeModal);
}
