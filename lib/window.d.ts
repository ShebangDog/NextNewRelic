declare module "window" {
  global {
    export interface Window {
      newrelic: {
        noticeError: (error: Error) => void
      }
    }
  }
}