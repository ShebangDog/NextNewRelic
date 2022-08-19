import { useState } from "react"

type StateMachineProps<T> = {
  initialArgument: T
  unidirectionalFlow: ((argument: T) => T)[]
  flowIndex?: number
  onClick: () => void
}

export const StateMachine = <T,>(props: StateMachineProps<T>) => {
  const {unidirectionalFlow, initialArgument, flowIndex = 0, onClick = () => {}} = props

  const [index, setIndex] = useState(flowIndex)
  const [argument, setArgument] = useState(initialArgument)

  const flow = unidirectionalFlow[index]
  const length = unidirectionalFlow.length
  const value = flow(argument)

  const handleClick = () => {
    onClick()
    setArgument(value)
    setIndex(prev => {
      const next = prev + 1
      return next === length ? prev : next
    })
  }

  return (
    <div>
      <h3>{`${value}`}</h3>
      <button onClick={handleClick}>
        next state
      </button>
    </div>
  )
}
