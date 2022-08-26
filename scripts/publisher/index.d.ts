type ActionKindList = ["overwrite", "publish", "remove"]
type ActionKind = ActionKindList[number]

type Url = `${string}/${string}`

type Config = {
  sourcemapPath: `${Url}.js.map`, // from a local file
  javascriptUrl: `${Url}.js`,
  applicationId: number,
  apiKey: string,
}

type FetchOption = Config & { limit: number, offset: number }
type DeleteOption = Omit<Config, "javascriptUrl" | "sourcemapPath"> & { sourcemapId: string }

type Sourcemap = {
  id: string,
  javascriptUrl: Url,
  releaseName: string | null,
  releaseId: string | null,
  buildCommit: string | null,
  repoUrl: string | null,
  createdAt: string
}

type Reaction = (config: Config, onFinished: (message: String) => void) => void
