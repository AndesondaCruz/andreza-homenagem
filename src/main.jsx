import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowUpRight, Heart, Flower2, Music2, Play, Pause, Sparkles, Sun, Menu, X } from 'lucide-react';
import './style.css';

const memories = [
  { number: '01', title: 'O meu primeiro lar', text: 'Antes de conhecer o mundo, eu já conhecia o seu abraço. E, de algum jeito, ele continua sendo o melhor lugar do mundo.', image: '/images/image1.jpeg', alt: 'Uma lembrança especial com mãe' },
  { number: '02', title: 'Amor nos pequenos gestos', text: 'Nos cuidados que às vezes passam despercebidos, nas palavras certas e na presença que faz qualquer dia parecer mais leve.', image: '/images/image2.jpeg', alt: 'Um momento de carinho em família' },
  { number: '03', title: 'Tudo o que levo de você', text: 'Há muito de você no que sou: no que aprendi, na forma como sigo em frente e no amor que levo no coração.', image: '/images/image3.jpeg', alt: 'Uma memória querida juntos' },
];

function PhotoFrame({ src, alt, className = '' }) {
  const [failed, setFailed] = useState(false);
  return failed ? (
    <div className={`photo-placeholder ${className}`}><Flower2 size={28} strokeWidth={1.2} /><span>Uma lembrança de vocês</span><small>Adicione sua foto em <code>public/images</code></small></div>
  ) : <img className={`photo ${className}`} src={src} alt={alt} onError={() => setFailed(true)} />;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [audioUnavailable, setAudioUnavailable] = useState(false);
  const audioRef = React.useRef(null);
  

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) { audio.pause(); setPlaying(false); return; }
    try { await audio.play(); setPlaying(true); setAudioUnavailable(false); }
    catch { setAudioUnavailable(true); setPlaying(false); }
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="topline"><span>FEITO COM AMOR, PARA VOCE</span><span className="topline-heart">✳</span><span>UMA HOMENAGEM À ANDREZA</span></div>
      <header className="nav wrap">
        <a href="#inicio" className="brand" onClick={closeMenu}>a<span>.</span></a>
        <button className="menu-toggle" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <a href="#carta" onClick={closeMenu}>A carta</a><a href="#memorias" onClick={closeMenu}>Nossas memórias</a><a href="#essencia" onClick={closeMenu}>O que fica</a>
          <a className="nav-cta" href="#carta" onClick={closeMenu}>Para você, mãe <Heart size={14} /></a>
        </nav>
      </header>

      <main>
        <section className="hero wrap" id="inicio">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> UM AMOR QUE NÃO CABE EM PALAVRAS</div>
            <h1>Para você,<br /><em>mãe.</em></h1>
            <p className="hero-intro">Mãe, existem amores que são a nossa origem, o nosso abrigo e a parte mais bonita de quem nos tornamos. Este cantinho é só seu.</p>
            <a className="text-link" href="#carta">Entre nessa pequena homenagem <ArrowDown size={16} /></a>
            <div className="hero-signature">com todo o meu amor <span>♡</span></div>
          </div>
          <div className="hero-art">
            <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
            <div className="hero-photo-wrap"><PhotoFrame src="/images/image-principal.jpeg" alt="Foto especial de Andreza" className="hero-photo" /></div>
            <div className="hero-note"><span className="note-star">✳</span><span>meu lugar<br />favorito é<br /><em>perto de você.</em></span></div>
            <div className="vertical-note">AMOR QUE FLORESCE TODOS OS DIAS</div>
            <Flower2 className="hero-flower" strokeWidth={0.8} />
          </div>
          <div className="hero-bottom"><span>UMA CARTA EM FORMA DE SITE</span><span>DESLIZE PARA DESCOBRIR <ArrowDown size={13} /></span></div>
        </section>

        <section className="dedication" id="carta">
          <div className="dedication-inner wrap">
            <div className="section-kicker"><span>01</span><span className="kicker-rule" /> UMA CARTA PARA VOCÊ</div>
            <div className="letter-grid">
              <div className="letter-heading"><p className="script-label">Minha querida</p><h2>Andreza, <em>mãe.</em></h2><div className="little-flower">✳</div></div>
              <div className="letter-body">
                <p className="letter-opening">Se eu pudesse colocar em uma página tudo o que você significa para mim, ainda faltaria espaço.</p>
                <p>Porque o seu amor está nas grandes lembranças, mas também mora nas coisas pequenas: no cuidado, nos conselhos, na preocupação e em tantos gestos que talvez você nem perceba que eu guardo comigo.</p>
                <p>Obrigado por ser parte da minha história de um jeito que ninguém mais poderia ser. Por tudo o que me ensinou, pelo que enfrentou e por cada forma de amor que me trouxe até aqui.</p>
                <p>Nem todos os dias eu consigo dizer tudo isso como deveria. Então fiz este lugar para te lembrar de uma coisa simples e imensa: <strong>você é muito amada.</strong></p>
                <div className="letter-signoff">Com amor, sempre <span>♡</span></div>
              </div>
            </div>
            <div className="letter-bottom-ornament"><span>✳</span><span>ESCRITO COM O CORAÇÃO</span><span>✳</span></div>
          </div>
        </section>

        <section className="memories wrap" id="memorias">
          <div className="section-kicker"><span>02</span><span className="kicker-rule" /> NOSSO PEQUENO UNIVERSO</div>
          <div className="section-heading-row"><div><p className="script-label">Pedaços de nós</p><h2>O tempo passa.<br /><em>O amor fica.</em></h2></div><p className="section-side-copy">Algumas lembranças viram fotografias. Outras viram parte da gente. Estas são páginas de uma história que eu sempre vou ter orgulho de contar.</p></div>
          <div className="memory-grid">{memories.map((item, index) => <article className={`memory-card memory-${index + 1}`} key={item.number}><div className="memory-image-wrap"><PhotoFrame src={item.image} alt={item.alt} /><span className="memory-number">{item.number}</span></div><div className="memory-copy"><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div>
          <p className="photo-tip"><Sparkles size={15} /> Quatro fotografias, quatro pequenos capítulos de uma história que guardo com amor.</p>
        </section>

        <section className="essence" id="essencia">
          <div className="essence-inner wrap">
            <div className="essence-mark"><Sun size={34} strokeWidth={1} /><span>✳</span></div>
            <p className="script-label">Se um dia eu esquecer de dizer...</p>
            <h2>Você é uma das<br />partes mais bonitas<br /><em>da minha vida.</em></h2>
            <p className="essence-sub">E não existe distância, tempo ou mudança capaz de apagar o lugar que você tem no meu coração.</p>
            <div className="essence-flourish">— ♡ —</div>
          </div>
        </section>

        <section className="music-section wrap" id="musica">
          <div className="music-card">
            <div className="music-art"><div className="vinyl"><div className="vinyl-center">a<span>.</span></div></div><Flower2 className="music-flower" strokeWidth={0.8} /></div>
            <div className="music-content"><div className="section-kicker"><span>03</span><span className="kicker-rule" /> UMA TRILHA PARA ESTA LEMBRANÇA</div><p className="script-label">Dê o play no carinho</p><h2>Uma música<br /><em>para você, mãe.</em></h2><p>Uma trilha sonora deixa as lembranças ainda mais perto. Adicione aqui a música que você criar especialmente para Andreza.</p><div className="audio-controls"><button className="play-button" onClick={toggleMusic} aria-label={playing ? 'Pausar música' : 'Tocar música'}>{playing ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" />}</button><div className="audio-info"><strong>Uma canção para Andreza</strong><span>{audioUnavailable ? 'Adicione o arquivo de música indicado no guia do projeto' : 'Música especial · homenagem'}</span></div><Music2 className="audio-icon" size={20} /></div><audio ref={audioRef} src="/audio/musica-para-andreza.mp3" loop onEnded={() => setPlaying(false)} onPause={() => setPlaying(false)} onPlay={() => setPlaying(true)} /></div>
          </div>
        </section>

        <section className="final-note wrap"><div className="final-rule" /><Flower2 size={24} strokeWidth={1} /><p>Para Andreza,</p><h2>meu primeiro lar.<br /><em>meu amor para sempre.</em></h2><span className="final-heart">♡</span><a className="text-link" href="#inicio">Voltar ao começo <ArrowUpRight size={15} /></a></section>
      </main>

      <footer className="footer"><div className="wrap footer-inner"><span>FEITO COM AMOR, PARA ANDREZA</span><span>COM CARINHO, DO SEU FILHO <Heart size={12} fill="currentColor" /></span><span>© UMA HOMENAGEM FEITA À MÃO</span></div></footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
