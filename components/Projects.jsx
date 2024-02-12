import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import GalaxyTravel from '../public/assets/projects/GalaxyTravel.jpg';
import VatelGroup from '../public/assets/projects/VatelGroup.jpg'
import NewsExplorer from '../public/assets/projects/NewsExplorer.jpg'
import UltraWeb from '../public/assets/projects/UltraWeb.jpg'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-6 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='NewsExplorer'
            backgroundImg={NewsExplorer}
            projectUrl='/NewsExplorer'
            tech='React JS'
          />
          <ProjectItem
            title='VatelGroup'
            backgroundImg={VatelGroup}
            projectUrl='/VatelGroup'
            tech='HTML CSS JavaScript'

          />
          <ProjectItem
            title='GalaxyTravel'
            backgroundImg={GalaxyTravel}
            projectUrl='/GalaxyTravel'
            tech='React JS'

          />
          <ProjectItem
            title='UltraWeb'
            backgroundImg={UltraWeb}
            projectUrl='/UltraWeb'
            tech='React JS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
