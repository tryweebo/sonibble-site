import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="mx-auto flex items-center justify-between py-10">
      <div className="flex">
        <a
          className="flex h-10 w-10 items-center justify-center rounded-2xl bg-secondary"
          href={"/"}
        >
          <i className="fi fi-sc-bookmark" />
        </a>
      </div>

      <div className="flex items-center gap-3">
        <Button
          asChild
          className="transition-all duration-300"
          variant={"secondary"}
        >
          <a
            href={"https://cal.com/nyomansunima/sonibble-intro-call"}
            rel="noopener"
            target="_blank"
          >
            Book a call
            <i className="fi fi-sc-check-circle" />
          </a>
        </Button>
      </div>
    </header>
  );
}
