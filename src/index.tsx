import { ParentComponent } from 'solid-js'

const TRPCProvider: ParentComponent = props => {
  return (
    <>
     {props.children}
    </>
  )
}

export { TRPCProvider }
