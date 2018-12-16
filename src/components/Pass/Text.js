import React from 'react'
import styled from 'styled-components'

const Text = styled.div`
  color: #fff;
  width: 100%;
  padding: ${props => props.paddingTop || '1em'} 0
    ${props => props.paddingBottom || '1em'} 0;
  font-size: ${props => props.size || '1em'};
  text-align: center;
  font-family: 'Roboto', sans-serif;
`

export default Text
