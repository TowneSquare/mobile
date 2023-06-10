import { ReactNode } from 'react';
export interface communities {
  image: ReactNode;
  name: string;
  message?: string;
}
export interface friends {
  image: ReactNode;
  name: string;
  username: string;
}
