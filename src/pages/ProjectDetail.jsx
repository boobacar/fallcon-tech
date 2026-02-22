import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/projects'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <section className="mx-auto max-w-4xl px-4 py-20">
        <h1 className="text-3xl font-bold">Projet introuvable</h1>
        <Link to="/projets" className="mt-4 inline-block text-blue-400">← Retour aux projets</Link>
      </section>
    )
  }

  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <Link to="/projets" className="text-sm text-blue-400">← Retour aux projets</Link>
      <h1 className="mt-3 text-4xl font-black">{project.name}</h1>
      <img src={project.image} alt={project.name} className="mt-6 h-[440px] w-full rounded-2xl border border-white/10 object-cover" />

      <div className="glass mt-6 rounded-2xl p-6">
        <h2 className="text-xl font-bold">Travail réalisé</h2>
        <p className="mt-3 text-slate-300">{project.detail}</p>
        <div className="mt-5 grid gap-4 text-sm text-slate-300 md:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-slate-900/60 p-4"><strong>Objectif</strong><p className="mt-1">Créer une expérience claire, crédible et orientée action.</p></div>
          <div className="rounded-xl border border-white/10 bg-slate-900/60 p-4"><strong>Méthode</strong><p className="mt-1">UX, performance, SEO technique et design émotionnel.</p></div>
          <div className="rounded-xl border border-white/10 bg-slate-900/60 p-4"><strong>Résultat</strong><p className="mt-1">Plus d’impact visuel, plus de confiance, plus de conversions.</p></div>
        </div>
      </div>
    </section>
  )
}
