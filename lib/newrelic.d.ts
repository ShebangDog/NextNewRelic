declare module "newrelic" {
  export function getBrowserTimingHeader(params?: {
    nonce?: string
    hasToRemoveScriptWrapper?: boolean
  }): string
}