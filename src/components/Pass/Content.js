import React from 'react'
import styled from 'styled-components'

const Content = styled.div`
  background-color: #2666d1;
  width: 500px;
  font-size: 2em;
  text-align: center;
  border-radius: 0.25em;
  box-shadow: 10px 10px 45px -10px rgba(0, 0, 0, 0.45);

  @media (max-width: 450px) {
    width: 80%;
  }
`

export default Content
