import { Link } from "react-router"
import { Button } from "./ui/button"

export function Header() {
  return (
    <header className="flex items-center mx-auto justify-between py-10">
      <div className="flex">
        <Link
          to={"/"}
          className="flex justify-center items-center w-10 h-10 rounded-2xl bg-secondary"
        >
          <i className="fi fi-sc-bookmark" />
        </Link>
      </div>

      <div className="flex items-center gap-3">
        <Button
          asChild
          variant={"secondary"}
          className="transition-all duration-300"
        >
          <Link
            to={"https://cal.com/nyomansunima/sonibble-intro-call"}
            target="_blank"
          >
            Book a call
            <i className="fi fi-sc-check-circle" />
          </Link>
        </Button>
      </div>
    </header>
  )
}
