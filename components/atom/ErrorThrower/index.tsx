import { FC, PropsWithChildren } from "react"

export const ErrorThrower: FC<PropsWithChildren> = (props) => {
  const {children} = props
  const handleClick = () => {
    throw new Error(`エラーメッセージ: ${children}`)
  }

  return (
    <button onClick={handleClick}>
      {children}
    </button>
  )
}
