import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button";
import Table from "../../Components/Table";

function Mahasiswa() {
  const [Tambah, setTambah] = useState(false);

  const toggleTambah = () => {
    setTambah(!Tambah);
  };

  return (
    <div className="flex flex-1 flex-col ">
      <header className="bg-white p-4">
        <div className="flex justify-end">
          <Link to="/">
            <Button colorClass="bg-blue-500 hover:bg-[#93a6ff]" text="Logout" />
          </Link>
        </div>
      </header>

      <div className="flex p-4 mb-1 justify-between bg-blue-50">
        <h2 className="text-x1 font-semibold">List Mahasiswa</h2>
        <Button
          onClick={toggleTambah}
          colorClass="bg-green-500 hover:bg-[#8beea8]"
          text="Tambah"
        />
      </div>

      {/* Table */}
      <Table />

      {Tambah && (
        <div
          id="modal-tambah"
          className="h-full fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
        >
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-x1 font-bold mb-4">Tambah</h2>
            <form action="">
              <div className="mb-4">
                <label for="NIM" className="block text-gray-700">
                  NIM
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg"
                />
                <label for="name" className="block text-gray-700">
                  Nama
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              <div className="flex justify-end gap-3">
                <Button
                  colorClass="bg-gray-500 hover:bg-[#000000]"
                  text="Batal"
                />
                <Button
                  colorClass="bg-gray-500 hover:bg-[#000000]"
                  text="Simpan"
                />
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Mahasiswa;
