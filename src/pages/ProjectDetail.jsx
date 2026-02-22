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
    <section className="mx-auto max-w-4xl px-4 py-16">
      <Link to="/projets" className="text-sm text-blue-400">← Retour aux projets</Link>
      <h1 className="mt-2 text-4xl font-black">{project.name}</h1>
      <img src={project.image} alt={project.name} className="mt-6 h-[420px] w-full rounded-2xl object-cover" />

      <div className="glass mt-6 rounded-2xl p-6">
        <h2 className="text-xl font-bold">Travail réalisé</h2>
        <p className="mt-3 text-slate-300">{project.detail}</p>
      </div>
    </section>
  )
}
