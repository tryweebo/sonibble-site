import * as React from "react"

export function Footer(): React.ReactElement {
  return (
    <footer className="flex flex-col" id="footer">
      <div className="flex flex-row tablet:items-center py-7 justify-between mt-8">
        <span className="text-sm cursor-pointer inline-flex gap-2">
          Build with <i className="fi fi-sc-heart" />
        </span>
        <span className="text-sm cursor-pointer inline-flex">
          Design in Bali
        </span>
      </div>
    </footer>
  )
}
