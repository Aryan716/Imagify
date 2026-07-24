import { stepsData } from '../assets/assets'
import { motion } from 'framer-motion'

function Steps() {
    return (
        <motion.div 
            initial={{opacity:0, y:50}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.8, ease: "easeOut"}}
            viewport={{once:true, margin: "-100px"}}
            className='flex flex-col items-center justify-center my-32 px-4'
        >
            <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-800 text-center tracking-tight'>How It Works</h2>
            <p className='text-lg md:text-xl text-slate-500 mb-12 text-center max-w-2xl'>Transform your imagination into stunning visual reality in three simple steps</p>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl'>
                {stepsData.map((item, index) => (
                    <motion.div 
                        initial={{opacity:0, y:30}}
                        whileInView={{opacity:1, y:0}}
                        transition={{delay: index * 0.2, duration: 0.6}}
                        viewport={{once:true}}
                        key={index} 
                        className='glass-card p-8 rounded-2xl flex flex-col items-start gap-4 hover:-translate-y-2 transition-transform duration-300 group cursor-pointer'
                    >
                        <div className="bg-white/80 p-4 rounded-xl shadow-sm group-hover:shadow-md transition-shadow">
                            <img width={40} src={item.icon} alt={item.title} className="group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <div>
                            <h3 className='text-xl font-semibold text-slate-800 mb-2'>{item.title}</h3>
                            <p className='text-slate-500 leading-relaxed'>{item.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}

export default Steps
