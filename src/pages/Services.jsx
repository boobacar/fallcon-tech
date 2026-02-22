const services = [
  {
    title: 'Création de site web premium',
    desc: 'Design moderne, storytelling visuel et architecture orientée conversion.',
  },
  {
    title: 'SEO local & national',
    desc: 'Audit technique, optimisation contenu, stratégie mots-clés et pages business.',
  },
  {
    title: 'Applications web sur mesure',
    desc: 'Outils métiers, dashboards et workflows qui automatisent vos opérations.',
  },
  {
    title: 'Maintenance & sécurité',
    desc: 'Mises à jour, sauvegardes, monitoring et protection continue.',
  },
  {
    title: 'Solutions IoT & paiement',
    desc: 'Intégration ESP32, APIs de paiement et contrôle d’équipements en temps réel.',
  },
  {
    title: 'Refonte UX/UI',
    desc: 'On repense l’expérience pour rendre votre marque plus forte et plus mémorable.',
  },
]

export default function Services() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl font-black">Services</h1>
      <p className="mt-3 max-w-2xl text-slate-300">Des solutions concrètes et mesurables pour transformer votre présence digitale en moteur de croissance.</p>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {services.map((s) => (
          <article key={s.title} className="glass relative rounded-2xl p-5 transition hover:-translate-y-1">
            <h3 className="font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-slate-300">{s.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
