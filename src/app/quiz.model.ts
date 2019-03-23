export interface Quiz{
  id: number;
  Question:string;
  Options: [QuizOptions];
  CorrectAnswer: string
}
interface QuizOptions{
  id: string; 
  value: string;
}