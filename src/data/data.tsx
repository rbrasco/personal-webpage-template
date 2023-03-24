import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Elena\'s React Portfolio',
  description: "React portfolio",
  uri: 'https://esanchez26.github.io/personal-webpage-template',
  path: 'personal-webpage-template',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: 'Elena Sánchez Julià',
  title: (str: string) => `I'm ${str}`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Barcelona based <strong className="text-stone-100">Mathematician</strong>, currently working as <strong className="text-stone-100">Data Analyst and Data Engineer</strong> 
        at <strong className="text-stone-100">Amazon Fulfillment S.L</strong> helping reduce carbon emissions by optimizing network topology, analyzing operational risk and managin Inbound processes.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, you can find me at the <strong className="text-stone-100">gym</strong>, strolling around <strong className="text-stone-100">Barcelona</strong>, or reading a book at the <strong className="text-stone-100">beach</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: `/${homePageMeta.path}/cv_example.pdf`,
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Use this bio section as your way of describing yourself and saying what you do, what technologies you like
  to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing
  in.`,
  aboutItems: [
    {label: 'Location', text: 'Barcelona, ES', Icon: MapIcon},
    {label: 'Age', text: '24', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Spanish', Icon: FlagIcon},
    {label: 'Interests', text: 'Basketball, Music, Books', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Barcelona', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Amazon Fulfillment Spain Ltd', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Spanish',
        level: 10,
      },
      {
        name: 'Catalan',
        level: 10,
      },
      {
        name: 'English',
        level: 8,
      },
    ],
  },
  {
    name: 'Sotware Development',
    skills: [
      {
        name: 'Python',
        level: 8,
      },
      {
        name: 'C, C++, C#',
        level: 6,
      },
      {
        name: 'Java',
        level: 4,
      },
            {
        name: 'MongoDB, SQL, SparkSQL',
        level: 9,
      },
    ],
  },
  {
    name: 'Data Engineering and Visualization Tools',
    skills: [
      {
        name: 'AWS Glue',
        level: 8
      },
      {
        name: 'Quicksight, PowerBI',
        level: 9,
      },
      {
        name: 'Matlab',
        level: 8,
      },
      {
        name: 'Latex, Office',
        level: 10,
      },
    ],
  },
];

/**
 * Portfolio section

export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
 */
export const education: TimelineItem[] = [
  {
    date: 'December 2022',
    location: 'University of Barcelona',
    title: 'Mathematics Degree',
    content: <p>During the Mathematics degree I expanded my knowledge mainly in the following areas:</p>
       <ul>
       <li>Studied algebra, which includes the study of algebraic structures such as groups, rings, and fields</li>
       <li>Learned about logic</li>
       <li>Covered the topology of curves and surfaces, which involves studying the properties of shapes and surfaces in three-dimensional space</li>
       <li>Explored the geometry of Euclidean and non-Euclidean fields, which includes the study of the properties of space and distance</li>
       <li>Studied numerical computation, which involves the use of numerical methods and algorithms to solve mathematical problems</li>
       <li>Covered differential equations, which involves the study of equations that relate rates of change to other variables</li>
       <li>Learned about physics, which involves the study of the fundamental laws of nature, including mechanics, electromagnetism, and thermodynamics.</li>
        </ul>
,
  },

];

export const experience: TimelineItem[] = [
  {
    date: 'December 2021 - Present',
    location: 'Amazon Fulfillment Spain',
    title: 'Business Intelligence Analyst',
    content: (
        <ul>
          <li>Developed automated tools for real-time metrics reporting, allowing stakeholders to monitor performance and identify areas for improvement in a timely manner</li>
          <li>Managing the sustainability project for VendorFlex, which aims to reduce CO2 emissions by optimizing the network topology.</li>
          <li>Working on metrics and workstreams to optimize inbound processes by reducing the time required for receiving and processing inventory while maintaining quality and accuracy.</li>
          <li>Conducting data analysis to identify key trends and opportunities for process improvement, and developing actionable insights that inform decision-making at all levels of the organization.</li>
          <li>Collaborating with cross-functional teams to implement process improvements and drive operational excellence, ensuring that changes were sustainable and aligned with business objectives.</li>
        </ul>
    ),
  },
  {
    date: 'February 2021 - December 2021',
    location: 'Shalion Data Services',
    title: 'Business Intelligence Analyst',
    content: (
       <ul>
       <li>Designed and managed the BI architecture for a large retail company, ensuring that data was collected, analyzed, and reported in a way that was accurate, reliable, and timely.</li>
       <li>Provided daily reports to customers that included key insights, trends, and performance metrics, helping them make data-driven decisions that improved business outcomes.</li>
       <li>Developed process automation tools for the operations team, streamlining key workflows and reducing the time and effort required to complete routine tasks.</li>
      </ul>
    ),
  },
        {
    date: 'February 2021 - December 2021',
    location: 'Inetum (GFI Group)',
    title: 'Project Manager and Data Analysis Internship',
    content: (
      <p>Worked on project management and functional design of applications for the Barcelona City Council and La Generalitat, two important public institutions in Catalonia, Spain.</p>
       <ul>
       <li>Contributed to the development of several applications, including GPA, SPICA, and AJG, which are likely to have a significant impact on the daily lives of citizens in Barcelona.</li>
       <li>Collaborated with cross-functional teams to ensure that these applications met the specific needs and requirements of the end-users, while adhering to industry standards and best practices.</li>
       <li>Conducted user research to gain insights into user needs and preferences, and used this information to inform the design and development of these applications.</li>
       <li>Developed project plans, timelines, and budgets, and ensured that projects were completed on time and within budget.</li>
       <li>Conducted regular project status meetings with stakeholders to ensure that they were kept up-to-date on project progress and any issues that arose.</li>
       <li>Coordinated with developers, testers, and other team members to ensure that applications were developed and tested according to established quality standards.</li>
       <li>Conducted user testing to ensure that applications were easy to use and met the needs of end-users.</li>
        <li>Participated in the deployment and maintenance of these applications, ensuring that they continued to function effectively and meet the needs of end-users over time.</li>
      </ul>
    ),
  },
];

/**
 * Testimonial section

export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};
 */
/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'elen2698@gmail.com',
      href: 'mailto:elen2698@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Barcelona, Spain',
      href: 'https://www.google.com/maps/place/Barcelona,+Espa%C3%B1a/@41.3927755,2.0701496'
    },
    {
      type: ContactType.Github,
      text: 'esanchez26',
      href: 'https://github.com/esanchez26',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/esanchez26'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/e-sanchezjulia'},
];
