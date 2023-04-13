import React from 'react'
import styled from 'styled-components'

const StyledSlide = styled.div`
  width: 100%;
`

export default function Slide({ children, id, className }) {
  return (
    <StyledSlide id={id} className={`overflow-hidden ${className}`}>
      <div className="mx-auto flex min-h-screen max-w-screen-xl items-center justify-center">{children}</div>
    </StyledSlide>
  )
}
