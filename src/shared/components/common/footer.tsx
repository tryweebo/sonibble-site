import * as React from 'react'

export function Footer(): React.ReactElement {
  return (
    <footer className="flex flex-col" id="footer">
      <div className="flex flex-row tablet:items-center py-7 justify-between mt-8">
        <span className="text-sm cursor-pointer">&copy; Sonibble.</span>
        <span className="text-sm cursor-pointer">Design in Bali.</span>
      </div>
    </footer>
  )
}
