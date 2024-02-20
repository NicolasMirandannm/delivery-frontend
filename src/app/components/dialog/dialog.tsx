import { ReactNode } from 'react';
import './style.css'

export function Dialog({ open, children }: { open: boolean, children?: ReactNode }) {
  console.log(open)
  return (
    <>
      { open &&
        <div className={ 'overlay' }>
          { children }
        </div> }
    </>
  )
}