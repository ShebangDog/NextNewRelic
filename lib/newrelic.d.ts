declare module "newrelic" {
  export function noticeError(error: Error): void
}