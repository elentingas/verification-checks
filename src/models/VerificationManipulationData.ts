export type Answer = "Yes" | "No" | null;

export interface VerificationManipulationData {
  id: string;
  priority: number;
  description: string;
  answer: Answer;
  isCheckAllowed: boolean;
}
