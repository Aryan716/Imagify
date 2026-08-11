/* eslint-disable react/no-unescaped-entities */
import { useContext, useEffect, useState } from "react"
import { assets } from "../assets/assets"
import { AppContext } from "../context/AppContext";
import { motion, AnimatePresence } from 'framer-motion'
import axios from "axios"
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [state, setState] = useState('Login');
  const { setShowLogin, backendUrl,setToken,setUser} = useContext(AppContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = async (e) =>{
    e.preventDefault();
    try {
      if(state=== 'Login'){
       const {data} = await axios.post(backendUrl +"/api/user/login",{email,password});

       if(data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem('token',data.token);
          setShowLogin(false);
       } else {
          toast.error(data.message);
       }
      } else {
        const {data} = await axios.post(backendUrl +"/api/user/register",{name,email,password});

       if(data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem('token',data.token);
          setShowLogin(false);
       } else {
          toast.error(data.message);
       }
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    }
  }, []);

  return (
    <AnimatePresence>
        <div className='fixed inset-0 z-50 backdrop-blur-md bg-slate-900/40 flex justify-center items-center p-4'>
        <motion.form onSubmit={onSubmitHandler}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
            className="relative bg-white/95 backdrop-blur-xl p-10 sm:p-12 rounded-3xl text-slate-600 shadow-2xl border border-white/50 w-full max-w-md"
        >
            <div className="text-center mb-8">
                <h2 className="text-3xl text-slate-800 font-bold mb-2 tracking-tight">{state}</h2>
                <p className="text-sm text-slate-500">{state === 'Login' ? 'Welcome back! Please sign in to continue' : 'Create an account to get started'}</p>
            </div>

            <div className="space-y-4">
                {state !== 'Login' && (
                    <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="group border border-slate-200 px-5 py-3 flex items-center gap-3 rounded-2xl bg-slate-50/50 focus-within:bg-white focus-within:border-blue-400 focus-within:ring-4 focus-within:ring-blue-100 transition-all duration-300"
                    >
                        <img className="w-5 h-5 opacity-50 group-focus-within:opacity-100 group-focus-within:scale-110 transition-all" src={assets.profile_icon} alt="user" />
                        <input onChange={e => setName(e.target.value)} value={name} className="outline-none bg-transparent w-full text-sm font-medium placeholder:text-slate-400" type="text" placeholder="Full Name" required />
                    </motion.div>
                )}

                <div className="group border border-slate-200 px-5 py-3 flex items-center gap-3 rounded-2xl bg-slate-50/50 focus-within:bg-white focus-within:border-blue-400 focus-within:ring-4 focus-within:ring-blue-100 transition-all duration-300">
                    <img className="w-5 h-5 opacity-50 group-focus-within:opacity-100 group-focus-within:scale-110 transition-all" src={assets.email_icon} alt="email" />
                    <input onChange={e => setEmail(e.target.value)} value={email} className="outline-none bg-transparent w-full text-sm font-medium placeholder:text-slate-400" type="email" placeholder="Email Address" required />
                </div>

                <div className="group border border-slate-200 px-5 py-3 flex items-center gap-3 rounded-2xl bg-slate-50/50 focus-within:bg-white focus-within:border-blue-400 focus-within:ring-4 focus-within:ring-blue-100 transition-all duration-300">
                    <img className="w-5 h-5 opacity-50 group-focus-within:opacity-100 group-focus-within:scale-110 transition-all" src={assets.lock_icon} alt="password" />
                    <input onChange={e => setPassword(e.target.value)} value={password} className="outline-none bg-transparent w-full text-sm font-medium placeholder:text-slate-400" type="password" placeholder="Password" required />
                </div>
            </div>

            {state === 'Login' && <p className="text-sm font-medium text-blue-600 my-4 cursor-pointer hover:text-blue-700 transition-colors inline-block">Forgot password?</p>}
            
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 w-full text-white py-3.5 rounded-2xl font-semibold shadow-lg shadow-blue-500/30 transition-all duration-300 active:scale-95 mt-4">
                {state === 'Login' ? 'Login securely' : 'Create account'}
            </button>

            <div className="mt-8 text-center text-sm font-medium">
                {state === 'Login' ? 
                    <p>Don't have an account? <span className="text-blue-600 cursor-pointer hover:text-blue-700 hover:underline transition-all" onClick={() => setState('Sign Up')} >Sign up</span></p>
                :
                    <p>Already have an account? <span className="text-blue-600 cursor-pointer hover:text-blue-700 hover:underline transition-all" onClick={() => setState('Login')}>Login</span></p>
                }
            </div>

            <button type="button" onClick={() => setShowLogin(false)} className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 rounded-full transition-colors group">
                <img src={assets.cross_icon} alt="close" className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" />
            </button>
        </motion.form>
        </div>
    </AnimatePresence>
  )
}

export default Login
