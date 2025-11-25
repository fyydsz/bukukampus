import Link from "next/link";
// Sesuaikan path import ini dengan lokasi file komponen kamu
import { ThemeToggle } from "@/components/theme-toggle"; 

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header / Navigation */}
      <header className="w-full max-w-5xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-lg tracking-tight">
          {/* Logo Icon Sederhana */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2 6h4" />
            <path d="M2 10h4" />
            <path d="M2 14h4" />
            <path d="M2 18h4" />
            <rect width="16" height="20" x="4" y="2" rx="2" />
            <path d="M16 2v20" />
          </svg>
          <span>Fyy's Notebook</span>
        </div>
        
        <nav className="flex items-center gap-4">
          <Link 
            href="https://github.com/fyydsz" 
            target="_blank"
            className="text-sm font-medium text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors hidden sm:block"
          >
            GitHub
          </Link>
          <ThemeToggle />
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center py-20">
        <div className="max-w-2xl space-y-8">
          {/* Badge kecil (Optional, memberikan kesan modern) */}
          <div className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-sm text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 mb-4">
            <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
            Digital Garden & Documentation
          </div>

          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Catatan Belajar, <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
              Disimpan Rapi.
            </span>
          </h1>
          
          <p className="text-sm sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-4xl mx-auto">
            Kumpulan materi kuliah, tutorial koding, dsb hehe.<br/>Ditulis dengan format yang rapi, mudah dibaca, dan terstruktur.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/docs"
              className="h-12 px-8 rounded-full bg-black dark:bg-white text-white dark:text-black font-medium flex items-center justify-center hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all active:scale-95"
            >
              Mulai Membaca
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer Minimalis */}
      <footer className="py-8 text-center text-sm text-zinc-500 dark:text-zinc-400">
        <p>© {new Date().getFullYear()} Fyy's Notebook. Built with Next.js & Nextra.</p>
      </footer>
    </div>
  );
}