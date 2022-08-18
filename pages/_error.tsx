import { NextPage } from "next"

export type MyErrorProps = {
  statusCode: number
}

const MyError: NextPage<MyErrorProps> = (props) => {
  const {statusCode} = props

  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : "An error occurred on client"}
    </p>
  );
}

const getInitialProps: typeof MyError["getInitialProps"] = (context) => {
  const {res, err} = context
  const error: Error = err ?? new Error("unknown error")

  const newrelic = typeof window === "undefined"
    ? require("newrelic")
    : window.newrelic

  newrelic.noticeError(error)

  const statusCode = res ? res.statusCode : err ? err.statusCode ?? 404 : 404;
  return { statusCode };
};

MyError.getInitialProps = getInitialProps;

export default MyError;