import { useState, useEffect } from "react";
import { Menu, X, Clock, TrendingUp, ClipboardList, MessageCircle, Mail, MapPin, ShieldCheck } from "lucide-react";

// Landing page component for ResolvePrev – Consultoria Previdenciária
// Notes:
// - Replace image paths below if you host them elsewhere.
// - Tailwind is assumed to be available in the environment.
// - All copy is in PT-BR, aligned to the requested tone and structure.

export default function ResolvePrevLanding() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Smooth scroll for in-page anchor links (better for older audience usability)
  useEffect(() => {
    const handler = (e) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault();
        const id = target.getAttribute("href")!.slice(1);
        const el = document.getElementById(id);
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 88; // header offset
          window.scrollTo({ top: y, behavior: "smooth" });
          setMobileOpen(false);
        }
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  const primaryBtn = "inline-flex items-center justify-center rounded-2xl px-6 py-3 text-white font-semibold shadow-md hover:shadow-lg focus:outline-none focus:ring-4 transition-all";
  const primaryStyle = { backgroundColor: "#2e7d32" } as const; // requested green tone

  return (
    <div className="min-h-screen bg-white text-zinc-800 font-sans">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur border-b border-zinc-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-20 flex items-center justify-between">
            <a href="#top" className="flex items-center gap-3" aria-label="Página inicial ResolvePrev">
              <img src="https://i.ibb.co/SXP132Sk/Resolve-Prev-Logo-1.png" alt="Logo ResolvePrev" className="h-10 w-auto" loading="eager" decoding="async" fetchpriority="high" />
              <span className="sr-only">ResolvePrev – Consultoria Previdenciária</span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8 text-[15px]">
              <a href="#quem-somos" className="hover:text-zinc-950">Quem Somos</a>
              <a href="#servicos" className="hover:text-zinc-950">Serviços</a>
              <a href="#como-funciona" className="hover:text-zinc-950">Como Funciona</a>
              <a href="#contato" className="hover:text-zinc-950">Contato</a>
            </nav>

            {/* CTA Desktop */}
            <div className="hidden md:block">
              <a href="https://resolveprev.org" className={primaryBtn} style={primaryStyle}>
                Fazer análise gratuita agora
              </a>
            </div>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden p-2 rounded-xl border border-zinc-200 hover:bg-zinc-50"
              aria-label="Abrir menu"
              onClick={() => setMobileOpen((s) => !s)}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="md:hidden border-t border-zinc-200 bg-white">
            <div className="mx-auto max-w-7xl px-4 py-3 space-y-1">
              <a href="#quem-somos" className="block px-2 py-2 rounded-lg hover:bg-zinc-50">Quem Somos</a>
              <a href="#servicos" className="block px-2 py-2 rounded-lg hover:bg-zinc-50">Serviços</a>
              <a href="#como-funciona" className="block px-2 py-2 rounded-lg hover:bg-zinc-50">Como Funciona</a>
              <a href="#contato" className="block px-2 py-2 rounded-lg hover:bg-zinc-50">Contato</a>
              <a href="https://resolveprev.org" className={`${primaryBtn} w-full`} style={primaryStyle}>Fazer análise gratuita agora</a>
            </div>
          </div>
        )}
      </header>

      <main id="top" className="pt-24 sm:pt-28">
        {/* Hero */}
        <section className="relative">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-emerald-50 to-white" aria-hidden="true" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
            <div className="max-w-3xl text-center mx-auto">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-zinc-900">
                Aposente-se com segurança e sem burocracia, com o apoio de uma consultoria previdenciária especializada.
              </h1>
              <p className="mt-5 text-lg sm:text-xl text-zinc-700">
                Somos especialistas em aposentadorias e planejamento previdenciário, com um processo simples, rápido e seguro, atendendo clientes em todo o Brasil.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://resolveprev.org" className={primaryBtn} style={primaryStyle}>
                  Fazer análise gratuita agora
                </a>
                <div className="inline-flex items-center gap-2 text-sm text-zinc-600">
                  <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                  Atendimento humano e digital em todo o Brasil
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quem Somos */}
        <section id="quem-somos" className="scroll-mt-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">Quem Somos</h2>
              <div className="mt-4 space-y-4 text-zinc-700 text-[17px] leading-7">
                <p>A aposentadoria é um dos momentos mais importantes da vida.</p>
                <p>A ResolvePrev nasceu para ajudar quem quer se aposentar com segurança e sem dor de cabeça.</p>
                <p>Somos especialistas em aposentadorias e planejamento previdenciário, e nosso trabalho é mostrar o melhor caminho para você conquistar seu direito de forma rápida e com o melhor valor possível.</p>
                <p>Nosso atendimento é humano, claro e feito para quem quer se aposentar sem complicação.</p>
              </div>
            </div>

            <figure className="mt-10" aria-describedby="caption-equipe">
              <img
                src="https://i.ibb.co/1tb3NYcm/Resolve-Prev-Equipe.jpg"
                alt="Equipe ResolvePrev sorrindo em frente ao logotipo da empresa, cinco consultores em traje social"
                width="987" height="768"
                className="w-full max-w-4xl mx-auto rounded-2xl shadow-md object-cover"
                loading="lazy" decoding="async" sizes="(min-width: 1024px) 960px, 100vw"
              />              <figcaption id="caption-equipe" className="mt-4 text-center text-zinc-600">
                Nosso time está pronto para te atender com atenção, respeito e experiência.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Serviços */}
        <section id="servicos" className="scroll-mt-28 bg-emerald-50/60 border-y border-emerald-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 text-center">Nossos Serviços</h2>

            <div className="mt-10 grid md:grid-cols-2 gap-6 lg:gap-8">
              {/* Aposentadoria */}
              <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm border border-emerald-100">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 rounded-2xl p-3 bg-emerald-100"><Clock className="h-6 w-6" aria-hidden="true" /></div>
                  <div>
                    <h3 className="text-xl font-semibold text-zinc-900">Aposentadoria</h3>
                    <p className="mt-2 text-zinc-700 leading-7">Cuidamos de todo o processo para você se aposentar com tranquilidade e receber o valor justo. Nossa equipe orienta cada passo e acompanha até o benefício ser aprovado, sem burocracia.</p>
                  </div>
                </div>
              </div>

              {/* Planejamento Previdenciário */}
              <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm border border-emerald-100">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 rounded-2xl p-3 bg-emerald-100"><TrendingUp className="h-6 w-6" aria-hidden="true" /></div>
                  <div>
                    <h3 className="text-xl font-semibold text-zinc-900">Planejamento Previdenciário</h3>
                    <p className="mt-2 text-zinc-700 leading-7">Mostramos quanto tempo falta e o que você pode fazer para aumentar o valor da sua aposentadoria. Com um plano claro e personalizado, você sabe exatamente o melhor momento para pedir o benefício.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 text-center">
              <a href="https://resolveprev.org" className={primaryBtn} style={primaryStyle}>Fazer análise gratuita agora</a>
            </div>
          </div>
        </section>

        {/* Como Funciona */}
        <section id="como-funciona" className="scroll-mt-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 text-center">Como Funciona</h2>

            <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {/* Etapa 1 */}
              <StepCard number={1} title="Você responde um pequeno questionário" icon={<ClipboardList className="h-6 w-6" aria-hidden="true" />}>
                Em poucos minutos, coletamos as informações básicas para entender sua situação.
              </StepCard>

              {/* Etapa 2 */}
              <StepCard number={2} title="Nossa equipe analisa seu caso" icon={<ShieldCheck className="h-6 w-6" aria-hidden="true" />}>
                Especialistas verificam se você já tem direito à aposentadoria ou quanto falta para conseguir.
              </StepCard>

              {/* Etapa 3 */}
              <StepCard number={3} title="Entramos em contato com você" icon={<MessageCircle className="h-6 w-6" aria-hidden="true" />}>
                Explicamos o resultado da análise e mostramos o melhor caminho para se aposentar com segurança e o melhor valor possível.
              </StepCard>

              {/* Etapa 4 */}
              <StepCard number={4} title="Você decide seguir com a gente" icon={<ShieldCheck className="h-6 w-6" aria-hidden="true" />}>
                Se quiser, cuidamos de todo o processo até o benefício sair — do começo ao fim, sem burocracia.
              </StepCard>
            </div>

            <div className="mt-10 text-center">
              <a href="https://resolveprev.org" className={primaryBtn} style={primaryStyle}>Fazer análise gratuita agora</a>
            </div>
          </div>
        </section>

        {/* Contato */}
        <section id="contato" className="scroll-mt-28 bg-zinc-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 text-center">Entre em Contato</h2>
            <div className="mt-8 grid lg:grid-cols-3 gap-6 lg:gap-8">
              <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm border border-zinc-200 lg:col-span-2">
                <div className="space-y-4 text-[17px] text-zinc-700 leading-7">
                  <p className="flex items-center gap-2"><Mail className="h-5 w-5" aria-hidden="true" /> <a href="mailto:contato@resolveprev.org" className="hover:underline">contato@resolveprev.org</a></p>
                  <p className="flex items-start gap-2"><MapPin className="h-5 w-5 mt-1" aria-hidden="true" /> <span>Av. Pres. Juscelino K. de Oliveira, 5000 – Iguatemi Business,<br/>São José do Rio Preto – SP, 15093-540</span></p>
                </div>
              </div>
              <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm border border-zinc-200 flex items-center justify-center">
                <a href="https://resolveprev.org" className={`${primaryBtn} w-full text-center`} style={primaryStyle}>Fazer análise gratuita agora</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-emerald-900 text-emerald-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-center space-y-2">
          <p className="text-sm sm:text-base">Atendimento humano e digital em todo o Brasil.</p>
          <p className="text-xs sm:text-sm opacity-90">© 2025 ResolvePrev – Consultoria Previdenciária. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

function StepCard({ number, title, children, icon }: { number: number; title: string; children: React.ReactNode; icon: React.ReactNode; }) {
  return (
    <div className="relative rounded-2xl border border-zinc-200 p-6 sm:p-8 bg-white shadow-sm">
      <div className="absolute -top-4 left-6 select-none">
        <div className="inline-flex items-center justify-center rounded-2xl px-3 py-1 text-white text-sm font-semibold shadow" style={{ backgroundColor: "#2e7d32" }}>
          {number}º passo
        </div>
      </div>
      <div className="flex items-start gap-4 mt-2">
        <div className="shrink-0 rounded-2xl p-3 bg-emerald-100">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-zinc-900">{title}</h3>
          <p className="mt-2 text-zinc-700 leading-7 text-[16.5px]">{children}</p>
        </div>
      </div>
    </div>
  );
}
