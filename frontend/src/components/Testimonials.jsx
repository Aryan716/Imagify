import { assets, testimonialsData } from "../assets/assets"
import { motion } from 'framer-motion'

function Testimonials() {
  return (
    <motion.div 
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.8}}
        viewport={{once:true, margin: "-100px"}}
        className="flex flex-col items-center justify-center my-32 py-12 px-4"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-800 text-center tracking-tight">Customer Testimonials</h2>
      <p className="text-lg md:text-xl text-slate-500 mb-16 text-center">What Our Users Are Saying</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {testimonialsData.map((testimonial,index)=>(
            <motion.div 
                initial={{opacity:0, y:30}}
                whileInView={{opacity:1, y:0}}
                transition={{delay: index * 0.2, duration: 0.6}}
                viewport={{once:true}}
                key={index} 
                className="glass-card p-8 rounded-3xl flex flex-col items-center text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 relative group"
            >
                {/* Decorative background glow on hover */}
                <div className="absolute inset-0 bg-blue-100 rounded-3xl blur-2xl opacity-0 group-hover:opacity-50 transition-opacity -z-10"></div>
                
                <img src={testimonial.image} className="rounded-full w-20 h-20 object-cover shadow-md border-4 border-white mb-4 group-hover:scale-110 transition-transform duration-300" alt={testimonial.name} />
                <h3 className="text-xl font-bold text-slate-800 mb-1">{testimonial.name}</h3>
                <p className="text-slate-500 text-sm font-medium mb-4 uppercase tracking-wider">{testimonial.role}</p>
                <div className="flex gap-1 mb-6">
                    {Array(testimonial.stars).fill().map((item,i)=>(
                        <img key={i} src={assets.rating_star} alt="star" className="w-5" />
                    ))}
                </div>
                <p className="text-slate-600 leading-relaxed font-medium italic">"{testimonial.text}"</p>
            </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Testimonials
