declare module "window" {
  import { Attributes } from "./types"
  global {
    export interface Window {
      newrelic: {
        noticeError: (error: Error) => void
        addPageAction: (name: string, attributes?: Attributes) => void
      }
    }
  }
}