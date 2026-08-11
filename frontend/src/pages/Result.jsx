/* eslint-disable no-unused-vars */
import { useContext, useState } from "react"
import { assets } from "../assets/assets"
import { motion, AnimatePresence } from 'framer-motion'
import { AppContext } from "../context/AppContext";

function Result() {
  const [image, setImage] = useState(assets.sample_img_1);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [loading, isLoading] = useState(false);
  const [input,setInput]=useState('');
  const {generateImage} = useContext(AppContext);

  const onSubmitHandler = async(e)=>{
    e.preventDefault();
    isLoading(true);

    if(input) {
      const generatedImage = await generateImage(input);
      if(generatedImage) {
        setIsImageLoaded(true);
        setImage(generatedImage);
      }  
    }
    isLoading(false);
  }

  return (
    <motion.div
        initial={{opacity:0, y:50}}
        animate={{opacity:1, y:0}}
        transition={{duration:0.8}}
        className="flex flex-col min-h-[85vh] justify-center items-center px-4"
    >
      <form onSubmit={onSubmitHandler} className="w-full flex flex-col items-center">
        <div className="relative group">
            <div className={`absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-xl transition-all duration-1000 ${loading ? 'opacity-100 animate-pulse' : 'opacity-20 group-hover:opacity-30'}`}></div>
            
            <div className={`relative bg-white/50 backdrop-blur-md p-2 rounded-2xl border ${loading ? 'border-blue-400' : 'border-white/50'} shadow-xl transition-colors duration-500`}>
                <img src={image} alt="result" className="w-full max-w-md rounded-xl object-cover shadow-sm" />
                
                <AnimatePresence>
                    {loading && (
                        <motion.div 
                            initial={{opacity:0}} 
                            animate={{opacity:1}} 
                            exit={{opacity:0}}
                            className="absolute bottom-0 left-0 right-0 h-1.5 bg-slate-100 overflow-hidden rounded-b-xl"
                        >
                            <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 w-full origin-left animate-loading-bar"></div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            
            <AnimatePresence>
                {loading && (
                    <motion.p 
                        initial={{opacity:0, y:10}}
                        animate={{opacity:1, y:0}}
                        exit={{opacity:0, y:-10}}
                        className="text-center mt-6 text-blue-600 font-medium tracking-wide animate-pulse"
                    >
                        Generating magic...
                    </motion.p>
                )}
            </AnimatePresence>
        </div>

        {!isImageLoaded && (
            <motion.div 
                initial={{opacity:0, y:20}}
                animate={{opacity:1, y:0}}
                className="flex w-full max-w-2xl bg-white/80 backdrop-blur-md border border-slate-200 shadow-lg text-slate-800 p-2 mt-12 rounded-full focus-within:ring-4 focus-within:ring-blue-100 focus-within:border-blue-300 transition-all duration-300"
            >
                <input 
                    onChange={e => setInput(e.target.value)}
                    value={input} 
                    type="text" 
                    placeholder="Describe what you want to generate..." 
                    className="flex-1 bg-transparent outline-none ml-6 font-medium placeholder:text-slate-400 placeholder:font-normal" 
                    disabled={loading}
                />
                <button 
                    type="submit" 
                    disabled={loading || !input}
                    className="bg-slate-900 hover:bg-blue-600 text-white font-medium px-8 sm:px-12 py-3.5 rounded-full transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-slate-900 shadow-md"
                >
                    Generate
                </button>
            </motion.div>
        )}

        {isImageLoaded && (
            <motion.div 
                initial={{opacity:0, scale:0.95}}
                animate={{opacity:1, scale:1}}
                className="flex gap-4 flex-wrap justify-center mt-12"
            >
                <button 
                    type="button"
                    onClick={() => {setIsImageLoaded(false); setInput('')}}
                    className="bg-white/80 backdrop-blur-sm border-2 border-slate-200 hover:border-slate-300 text-slate-700 font-medium px-8 py-3.5 rounded-full transition-all duration-300 shadow-sm hover:shadow active:scale-95"
                >
                    Generate Another
                </button>
                <a 
                    href={image} 
                    download 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium px-10 py-3.5 rounded-full shadow-lg shadow-blue-500/30 transition-all duration-300 active:scale-95 flex items-center justify-center"
                >
                    Download Image
                </a>
            </motion.div>
        )}
      </form>
    </motion.div>
  )
}

export default Result
