import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function StatePage() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1)
    }

    function HaloDek() {
        const [inputValue, setInputValue] = useState('')

        const handleChange = (event) => {
            setInputValue(event.target.value);
        };

        const handleSubmit = (event) => {
            event.preventDefault();
            console.log('Submitted value:', inputValue);
        };

        return (
            <form onSubmit={handleSubmit}>
                <input type='text' value={inputValue} onChange={handleChange} />
                <button type='submit'>Submit</button>
            </form>
        )
    }

    function Punten(){
        const[isVisible, setIsVisible] = useState(true);

        const toggleVisibility = () => {
            setIsVisible(!isVisible)
        };

        return (
            <div className='Punten'>
                <button onClick={toggleVisibility}>Show/Hide</button>
                {isVisible && <h2>Hello, World!</h2>}
            </div>
        )
    }

    function Produk() {
        const [items, setItems] = useState(['Apel', 'Gwedhang', 'Jeyuk']);
        const [newItem, setNewItem] = useState('');

        const addItem = () => {
            if (newItem.trim() !== ''){
                setItems([...items, newItem]);
                setNewItem('');
            }
        };

        const removeItem = (index) => {
            const updatedItems = items.filter((item, i) => i !== index);
            setItems(updatedItems);
        };

        return(
            <div>
                <ul className='ListItem'>
                    {items.map((item, index) => (
                        <li key={index}>
                            <p className='item'>• {item}</p>
                            <button onClick={() => removeItem(index)} className='ButtonHapus'>Hapus</button>
                        </li>
                    ))}
                </ul>
                <input 
                type="text" 
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                />
                <button onClick={addItem}>Tambah Produk</button>
            </div>
        )
    }

    function Status(){
        const [isOnline, setIsOnline] = useState(true);

        const toggleStatus = () => {
            setIsOnline(!isOnline);
        };

        return(
            <div>
                <p>Status aplikasi saat ini: {isOnline ? 'Online' : 'Offline'}</p>
                <button onClick={toggleStatus}>Ganti Status</button>
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
            <h1>STATE</h1>
            <p className='desc'>Dalam React, state adalah objek khusus yang digunakan untuk menyimpan data dinamis yang dapat berubah seiring waktu dan memengaruhi cara suatu komponen ditampilkan. Jika data dalam state berubah, komponen akan secara otomatis re-render untuk mencerminkan perubahan tersebut.</p>
            <hr />
            <p>Hitungan: {count}</p>
            <button onClick={handleClick}>Klik</button>
            <hr />
            <HaloDek />
            <hr />
            <Punten />
            <hr />
            <Produk />
            <hr />
            <Status />
        </div>
    );
};



export default StatePage;
