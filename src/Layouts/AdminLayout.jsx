import React from "react";
import Mahasiswa from '../Pages/Admin/Mahasiswa'

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <div className="flex-grow flex ">
        <Sidebar />
        <Mahasiswa />
      </div>
      <Footer />
    </div>
  );
};

function Sidebar() {
  return (
    <div className="">
      <aside className="h-full bg-indigo-900 text-white">
        <div className="p-4">
          <h1 className="text-2x1 font-bold">Admin Panel</h1>
          <nav className="py-2 px-4 mt-4">
            <ul>
              <li className="py-2 px-4 hover:bg-indigo-700">
                <a href="">Dashboard</a>
              </li>

              <li className="py-2 px-4 hover:bg-indigo-700">
                <a href="">Mahasiswa</a>
              </li>

              <li className="py-2 px-4 hover:bg-indigo-700">
                <a href="">Setting</a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-indigo-900 p-4 text-white text-center bottom-0">
      &copy; raplirhm
    </div>
  );
}

export default Home;
