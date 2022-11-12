import React from 'react'

export default function WithLayout({
    component:Component,
    layOut:LayOut,
    ...rest
}) {
  return (
    <div>
      <Component data={rest.data} {...rest}/>
    </div>
  )
}
