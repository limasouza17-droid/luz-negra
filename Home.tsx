/* Design: Arquivo de Campo UV — narrativa editorial científica, layout assimétrico, preto texturizado, violeta ultravioleta e âmbar de evidência. */
import { useMemo, useState } from "react";
import { ArrowDown, ArrowRight, Beaker, Check, ChevronRight, Eye, FlaskConical, Gauge, Lightbulb, LockKeyhole, MoveDown, Sparkles, Sun, Zap } from "lucide-react";

const spectrum = [
  { label: "Rádio", color: "#8b5cf6", note: "Ondas longas usadas em comunicação." },
  { label: "Micro-ondas", color: "#6366f1", note: "Transportam energia e aquecem moléculas de água." },
  { label: "Infravermelho", color: "#ef4444", note: "Associado à radiação térmica." },
  { label: "Visível", color: "#f4c95d", note: "A pequena faixa que nossos olhos detectam." },
  { label: "Ultravioleta", color: "#c026d3", note: "Comprimento de onda menor que o violeta visível." },
  { label: "Raios X", color: "#38bdf8", note: "Alta energia, capaz de atravessar tecidos." },
  { label: "Gama", color: "#f8fafc", note: "As ondas mais energéticas do espectro." },
];

const objects = [
  { name: "Marca-texto", icon: "▰", result: "Fluorescente", detail: "Pigmentos fluorescentes absorvem UV e devolvem luz visível intensa." },
  { name: "Papel", icon: "▤", result: "Pouca fluorescência", detail: "A celulose pode emitir um brilho discreto, dependendo do tratamento." },
  { name: "Tecido", icon: "▦", result: "Depende do tecido", detail: "Fibras e agentes branqueadores mudam bastante a resposta sob UV." },
  { name: "Cédula", icon: "▱", result: "Elementos de segurança", detail: "Algumas marcas são desenhadas para aparecer somente sob UV." },
];

const quiz = [
  { q: "A radiação UV é diretamente visível aos olhos humanos?", options: ["Verdadeiro", "Falso"], answer: 1, explain: "Falso. UV está fora da faixa visível; percebemos apenas efeitos e emissões secundárias." },
  { q: "Qual radiação a luz negra utiliza principalmente?", options: ["UVA", "Raios gama"], answer: 0, explain: "UVA. Uma luz negra emite principalmente ultravioleta de onda longa." },
  { q: "Por que alguns materiais brilham?", options: ["Refletem todo o UV", "Emitem luz visível após absorver energia"], answer: 1, explain: "A fluorescência transforma parte da energia absorvida em luz visível." },
  { q: "O que acontece na excitação?", options: ["Elétrons passam a um estado de maior energia", "O material desaparece"], answer: 0, explain: "A energia UV pode elevar temporariamente elétrons a um estado energético maior." },
  { q: "Todos os materiais brancos fluorescem?", options: ["Sim", "Não"], answer: 1, explain: "Não. A cor branca não garante fluorescência; a composição e os pigmentos importam." },
];

function SectionMarker({ number, label }: { number: string; label: string }) {
  return <div className="section-marker"><span>{number}</span><i /> <b>{label}</b></div>;
}

