import { assets } from "../assets/assets"
import { motion } from 'framer-motion'

function Description() {
  return (
    <motion.div 
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.8}}
        viewport={{once:true, margin: "-100px"}}
        className="flex flex-col items-center justify-center my-32 px-6 md:px-20 lg:px-28"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-800 text-center tracking-tight">Create AI Images</h2>
      <p className="text-lg md:text-xl text-slate-500 mb-16 text-center max-w-2xl">Turn your imagination into stunning visuals instantly</p>

      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 w-full max-w-6xl">
        <motion.div 
            whileHover={{scale: 1.02}}
            className="w-full lg:w-1/2 relative group"
        >
            <div className="absolute inset-0 bg-blue-400 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <img src={assets.sample_img_1} alt="sample" className="w-full relative z-10 rounded-2xl shadow-xl border border-white/50" />
        </motion.div>
        
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-6 leading-snug">Introducing the AI-Powered Text to Image Generator</h3>
            <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                Easily bring your ideas to life with our advanced AI image generator. Whether you need stunning concept art, unique avatars, or professional visuals, our tool transforms your text into breathtaking images with just a few clicks. Imagine it, describe it, and watch the magic unfold.
            </p>
            <p className="text-slate-600 leading-relaxed text-lg">
                Simply type in a text prompt, and our cutting-edge AI will generate high-resolution images in seconds. From photorealistic landscapes to stylized illustrations, the creative possibilities are absolutely limitless. Powered by state-of-the-art AI technology.
            </p>
        </div>
      </div>
    </motion.div>
  )
}

export default Description
