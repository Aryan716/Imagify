import { assets } from "../assets/assets"
import { useContext } from "react"
import { motion } from "framer-motion"
import { AppContext } from "../context/AppContext"
import { useNavigate } from "react-router-dom";

function GenerateBtn() {
  const { user, setShowLogin } = useContext(AppContext);
  const navigate = useNavigate();
  
  const onClickHandler = () => {
    if (user) {
      navigate('/result');
    } else {
      setShowLogin(true);
    }
  }

  return (
    <motion.div
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.8}}
        viewport={{once:true, margin: "-50px"}}
        className="pb-32 pt-16 text-center relative"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-blue-50/50 to-transparent -z-10"></div>
      <h2 className="text-3xl md:text-5xl lg:text-6xl mt-4 font-bold text-slate-800 py-10 tracking-tight leading-tight">
        See the magic. <br className="md:hidden" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Try Now</span>
      </h2>

      <button onClick={onClickHandler} className="inline-flex items-center gap-3 px-14 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white m-auto font-medium text-lg shadow-xl shadow-blue-500/30 transition-all active:scale-95 group">
        Generate Images
        <img src={assets.star_group} alt="stars" className="h-6 group-hover:rotate-12 transition-transform duration-300" />
      </button>
    </motion.div>
  )
}

export default GenerateBtn
