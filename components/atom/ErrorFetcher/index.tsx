import { FC, PropsWithChildren } from "react"
import axios from "axios"

export const ErrorFetcher: FC<PropsWithChildren> = (props) => {
  const {children} = props
  const handleClick = async () => {
    window.newrelic.addPageAction("click ErrorFetcher")

    await axios.create().get("https://picsum.photos/200/300")

    throw new Error("ErrorFetcher: エラーを探したぞー")
  }

  return (
    <div>
      <button onClick={handleClick}>{`${children}`}</button>
    </div>
  )
}
