import { assets } from "../assets/assets"

function Footer() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 py-8 mt-20 border-t border-slate-200/60 glass rounded-t-3xl px-8">
      <div className="flex items-center gap-4">
        <img src={assets.logo} alt="logo" width={140} className="drop-shadow-sm" />
        <p className="border-l border-slate-300 pl-4 text-sm text-slate-500 max-sm:hidden font-medium">
          Copyright © imagify.dev | All rights reserved.
        </p>
      </div>
      <div className="flex gap-4">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 hover:border-blue-200 transition-all duration-300 cursor-pointer">
            <img src={assets.facebook_icon} width={20} alt="facebook" />
        </div>
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 hover:border-blue-200 transition-all duration-300 cursor-pointer">
            <img src={assets.twitter_icon} width={20} alt="twitter" />
        </div>
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 hover:border-blue-200 transition-all duration-300 cursor-pointer">
            <img src={assets.instagram_icon} width={20} alt="instagram" />
        </div>
      </div>
    </div>
  )
}

export default Footer
