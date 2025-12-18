
// Close header > details when clicking outside of it
document.addEventListener('click', (event) => {
  const headerDetails = document.querySelector('header details');
  if (headerDetails && !headerDetails.contains(event.target)) {
    headerDetails.removeAttribute('open');
  }
});

// Close details in aside on mobile, by default
/*if (window.innerWidth < 750) {
  const asideDetails = document.querySelector('aside details');
  if (asideDetails) {
    asideDetails.removeAttribute('open');
  }
}*/

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

// Set syntax highlighting theme based on light or dark mode
function setHighlightTheme(mode) {
	var link = document.getElementById('highlight-styles');
	if (mode == "light") {
		link.href = 'https://unpkg.com/@highlightjs/cdn-assets@11.11.1/styles/stackoverflow-light.min.css'; 
	}
	if (mode == "dark") {
		link.href = 'https://unpkg.com/@highlightjs/cdn-assets@11.11.1/styles/vs2015.min.css'; 
	}
	setTimeout(function () {
		hljs.highlightAll();		
	}, 175);
}

// Toggle between light and dark mode
function toggleLight() {
	var mode = localStorage.getItem("mode");
	if (mode == "light") {
		document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("mode", "dark");
		//setHighlightTheme("dark");
	}
	if (mode == "dark") {
		document.documentElement.setAttribute("data-theme", "light");
		localStorage.setItem("mode", "light");
		//setHighlightTheme("light");
	}
}

// Get current light/dark mode on page load
(function () {

	//var hljs = document.createElement('script');
	//hljs.src = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/highlight.min.js';
	//document.head.appendChild(hljs);

	//var h1css = document.createElement('link');
	//h1css.rel = 'stylesheet';
	//h1css.id = 'highlight-styles';
	//document.head.appendChild(h1css);

	var mode = localStorage.getItem("mode");
	if (mode == "light" || (mode == null && window.matchMedia('(prefers-color-scheme: light)').matches)) {
		localStorage.setItem("mode", "dark");
		toggleLight();
	} else {
		localStorage.setItem("mode", "light");
		toggleLight();
	}
})();
