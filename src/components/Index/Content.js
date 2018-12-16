import React from 'react'
import styled from 'styled-components'

const Content = styled.div`
  width: 500px;
  font-size: 2em;
  text-align: center;
  border-radius: 0.25em;

  @media (max-width: 450px) {
    width: 80%;
  }
`

export default Content
