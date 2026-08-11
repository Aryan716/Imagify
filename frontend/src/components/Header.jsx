import { useContext } from "react"
import { assets } from "../assets/assets"
import { motion } from "framer-motion"
import { AppContext } from "../context/AppContext"
import { useNavigate } from "react-router-dom";

function Header() {
    const {user,setShowLogin} = useContext(AppContext);
    const navigate = useNavigate();
    const onClickHandler = () =>{
        if(user) {
            navigate('/result');
        } else {
            setShowLogin(true);
        }
    }

  return (
    <motion.div className="flex flex-col justify-center items-center text-center mt-12 mb-20 relative z-10"
        initial={{opacity:0.2,y:100}}
        transition={{duration:1}}
        whileInView={{opacity:1, y:0}}
        viewport={{ once: true }}
    >
        <motion.div className="inline-flex text-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full border border-blue-100 shadow-sm text-blue-600 font-medium tracking-wide text-sm mb-6"
            initial={{opacity:0,y:-20}}
            animate={{opacity:1, y:0}}
            transition={{ delay: 0.2,duration:0.8}}
        >
            <p>Best text to image generator</p>
            <img src={assets.star_icon} alt="star" className="animate-spin-slow" />
        </motion.div>

        <motion.h1 className="text-5xl md:text-7xl lg:text-8xl max-w-4xl mx-auto text-center font-bold tracking-tight text-slate-800 leading-[1.1]"
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{ delay: 0.4,duration:2}}
        >
            Turn text to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 drop-shadow-sm">image</span>, in seconds
        </motion.h1>

        <motion.p className="text-center text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mt-8 font-light leading-relaxed"
            initial={{opacity:0,y:20}}
            animate={{opacity:1,y:0}}
            transition={{ delay: 0.6,duration:0.8}}
        >
            Unleash your creativity with AI. Turn your imagination into visual art in seconds - just type, and watch the magic happen.
        </motion.p>

        <motion.button onClick={onClickHandler} className="sm:text-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 w-auto mt-10 px-12 py-3.5 flex items-center gap-3 rounded-full font-medium shadow-xl shadow-blue-500/25 transition-all active:scale-95 group"
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{default:{duration:0.5},opacity:{delay:0.8,duration:1 } } }
        >
            Generate Images 
            <img className="h-6 group-hover:rotate-12 transition-transform duration-300" src={assets.star_group} alt="stars" />
        </motion.button>

        <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{ delay: 1,duration:1}}
            className="flex flex-wrap justify-center mt-20 gap-4"
        >
            {Array(6).fill('').map((item, index) => (
                <motion.div 
                    key={index}
                    whileHover={{scale:1.05, y:-5, duration:0.2}}
                    className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-white cursor-pointer"
                >
                    <img className="w-16 sm:w-20 md:w-24 object-cover" src={index%2 === 0 ? assets.sample_img_1 : assets.sample_img_2} alt="sample" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity"></div>
                </motion.div>
            ))}
        </motion.div>

        <motion.p
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{ delay: 1.2,duration:0.8}}
            className="mt-4 text-sm font-medium text-slate-500 tracking-wide uppercase"
        >
            Generated images from imagify
        </motion.p>
    </motion.div>
  )
}

export default Header
