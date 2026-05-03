import { ArrowRight, ShieldCheck, Landmark, TrendingUp } from "lucide-react";
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
    title: "Liquidez clara",
    description: "Tu flujo semanal en una vista simple.",
    icon: TrendingUp,
  },
  {
    title: "Deuda visible",
    description: "Cuentas y tarjetas en el mismo lugar.",
    icon: Landmark,
  },
  {
    title: "Acceso privado",
    description: "Solo usuarios autorizados entran al workspace.",
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
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#ecfdf5,_#f8fafc_42%,_#ffffff_82%)] px-6 py-12 text-foreground dark:bg-[radial-gradient(circle_at_top,_#064e3b33,_#0f172a_48%,_#020617_88%)] md:px-10">
      <section className="mx-auto max-w-md">
        <div className="overflow-hidden rounded-[2rem] border border-emerald-100 bg-white shadow-xl shadow-emerald-100/40 dark:border-border dark:bg-card dark:shadow-none">
          <div className="border-b border-emerald-100 bg-white px-6 py-5 dark:border-border dark:bg-card">
            <p className="text-2xl font-black tracking-tight text-emerald-700 dark:text-emerald-300">MyFinance</p>
          </div>

          <div className="border-b border-emerald-100 bg-emerald-50/80 px-6 py-5 dark:border-border dark:bg-emerald-950/30">
            <p className="text-sm font-medium text-emerald-900 dark:text-emerald-100">Tu panel financiero personal</p>
            <p className="mt-1 text-sm text-emerald-700/80 dark:text-emerald-200/80">Simple, claro y privado.</p>
          </div>

          <div className="space-y-6 px-6 py-7">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight text-foreground">Accede a tu dashboard</h1>
              <p className="text-sm leading-6 text-muted-foreground">Saldo, pagos y proyeccion semanal en un solo lugar.</p>
            </div>

            {errorMessage ? (
              <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900 dark:border-amber-900/60 dark:bg-amber-950/35 dark:text-amber-100">
                {errorMessage}
              </div>
            ) : null}
            
            <GoogleSignInButton className="h-12 w-full rounded-xl bg-emerald-700 px-6 text-base text-white shadow-none hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-500" label="Entrar con Google" />

            <div id="benefits" className="grid grid-cols-3 gap-3 border-t border-border pt-5">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <article key={item.title} className="space-y-2">
                    <div className="inline-flex rounded-xl bg-emerald-50 p-2 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h2 className="text-sm font-semibold text-foreground">{item.title}</h2>
                    <p className="text-xs leading-5 text-muted-foreground">{item.description}</p>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="border-t border-border bg-slate-950 px-6 py-4 text-sm text-white">
            <div className="flex items-center justify-between">
              <span>Preguntas frecuentes</span>
              <a href="#" className="inline-flex items-center gap-1 text-emerald-300 transition hover:text-emerald-200">
                Ver FAQ
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
