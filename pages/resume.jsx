import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Temidayo | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Temidayo Adebayo</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/adebayotemidayo/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/dayordev'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              <span className='px-1'></span> Web Development{' '}
              <span className='px-1'>|</span> Complex Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Analytical, innovative, and motivated web developer
          with experience in customer service and
          organizational effectiveness in fast-paced and challenging
          environments. Adapt at developing strategies. Diverse analytical skills, team collaboration, and relationship building. Having solid interpersonal abilities and complex problem-solving skills. Effective critical thinking, idea generation, and optimizing efficiencies.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Front-End Web Developer
            <span className='px-2'>|</span> HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>FIGMA
            <span className='px-2'>|</span>Styled components
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span> Firebase
            <span className='px-2'>|</span> API
          </p>
          <p className='py-2'>
            <span className='font-bold'>Graphics</span>
            <span className='px-2'>|</span>
            Animations | Video Ads 
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            FRONT END WEB DEVELOPER (Intern)
            </span>
            <span className='px-2'>|</span>WebProx Technologies
          </p>
          <p className='py-1 italic'>Front End Web Developer & Web Designer (2021 - 2022)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Ensured comprehensive mobile responsive UI layouts with
              understanding of HTML, CSS, and JavaScript.
            </li>
            <li>
              Ensured websites are accessible across many platforms, including laptops and smartphones
            </li>
            <li>
              Worked directly with a diverse client base to understand and
              implement multiple technologies and programs.
            </li>
            <li>
              Implemented web performance optimization and ensured web pages conformed to accessibility standards.
            </li>
            <li>
              And more
            </li>
          </ul>
        </div>

        {/*  */}
        <h5 className='text-center underline text-[18px] py-4'>
          Other Professional Experience
        </h5>
      
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>BUSINESS OFFICER</span>
            <span className='px-2'>|</span>DFAB Multiglobal Services
          </p>
          <p className='py-1 italic'>Business Officer / Direct Sales Executive (2019 – 2020)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Acted as a contact between a company and its existing and potential markets.
            </li>
            <li>
              Maintained and developed relationships with existing customers in person and via telephone calls and emails.
            </li>
            <li>
              Made accurate, rapid cost calculations and providing customers with quotations.
            </li>
            <li>
              Presented print products favourably and in a structured professional way face-to-face.
            </li>
            
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
