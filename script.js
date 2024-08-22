document.addEventListener('DOMContentLoaded', () => {
    // Array of updates/messages
    const updates = [
        "We have launched a new responsive web design service! Contact us to upgrade your site.",
        "Our team now offers SEO optimization to improve your website's search engine ranking.",
        "Check out our latest blog post on the top 5 web development trends for 2024.",
        "Now offering free consultations for all web development services in September 2024!",
        "New feature: We now provide 24/7 support for all our web and cybersecurity services."
    ];

    // Get the modal
    const modal = document.getElementById("updates-modal");
    
    // Get the button that opens the modal
    const btn = document.getElementById("updates-button");
    
    // Get the <span> element that closes the modal
    const span = document.getElementsByClassName("close")[0];
    
    // When the user clicks the button, open the modal
    btn.onclick = function() {
        modal.style.display = "block";
        displayUpdates();  // Populate updates when the modal is shown
    }
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }

    // Function to display updates inside the modal
    function displayUpdates() {
        const updatesContent = document.getElementById('updates-content');
        updatesContent.innerHTML = ''; // Clear previous updates

        updates.forEach(update => {
            const updateElement = document.createElement('p');
            updateElement.textContent = update;
            updatesContent.appendChild(updateElement);
        });
    }
});
