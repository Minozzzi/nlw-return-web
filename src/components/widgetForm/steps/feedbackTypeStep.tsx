import { FEEDBACK_TYPES } from ".."
import { CloseButton } from "../../closeButton"
import { FeedbackType } from "../types"

type FeedbackTypeStepProps = {
  onFeedbackTypeChanged: (type: FeedbackType) => void
}

export const FeedbackTypeStep: React.FC<FeedbackTypeStepProps> = ({
  onFeedbackTypeChanged,
}) => {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>

      <main className="flex py-8 gap-2 w-full">
        {Object.entries(FEEDBACK_TYPES).map(([type, { title, image }]) => (
          <button
            key={type}
            type="button"
            onClick={() => onFeedbackTypeChanged(type as FeedbackType)}
            className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
          >
            <img src={image.src} alt={image.alt} />
            <span>{title}</span>
          </button>
        ))}
      </main>
    </>
  )
}
