import React from 'react'
import styled from 'styled-components'

import Content from './Content'
import Text from './Text'
import Image from './Image'
import Button from './Button'

import logo from '../../images/icon.png'

const LargeButton = styled(Button)`
  margin: 1.8em 0.5em;
  font-size: 0.6em;
`

const Backdrop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;

  min-height: 100vh;
  background: linear-gradient(to bottom right, #4f00bc, #29abe2);
`

const Pass = () => {
  return (
    <Backdrop>
      <Content>
        <Image src={logo} />
        <Text size="0.75em" paddingTop="0.15em">
          Welcome to Siri FastPass
        </Text>
        <LargeButton href="/verify" info>
          Verify Code
        </LargeButton>
      </Content>
    </Backdrop>
  )
}

export default Pass
