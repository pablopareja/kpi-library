import { BusinessQuestion } from '@/types'

interface BusinessQuestionsProps {
  questions: BusinessQuestion[]
  className?: string
}

export const BusinessQuestions = ({ questions, className = '' }: BusinessQuestionsProps) => (
  <div className={`flex flex-col items-start gap-3 w-full ${className}`}>
    <h2 className="text-xl font-bold">Business Questions</h2>
    <div className="flex flex-wrap gap-4 w-full">
      {questions.map(question => (
        <div
          key={`question-${question.title}`}
          className="flex flex-col items-start gap-1 hover:bg-gray-100 rounded p-2 sm:w-[calc(50%-0.5rem)] max-w-80 cursor-pointer"
        >
          <h5 className="text-black line-clamp-1 max-w-4/5 text-left">{question.title}</h5>
          <p className="text-gray-500 text-sm line-clamp-2 text-left">{question.description}</p>
        </div>
      ))}
    </div>
  </div>
)
