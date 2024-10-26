import React, { useState } from "react";
import Swal from "sweetalert2";
import Button from "./Button";

function Table() {
  const [Edit, setEdit] = useState(false);

  const toggleEdit = () => {
    setEdit(!Edit);
  };

  function openBahaya() {
    Swal.fire({
      title: "Yakin Nih?",
      text: "Tidak Dapat Dikembailkan",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#30565dc",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oke Hapus",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Terhapus", "Sudah Terhapus", "Sukses");
      }
    });
  }

  function openBahaya() {
    Swal.fire({
      title: "Yakin Nih?",
      text: "Tidak Dapat Dikembailkan",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#30565dc",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oke Hapus",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Terhapus", "Sudah Terhapus", "Sukses");
      }
    });
  }

  function Isi(props) {
    return (
      <tr className="bg-gray-100">
        <td className="border px-4 py-2">{props.no}</td>
        <td className="border px-4 py-2">{props.nim}</td>
        <td className="border px-4 py-2">{props.nama}</td>
        <td className="border px-4 py-2 flex flex-row gap-2">
          <Button
            onClick={toggleEdit}
            colorClass="bg-yellow-500 hover:bg-[#ffdd6e]"
            text="Edit"
          />
          <Button
            onClick={openBahaya}
            colorClass="bg-red-500 hover:bg-[#ffaaaa]"
            text="Delete"
          />
        </td>
      </tr>
    );
  }

  return (
    <div>
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
              <Isi no="01" nim="A11.2022.11111" nama="Budi" />
              <Isi no="02" nim="A11.2022.22222" nama="Yanto" />
              <Isi no="03" nim="A11.2022.33333" nama="Arif" />
            </thead>
          </table>
        </div>
      </main>

      {Edit && (
        <div
          id="modal-edit"
          className="fixed inset-0 bg-black bg-opacity-50  justify-center items-center flex"
        >
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 ">
            <h2 className="text-x1 font-bold mb-4">Edit</h2>

            <form action="">
              <div className="mb-4">
                <label htmlFor="NIM" className="block text-gray-700">
                  NIM
                </label>
                <input type="text" className="w-full px-4 py-2 border rounded-lg" />
                <label htmlFor="name" className="block text-gray-700">
                  Nama
                </label>
                <input type="text" className="w-full px-4 py-2 border rounded-lg" />
              </div>
              <div className="flex justify-end gap-3">
                <Button colorClass='bg-gray-500 hover:bg-[#000000]' text='Batal'/>
                <Button colorClass='bg-gray-500 hover:bg-[#000000]' text='Simpan'/>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Table;
