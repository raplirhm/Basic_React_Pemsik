import './App.css'

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

function Konten(){
  return (
    <div className="flex flex-1 flex-col">
      <header className="bg-white p-4">
        <div className="flex justify-end">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Logout</button>
        </div>
      </header>

      <div className="flex p-4 mb-1 justify-between bg-blue-50">
        <h2 className="text-x1 font-semibold">List Mahasiswa</h2>
        <button id="btn-tambah" className ="bg-green-500 rounded px-4 py-2 text-white font-semibold">Tambah</button>
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
                  <button onClick="openEdit()" className="bg-yellow-500 rounded px-4 py-2 text-white font-semibold">Edit</button>
                  <button onClick="openBahaya()" className="bg-red-500 rounded px-4 py-2 text-white font-semibold">Delete</button>
                </td>

              </tr>
            </thead>
            <thead>
              <tr className="bg-gray-100">
                <td className="border px-4 py-2">02</td>
                <td className="border px-4 py-2">A11.2022.22222</td>
                <td className="border px-4 py-2">Yanto</td>
                <td className="border px-4 py-2 flex flex-row gap-2">
                  <button onClick="openEdit()" className="bg-yellow-500 rounded px-4 py-2 text-white font-semibold">Edit</button>
                  <button onClick="openBahaya()" className="bg-red-500 rounded px-4 py-2 text-white font-semibold">Delete</button>
                </td>
              </tr>
            </thead>
            <thead>
              <tr className="bg-gray-100">
                <td className="border px-4 py-2">03</td>
                <td className="border px-4 py-2">A11.2022.33333</td>
                <td className="border px-4 py-2">Arif</td>
                <td className="border px-4 py-2 flex flex-row gap-2">
                  <button onClick="openEdit()" className="bg-yellow-500 rounded px-4 py-2 text-white font-semibold">Edit</button>
                  <button onClick="openBahaya()" className="bg-red-500 rounded px-4 py-2 text-white font-semibold">Delete</button>
                </td>
              </tr>
            </thead>
          </table>
        </div>
      </main>

    </div>
  );
}

function Footer(){
  return(
    <div className="bg-indigo-900 p-4 text-white text-center bottom-0">
  &copy; raplirhm
  </div>
  );
  
}


export default App

