const navLinks = document.getElementById("nav");
const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const contactBtn = document.getElementById("contact");

const mediaQuery = window.matchMedia("(max-width: 800px)");

function handleScreenSizeChange(e) {
  if (e.matches) {
    // Add event listeners for smaller screens
    openBtn.addEventListener("click", () => {
      navLinks.style.display = "block";
      openBtn.style.display = "none";
    });

    closeBtn.addEventListener("click", () => {
      navLinks.style.display = "none";
      openBtn.style.display = "block";
    });
  } else {
    // Reset styles and remove event listeners for larger screens
    navLinks.style.display = ""; // Reset to default
    openBtn.style.display = ""; // Reset to default
    closeBtn.style.display = ""; // Reset to default
  }
}

// Attach the listener to the media query
mediaQuery.addEventListener("change", handleScreenSizeChange);

// Run the function initially to set up the correct behavior
handleScreenSizeChange(mediaQuery);

// Handle the "Contact" button click to show a pop-up
contactBtn.addEventListener("click", () => {
  // Create the pop-up container
  const popup = document.createElement("div");
  popup.id = "popup";
  popup.style.position = "fixed";
  popup.style.top = "0";
  popup.style.left = "0";
  popup.style.width = "100%";
  popup.style.height = "100%";
  popup.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  popup.style.display = "flex";
  popup.style.justifyContent = "center";
  popup.style.alignItems = "center";
  popup.style.zIndex = "1000";

  // Create the pop-up content
  const popupContent = document.createElement("div");
  popupContent.style.backgroundColor = "white";
  popupContent.style.padding = "20px";
  popupContent.style.borderRadius = "10px";
  popupContent.style.textAlign = "center";
  popupContent.style.lineHeight = "1.5";
  popupContent.style.width = "300px";
  popupContent.style.boxShadow = "0 4px 8px rgba(35, 105, 255, 0.5)";

  // Add content to the pop-up
  popupContent.innerHTML = `
    <h2>Our Contacts</h2>
    <p>Feel free to reach out to us for any inquiries or assistance!</p>
    <p>Email: vitahealth@gmail.com</p>
    <p>Phone: (+123) 564-7834</p>
    <button id="close-popup" style="margin-top: 10px; padding: 10px 20px; background-color:rgb(0, 47, 255); color: white; border: none; border-radius: 20px; cursor: pointer;">Close</button>
  `;

  // Append the content to the pop-up container
  popup.appendChild(popupContent);

  // Append the pop-up to the body
  document.body.appendChild(popup);

  // Add event listener to close the pop-up
  const closePopup = document.getElementById("close-popup");
  closePopup.addEventListener("click", () => {
    document.body.removeChild(popup); // Remove the pop-up from the DOM
  });

  // Close the pop-up when clicking outside the content
  popup.addEventListener("click", (event) => {
    if (event.target === popup) {
      document.body.removeChild(popup); // Remove the pop-up from the DOM
    }
  });
});