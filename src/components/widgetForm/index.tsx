import React, { useState } from "react"
import { CloseButton } from "../closeButton"
import BugIcon from "../../assets/bug.svg"
import IdeiaIcon from "../../assets/ideia.svg"
import ThoughtIcon from "../../assets/thought.svg"
import { FeedbackType } from "./types"
import { FeedbackTypeStep } from "./steps/feedbackTypeStep"
import { FeedbackContentStep } from "./steps/feedbackContentStep"

export const FEEDBACK_TYPES = {
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


export const WidgetForm: React.FC = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

      {!feedbackType ? <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} /> : <FeedbackContentStep feedbackType={feedbackType} />}

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
