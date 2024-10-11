import '../App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from '../assets/shield.png';
import { Link } from 'react-router-dom';



const Login = () => {
    return (
        <div className='overflow-x-hidden bg-gray-100 min-h-screen flex-col font-montserrat '>  
            <Navbar />
            <Content />
            <Footer />
        </div>
    );
}

const Navbar = () => {
    return(
        <div className='bg-[#1153A1] p-7 '>
            <img src={logo} className='h-[60px] absolute float-left ml-40 mt-[-14px]' alt="" />
            <div className='text-2xl font-bold  text-center text-[#FFC600]'>
                <h1>PORTAL MAHASISWA</h1>
            </div>
            
        </div>
    );
}

const Content = () => {
    return(
        <div className='flex flex-col items-center'>
            {/* 1 */}
            <div 
            className='flex bg-custom-image bg-[60%] bg-cover w-screen h-[30vh] text-white font-bold items-center'
            >
                    <div className='ml-[20vh]'>
                    <h1 className='text-5xl mb-4'>Login</h1>
                    <div className='flex'>
                        <p>Home / </p>
                        <p className='text-[#FFC600] ml-1'>Halaman Login Mahasiswa</p>
                    </div>
                </div>
            </div>

            {/* 2 */}
            <div className='bg-white p-20 pt-14 rounded-lg shadow-lg w-1/3 mt-20 mb-20'>
                <h1 className='text-3xl mb-4 font-bold'>LOGIN!</h1>
                <hr className='mb-5 mt-10'/>
                <input 
                    type="text" 
                    className='bg-[#1768ff] bg-opacity-10 w-full px-4 py-2 border rounded-lg mb-5' 
                    placeholder='NIM'
                />
                <input 
                    type="text" 
                    className='bg-[#1768ff] bg-opacity-10 w-full px-4 py-2 border rounded-lg mb-5' 
                    placeholder='Password'
                />
                <a className='cursor-pointer transition-colors duration-600 hover:text-[#8f8f8f]'>
                    <p className='font-semibold mb-4'>Lupa Password</p>
                </a>
                
                <Link to="/home">
                <button 
                className='bg-[#FFC600] text-[#021d3a] font-bold px-16 py-4 rounded 
                transition-colors duration-600 hover:bg-[#021d3a] hover:text-[#FFC600]'
                >
                    Login
                </button>
                </Link>
            </div>
        </div>
    );
}

const Footer = () => {
    return(
        <div>
            <div className='bg-[#1153A1] w-screen p-20 text-white flex gap-10 justify-center'>
                <img src={logo} className=' h-60' alt="" />
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23586.547737314308!2d-71.135401933399!3d42.35705179865075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e377427d7f0199%3A0x5937c65cee2427f0!2sHarvard%20University!5e0!3m2!1sen!2sid!4v1728668792862!5m2!1sen!2sid" 
                    width="400" 
                    height="300" 
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
                <div>
                    <h1 className='text-xl font-bold mb-8'>Contact Us</h1>
                    <ul>
                        <li className='mb-4 flex items-center'>
                            <i className="fa fa-home mr-4 text-[#FFC600]"></i>
                            <span>
                            Massachusetts Hall, Cambridge, <br></br> MA 02138, United States
                            </span>
                        </li>
                        <li className='mb-4'>
                            <i className="fa fa-phone mr-4 text-[#FFC600]"></i>
                            +16174951000
                        </li>
                        <li className='mb-4'>
                            <i className="fa fa-envelope mr-4 text-[#FFC600]"></i>
                            https://www.harvard.edu/
                        </li>
                    </ul>
                </div>
            </div>
            <div className='bg-[#021d3a] p-4 text-white text-center bottom-0'>
                <h1>HARVARD UNIVERSITY || Copyright &copy; 2024</h1>
            </div>
        </div>
    );
}

export default Login;

