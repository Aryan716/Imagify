import { Link, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

function Navbar() {
    const navigate = useNavigate();
    const {user,setShowLogin,logout,credit} = useContext(AppContext);
    
    return (
        <div className='flex items-center justify-between py-4 sticky top-0 z-50 glass px-6 sm:px-10 rounded-full mt-4 transition-all duration-300'>
            <Link to="/" className="hover:opacity-80 transition-opacity">
                <img src={assets.logo} alt="logo" className='w-28 sm:w-32 lg:w-40' />
            </Link>

            <div>
                {
                    user ?
                        <div className='flex items-center gap-3 sm:gap-5'> 
                            <button onClick={()=>navigate('/buy')} className='flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 px-4 sm:px-6 py-2 rounded-full hover:scale-105 hover:shadow-lg transition-all duration-300 border border-blue-200'>
                                <img className='w-5 animate-pulse' src={assets.credit_star} alt="credits" />
                                <p className='text-xs sm:text-sm font-semibold text-blue-900'>Credits: {credit}</p>
                            </button>
                            <p className='text-slate-700 font-medium max-sm:hidden pl-4 border-l border-slate-300'>Hi, <span className="text-blue-600">{user.name}</span></p>
                            <div className='relative group'>
                                <img src={assets.profile_icon} alt="profile" className='w-10 h-10 rounded-full cursor-pointer hover:ring-2 hover:ring-blue-400 transition-all drop-shadow-md' />
                                <div className='absolute hidden group-hover:block top-full right-0 z-10 text-black rounded-xl pt-4'>
                                    <ul className='list-none m-0 p-2 bg-white/90 backdrop-blur-md rounded-xl border border-white/50 shadow-xl text-sm min-w-[120px] overflow-hidden'>
                                        <li onClick={logout} className='py-2 px-4 cursor-pointer hover:bg-slate-100 rounded-lg transition-colors font-medium text-slate-700'>Logout</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        :
                        <div className='flex items-center gap-4 sm:gap-6'>
                            <p onClick={()=>navigate('/buy')} className='cursor-pointer text-slate-600 hover:text-blue-600 font-medium transition-colors'>Pricing</p>
                            <button onClick={()=>setShowLogin(true)} className='bg-slate-900 text-white px-8 py-2.5 sm:px-10 text-sm rounded-full font-medium hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 active:scale-95'>
                                Login
                            </button>
                        </div>
                }
            </div>
        </div>
    )
}

export default Navbar
