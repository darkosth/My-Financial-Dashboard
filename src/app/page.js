import { ShieldCheck, CalendarClock, Landmark, TrendingUp } from "lucide-react";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import GoogleSignInButton from "@/components/Layout/GoogleSignInButton";

const getErrorMessage = (error) => {
  if (!error) {
    return null;
  }

  if (error === "AccessDenied" || error === "access_denied") {
    return "Tu cuenta no tiene acceso permitido todavia. Si deberias poder entrar, revisa la lista de emails autorizados.";
  }

  return "No se pudo completar el acceso. Intenta de nuevo en un momento.";
};

const highlights = [
  {
    title: "Liquidez proyectada",
    description: "Visualiza cuatro semanas de flujo real con ingresos, gastos movidos y pagos parciales.",
    icon: TrendingUp,
  },
  {
    title: "Calendario util",
    description: "Ubica vencimientos, pagos reales y carryovers sin duplicados ni fechas fantasmas.",
    icon: CalendarClock,
  },
  {
    title: "Cuentas y tarjetas",
    description: "Mide liquidez neta, deuda disponible y pagos minimos desde el mismo lugar.",
    icon: Landmark,
  },
  {
    title: "Acceso privado",
    description: "Solo los correos autorizados pueden entrar al workspace y operar datos reales.",
    icon: ShieldCheck,
  },
];

export default async function Home({ searchParams }) {
  const session = await auth();
  const params = await searchParams;

  if (session?.user) {
    redirect("/dashboard");
  }

  const errorMessage = getErrorMessage(params?.error);

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#ecfdf5,_#f8fafc_42%,_#ffffff_82%)] px-6 py-12 text-slate-900 md:px-10">
      <section className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-700">
            Cash-flow planning para tu hogar
          </div>

          <div className="space-y-5">
            <h1 className="max-w-3xl text-5xl font-black tracking-tight text-slate-950 md:text-6xl">
              Mira tu liquidez real antes de que la semana te sorprenda.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
              MyFinance te ayuda a decidir que pagar hoy, que mover, y como cierran tus proximas cuatro semanas sin perder
              de vista tarjetas, gastos recurrentes y gastos unicos.
            </p>
          </div>

          {errorMessage ? (
            <div className="max-w-xl rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm text-amber-900 shadow-sm">
              {errorMessage}
            </div>
          ) : null}

          <div className="flex flex-col gap-3 sm:flex-row">
            <GoogleSignInButton className="h-12 rounded-full px-6 text-base shadow-lg shadow-emerald-500/15" showArrow />
            <a
              href="#how-it-works"
              className="inline-flex h-12 items-center justify-center rounded-full border border-slate-200 bg-white px-6 text-base font-medium text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
            >
              Ver como funciona
            </a>
          </div>

          <p className="text-sm text-slate-500">
            El acceso es privado. Si ya tienes autorizacion, entra con tu cuenta de Google y volveras al dashboard.
          </p>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white/80 p-6 shadow-xl shadow-slate-200/60 backdrop-blur">
          <div className="rounded-[1.5rem] bg-slate-950 p-6 text-white">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-emerald-300">Vista de decision</p>
                <h2 className="mt-2 text-2xl font-bold">Que puedes resolver desde aqui</h2>
              </div>
              <div className="rounded-full bg-white/10 px-3 py-1 text-sm text-slate-200">4 semanas</div>
            </div>

            <div className="mt-6 grid gap-3">
              <div className="rounded-2xl bg-white/6 p-4">
                <p className="text-sm text-slate-300">Semana critica</p>
                <p className="mt-2 text-3xl font-extrabold text-emerald-300">$1,240.00</p>
                <p className="mt-1 text-sm text-slate-400">Saldo proyectado despues de mover y registrar pagos.</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-slate-300">Proximos pagos</p>
                  <p className="mt-2 text-xl font-semibold">Solo lo urgente</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-slate-300">Calendario</p>
                  <p className="mt-2 text-xl font-semibold">Sin duplicados</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="mx-auto mt-20 max-w-6xl">
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-600">Que hace por ti</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">Una vista util, no solo una lista de cuentas</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <article key={item.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="inline-flex rounded-2xl bg-emerald-50 p-3 text-emerald-700">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
