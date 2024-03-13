// Directive indicating that this script is to be run under a client-side environment.
"use client";

// Define a functional component named Footer that returns footer HTML markup.
const Footer = () => (
  // Footer element with a blue background, margin top, padding, and fixed to the bottom of the viewport.
  <footer class="bg-blue-300 mt-1 py-4 static bottom-0">
    <div class="container mx-auto text-center">
      {/* Paragraph displaying the school name with small text size and gray text color. */}
      <p class="text-sm text-gray-600">New Generation High School</p>

      {/* Paragraph displaying the school address with extra small text size, gray text color, and margin top for spacing. */}
      <p class="text-xs text-gray-600 mt-1">123 Education Place, Calgary, Alberta T3J2A1</p>

      {/* Paragraph displaying contact information with extra small text size, gray text color, and margin top for spacing. */}
      <p class="text-xs text-gray-600 mt-1">Phone: (123) 456-7890 | Email: info@newgenhigh.edu</p>
      
      {/* Copyright notice paragraph with extra small text size, gray text color, and margin top for spacing. */}
      <p class="text-xs text-gray-600 mt-1">© 2024 New Generation High School. All rights reserved.</p>
      
    </div>
  </footer>
);

// Export the Footer component for use in other parts of the application.
export default Footer;

  
