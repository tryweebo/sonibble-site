'use client'

import React from 'react'
import { classMerge } from '~/utils/helpers'
import SectionLabel from '~/components/ui/section-label'
import { StrokeLineBackground } from '~/components/common/bg'

interface CardItemProps {
  title: string
  description: string
  className?: string
  position: number
}

function CardItem({
  title,
  description,
  className,
  position,
}: CardItemProps): React.ReactElement {
  return (
    <div
      className={classMerge(
        'flex flex-col col-span-1 laptop:col-span-3 w-full bg-background rounded-3xl p-7 cursor-pointer transition-all duration-700 hover:-translate-y-2 border border-border',
        className,
      )}
    >
      <span className="font-heading font-black text-transparent text-stroke-1 text-6xl">
        {position}
      </span>

      <h4 className="text-3xl font-medium leading-tight font-heading mt-6">
        {title}
      </h4>

      <span className="text-lg font-medium leading-relaxed mt-7 opacity-80">
        {description}
      </span>
    </div>
  )
}

function GridList(): React.ReactElement {
  return (
    <div className="mt-40 grid grid-cols-2 desktop:grid-cols-7 gap-6 laptop:w-9/12">
      <CardItem
        title="Start with branding and building your simple or custom website"
        description="Create a strong branding and logo for your business can make your business professional. We will help you create your own logo with simple but powerful concept. Then move into create your own website, you can choose between custom website or use our premium theme and start gain your customers online. "
        position={1}
        className="laptop:col-span-4 bg-[#D3FFAE]"
      />
      <CardItem
        title="Support with design, tools, strategy & resources"
        description="Now your business is running, you can subscribe to our newsletter, we will give your resources and strategy to run your business. If you need design need, we help you create your future."
        position={2}
        className="bg-[#B0B9FF]"
      />
      <CardItem
        title="Maintain the website, online presence, tracks, & analysis"
        description="Time to maintain, and keep your business running on the best performance. Your online reviews, google business, trackings, & analytics. We ensure everything running well."
        position={3}
        className="bg-[#FFECAE]"
      />
      <CardItem
        title="Grow online, ads, campaign, newsletter, & generate leads"
        description="No enough customers, time to move forward. Start campaign, ads, and building your audience through content, and newsletter. Keep your customers close and get new customers everyday."
        position={4}
        className="laptop:col-span-4 bg-[#FFB0EB]"
      />
    </div>
  )
}

export default function Process(): Readonly<React.ReactElement> {
  return (
    <section className="relative flex justify-center">
      <div className="absolute justify-center">
        <StrokeLineBackground />
      </div>
      <div className="px-5 laptop:px-0 container mx-auto py-36 relative">
        <div className="flex flex-col items-center mx-auto">
          <div className="flex justify-center">
            <SectionLabel>How It Works</SectionLabel>
          </div>
          <h2 className="text-5xl laptop:text-7xl !leading-tight font-medium font-heading desktop:w-9/12 mt-10 text-center">
            We been focus on helping you grow and winning your online presence &
            reputation
          </h2>

          <div className="flex flex-col gap-10 mt-14 items-center">
            <p className="desktop:w-1/2 text-lg font-medium leading-relaxed text-center">
              We help elevating your brand image and website user experience
              through the art of visual and written storytelling, so that you
              can make a better first impression. Then amplify trust through
              lead generation by crafting your unique communications strategy
              that speak to their hearts, so that your audience become invested
              in your brand’s story.
            </p>
          </div>

          <GridList />
        </div>
      </div>
    </section>
  )
}
