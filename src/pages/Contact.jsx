export default function Contact() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-4xl font-black">Contact</h1>
      <p className="mt-3 text-slate-300">Parlons de votre projet. Réponse rapide.</p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="glass rounded-2xl p-6">
          <h2 className="font-semibold">Coordonnées</h2>
          <div className="mt-3 space-y-2 text-slate-300">
            <p><strong>Tel:</strong> 77 626 00 20 / 70 640 16 16</p>
            <p><strong>Mail:</strong> info@fallcontech.com</p>
            <p><strong>Adresse:</strong> Dakar, Sénégal</p>
          </div>
        </div>

        <form className="glass rounded-2xl p-6">
          <input className="mb-3 w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3" placeholder="Nom" />
          <input className="mb-3 w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3" placeholder="Email" />
          <textarea rows="4" className="mb-3 w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3" placeholder="Votre besoin" />
          <button type="button" className="rounded-xl bg-blue-600 px-4 py-3 font-semibold hover:bg-blue-500">Envoyer</button>
        </form>
      </div>
    </section>
  )
}
