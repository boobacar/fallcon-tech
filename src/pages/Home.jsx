import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { projects } from '../data/projects'

const stats = [
  ['+50', 'Projets livrés'],
  ['+120%', 'Croissance SEO max observée'],
  ['24/7', 'Monitoring & support'],
]

export default function Home() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-16 md:grid-cols-2">
        <div>
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-block rounded-full border border-blue-300/40 bg-blue-500/20 px-4 py-1 text-xs text-blue-100">
            Agence Web, SEO & Solutions IT — Dakar
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1 }} className="mt-4 text-4xl font-black leading-tight md:text-6xl">
            Un site <span className="gradient-text">inoubliable</span> qui attire et convertit.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2 }} className="mt-5 max-w-xl text-slate-300">
            Fallcon Tech transforme des idées en expériences premium: branding fort, animation moderne, SEO solide et performance technique.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .3 }} className="mt-8 flex flex-wrap gap-3">
            <Link to="/projets" className="rounded-xl bg-blue-600 px-5 py-3 font-semibold hover:bg-blue-500">Voir nos réalisations</Link>
            <Link to="/contact" className="rounded-xl border border-white/20 px-5 py-3 font-semibold hover:bg-white/10">Discuter du projet</Link>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: .95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .6 }} className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900 p-3 shadow-2xl shadow-blue-900/30">
          <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1800&auto=format&fit=crop" alt="Équipe digitale" className="h-[430px] w-full rounded-2xl object-cover" />
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
        </motion.div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12">
        <div className="grid gap-4 md:grid-cols-3">
          {stats.map(([n, t]) => (
            <div key={t} className="glass rounded-2xl p-5 text-center">
              <p className="text-3xl font-black text-blue-300">{n}</p>
              <p className="text-sm text-slate-300">{t}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-black">Projets à fort impact</h2>
            <p className="mt-2 text-slate-300">Un aperçu visuel de nos dernières réalisations.</p>
          </div>
          <Link to="/projets" className="hidden text-blue-300 hover:text-blue-200 md:block">Tout voir →</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.slice(0, 3).map((p) => (
            <Link key={p.slug} to={`/projets/${p.slug}`} className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60">
              <img src={p.image} alt={p.name} className="h-52 w-full object-cover transition duration-500 group-hover:scale-105" />
              <h3 className="p-4 font-semibold">{p.name}</h3>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
