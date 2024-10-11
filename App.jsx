import './App.css'
import React, { useState } from 'react';
import Swal from 'sweetalert2';


function App(){
  return (
    <div className='bg-gray-100'>
      <div className='flex min-h-screen'>
      <Sidebar />
      <Konten />

    </div>
    <Footer />
    </div>
    
  );
}

function Sidebar(){
  return(
    <div className=''>
      <aside className="min-h-screen w-64 bg-indigo-900 text-white">
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

function Konten () {
  const [Tambah, setTambah] = useState(false);
  const [Edit, setEdit] = useState(false);

  const toggleTambah = () => {
    setTambah(!Tambah);
  };

  const toggleEdit = () => {
    setEdit(!Edit);
  };


  return (
    <div className="flex flex-1 flex-col">
      <header className="bg-white p-4">
        <div className="flex justify-end">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Logout</button>
        </div>
      </header>

      
        <div className="flex p-4 mb-1 justify-between bg-blue-50">
        <h2 className="text-x1 font-semibold">List Mahasiswa</h2>
        <button onClick={toggleTambah} id="btn-tambah" className ="bg-green-500 rounded px-4 py-2 text-white font-semibold">Tambah</button>

        
        </div>

    <main className="flex-grow p-4 bg-blue-50">
        <div className="bg-white p-6 rounded-lg shadow">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="font-bold">
                <td className="border px-4 py-2">No.</td>
                <td className="border px-4 py-2">NIM</td>
                <td className="border px-4 py-2">Nama Lengkap</td>
                <td className="border px-4 py-2">Aksi</td>

              </tr>
            </thead>
            <thead>
              <tr className="bg-gray-100">
                <td className="border px-4 py-2">01</td>
                <td className="border px-4 py-2">A11.2022.11111</td>
                <td className="border px-4 py-2">Budi</td>
                <td className="border px-4 py-2 flex flex-row gap-2">
                  <button onClick={toggleEdit} className="bg-yellow-500 rounded px-4 py-2 text-white font-semibold">Edit</button>
                  <button onClick={openBahaya} className="bg-red-500 rounded px-4 py-2 text-white font-semibold">Delete</button>
                </td>

              </tr>
            </thead>
            <thead>
              <tr className="bg-gray-100">
                <td className="border px-4 py-2">02</td>
                <td className="border px-4 py-2">A11.2022.22222</td>
                <td className="border px-4 py-2">Yanto</td>
                <td className="border px-4 py-2 flex flex-row gap-2">
                  <button onClick={toggleEdit} className="bg-yellow-500 rounded px-4 py-2 text-white font-semibold">Edit</button>
                  <button onClick={openBahaya} className="bg-red-500 rounded px-4 py-2 text-white font-semibold">Delete</button>
                </td>
              </tr>
            </thead>
            <thead>
              <tr className="bg-gray-100">
                <td className="border px-4 py-2">03</td>
                <td className="border px-4 py-2">A11.2022.33333</td>
                <td className="border px-4 py-2">Arif</td>
                <td className="border px-4 py-2 flex flex-row gap-2">
                  <button onClick={toggleEdit} className="bg-yellow-500 rounded px-4 py-2 text-white font-semibold">Edit</button>
                  <button onClick={openBahaya} className="bg-red-500 rounded px-4 py-2 text-white font-semibold">Delete</button>
                </td>
              </tr>
            </thead>
          </table>
        </div>
      </main>

      {Tambah && (
          <div id="modal-tambah" className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
              <h2 className="text-x1 font-bold mb-4">Tambah</h2>
              <form action="">
                <div className="mb-4">
                  <label for="NIM" className="block text-gray-700">NIM</label>
                  <input type="text" className="w-full px-4 py-2 border rounded-lg" />
                  <label for="name" className="block text-gray-700">Nama</label>
                  <input type="text" className="w-full px-4 py-2 border rounded-lg" />
                </div>
                <div className="flex justify-end">
                  <button className="bg-gray-500 text-white px-4 py-2 rounded mr-2">Batal</button>
                  <button className="bg-gray-500 text-white px-4 py-2 rounded">Simpan</button>
                </div>
              </form>
            </div>
          </div>
        )}

        {Edit && (
          <div id="modal-edit" class="fixed inset-0 bg-black bg-opacity-50  justify-center items-center flex">
          <div class="bg-white p-6 rounded-lg shadow-lg w-1/3 ">
            <h2 class="text-x1 font-bold mb-4">Edit</h2>
        
            <form action="">
              <div class="mb-4">
                <label for="NIM" class="block text-gray-700">NIM</label>
                <input type="text" class="w-full px-4 py-2 border rounded-lg" />
                <label for="name" class="block text-gray-700">Nama</label>
                <input type="text" class="w-full px-4 py-2 border rounded-lg" />
              </div>
              <div class="flex justify-end">
                <button class="bg-gray-500 text-white px-4 py-2 rounded mr-2">Batal</button>
                <button class="bg-gray-500 text-white px-4 py-2 rounded">Simpan</button>
              </div>
            </form>
          </div>
        </div>
        )}

    </div>
  );
}

function openBahaya() {
  Swal.fire({
      title: 'Yakin Nih?',
      text: 'Tidak Dapat Dikembailkan',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#30565dc',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oke Hapus'
    }).then((result) => {
      if(result.isConfirmed){
        Swal.fire(
          'Terhapus',
          'Sudah Terhapus',
          'Sukses'
        );
      }
    });
}

function Footer(){
  return(
    <div className="bg-indigo-900 p-4 text-white text-center bottom-0">
  &copy; raplirhm
  </div>
  );
  
}


export default App

