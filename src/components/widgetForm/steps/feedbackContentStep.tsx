import { useMemo, useState } from "react"
import { FEEDBACK_TYPES } from ".."
import { CloseButton } from "../../closeButton"
import { FeedbackType } from "../types"

type FeedbackContentStepProps = {
  feedbackType: FeedbackType
}

export const FeedbackContentStep: React.FC<FeedbackContentStepProps> = ({
  feedbackType,
}) => {
  const feedbackTypeInfo = FEEDBACK_TYPES[feedbackType]

  return (
    <>
      <header>
        <span className="text-xl leading-6 flex items-center gap-2">
          <img
            src={feedbackTypeInfo.image.src}
            alt={feedbackTypeInfo.image.alt}
            className="w-6 h-6"
          />
          {feedbackTypeInfo.title}
        </span>
        <CloseButton />
      </header>

      <main className="flex py-8 gap-2 w-full"></main>
    </>
  )
}
