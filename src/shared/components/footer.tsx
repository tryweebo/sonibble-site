import type * as React from "react";

export function Footer(): React.ReactElement {
  return (
    <footer className="flex flex-col" id="footer">
      <div className="mt-8 flex flex-row tablet:items-center justify-between py-7">
        <span className="inline-flex cursor-pointer gap-2 text-sm">
          Build with <i className="fi fi-sc-heart" />
        </span>
        <span className="inline-flex cursor-pointer text-sm">
          Design in Bali
        </span>
      </div>
    </footer>
  );
}
