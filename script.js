let currentModal = null; // Variable to track the current open modal

// Function to toggle the visibility of a modal element
function toggle(element) {
    let computedStyle = window.getComputedStyle(element);
    
    if (computedStyle.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

// Function to hide all modals
function hideAllModals() {
    let modals = document.querySelectorAll('.modal_info, .modal_success, .modal_warning, .modal_error');
    modals.forEach(modal => {
        modal.style.display = "none";
    });
}

// Function to toggle a specific modal based on type ('info', 'success', 'warning', 'error')
function toggleModal(type) {
    let modalInfo = document.querySelector('.modal_info');
    let modalSuccess = document.querySelector('.modal_success');
    let modalWarning = document.querySelector('.modal_warning');
    let modalError = document.querySelector('.modal_error');

    // First hide all modals
    hideAllModals();

    // Then open the required modal
    if (type === 'info') {
        toggle(modalInfo);
        currentModal = modalInfo;
    } else if (type === 'success') {
        toggle(modalSuccess);
        currentModal = modalSuccess;
    } else if (type === 'warning') {
        toggle(modalWarning);
        currentModal = modalWarning;
    } else if (type === 'error') {
        toggle(modalError);
        currentModal = modalError;
    }
}

// Event listener for close buttons inside modals
let closeButtons = document.querySelectorAll('.close_button');
closeButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Find the parent modal of the clicked button
        let modal = button.closest('.modal_info, .modal_success, .modal_warning, .modal_error');
        
        // Hide the modal
        if (modal) {
            modal.style.display = "none";
            currentModal = null; // Reset currentModal since no modal is open
        }
    });
});