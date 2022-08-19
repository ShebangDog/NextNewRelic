import { GetServerSideProps, NextPage } from "next"
import React, { useId } from "react"
import { ErrorThrower } from "../../components/atom/ErrorThrower"
import Script from "next/script"
import { StateMachine } from "../../components/atom/StateMachine"
import * as newrelic from "newrelic"
import { ErrorFetcher } from "../../components/atom/ErrorFetcher"

type ErrorIslandProps = {
  browserTimingScript: string
}
const ErrorIsland: NextPage<ErrorIslandProps> = (props) => {
  const {browserTimingScript} = props
  const id = useId()

  return (
    <React.Fragment>
      <Script id={id} strategy="afterInteractive">
        {browserTimingScript}
      </Script>
      <div>
        <ErrorThrower>
          {"エラーを投げた！2022/08/19"}
        </ErrorThrower>
        <ErrorFetcher>
          {"エラーを探す"}
        </ErrorFetcher>
        <StateMachine <number>
          initialArgument={0}
          unidirectionalFlow={[
            () => 1,
            () => 2,
            () => 4444,
            () => 1,
            () => {throw new Error("StateMachine: Click Error")}
          ]}
          onClick={() => window.newrelic.addPageAction("StateMachine Click")}
        />
      </div>
    </React.Fragment>
  )
}

export const getServerSideProps: GetServerSideProps<ErrorIslandProps> = async () => {
  const browserTimingScript = newrelic.getBrowserTimingHeader({
    hasToRemoveScriptWrapper: true,
  })

  return {
    props: {
      browserTimingScript,
    }
  }
}

export default ErrorIsland
