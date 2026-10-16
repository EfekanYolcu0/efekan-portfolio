"use client";

import { motion } from "framer-motion";
import { 
  ArrowUpRight, 
  Code2, 
  ExternalLink, 
  Mail, 
  Layers, 
  CheckCircle2 
} from "lucide-react";
import { personalInfo, skills, projects } from "@/data/portfolio";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-neutral-800 selection:text-neutral-200">
      {/* Üst Menü / Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-neutral-950/70 border-b border-neutral-800/60">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-semibold text-lg tracking-tight text-white flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            {personalInfo.name}
          </span>
          <div className="flex items-center gap-4 text-sm text-neutral-400">
            <a href="#projects" className="hover:text-white transition">Projeler</a>
            <a href="#skills" className="hover:text-white transition">Yetenekler</a>
            <a 
              href={`mailto:${personalInfo.email}`}
              className="px-3.5 py-1.5 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white transition text-xs font-medium"
            >
              İletişime Geç
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Alanı */}
      <section className="pt-36 pb-20 px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-neutral-400 mb-6">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            Yeni freelance ve tam zamanlı projelere açık
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white max-w-3xl leading-[1.15]">
            Modern web teknolojileriyle <span className="text-neutral-400">performanslı ve ölçeklenebilir</span> çözümler.
          </h1>
          <p className="mt-6 text-lg text-neutral-400 max-w-2xl leading-relaxed">
            {personalInfo.bio}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-white text-neutral-950 font-medium hover:bg-neutral-200 transition inline-flex items-center gap-2"
            >
              Projeleri Gör
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.bionluk}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-lg bg-neutral-900 border border-neutral-800 text-white hover:bg-neutral-800 transition inline-flex items-center gap-2"
            >
              Bionluk Profili
              <ExternalLink className="w-4 h-4 text-neutral-400" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* Projeler Bölümü */}
      <section id="projects" className="py-20 px-6 max-w-5xl mx-auto border-t border-neutral-800/60">
        <div className="flex items-center gap-2 text-sm font-medium text-neutral-400 mb-4">
          <Layers className="w-4 h-4 text-emerald-400" />
          Öne Çıkan Çalışmalar
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10">Referans Projeler</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="group p-5 rounded-2xl bg-neutral-900/50 border border-neutral-800/80 hover:border-neutral-700 transition flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Proje Görseli */}
                {proj.image && (
                  <div className="relative w-full h-48 mb-5 overflow-hidden rounded-xl border border-neutral-800/80 bg-neutral-950">
                    <img 
                      src={proj.image} 
                      alt={proj.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                )}
                <h3 className="text-xl font-semibold text-white group-hover:text-emerald-400 transition flex items-center justify-between">
                  {proj.title}
                  <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-emerald-400 transition" />
                </h3>
                <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                  {proj.description}
                </p>
              </div>

              <div className="mt-6">
                <div className="flex flex-wrap gap-2 mb-2">
                  {proj.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md text-xs bg-neutral-800 text-neutral-300 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Yetenekler Bölümü */}
      <section id="skills" className="py-20 px-6 max-w-5xl mx-auto border-t border-neutral-800/60">
        <div className="flex items-center gap-2 text-sm font-medium text-neutral-400 mb-4">
          <Code2 className="w-4 h-4 text-blue-400" />
          Yetenek Havuzu
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">Kullandığım Teknolojiler</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, idx) => (
            <span
              key={idx}
              className="px-4 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 text-sm font-medium hover:border-neutral-700 hover:text-white transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Footer / İletişim */}
      <footer className="py-12 px-6 border-t border-neutral-900 bg-neutral-950/40 text-neutral-500 text-sm">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 {personalInfo.name}. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-6">
            <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition flex items-center gap-1.5">
              <Mail className="w-4 h-4" />
              E-posta
            </a>
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-white transition flex items-center gap-1.5">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
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