function Home() {
  const [lit, setLit] = useState(false);
  const [drag, setDrag] = useState(0);
  const [selectedSpectrum, setSelectedSpectrum] = useState(4);
  const [visibleWave, setVisibleWave] = useState(3);
  const [uv, setUv] = useState(false);
  const [object, setObject] = useState(0);
  const [app, setApp] = useState(0);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizAnswer, setQuizAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  const progress = useMemo(() => Math.min(100, Math.round(((window.scrollY || 0) / Math.max(1, document.body.scrollHeight - window.innerHeight)) * 100)), []);
  const currentQuiz = quiz[quizIndex];

  const handleCord = (event: React.PointerEvent<HTMLDivElement>) => {
    const target = event.currentTarget;
    target.setPointerCapture(event.pointerId);
    const start = event.clientY;
    const move = (e: PointerEvent) => {
      const next = Math.max(0, Math.min(150, e.clientY - start + drag));
      setDrag(next);
      if (next > 82) setLit(true);
    };
    const up = () => { target.releasePointerCapture(event.pointerId); window.removeEventListener("pointermove", move); window.removeEventListener("pointerup", up); };
    window.addEventListener("pointermove", move); window.addEventListener("pointerup", up);
  };

  const answerQuiz = (index: number) => {
    if (quizAnswer !== null) return;
    setQuizAnswer(index); if (index === currentQuiz.answer) setScore(s => s + 1);
  };
  const nextQuiz = () => { setQuizIndex(i => (i + 1) % quiz.length); setQuizAnswer(null); };

  return <main className="site-shell">
    <div className="reading-progress" style={{ width: `${progress}%` }} />
    <header className="topbar">
      <a href="#top" className="brand"><img src="/manus-storage/luz-negra-mark_7ecfea1a.png" alt="" /><span>LUZ<br /><em>NEGRA</em></span></a>
      <div className="topbar-note"><span className="live-dot" /> CADERNO DE INVESTIGAÇÃO · 2026</div>
      <a className="skip-link" href="#investigacao">pular para investigação <ArrowDown size={14} /></a>
    </header>

    <section id="top" className={`hero ${lit ? "hero-lit" : ""}`}>
      <div className="hero-glow" />
      <div className="cord-area" onPointerDown={handleCord} role="button" tabIndex={0} aria-label="Arraste a cordinha para acender a luz" onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setLit(true); }}>
        <div className="cord" style={{ transform: `translateY(${drag}px)` }}><span className="cord-knob" /></div>
        <span className="pull-label">{lit ? "sistema ativado" : "puxe para revelar"}<MoveDown size={15} /></span>
      </div>
      <div className="hero-copy">
        <div className="eyebrow">ARQUIVO Nº 04 — FENÔMENOS ÓPTICOS</div>
        <h1>A luz que<br /><i>revela</i> o invisível.</h1>
        <p className="hero-lede">Por que alguns materiais brilham quando expostos à luz negra?</p>
        <a href="#investigacao" className="primary-link">começar a investigação <ArrowRight size={17} /></a>
      </div>
      <div className="hero-footer"><span>ARRASTE A CORDA</span><span>SCROLL PARA INVESTIGAR ↓</span><span>01 / 13</span></div>
    </section>

    <section id="investigacao" className="section spectrum-section">
      <SectionMarker number="02" label="O espectro" />
      <div className="split-heading"><h2>Antes da luz negra,<br /><i>existe um espectro inteiro.</i></h2><p>A luz visível é só uma pequena janela. Passe por cada faixa para descobrir o que existe além do que nossos olhos conseguem registrar.</p></div>
      <div className="spectrum-visual"><div className="spectrum-beam">{spectrum.map((s, i) => <button key={s.label} className={selectedSpectrum === i ? "active" : ""} style={{ background: s.color }} onClick={() => setSelectedSpectrum(i)}>{s.label}</button>)}</div><div className="spectrum-card"><span className="mono">FAIXA {String(selectedSpectrum + 1).padStart(2, "0")} / 07</span><h3>{spectrum[selectedSpectrum].label}</h3><p>{spectrum[selectedSpectrum].note}</p>{selectedSpectrum === 4 && <strong><Sparkles size={14} /> UV · MENOR QUE O VIOLETA VISÍVEL</strong>}</div></div>
    </section>

    <section className="section light-section">
      <SectionMarker number="03" label="O limite do olhar" />
      <div className="split-heading"><h2>Nossos olhos<br /><i>não veem tudo.</i></h2><p>O que chamamos de “luz” é apenas a faixa que o sistema visual humano aprendeu a detectar. O restante continua presente — e pode ser medido.</p></div>
      <div className="wave-panel"><div className="wave-track">{["Vermelho", "Laranja", "Amarelo", "Verde", "Azul", "Violeta"].map((w, i) => <span key={w} className={visibleWave === i ? "wave-active" : ""}>{w}</span>)}</div><input type="range" min="0" max="5" value={visibleWave} onChange={(e) => setVisibleWave(Number(e.target.value))} /><div className="wave-readout"><div><span className="mono">COMPRIMENTO DE ONDA</span><b>{visibleWave < 3 ? "visível · percebido" : visibleWave === 3 ? "visível · limite central" : "próximo do UV"}</b></div><p>{visibleWave > 3 ? "Você não consegue enxergar esta radiação diretamente. Mas ela está lá." : "Deslize até a borda violeta para chegar ao limite do que vemos."}</p></div></div>
    </section>

    <section className="section uv-section">
      <SectionMarker number="04" label="A fonte" />
      <div className="uv-intro"><div><h2>Então... o que é<br /><i>uma luz negra?</i></h2><p>Uma fonte que emite principalmente radiação ultravioleta, especialmente UVA. O violeta que aparece é apenas um vestígio visível da fonte.</p></div><div className="uv-callout"><Lightbulb size={26} /><span>LUZ NEGRA</span><b>principalmente UVA</b></div></div>
      <div className="uv-cards">{[["UVA", "maior comprimento de onda", "baixa energia relativa"], ["UVB", "mais energia que UVA", "associado às queimaduras solares"], ["UVC", "onda mais curta", "fortemente absorvido pela atmosfera"]].map((u, i) => <article key={u[0]} className={i === 0 ? "featured" : ""}><span className="mono">FAIXA 0{i + 1}</span><h3>{u[0]}</h3><p>{u[1]}<br />{u[2]}.</p></article>)}</div>
    </section>

    <section className="section fluorescence-section">
      <div className="fluorescence-image" />
      <SectionMarker number="05" label="O segredo" />
      <div className="fluorescence-content"><div className="evidence-stamp"><img src="/manus-storage/luz-negra-mark_7ecfea1a.png" alt="" /><span className="mono">EVIDÊNCIA 05</span><b>EMISSÃO VISÍVEL</b></div><h2>Por que algumas<br /><i>coisas brilham?</i></h2><p className="quote">“Fluorescência é o fenômeno no qual uma substância absorve radiação e emite parte da energia na forma de luz visível.”</p><div className="flow"><div><span>01</span><b>RADIAÇÃO UV</b></div><ChevronRight /><div><span>02</span><b>MATERIAL</b></div><ChevronRight /><div><span>03</span><b>LUZ VISÍVEL ✦</b></div></div></div>
    </section>

    <section className="section matter-section">
      <SectionMarker number="06" label="Dentro da matéria · placa 06-A" />
      <div className="split-heading"><h2>O que acontece<br /><i>com a matéria?</i></h2><p>Uma representação conceitual, não uma aula universitária: três movimentos simples explicam a passagem da energia.</p></div>
      <div className="matter-grid">{[["01", "Absorção", "A radiação UV fornece energia."], ["02", "Excitação", "Elétrons passam temporariamente para um estado de maior energia."], ["03", "Emissão", "Ao retornar, parte da energia é liberada como luz."]].map((m, i) => <article key={m[0]} className={i === 1 ? "matter-active" : ""}><span className="step-number">{m[0]}</span><div className="atom"><span /><span /><span /></div><h3>{m[1]}</h3><p>{m[2]}</p></article>)}</div>
    </section>

    <section className="section lab-section">
      <SectionMarker number="07" label="Laboratório virtual · bancada 02" />
      <div className="split-heading"><h2>Hora de<br /><i>experimentar.</i></h2><p>Ative a luz UV e observe como a aparência de cada material muda. São respostas conceituais — substitua pelos registros reais da turma quando tiverem as fotos.</p></div>
      <div className={`lab-board ${uv ? "uv-mode" : ""}`}><div className="lab-controls"><span className="mono">ILUMINAÇÃO</span><button className={!uv ? "selected" : ""} onClick={() => setUv(false)}><Sun size={15} /> luz branca</button><button className={uv ? "selected uv-button" : ""} onClick={() => setUv(true)}><Zap size={15} /> luz UV</button></div><div className="objects">{objects.map((o, i) => <button className={object === i ? "chosen" : ""} key={o.name} onClick={() => setObject(i)}><span className="object-icon">{o.icon}</span><b>{o.name}</b><small>{uv ? "toque para analisar" : "aguardando UV"}</small></button>)}</div><div className="lab-result"><span className="mono">LEITURA DO SENSOR</span><h3>{uv ? objects[object].result : "nenhum sinal"}</h3><p>{uv ? objects[object].detail : "Ative a luz ultravioleta para observar uma mudança."}</p></div></div>
    </section>

    <section className="section experiment-section">
      <SectionMarker number="09" label="Nosso experimento real" />
      <div className="split-heading"><h2>O que aconteceu<br /><i>no nosso experimento?</i></h2><p>Esta estação está pronta para receber as observações da escola. Não invente resultados: cole aqui as fotos, materiais e conclusões reais.</p></div>
      <div className="experiment-grid"><article><span className="mono">HIPÓTESE</span><h3>Quais materiais apresentarão fluorescência sob luz UV?</h3><div className="line-fill" /></article><article><span className="mono">PROCEDIMENTO</span><ol><li>Observar sob luz branca.</li><li>Expor à luz UV.</li><li>Registrar as diferenças.</li><li>Comparar os resultados.</li></ol></article><figure className="photo-placeholder experiment-photo"><img src="./assets/experimento-luz-negra.jpg" alt="Tartaruga observada sob luz negra durante o experimento" /><figcaption><span>FOTO REAL · EVIDÊNCIA 09</span><small>Tartaruga observada sob luz negra</small></figcaption></figure></div>
    </section>

    <section className="section results-section"><SectionMarker number="10" label="Resultados · folha de leitura" /><div className="split-heading"><h2>Dados que<br /><i>contam a história.</i></h2><p>A tabela apresenta a comparação entre os materiais observados sob luz branca e luz UV.</p></div><div className="result-table"><div className="table-row table-head"><span>material</span><span>luz branca</span><span>luz UV</span><span>resultado</span></div>{objects.slice(0, 3).map((o, i) => <div className="table-row" key={o.name}><b>{o.name}</b><span>◉</span><span className={i === 0 ? "spark" : ""}>{i === 0 ? "✦" : "◉"}</span><strong>{i === 0 ? "fluorescência" : i === 1 ? "pouca" : "a testar"}</strong></div>)}</div></section>

    <section className="section applications-section"><SectionMarker number="11" label="Fora do laboratório" /><div className="split-heading"><h2>Isso existe<br /><i>fora daqui?</i></h2><p>A fluorescência aparece em segurança, ciência, laboratórios e medicina — sempre como uma forma de visualizar o que seria difícil detectar.</p></div><div className="applications">{[["01", "Segurança", LockKeyhole, "Marcas em cédulas e documentos podem aparecer sob UV."], ["02", "Ciência", FlaskConical, "Técnicas de análise usam fluorescência para localizar sinais."], ["03", "Medicina", Beaker, "Pesquisa e diagnóstico podem usar marcadores fluorescentes."]].map(([n, title, Icon, text], i) => <button className={app === i ? "app-active" : ""} key={title as string} onClick={() => setApp(i)}><span className="mono">{n as string}</span><Icon size={21} /><h3>{title as string}</h3><p>{app === i ? text as string : "clique para abrir a evidência"}</p></button>)}</div></section>

    <section className="section quiz-section"><SectionMarker number="12–13" label="Mito ou verdade" /><div className="quiz-layout"><div><span className="mono">VOCÊ ESTAVA PRESTANDO ATENÇÃO?</span><h2>Uma última<br /><i>verificação.</i></h2><p>Responda cinco perguntas e descubra quantas evidências ficaram acesas.</p><div className="score"><span>{String(quizIndex + 1).padStart(2, "0")} / 05</span><b>{score} acertos</b></div></div><div className="quiz-card"><span className="mono">PERGUNTA {String(quizIndex + 1).padStart(2, "0")}</span><h3>{currentQuiz.q}</h3><div className="quiz-options">{currentQuiz.options.map((o, i) => <button key={o} className={quizAnswer !== null ? (i === currentQuiz.answer ? "correct" : i === quizAnswer ? "wrong" : "") : ""} onClick={() => answerQuiz(i)}>{o}<span>{quizAnswer !== null && i === currentQuiz.answer ? <Check size={16} /> : "→"}</span></button>)}</div>{quizAnswer !== null && <div className="quiz-feedback"><strong>{quizAnswer === currentQuiz.answer ? "✓ leitura correta" : "× leitura incorreta"}</strong><p>{currentQuiz.explain}</p><button onClick={nextQuiz}>{quizIndex === quiz.length - 1 ? "refazer investigação" : "próxima pergunta"} <ArrowRight size={15} /></button></div>}</div></div></section>

    <footer className="footer"><img src="/manus-storage/luz-negra-mark_7ecfea1a.png" alt="" /><div><b>LUZ NEGRA</b><span>A luz que revela o invisível.</span></div><span className="mono">FIM DO ARQUIVO · 13 / 13</span></footer>
  </main>;
}

function CameraFrame() { return <div className="camera-frame"><Eye size={30} /><span>FOTO</span></div>; }

export default Home;
