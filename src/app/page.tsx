"use client";

import { motion } from "framer-motion";
import { 
  ArrowUpRight, 
  Code2, 
  ExternalLink, 
  Mail, 
  Layers, 
  Sparkles,
  Zap,
  ShieldCheck,
  Clock,
  Terminal as TerminalIcon,
  CheckCircle2,
  Send
} from "lucide-react";
import { personalInfo, skills, projects } from "@/data/portfolio";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#07090e] text-neutral-100 selection:bg-emerald-500/30 selection:text-emerald-200 relative overflow-hidden font-sans">
      {/* Arka Plan Ambient Işıkları & Izgara Dokusu */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d0f_1px,transparent_1px),linear-gradient(to_bottom,#1f293d0f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-emerald-500/15 via-cyan-500/10 to-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Üst Menü / Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#07090e]/75 border-b border-neutral-800/80 transition-all">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-semibold text-sm tracking-tight text-white flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-neutral-200 hover:text-white transition font-medium">{personalInfo.name}</span>
            <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] uppercase font-mono tracking-wider rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400">
              Portfolio
            </span>
          </a>

          <div className="flex items-center gap-5 text-xs font-medium text-neutral-400">
            <a href="#projects" className="hover:text-white transition">Projeler</a>
            <a href="#skills" className="hover:text-white transition">Yetenekler</a>
            <a href="#contact" className="hover:text-white transition">İletişim</a>
            <a 
              href={`mailto:${personalInfo.email}`}
              className="px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-neutral-950 font-semibold transition shadow-sm shadow-emerald-500/20"
            >
              Teklif Al
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Alanı */}
      <section className="pt-36 pb-20 px-6 max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Durum Rozeti */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900/80 border border-neutral-800/90 text-xs text-neutral-300 mb-8 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Yeni freelance projelere ve iş birliklerine açık</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.1]">
            Modern arayüzler, <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              yüksek performanslı
            </span> kod mimarisi.
          </h1>

          <p className="mt-6 text-base sm:text-lg text-neutral-400 max-w-2xl leading-relaxed">
            {personalInfo.bio} Figma tasarımlarını temiz Next.js & React koduna dönüştürüyor, full-stack yönetim panelleri ve API çözümleri inşa ediyorum.
          </p>

          {/* Eyleme Çağrı Butonları */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-white text-neutral-950 font-semibold hover:bg-neutral-200 transition-all inline-flex items-center gap-2 shadow-lg shadow-white/5 active:scale-95"
            >
              Projeleri İncele
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.bionluk}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl bg-neutral-900/90 border border-neutral-800 text-neutral-200 hover:text-white hover:border-neutral-700 hover:bg-neutral-800/80 transition-all inline-flex items-center gap-2 active:scale-95"
            >
              Bionluk Vitrini
              <ExternalLink className="w-4 h-4 text-neutral-400" />
            </a>
            <a
              href={personalInfo.r10}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl bg-neutral-900/90 border border-neutral-800 text-neutral-200 hover:text-white hover:border-neutral-700 hover:bg-neutral-800/80 transition-all inline-flex items-center gap-2 active:scale-95"
            >
              R10 Profili
              <ExternalLink className="w-4 h-4 text-neutral-400" />
            </a>
          </div>

          {/* Hızlı Güven & Metrik Barları */}
          <div className="mt-14 pt-8 border-t border-neutral-900/80 grid grid-cols-2 sm:grid-cols-4 gap-6 text-left">
            <div>
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono mb-1">
                <Zap className="w-3.5 h-3.5" /> Hız & SEO
              </div>
              <div className="text-xl font-bold text-white">95+ Puan</div>
              <div className="text-xs text-neutral-500">Core Web Vitals</div>
            </div>
            <div>
              <div className="flex items-center gap-2 text-blue-400 text-xs font-mono mb-1">
                <ShieldCheck className="w-3.5 h-3.5" /> Kalite
              </div>
              <div className="text-xl font-bold text-white">Clean Code</div>
              <div className="text-xs text-neutral-500">TypeScript & Test Edilebilir</div>
            </div>
            <div>
              <div className="flex items-center gap-2 text-amber-400 text-xs font-mono mb-1">
                <Clock className="w-3.5 h-3.5" /> Teslimat
              </div>
              <div className="text-xl font-bold text-white">%100 Zamanında</div>
              <div className="text-xs text-neutral-500">Şeffaf İletişim</div>
            </div>
            <div>
              <div className="flex items-center gap-2 text-violet-400 text-xs font-mono mb-1">
                <TerminalIcon className="w-3.5 h-3.5" /> Altyapı
              </div>
              <div className="text-xl font-bold text-white">Next.js 15+</div>
              <div className="text-xs text-neutral-500">App Router & Tailwind</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Projeler Bölümü */}
      <section id="projects" className="py-24 px-6 max-w-5xl mx-auto border-t border-neutral-800/60 relative z-10">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-3">
          <Layers className="w-4 h-4" />
          Seçilmiş Projeler
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Referans Çalışmalar</h2>
            <p className="mt-2 text-sm text-neutral-400">Üretim standartlarında, modern araçlarla kodlanmış canlı projeler.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              className="group p-5 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 hover:border-emerald-500/40 hover:bg-neutral-900/70 transition-all flex flex-col justify-between backdrop-blur-sm"
            >
              <div>
                {/* Proje Görseli */}
                {proj.image && (
                  <div className="relative w-full h-52 mb-6 overflow-hidden rounded-xl border border-neutral-800/80 bg-neutral-950">
                    <img 
                      src={proj.image} 
                      alt={proj.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                )}

                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold text-white group-hover:text-emerald-300 transition flex items-center gap-1.5">
                    {proj.title}
                  </h3>
                  <div className="p-2 rounded-lg bg-neutral-800/60 group-hover:bg-emerald-500/20 group-hover:text-emerald-300 transition text-neutral-400">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                  {proj.description}
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-neutral-800/60">
                <div className="flex flex-wrap gap-2">
                  {proj.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md text-xs bg-neutral-800/70 text-neutral-300 font-mono border border-neutral-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Yetenekler Bölümü */}
      <section id="skills" className="py-20 px-6 max-w-5xl mx-auto border-t border-neutral-800/60 relative z-10">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3">
          <Code2 className="w-4 h-4" />
          Yetkinlikler
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-8">Kullandığım Teknolojiler</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-neutral-900/40 border border-neutral-800/80 hover:border-neutral-700 text-neutral-200 text-sm font-medium hover:text-white transition flex items-center gap-2.5"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </section>

      {/* İletişim / Teklif Alanı */}
      <section id="contact" className="py-24 px-6 max-w-5xl mx-auto border-t border-neutral-800/60 relative z-10">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-neutral-900/90 to-neutral-950 border border-neutral-800/80 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="max-w-2xl relative z-10">
            <span className="text-xs uppercase font-mono tracking-wider text-emerald-400">Birlikte Çalışalım</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4 tracking-tight">
              Aklınızda bir proje mi var?
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mb-8 leading-relaxed">
              İster yeni bir web sitesi veya kontrol paneli, ister mevcut sitenizdeki geliştirmeler için doğrudan bana yazabilirsiniz. Genellikle birkaç saat içinde dönüş yapıyorum.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold transition inline-flex items-center gap-2 text-sm shadow-lg shadow-emerald-500/20 active:scale-95"
              >
                <Mail className="w-4 h-4" />
                E-posta ile İletişime Geç
              </a>
              <a
                href={personalInfo.bionluk}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 rounded-xl bg-neutral-800/80 hover:bg-neutral-800 border border-neutral-700 text-white font-medium transition inline-flex items-center gap-2 text-sm active:scale-95"
              >
                <Send className="w-4 h-4 text-neutral-400" />
                Bionluk Üzerinden Mesaj At
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-neutral-900 bg-[#07090e] text-neutral-500 text-xs">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 {personalInfo.name}. Next.js & Tailwind ile inşa edildi.</p>
          <div className="flex items-center gap-6">
            <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5" />
              E-posta
            </a>
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-white transition flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}