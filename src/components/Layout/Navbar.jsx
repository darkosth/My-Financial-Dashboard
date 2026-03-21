import Link from "next/link";
import { Wallet, LayoutDashboard, ReceiptText, Settings2, CalendarIcon} from "lucide-react";

export default function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="max-w-5xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        
        {/* LOGO / BRANDING */}
        <div className="flex items-center gap-2 font-bold text-xl text-slate-900 tracking-tight">
          <Wallet className="h-6 w-6 text-emerald-600" />
          <span>MyFinance</span>
        </div>

        {/* ENLACES DE NAVEGACIÓN */}
        <div className="flex items-center gap-6 text-sm font-medium text-slate-600">
          <Link href="/" className="flex items-center gap-2 hover:text-emerald-600 transition-colors">
            <LayoutDashboard className="h-4 w-4" />
            <span className="hidden sm:inline">Dashboard</span>
          </Link>
          
          <Link href="/unique-expenses" className="flex items-center gap-2 hover:text-emerald-600 transition-colors">
            <ReceiptText className="h-4 w-4" />
            <span className="hidden sm:inline">Unique Expenses</span>
          </Link>

          <Link href="/templates" className="flex items-center gap-2 hover:text-emerald-600 transition-colors">
            <Settings2 className="h-4 w-4" />
            <span className="hidden sm:inline">Templates</span>
          </Link>

          <Link href="/calendar" className="flex items-center gap-2 hover:text-emerald-600 transition-colors">
            <CalendarIcon className="h-4 w-4" />
            <span className="hidden sm:inline">Calendar</span>
          </Link>
        </div>

      </div>
    </nav>
  );
}