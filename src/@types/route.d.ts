import { LazyExoticComponent } from "react"

export type Route = {
  key: string
  name: string
  path: string
  element: LazyExoticComponent<<T>(props: T) => JSX.Element>
}

export type Routes = Route[]