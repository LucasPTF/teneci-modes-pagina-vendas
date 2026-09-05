import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { ArrowIcon, CheckIcon, FlowerMark } from "@/components/Icons";
import {
  agenda,
  checkoutUrl,
  cycleItems,
  faqs,
  heroContent,
  included,
  instagramUrl,
  outcomes,
  type HeroVariant,
} from "@/lib/content";

function CtaButton({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <a className={`cta-button${light ? " cta-button-light" : ""}`} href={checkoutUrl} target="_blank" rel="noreferrer">
      <span>{children}</span>
      <ArrowIcon />
    </a>
  );
}

export function SalesPage({ variant }: { variant: HeroVariant }) {
  const hero = heroContent[variant];

  return (
    <>
      <a href="#conteudo" className="skip-link">Ir para o conteúdo</a>
      <header className="site-header">
        <a href="#inicio" className="brand" aria-label="Teneci Modes, início">
          <FlowerMark />
          <span>
            <strong>Teneci Modes</strong>
            <small>Psicologia e psicoeducação</small>
          </span>
        </a>
        <a href={checkoutUrl} className="header-link" target="_blank" rel="noreferrer">Participar</a>
      </header>

      <main id="conteudo">
        <section className="hero" id="inicio">
          <div className="hero-orbit orbit-one" aria-hidden="true" />
          <div className="hero-orbit orbit-two" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow hero-eyebrow">Workshop online e ao vivo <span>R$ 29,90</span></p>
              <h1>{hero.title}</h1>
              <p className="hero-support">{hero.support}</p>
              <div className="hero-actions">
                <CtaButton>{hero.cta}</CtaButton>
                <p>Encontro ao vivo com duração aproximada de 2 horas.</p>
              </div>
              <p className="hero-note">{hero.note}</p>
            </div>
            <div className="hero-visual" aria-hidden="true">
              <div className="photo-slot photo-slot-hero">
                <Image
                  src="/images/teneci-hero.webp"
                  alt=""
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 42vw"
                />
              </div>
              <div className="visual-caption">
                <span>Compreender</span>
                <span>Reconhecer</span>
                <span>Regular</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-cream">
          <div className="container narrow">
            <Reveal>
              <p className="eyebrow">Talvez você reconheça este ciclo</p>
              <h2>Sua rotina desacelera. Sua mente continua trabalhando.</h2>
            </Reveal>
            <div className="cycle-grid">
              {cycleItems.map((item, index) => (
                <Reveal key={item} className="cycle-card">
                  <span className="card-number">0{index + 1}</span>
                  <p>{item}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-ink">
          <div className="container split-explanation">
            <Reveal>
              <p className="eyebrow eyebrow-light">Uma mudança de ordem</p>
              <h2>Controlar primeiro pode deixar tudo ainda mais confuso.</h2>
            </Reveal>
            <Reveal className="explanation-copy">
              <p>Quando todo o foco vai para fazer o sintoma sumir, você pode perder a chance de observar o que está acontecendo de forma mais ampla.</p>
              <p>A experiência emocional envolve sinais do corpo, pensamentos, padrões aprendidos e o contexto em que você vive. A fé também pode fazer parte da sua identidade, mas não precisa ser usada para reduzir todo sofrimento a uma explicação espiritual.</p>
              <p className="accent-line">A proposta é compreender primeiro, reconhecer o padrão em seguida e só então escolher um recurso de regulação adequado ao momento.</p>
            </Reveal>
          </div>
        </section>

        <section className="section method-section">
          <div className="container">
            <Reveal className="method-heading">
              <p className="eyebrow">Mapa Corpo, Mente e Contexto</p>
              <h2>Três movimentos para sair da luta cega e responder com mais clareza.</h2>
            </Reveal>
            <div className="method-grid">
              {[
                ["01", "Compreender", "Perceber sinais do corpo, emoções, pensamentos e o contexto quando a aceleração aparece."],
                ["02", "Reconhecer", "Identificar gatilhos, ciclos e padrões que se repetem, sem transformar a experiência em culpa."],
                ["03", "Regular", "Aplicar um primeiro recurso possível e escolher respostas mais conscientes para aquele momento."],
              ].map(([number, title, text]) => (
                <Reveal className="method-card" key={title}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </Reveal>
              ))}
            </div>
            <Reveal className="method-quote">
              <FlowerMark />
              <p>Você não precisa começar vencendo uma guerra contra a própria mente. Precisa começar enxergando o mapa.</p>
            </Reveal>
          </div>
        </section>

        <section className="section section-sage">
          <div className="container outcomes-grid">
            <Reveal>
              <p className="eyebrow">O que você leva do encontro</p>
              <h2>Conhecimento que encontra a vida real.</h2>
              <p className="section-lead">O conteúdo foi organizado para oferecer clareza, observação e um primeiro recurso aplicável, com responsabilidade sobre os limites da psicoeducação.</p>
            </Reveal>
            <div className="check-list">
              {outcomes.map((item) => (
                <Reveal className="check-item" key={item}>
                  <span className="check-icon"><CheckIcon /></span>
                  <p>{item}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section agenda-section">
          <div className="container">
            <Reveal className="agenda-heading">
              <p className="eyebrow">Como será o workshop ao vivo</p>
              <h2>Um encontro para organizar o que hoje parece um emaranhado.</h2>
            </Reveal>
            <div className="agenda-list">
              {agenda.map(([number, title, text]) => (
                <Reveal className="agenda-item" key={number}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section exercise-section">
          <div className="container exercise-grid">
            <Reveal className="exercise-graphic">
              <div className="map-node node-body">Corpo</div>
              <div className="map-node node-mind">Mente</div>
              <div className="map-node node-context">Contexto</div>
              <div className="map-center">Seu padrão</div>
            </Reveal>
            <Reveal>
              <p className="eyebrow eyebrow-light">Você não vai sair apenas com conteúdo</p>
              <h2>Observe uma situação concreta com um mapa em mãos.</h2>
              <p>Durante o encontro, você será conduzida a preencher um Mapa de Padrões com uma situação do seu cotidiano. A ideia é enxergar o que aconteceu no corpo, quais pensamentos entraram no ciclo, o que estava acontecendo ao redor e qual resposta seria mais útil naquele contexto.</p>
              <p className="small-note">O exercício é psicoeducativo e não realiza diagnóstico. Ele serve para organizar a observação e aumentar a clareza sobre a própria experiência.</p>
            </Reveal>
          </div>
        </section>

        <section className="section audience-section">
          <div className="container audience-grid">
            <Reveal className="audience-card audience-yes">
              <p className="eyebrow">Este encontro foi pensado para</p>
              <h2>Mulheres cristãs adultas que desejam começar com clareza.</h2>
              <ul>
                <li>Quem convive com mente acelerada, preocupação, sobrecarga emocional ou dificuldade de desligar.</li>
                <li>Quem já tentou controlar os sintomas, se cobrar mais ou resolver tudo sozinha e continua sem entender o ciclo.</li>
                <li>Quem quer uma abordagem que respeite sua fé sem transformar fé em técnica psicológica.</li>
                <li>Quem deseja um passo acessível, prático e responsável antes de decidir sobre um acompanhamento mais profundo.</li>
              </ul>
            </Reveal>
            <Reveal className="audience-card audience-no">
              <p className="eyebrow">Este encontro não é</p>
              <h2>Uma promessa de cura ou substituto de cuidado clínico.</h2>
              <ul>
                <li>Não promete eliminação definitiva da ansiedade nem resultado garantido.</li>
                <li>Não substitui psicoterapia, avaliação psicológica, acompanhamento psiquiátrico ou outro cuidado indicado.</li>
                <li>Não atende situações de sofrimento intenso que exigem atenção individualizada ou de urgência.</li>
              </ul>
            </Reveal>
          </div>
        </section>

        <section className="section authority-section">
          <div className="container authority-grid">
            <Reveal className="authority-visual">
              <div className="photo-slot photo-slot-authority">
                <Image
                  src="/images/teneci-autoridade.webp"
                  alt="Teneci Modes em um ambiente profissional acolhedor"
                  fill
                  sizes="(max-width: 768px) 100vw, 38vw"
                />
              </div>
              <span className="authority-tag">Psicologia, fé e contexto</span>
            </Reveal>
            <Reveal className="authority-copy">
              <p className="eyebrow">Quem conduz</p>
              <h2>Teneci Modes</h2>
              <p>Teneci tem formação em Psicologia e está na fase final do mestrado em Psicologia Clínica e da Saúde. Sua própria trajetória a levou a investigar o sofrimento psicológico de forma biopsicossocial, considerando a interação entre corpo, experiência psicológica e contexto de vida.</p>
              <p>Há mais de 25 anos, ela também vive de perto o contexto ministerial como esposa de pastor. Esse encontro entre formação psicológica, vivência de fé e experiência pessoal sustenta uma proposta de psicoeducação que respeita a espiritualidade sem usá-la como substituto de cuidado psicológico.</p>
              <div className="authority-facts">
                <span><strong>Psicologia</strong>Formação acadêmica</span>
                <span><strong>Mestrado</strong>Fase final em Psicologia Clínica e da Saúde</span>
                <span><strong>25+ anos</strong>Vivência no contexto ministerial</span>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section offer-section" id="inscricao">
          <div className="container offer-grid">
            <Reveal className="offer-copy">
              <p className="eyebrow eyebrow-light">Sua inscrição inclui</p>
              <h2>Um primeiro passo claro, responsável e aplicável.</h2>
              <p>Você participa do encontro ao vivo, aprende o mapa e recebe materiais para continuar observando seus padrões no próprio ritmo.</p>
              <div className="purchase-note">
                <strong>Informação clara antes da compra</strong>
                <p>As condições comerciais e de garantia aplicáveis são as exibidas no checkout da Hotmart. Leia essas informações antes de concluir o pagamento.</p>
              </div>
            </Reveal>
            <Reveal className="offer-card">
              <div className="offer-name">
                <span>Workshop online e ao vivo</span>
                <h3>Protocolo Adeus Mente Acelerada</h3>
              </div>
              <ul className="offer-list">
                {included.map((item) => (
                  <li key={item}><CheckIcon /><span>{item}</span></li>
                ))}
              </ul>
              <div className="price-block">
                <span>Investimento</span>
                <strong><small>R$</small> 29,90</strong>
              </div>
              <CtaButton light>Quero participar do workshop ao vivo</CtaButton>
              <p className="checkout-note">Pagamento processado pela Hotmart.</p>
            </Reveal>
          </div>
        </section>

        <section className="section faq-section">
          <div className="container faq-grid">
            <Reveal className="faq-heading">
              <p className="eyebrow">Perguntas frequentes</p>
              <h2>Respostas diretas para uma decisão consciente.</h2>
            </Reveal>
            <Reveal className="faq-list">
              {faqs.map(([question, answer]) => (
                <details key={question}>
                  <summary>{question}<span aria-hidden="true">+</span></summary>
                  <p>{answer}</p>
                </details>
              ))}
            </Reveal>
          </div>
        </section>

        <section className="section closing-section">
          <div className="container closing-inner">
            <Reveal>
              <FlowerMark />
              <p className="eyebrow eyebrow-light">Você não precisa entender tudo sobre si hoje</p>
              <h2>Mas pode começar enxergando o que está acontecendo antes de lutar contra o que sente.</h2>
              <p>Se a mente acelerada tem ocupado seus momentos de descanso, suas decisões e a forma como você se relaciona consigo mesma, este workshop oferece um começo claro, responsável e aplicável.</p>
              <CtaButton light>Quero dar esse primeiro passo</CtaButton>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="brand footer-brand"><FlowerMark /><span><strong>Teneci Modes</strong><small>Psicologia e psicoeducação</small></span></div>
          <p>Conteúdo psicoeducativo. Não realiza diagnóstico e não substitui psicoterapia, avaliação psicológica, acompanhamento médico ou atendimento de urgência.</p>
          <a href={instagramUrl} target="_blank" rel="noreferrer">Instagram</a>
        </div>
      </footer>

      <div className="mobile-cta">
        <a href={checkoutUrl} target="_blank" rel="noreferrer">Participar por R$ 29,90 <ArrowIcon /></a>
      </div>
    </>
  );
}
