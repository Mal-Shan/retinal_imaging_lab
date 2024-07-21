window.addEventListener('DOMContentLoaded', () => {
  // This event listener ensures that the script runs after the DOM has fully loaded.

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      if (entry.intersectionRatio > 0) {
        // If the heading is intersecting with the viewport (i.e., visible)
        document.querySelector(`[href="#${id}"]`).parentElement.classList.add('active');
        // Add the class 'active' to the parent element of the corresponding link in the navigation
      } else {
        // If the heading is not intersecting with the viewport (i.e., not visible)
        document.querySelector(`[href="#${id}"]`).parentElement.classList.remove('active');
        // Remove the class 'active' from the parent element of the corresponding link in the navigation
      }
    });
  });

  // Track all headings that have an `id` applied
  document.querySelectorAll('h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]').forEach(h => {
    observer.observe(h);
    // Observe each heading element found in the document that has an `id` attribute
  });
});