import { ReactNode } from "react";
export interface communities {
  image: ReactNode;
  name: string;
  message?: string;
}
export interface friends {
  
 fromUserId:string
  toUserId:string;
  _id:string
}
