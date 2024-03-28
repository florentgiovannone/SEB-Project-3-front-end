import { IUser } from "./user"
import { ReactNode } from "react";

export interface IWines {
  _id: string,
  winery: string,
  wineName: string,
  region: string,
  country: string,
  style: string,
  grapes: string,
  vintage: number,
  image: string,
  user: IUser,
  children?: ReactNode
}