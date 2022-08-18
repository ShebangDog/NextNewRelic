import { GetServerSideProps, NextPage } from "next"
import React, { useId } from "react"
import { ErrorThrower } from "../../components/atom/ErrorThrower"
import Script from "next/script"

type ErrorThrowProps = {
  browserTimingScript: string
}
const ErrorThrow: NextPage<ErrorThrowProps> = (props) => {
  const {browserTimingScript} = props
  const id = useId()

  return (
    <React.Fragment>
      <Script id={id} strategy="afterInteractive">
        {browserTimingScript}
      </Script>
      <div>
        <ErrorThrower>
          {"エラーを投げた！"}
        </ErrorThrower>
      </div>
    </React.Fragment>
  )
}

export const getServerSideProps: GetServerSideProps<ErrorThrowProps> = async () => {
  const newrelic = await import("newrelic")
  const browserTimingScript = await newrelic.getBrowserTimingHeader({
    hasToRemoveScriptWrapper: true,
  })

  return {
    props: {
      browserTimingScript,
    }
  }
}

export default ErrorThrow
