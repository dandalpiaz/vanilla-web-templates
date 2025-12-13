
// Close dialog when clicking outside of it
document.addEventListener('click', (event) => {
  if (event.target instanceof HTMLDialogElement) {
    const rect = event.target.getBoundingClientRect();
    const inside =
      event.clientX >= rect.left &&
      event.clientX <= rect.right &&
      event.clientY >= rect.top &&
      event.clientY <= rect.bottom;

    if (!inside) event.target.close();
  }
});

// Trap focus within open dialogs
document.addEventListener('keydown', (event) => {
  if (event.key === 'Tab') {
    const dialog = document.querySelector('dialog[open]');
    if (dialog) {
      const focusableElements = dialog.querySelectorAll(
        'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
      );
      
      if (focusableElements.length === 0) return;
      
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      
      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    }
  }
});

// close details in aside on mobile, by default
//window.addEventListener('load', () => {
  if (window.innerWidth < 750) {
    const asideDetails = document.querySelector('aside details');
    if (asideDetails) {
      asideDetails.removeAttribute('open');
    }
  }
//});
