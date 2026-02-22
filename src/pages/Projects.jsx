import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl font-black">Nos Projets</h1>
      <p className="mt-3 text-slate-300">Photos + nom du projet. Clique pour voir les détails.</p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <Link key={p.slug} to={`/projets/${p.slug}`} className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60">
            <img src={p.image} alt={p.name} className="h-52 w-full object-cover transition duration-500 group-hover:scale-105" />
            <h3 className="p-4 font-semibold">{p.name}</h3>
          </Link>
        ))}
      </div>
    </section>
  )
}
