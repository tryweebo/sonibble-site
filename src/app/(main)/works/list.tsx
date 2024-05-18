'use client'

import WorkItemCard from './item-card'

export default function List() {
  return (
    <section className="">
      <div className="container mx-auto pb-36">
        <div className="grid grid-cols-9 gap-x-6 gap-y-28">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <WorkItemCard key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
