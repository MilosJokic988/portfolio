import React, { useState, useRef } from 'react';
import Hero from './Hero';
import ProjectCard from './ProjectCard';
import '../styles/DarkPortfolio.css';
import slavicMythologyImg from '../assets/dark/slavic.png';
import dostojevskyImg from '../assets/dark/dostojevsky.png';
import vikingsImg from '../assets/dark/vikings.png';
import witcherImg from '../assets/dark/witcher.png';
import darkTalesImg from '../assets/dark/darktales.png';
import gothicImg from '../assets/dark/gothic.png';
import dreamJournalImg from '../assets/dark/dreamjournal.png';
import okultismImg from '../assets/dark/okultism.png';
import konitermImg from '../assets/dark/koniterm.png';
import backgroundMusic from '../assets1/background.mp3';
import whisperSound from '../assets1/whisper.mp3';

const quotes = [
  "“We all go a little mad sometimes.” – Norman Bates",
  "“The scariest monsters are the ones that lurk within our souls.” – Edgar Allan Poe",
  "“Hell is empty and all the devils are here.” – William Shakespeare",
  "“There is no light without shadow.” – Carl Jung",
  "“Man is the cruelest animal.” – Friedrich Nietzsche",
  "“I dwell in possibility.” – Emily Dickinson",
  "“Obscurity is the realm of the soul.” – Unknown"
];

const projects = [
  {
    title: "Dostojevski: Mind in Shadows",
    image: dostojevskyImg,
    description: "Istraživanje tame ljudske psihe kroz reaktivni sajt inspirisan Dostojevskim.",
    link: "https://dostoyevsky.vercel.app"
  },
  {
    title: "Vikings: Blood & Honor",
    image: vikingsImg,
    description: "Saga o severnjačkoj časti i brutalnosti sa nordijskom paletom.",
    link: "https://viking-nine.vercel.app"
  },
  {
    title: "Witcher: Path of the Wolf",
    image: witcherImg,
    description: "Svet tame, čudovišta i moralne sive zone. Geralt bi bio ponosan.",
    link: "https://witcherr.vercel.app"
  },
  {
    title: "Dark Tales: Whispers in the Fog",
    image: darkTalesImg,
    description: "Zbirka mračnih priča i senovitih atmosfera koje zovu na introspektivno putovanje.",
    link: "https://darktales.vercel.app"
  },
  {
    title: "DreamJournal: Lucid Realms",
    image: dreamJournalImg,
    description: "Interaktivni dnevnik snova gde se fantazija i podsvest susreću u digitalnoj magli.",
    link: "https://dreamjournal-chi.vercel.app"
  },
  {
    title: "Gothic: Echoes of the Past",
    image: gothicImg,
    description: "Estetika propadanja i lepote tame u jedinstvenom spoju arhitekture i osećanja.",
    link: "https://gothic-mu.vercel.app"
  },
  {
    title: "Slavic Mythology: Forgotten Gods",
    image: slavicMythologyImg,
    description: "Digitalno uskrsnuće slovenskih božanstava, simbola i rituala u mračnoj atmosferi.",
    link: "https://slavic.vercel.app"
  },
  {
    title: "Welcome to Underground",
    image: okultismImg,
    description: "Na ovom sajtu sam predstavio pojedinosti u okultizmu i demonologiju",
    link: "https://okultism.vercel.app"
  },
  {
    title: "Koniterm",
    image: konitermImg,
    description: "Na ovom sajtu sam predstavio firmu za masinske instalacije",
    link: "https://koniterm.vercel.app"
  }
];

const DarkPortfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [isMusicStopped, setIsMusicStopped] = useState(false);
  const [randomQuote, setRandomQuote] = useState('');

  const musicRef = useRef(null);
  const whisperRef = useRef(null);

  const handleImageClick = (img) => setSelectedImage(img);
  const closeModal = () => setSelectedImage(null);

  const handlePlayMusic = () => {
    if (musicRef.current && whisperRef.current) {
      whisperRef.current.play();
      setTimeout(() => {
        musicRef.current.volume = 0.2;
        musicRef.current.play();
      }, 6000);
      const quote = quotes[Math.floor(Math.random() * quotes.length)];
      setRandomQuote(quote);
      setIsMusicPlaying(true);
      setIsMusicStopped(false);
    }
  };

  const handleStopMusic = () => {
    if (musicRef.current) {
      musicRef.current.pause();
      musicRef.current.currentTime = 0;
    }
    setIsMusicPlaying(false);
    setIsMusicStopped(true);
  };

  return (
    <>
      {/* Zvukovi */}
      <audio ref={musicRef} src={backgroundMusic} loop />
      <audio ref={whisperRef} src={whisperSound} />

      {/* Start dugme + citat */}
      {!isMusicPlaying && !isMusicStopped && (
        <div className="start-music-overlay">
          <button onClick={handlePlayMusic} className="start-music-button glitch-button">
            Enter the Dark
          </button>
          {randomQuote && (
            <p className="dark-quote fade-in text-light mt-4">
              {randomQuote}
            </p>
          )}
        </div>
      )}

      {/* Stop dugme */}
      {isMusicPlaying && (
        <button className="stop-music-button" onClick={handleStopMusic}>
          ✖ Stop Music
        </button>
      )}

      <Hero />
      <div className="container dark-portfolio py-5">
        <h2 className="text-center text-light mb-4">Dark Portfolio</h2>
        {randomQuote && (
          <p className="text-center text-muted mb-5 fst-italic dark-quote">{randomQuote}</p>
        )}
        <div className="row">
          {projects.map((project, idx) => (
            <div key={idx} className="col-md-4 mb-4">
              <ProjectCard {...project} onImageClick={() => handleImageClick(project.image)} />
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="image-modal" onClick={closeModal}>
          <img src={selectedImage} alt="Preview" />
        </div>
      )}
    </>
  );
};

export default DarkPortfolio;
