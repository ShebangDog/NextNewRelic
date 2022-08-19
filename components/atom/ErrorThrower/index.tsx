import { FC, PropsWithChildren } from "react"

export const ErrorThrower: FC<PropsWithChildren> = (props) => {
  const {children} = props
  const handleClick = () => {
    window.newrelic.addPageAction('Click ErrorThrower')

    throw new Error(`ErrorThrower: ${children}`)
  }

  return (
    <button onClick={handleClick}>
      {children}
    </button>
  )
}
