import React, { useState } from 'react';
import Hero from './Hero';
import ProjectCard from './ProjectCard';
import '../styles/DarkPortfolio.css';
import slavicMythologyImg from '../assets/dark/slavic.png'; // ili odgovarajuća putanja
import dostojevskyImg from '../assets/dark/dostojevsky.png';
import vikingsImg from '../assets/dark/vikings.png';
import witcherImg from '../assets/dark/witcher.png';
import darkTalesImg from '../assets/dark/darktales.png';
import gothicImg from '../assets/dark/gothic.png';
import dreamJournalImg from '../assets/dark/dreamjournal.png';

const projects = [
  {
    title: "Dostojevski: Mind in Shadows",
    image: dostojevskyImg,
    description: "Istraživanje tame ljudske psihe kroz reaktivni sajt inspirisan Dostojevskim.",
    link:  "https://dostoyevsky.vercel.app"
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
    image: slavicMythologyImg, // Uvezi ili dodaj odgovarajuću sliku
    description: "Digitalno uskrsnuće slovenskih božanstava, simbola i rituala u mračnoj atmosferi.",
    link: "https://slavic.vercel.app" // zameni stvarnim linkom ako je različit
  }
];

const DarkPortfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (img) => {
    setSelectedImage(img);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Hero />
      <div className="container dark-portfolio py-5">
        <h2 className="text-center text-light mb-5">Dark Portfolio</h2>
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
