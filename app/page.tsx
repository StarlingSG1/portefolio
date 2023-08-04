"use client"; // This is a client component 👈🏽
import { useRef, useState } from 'react';
import { Sidebar } from './components/organisms/Sidebar/index'
import Projects from './components/organisms/Projects';
import Experiences from './components/organisms/Experiences';
import Stack from './components/organisms/Stack';
import Separator from './components/atoms/Separator';
import { Header } from './components/organisms/Header';
export default function Home() {

  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const [tab, setTab] = useState(0)

  const handleTabClick = (index: number) => {
    setTab(index);
    // Get the position of the section and scroll to it with a 64px offset from the top
    const sectionPosition = sectionRefs && sectionRefs[index]?.current?.offsetTop - 64;
    window.scrollTo({ top: sectionPosition, behavior: 'smooth' });
  };

  return (
    <main className='flex flex-col'>
      <Header tab={tab} handleTabClick={handleTabClick} />
      <section className='w-full m-auto flex justify-center'>
        <div className='w-full max-w-[1216px] xl:px-0 px-4 flex flex-col md:flex-row gap-5'>
          <Sidebar />
          <div className='grid grid-cols-1 '>
            <div ref={sectionRefs[0]} id="presentation" className='w-full border p-6 border-gray-border rounded-md'>
              <p className='text-sm'>
                Jérémie Barrière <span className='text-gray-light'>/</span> portfolio<span className='text-gray-light'>.md</span>
              </p>
              <p className='text-4xl mt-4 uppercase font-semibold'>Bienvenue sur <span className='text-orange'>mon portfolio</span></p>
              <Separator />
              <p className='mt-4 mb-16 '>Je suis Jérémie, étudiant en Master Dev Manager FullStack à l'EFREI, tout en travaillant en alternance chez SNCF Réseau. Passionné par le développement web depuis mes années de lycée, j'ai décidé de me spécialiser dans ce domaine pour mes études supérieures. Mon parcours a commencé par un BTS SIO option SLAM, suivi d'un Bachelor Ingénierie du Web en alternance, qui m'a permis de développer mes compétences à la fois en développement web front-end et back-end. Outre la programmation, j'accorde une grande importance au web design, car je crois que l'expérience utilisateur est primordiale pour les sites que je réalise. Mon objectif est de continuer à grandir en tant que développeur Full Stack et de créer des solutions numériques innovantes et conviviales pour les utilisateurs.</p>
              <Stack />
            </div>
            <Experiences sectionRef={sectionRefs[1]} />
            <Projects sectionRef={sectionRefs[2]} />
          </div>
        </div>
      </section>
      <footer className='h-20 mt-10 bg-black w-full flex justify-center items-center'>
        <p>Copyright © 2023 Jérémie BARRIÈRE</p>
      </footer>
    </main>
  )
}