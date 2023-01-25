import Image from "next/image";
import data from '../data.json';

function LinkCard({ href, title, image }: {href: string; title: string; image?: string}){
  return (
    //we don't use next Link bc all links are external
    //next Link is for fast client-side page transitions
    //between pages in app.
    <a href={href} className="flex items-center w-full border bg-gray-100 mb-3 p-1 rounded-md hover:scale-105 transition-all max-w-3xl">
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
        <h2 className="flex justify-center items-center font-semibold w-full text-gray-500 -ml-10">{title}</h2>
      </div>
    </a>
  )
};

export default function Home() {
 return (
  <div className="flex flex-col items-center justify-center mx-auto w-full mt-16 px-8">
    <Image
      className="rounded-full"
      alt={data.name}
      src={data.avatar}
      width={96}
      height={96}/>
    <h1 className="font-bold mt-4 mb-8 text-xl text-gray-600">{data.name}</h1>
    {data.links.map((link) => (
      <LinkCard key={link.href} {...link} />
    ))}
  </div>
 )
};
