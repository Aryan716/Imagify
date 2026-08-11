import Description from "../components/Description"
import GenerateBtn from "../components/GenerateBtn"
import Header from "../components/Header"
import Steps from "../components/Steps"
import Testimonials from "../components/Testimonials"
import { motion } from 'framer-motion'


function Home() {
  return (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
    >
     <Header/>
     <Steps/>
     <Description/>
     <Testimonials/>
     <GenerateBtn/>
    </motion.div>
  )
}

export default Home
