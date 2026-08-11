import { useContext } from "react"
import { assets, plans } from "../assets/assets"
import { AppContext } from "../context/AppContext";
import { motion } from 'framer-motion'
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

function BuyCredit() {
  const { user,backendUrl,token,loadCreditData,setShowLogin} = useContext(AppContext);
  const navigate = useNavigate();

  const initPay = async(order)=>{
     console.log("Init pay order:", order);
    if (!window.Razorpay) {
      console.error("Razorpay script is not loaded.");
      return;
    }
  
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "Credit Payment",
      description: 'Credit Payment',
      order_id: order.id,
      receipt: order.receipt,
      handler: async(response) =>{
        try {
         const {data} =  await axios.post(backendUrl+"/api/user/verify-razor",response,{headers:{token}});
          if(data.success) {
            loadCreditData();
            navigate('/');
            toast.success("Credit Added")
          }
        } catch (error) {
          toast.error(error.message);
        }
      }
    }
    const rzp=new window.Razorpay(options)
    rzp.open()
  };

  const paymentRazorpay = async (planId) => {
    try {
      if (!user) {
        setShowLogin(true);
        return;
      }
      setShowLogin(false);
      const { data } = await axios.post(
        backendUrl + "/api/user/pay-razor",
        { planId },
        { headers: { token } }
      );

      console.log("Pay razor response:", data);

      if (data.success) {
        initPay(data.order);
      } else {
        toast.error(data.message || "Payment initiation failed");
      }
    } catch (error) {
      console.error("Payment error:", error);
      toast.error(error.response?.data?.message || error.message);
    }
  };


  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-[80vh] text-center pt-14 mb-20 px-4"
    >
      <div className="inline-block border border-blue-200 bg-blue-50/50 text-blue-700 px-8 py-2 rounded-full mb-6 font-semibold tracking-wide text-sm shadow-sm backdrop-blur-sm">
        Pricing Plans
      </div>
      <h1 className="text-center text-4xl md:text-5xl font-bold mb-4 text-slate-800 tracking-tight">Choose your power</h1>
      <p className="text-slate-500 mb-12 max-w-lg mx-auto">Get more credits to generate high-quality AI images and unleash your creativity.</p>

      <div className="flex flex-col md:flex-row justify-center gap-8 text-left max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            key={index}
            className="flex-1 glass-card border border-white/50 rounded-3xl p-10 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 relative group overflow-hidden"
          >
            {/* Highlight middle plan as popular conceptually by adding a subtle glow */}
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-200 to-purple-200 rounded-full blur-3xl opacity-20 -z-10 group-hover:opacity-60 transition-opacity ${index === 1 ? 'opacity-40' : ''}`}></div>
            
            <img width={48} src={assets.logo_icon} alt="logo" className="mb-6 drop-shadow-sm" />
            <h3 className="text-2xl font-bold text-slate-800 mb-2">{plan.id}</h3>
            <p className="text-sm text-slate-500 mb-8 min-h-[40px]">{plan.desc}</p>
            
            <div className="mb-8 border-t border-b border-slate-100 py-6">
                <span className="text-4xl font-bold text-slate-800">${plan.price}</span>
                <span className="text-slate-500 font-medium"> / {plan.credits} credits</span>
            </div>

            <button 
                onClick={()=>paymentRazorpay(plan.id)} 
                className="w-full bg-slate-900 hover:bg-blue-600 text-white font-semibold rounded-2xl py-3.5 shadow-md hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 active:scale-95"
            >
                {!user ? "Get Started" : "Purchase Plan"}
            </button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default BuyCredit
