import { Link, NavLink } from 'react-router-dom'

const nav = [
  ['Accueil', '/'],
  ['Services', '/services'],
  ['Projets', '/projets'],
  ['Contact', '/contact'],
]

export default function Layout({ children }) {
  return (
    <div className="min-h-screen hero-bg">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo-fallcon-tech.jpg" alt="Fallcon Tech" className="h-11 w-11 rounded-xl object-cover" />
            <div>
              <p className="text-sm font-semibold leading-none tracking-wide">FALLCON TECH</p>
              <p className="text-[11px] text-slate-400">Web • SEO • IoT</p>
            </div>
          </Link>
          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            {nav.map(([label, to]) => (
              <NavLink key={to} to={to} className={({ isActive }) => isActive ? 'text-white' : 'hover:text-white'}>{label}</NavLink>
            ))}
          </nav>
          <Link to="/contact" className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold hover:bg-blue-500">Devis gratuit</Link>
        </div>
      </header>

      <main>{children}</main>

      <footer className="mt-20 border-t border-white/10 bg-slate-950/70">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-4">
          <div>
            <h4 className="mb-2 font-semibold">Fallcon Tech</h4>
            <p className="text-sm text-slate-400">On conçoit des expériences digitales mémorables qui vendent.</p>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Navigation</h4>
            <div className="space-y-1 text-sm text-slate-400">
              <Link className="block hover:text-white" to="/services">Services</Link>
              <Link className="block hover:text-white" to="/projets">Projets</Link>
              <Link className="block hover:text-white" to="/contact">Contact</Link>
            </div>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Coordonnées</h4>
            <div className="space-y-1 text-sm text-slate-400">
              <p>77 626 00 20 / 70 640 16 16</p>
              <p>info@fallcontech.com</p>
              <p>Dakar, Sénégal</p>
            </div>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Action</h4>
            <Link to="/contact" className="text-sm text-blue-400 hover:text-blue-300">Lancer votre projet →</Link>
          </div>
        </div>
        <div className="border-t border-white/10 py-4 text-center text-xs text-slate-500">© {new Date().getFullYear()} Fallcon Tech — Tous droits réservés.</div>
      </footer>
    </div>
  )
}
