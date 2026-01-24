import { cn } from '../../../lib/cn';

interface HeroQuestionsProps {
  questions: string[];
  className?: string;
}

export function HeroQuestions({ questions, className }: HeroQuestionsProps) {
  return (
    <div className={cn('flex flex-col items-center gap-2', className)}>
      {questions.map((question, index) => (
        <p key={index} className="text-center text-base text-gray-700">
          {question}
        </p>
      ))}
    </div>
  );
}
