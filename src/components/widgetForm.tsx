import React, { useState } from "react"
import { CloseButton } from "./closeButton"
import BugIcon from "../assets/bug.svg"
import IdeiaIcon from "../assets/ideia.svg"
import ThoughtIcon from "../assets/thought.svg"

const FEEDBACK_TYPES = {
  bug: {
    title: "Problema",
    image: {
      src: BugIcon,
      alt: "Imagem de um inseto",
    },
  },
  ideia: {
    title: "Ideia",
    image: {
      src: IdeiaIcon,
      alt: "Imagem de uma lâmpada",
    },
  },
  other: {
    title: "Outro",
    image: {
      src: ThoughtIcon,
      alt: "Imagem de um balão de pensamento",
    },
  },
}

type FeedbackType = keyof typeof FEEDBACK_TYPES

export const WidgetForm: React.FC = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>

      <main className="flex py-8 gap-2 w-full">
        {Object.entries(FEEDBACK_TYPES).map(([type, { title, image }]) => (
          <button
            key={type}
            type="button"
            onClick={() => setFeedbackType(type as FeedbackType)}
            className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
          >
            <img src={image.src} alt={image.alt} />
            <span>{title}</span>
          </button>
        ))}
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
