export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-bg-dark py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <a href="/" className="text-2xl font-black">Pro<span className="gradient-text-violet">Table</span></a>
            <p className="mt-4 text-sm text-text-muted">Sistema de pedidos QR para restaurantes. Menu digital, pedidos en mesa y pagos con MercadoPago.</p>
          </div>
          <div>
            <h4 className="mb-4 font-semibold">Producto</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><a href="/#features" className="hover:text-white">Funcionalidades</a></li>
              <li><a href="/#pricing" className="hover:text-white">Precios</a></li>
              <li><a href="/#how-it-works" className="hover:text-white">Como funciona</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><a href="/terms" className="hover:text-white">Terminos y Condiciones</a></li>
              <li><a href="/privacy" className="hover:text-white">Politica de Privacidad</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold">Contacto</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><a href="/contacto" className="hover:text-white">Formulario de contacto</a></li>
              <li>contacto@protable.io</li>
              <li>Buenos Aires, Argentina</li>
            </ul>
          </div>
        </div>
        <div className="mt-16 border-t border-white/5 pt-8 text-center text-sm text-text-muted">2026 ProTable. Todos los derechos reservados.</div>
      </div>
    </footer>
  );
}
