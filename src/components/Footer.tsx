export default function Footer() {
  return (
    <footer className="bg-slate-950 py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <a href="/" className="text-2xl font-black">Pro<span className="text-emerald-400">Table</span></a>
            <p className="mt-4 text-sm text-slate-400">Sistema de pedidos QR para restaurantes.</p>
          </div>
          <div>
            <h4 className="mb-4 font-semibold">Producto</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="/#features" className="hover:text-white transition-colors">Funcionalidades</a></li>
              <li><a href="/#how-it-works" className="hover:text-white transition-colors">Cómo funciona</a></li>
              <li><a href="/#pricing" className="hover:text-white transition-colors">Precios</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="/terms" className="hover:text-white transition-colors">Términos y Condiciones</a></li>
              <li><a href="/privacy" className="hover:text-white transition-colors">Política de Privacidad</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold">Contacto</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>contacto@protable.io</li>
              <li>Buenos Aires, Argentina</li>
            </ul>
          </div>
        </div>
        <div className="mt-16 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">2026 ProTable. Todos los derechos reservados.</div>
      </div>
    </footer>
  );
}
