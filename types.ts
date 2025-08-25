
export enum FormStatus {
  Idle = 'idle',
  Loading = 'loading',
  Generating = 'generating',
  Success = 'success',
  Error = 'error',
}

export interface HustleIdea {
  title: string;
  description: string;
  steps: string[];
}
