import React from "react"
import { CloseButton } from "./closeButton"

const FEEDBACK_TYPES = {
  
}

export const WidgetForm: React.FC = () => {
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>

      <main className="flex py-8 gap-2 w-full">

      </main>

      <footer className="text-xs text-neutral-400">
        Feito por{" "}
        <a
          className="underline underline-offset-2"
          href="https://github.com/minozzzi"
        >
          Guilherme Minozzi
        </a>
      </footer>
    </div>
  )
}
