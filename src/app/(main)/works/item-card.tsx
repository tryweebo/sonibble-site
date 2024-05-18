import Image from 'next/image'

function TypeLabel({ children }) {
  return (
    <span className="flex items-center justify-center text-sm font-semibold px-5 py-3 rounded-full border border-border bg-secondary">
      {children}
    </span>
  )
}

export default function WorkItemCard() {
  return (
    <div className="flex flex-col col-span-3 group cursor-pointer transition-all duration-700 hover:-translate-y-2">
      <picture className="flex relative overflow-hidden rounded-2xl h-[460px]">
        {/* images */}
        <Image
          src={
            'https://cdn.dribbble.com/userupload/14442235/file/original-58c70095fc8aef44280eccaca32ac84b.jpg'
          }
          alt="Image"
          fill
          objectFit="cover"
          className="transition-all duration-1000 group-hover:scale-105"
        />

        {/* tags */}
        <div className="flex flex-wrap gap-3 absolute inset-x-5 bottom-5">
          <TypeLabel>Show Case</TypeLabel>
          <TypeLabel>Case Study</TypeLabel>
        </div>
      </picture>

      <h4 className="text-3xl font-heading font-medium !leading-tight mt-6">
        Out spehere
      </h4>

      <span className="text-lg mt-5 font-medium opacity-70">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, sit.
      </span>

      <div className="flex flex-wrap gap-3 mt-10 font-medium">
        Branding, Design, Website, Ads
      </div>
    </div>
  )
}
