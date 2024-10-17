import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '../App.css';

const PropPage = () => {
    function Table() {
        return (
            <div>
                <table>
                    <thead>
                        <Baris
                            isi1='Judul 1'
                            isi2='Judul 2'
                            isi3='Judul 3'
                        />
                    </thead>
                    <tbody>
                    <Baris
                        isi1='Isian 1'
                        isi2='Isian 2'
                        isi3='Isian 3'
                    />
                    <Baris
                        isi1='Isian 1'
                        isi2='Isian 2'
                        isi3='Isian 3'
                    />
                    <Baris
                        isi1='Isian 1'
                        isi2='Isian 2'
                        isi3='Isian 3'
                    />
                    </tbody>
                </table>
            </div>
        )
    }

    function Baris(props) {
        return (
            <tr>
                <Cell isi={props.isi1} />
                <Cell isi={props.isi2} />
                <Cell isi={props.isi3} />
            </tr>
        )
    }

    function Cell(props) {
        return (
            <td>{props.isi}</td>
        )
    }

    function Landing() {
        return (
            <>
                {/* <Header /> */}
                <Deskripsi
                    judul='Mengejar Doa Restu Ayang'
                    penulis='Sifulan Wa Fulin'
                    deskripsiSingkat='Cerita pemuda yang rela belajar untuk pujaan hati'
                />
                {/* <Footer /> */}
            </>
        )
    }

    function Deskripsi({ judul, penulis, deskripsiSingkat }) {
        return (
            <div>
                <h2>{judul}</h2>
                <div>
                    <b>{penulis}</b>
                </div>
                <div>
                    {deskripsiSingkat}
                </div>
            </div>
        )
    }

    function MenuKopi() {
        const menu = [
            { nama: 'Espresso', deskripsi: 'Kopi pekat dengan rasa yang khas', harga: 'Rp 20.000' },
            { nama: 'Cappucino', deskripsi: 'Kopi dengan campuran susu dan foam susu', harga: 'Rp 25.000' },
            { nama: 'Latte', deskripsi: 'Kopi dengan susudan sedikit foam susu', harga: 'Rp 22.000' },
            { nama: 'Mocha', deskripsi: 'Kopi dengan campuran susu dan cokelat', harga: 'Rp 27.000' },
            { nama: 'Americano', deskripsi: 'Kopi hitam dengan air panas', harga: 'Rp 18.000' },
        ];

        return (
            <div>
                <h2>Menu Kopi</h2>
                {menu.map((item, index) => (
                    <MenuKopiItem key={index} nama={item.nama} deskripsi={item.deskripsi} harga={item.harga} />
                ))}
            </div>
        )
    }

    function MenuKopiItem({ nama, deskripsi, harga }) {
        return (
            <div>
                <h2>{nama}</h2>
                <p>{deskripsi}</p>
                <p>Harga: {harga}</p>
                <hr className='hrmenu' />
            </div>
        )
    }
    return (
        <div className='propPage'>
            <nav>
                <ul className='PageList'>
                    <li><Link to="/">Prop</Link></li>
                    <li><Link to="/state">State</Link></li>
                </ul>
            </nav>
            <h1 className='title'>PROP</h1>
            <p className='desc'>Dalam React, props (singkatan dari "properties") adalah cara untuk mengirim data dari satu komponen ke komponen lain, biasanya dari komponen induk (parent) ke komponen anak (child). Props memungkinkan komponen menjadi lebih dinamis dan fleksibel, karena data yang diteruskan bisa bervariasi setiap kali komponen dipanggil.</p>
            <hr />
            <Table />
            <hr />
            <Landing />
            <hr />
            <MenuKopi />
        </div>
    );
};



export default PropPage;
