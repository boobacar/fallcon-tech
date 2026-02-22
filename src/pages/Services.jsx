const services = [
  'Création de site web premium',
  'SEO local & national',
  'Applications web sur mesure',
  'Maintenance & sécurité',
  'Solutions IoT & automatisation',
  'Refonte UX/UI orientée conversion',
]

export default function Services() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl font-black">Services</h1>
      <p className="mt-3 text-slate-300">Des solutions concrètes pour transformer votre présence digitale en machine à business.</p>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {services.map((s) => (
          <article key={s} className="glass rounded-2xl p-5 hover:-translate-y-1 transition">
            <h3 className="font-semibold">{s}</h3>
          </article>
        ))}
      </div>
    </section>
  )
}
