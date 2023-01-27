'use client';

import Image from "next/image";
import data from '../data.json';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import Cursor from './components/Cursor';

function LinkCard({ href, title, image }: {href: string; title: string; image?: string}){
  return (
    //we don't use next Link bc all links are external
    //next Link is for fast client-side page transitions
    //between pages in app.
    <a href={href} target='_blank' className="flex items-center w-full mb-3 p-1 rounded-md hover:scale-105 transition-all max-w-3xl">
      <div className="flex text-center w-full">
        <div className="w-10 h-10">
          {image && (
            <Image
            className="rounded-sm"
            alt={title}
            src={image}
            width={40}
            height={40}/>
          )}
        </div>
        <h2 className="flex justify-center items-center font-normal w-full text-indigo-900 hover:text-indigo-300 -ml-10 text-4xl underline">{title}</h2>
      </div>
    </a>
  )
};

export default function Home() {
 return (
  <main>
    <Cursor/>
    <div className="flex flex-col items-center justify-center mx-auto w-full mt-6 px-8">
    <Image
      className="rounded-full opacity-90 w-[50%] p-0"
      alt={data.name}
      src={data.avatar}
      width={200}
      height={200}/>
    <h1 className="font-bold mt-4 mb-8 text-8xl text-gray-600">{data.name}</h1>
    <p className="font-normal mb-8 text-gray-100 text-4xl text-center max-w-3xl">{data.description}</p>
    {data.links.map((link) => (
      <LinkCard key={link.href} {...link} />
    ))}
    <div className="flex items-center gap-4 mt-8">
      {data.socials.map((social) => {
        if(social.title.toLowerCase().includes('twitter')) {
          return <a href={social.href} className="hover:scale-105">
            <TwitterIcon className="fill-gray-300"/>
          </a>
        }
        if(social.title.toLowerCase().includes('github')) {
          return <a href={social.href} className="hover:scale-105">
            <GitHubIcon className="fill-gray-300"/>
          </a>
        }
        if(social.title.toLowerCase().includes('website')) {
          return <a href={social.href} className="hover:scale-105">
            <LanguageIcon className="fill-gray-300"/>
          </a>
        }
        }
      )}
    </div>
  </div>
  </main>
 )
};
