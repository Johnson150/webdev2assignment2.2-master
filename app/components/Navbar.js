"use client";

const Navbar = () => (
  <nav class="bg-green-500 text-white p-4 flex justify-between items-center">
    <div>New Generation High School</div>
    <div>
      <button class="bg-white text-green-500 hover:bg-green-100 text-sm font-semibold py-2 px-4 mr-2 rounded">
        Add new student
      </button>
      <button class="bg-white text-green-500 hover:bg-green-100 text-sm font-semibold py-2 px-4 rounded">
        List of students
      </button>
    </div>
  </nav>
);
  
  export default Navbar;
  