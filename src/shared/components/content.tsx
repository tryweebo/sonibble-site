import * as React from "react"
import { mergeClass } from "@shared/libs"

interface ArticleContentProps {
  children: React.ReactNode
  className?: string
}

export function ArticleContent({
  children,
  className,
}: ArticleContentProps): React.ReactElement {
  return (
    <article
      className={`${mergeClass("prose max-w-none overflow-hidden", className)}`}
    >
      {children}
    </article>
  )
}

interface ContentImageProps {
  src: string
  alt: string
  height?: number
  width?: number
  className?: string
}

export function ContentImage({
  src,
  alt,
  className,
}: ContentImageProps): React.ReactElement {
  return (
    <div
      className={`${mergeClass(
        "flex rounded-2xl p-1 border border-border bg-surface cursor-pointer my-4",
        className,
      )}`}
    >
      <div className="relative w-full h-[200px] tablet:h-[400px] overflow-hidden rounded-xl not-prose">
        <img
          src={src}
          alt={alt}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-all duration-300 hover:scale-105 not-prose"
        />
      </div>
    </div>
  )
}
