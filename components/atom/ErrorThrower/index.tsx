import { FC, PropsWithChildren } from "react"

export const ErrorThrower: FC<PropsWithChildren> = (props) => {
  const {children} = props
  const handleClick = () => {
    window.newrelic.addToTrace({
      name: "addToTrace: ErrorThrower",
      start: Date.now()
    })

    throw new Error(`ErrorThrower: ${children}`)
  }

  return (
    <button onClick={handleClick}>
      {children}
    </button>
  )
}
