import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-8 px-4 pb-20 pt-16 md:grid-cols-2">
      <div>
        <motion.span initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} className="inline-block rounded-full border border-blue-400/40 bg-blue-500/20 px-4 py-1 text-xs text-blue-100">
          Agence Web & SEO — Dakar
        </motion.span>
        <motion.h1 initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} transition={{delay:.1}} className="mt-4 text-4xl font-black leading-tight md:text-6xl">
          Un redesign qui fait dire <span className="text-blue-400">WOW</span>.
        </motion.h1>
        <motion.p initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} transition={{delay:.2}} className="mt-5 max-w-xl text-slate-300">
          Nous créons des expériences digitales fun, premium et orientées conversion pour les marques ambitieuses au Sénégal.
        </motion.p>
        <motion.div initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} transition={{delay:.3}} className="mt-8 flex flex-wrap gap-3">
          <Link to="/projets" className="rounded-xl bg-blue-600 px-5 py-3 font-semibold hover:bg-blue-500">Voir nos projets</Link>
          <Link to="/contact" className="rounded-xl border border-white/20 px-5 py-3 font-semibold hover:bg-white/10">Lancer mon projet</Link>
        </motion.div>
      </div>

      <motion.div initial={{opacity:0,scale:.95}} animate={{opacity:1,scale:1}} transition={{duration:.6}} className="glass rounded-3xl p-3 shadow-2xl shadow-blue-900/30">
        <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop" alt="Hero Fallcon Tech" className="h-[420px] w-full rounded-2xl object-cover" />
      </motion.div>
    </section>
  )
}
