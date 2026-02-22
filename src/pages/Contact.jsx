export default function Contact() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-4xl font-black">Contact</h1>
      <p className="mt-3 text-slate-300">Parlons de ton projet. On passe de l’idée à l’exécution rapidement.</p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="glass rounded-2xl p-6">
          <h2 className="font-semibold">Coordonnées directes</h2>
          <div className="mt-4 space-y-2 text-slate-300">
            <p><strong>Tel:</strong> 77 626 00 20 / 70 640 16 16</p>
            <p><strong>Mail:</strong> info@fallcontech.com</p>
            <p><strong>Adresse:</strong> Dakar, Sénégal</p>
          </div>
          <p className="mt-5 text-sm text-slate-400">Disponible pour projets web, SEO et systèmes IT/IoT.</p>
        </div>

        <form className="glass rounded-2xl p-6">
          <input className="mb-3 w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3" placeholder="Nom complet" />
          <input className="mb-3 w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3" placeholder="Email" />
          <input className="mb-3 w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3" placeholder="Téléphone" />
          <textarea rows="4" className="mb-3 w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3" placeholder="Décris ton besoin" />
          <button type="button" className="w-full rounded-xl bg-blue-600 px-4 py-3 font-semibold hover:bg-blue-500">Envoyer la demande</button>
        </form>
      </div>
    </section>
  )
}
