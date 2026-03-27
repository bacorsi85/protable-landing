"use client";
import { motion } from "framer-motion";
import { QrCode, ShoppingCart, SplitSquareVertical, CreditCard, LayoutDashboard, Monitor, Users, BarChart3, Paintbrush } from "lucide-react";

const features = [
  {
    icon: QrCode,
    title: "QR en mesa sin descargas ni registro",
    description: "El cliente escanea el QR y entra directo a la carta de tu restaurante, con tu marca y tus colores. Sin apps, sin cuentas, sin fricción.",
  },
  {
    icon: ShoppingCart,
    title: "Pedidos desde la mesa en segundos",
    description: "Carrito intuitivo con notas, alérgenos y modificaciones. El pedido llega directo a cocina.",
  },
  {
    icon: SplitSquareVertical,
    title: "Split bill nativo",
    description: "División de cuenta por partes iguales, por ítems o por monto personalizado. Cada uno paga desde su celular.",
  },
  {
    icon: CreditCard,
    title: "MercadoPago integrado",
    description: "QR dinámico, tarjetas y billetera digital. Confirmación instantánea. Sin POS adicional.",
  },
  {
    icon: Paintbrush,
    title: "Tu marca, tu experiencia",
    description: "Logo, colores y estilo de tu restaurante. El cliente vive la experiencia de tu local, no la de un tercero. 100% white-label.",
  },
  {
    icon: Monitor,
    title: "Dashboard de pedidos en tiempo real",
    description: "Cocina y barra monitorean los pedidos en vivo desde cualquier dispositivo. Drag & drop para cambiar estados.",
  },
  {
    icon: LayoutDashboard,
    title: "Panel de gestión centralizado",
    description: "Menú, mesas, pedidos, personal y analytics. Todo desde un solo lugar.",
  },
  {
    icon: Users,
    title: "Gestión de personal y roles",
    description: "Admin, mozo, cocina, barra. Cada rol ve solo lo que necesita.",
  },
  {
    icon: BarChart3,
    title: "Analytics operativos",
    description: "Ventas, tiempos de preparación, platos más pedidos, eficiencia por mesa.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Features() {
  return (
    <section id="features" className="relative py-32">
      <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2">
        <div className="h-[500px] w-[500px] rounded-full bg-violet-deep/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-black tracking-tight md:text-5xl">
            Menú digital por QR{" "}
            <span className="gradient-text-violet">en segundos</span>
          </h2>
          <p className="mt-6 text-lg text-text-secondary">
            Todo lo que tu restaurante necesita para digitalizar la experiencia del comensal.
            Usá los dispositivos que ya tenés.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={itemVariants}
              className="group relative rounded-2xl border border-white/5 bg-bg-card p-6 transition-all hover:border-violet-glow/20 hover:bg-bg-card/80"
            >
              <div className="mb-4 inline-flex rounded-xl bg-violet-glow/10 p-3 text-violet-glow transition-all group-hover:bg-violet-glow/20 group-hover:glow-violet-sm">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold">{f.title}</h3>
              <p className="mt-2 text-sm text-text-secondary">{f.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
