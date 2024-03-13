// Directive to inform the tooling that this code is intended to run in a client-side context.
"use client";

// Define a functional component named Navbar that renders the navigation bar UI.
const Navbar = () => (
  // Navigation bar with a blue background, white text, large text size, padding, and flexbox layout for alignment.
  <nav class="bg-blue-500 text-white text-xl p-4 flex justify-between items-center">
    
  {/* A division for the school name or logo within the navbar. */}
    <div>New Generation High School</div>
    {/* Container for navigation buttons, utilizing flexbox for alignment. */}
    <div>
      {/* Button for adding a new student, styled with white background, blue text, hover effect, small text size, bold font, padding, margin right, and rounded corners. */}
      <button class="bg-white text-blue-500 hover:bg-blue-100 text-sm font-semibold py-2 px-4 mr-2 rounded">
        Add new student
      </button>
      {/* Button for listing all students, styled similarly to the add new student button but without the right margin. */}
      <button class="bg-white text-blue-500 hover:bg-blue-100 text-sm font-semibold py-2 px-4 rounded">
        List of students    
      </button>
    </div>
  </nav>
);

// Export the Navbar component for use in other parts of the application, making it reusable and modular.
export default Navbar;
