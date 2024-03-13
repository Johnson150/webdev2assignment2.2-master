"use client";

const Navbar = () => (
  <nav class="bg-blue-500 text-white text-xl p-4 flex justify-between items-center">
    <div>New Generation High School</div>
    <div>
      <button class="bg-white text-blue-500 hover:bg-blue-100 text-sm font-semibold py-2 px-4 mr-2 rounded">
        <a href="addPage.js">Add new student</a>
        
      </button>
      <button class="bg-white text-blue-500 hover:bg-blue-100 text-sm font-semibold py-2 px-4 rounded">
        List of students    
      </button>
    </div>
  </nav>
);
  
  export default Navbar;
  