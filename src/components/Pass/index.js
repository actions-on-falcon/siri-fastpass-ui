import React from 'react'
import QRCode from 'qrcode.react'

import Card from './Card'
import Content from './Content'
import Text from './Text'
import Wrapper from './Wrapper'

const Pass = () => {
  return (
    <Card>
      <Content>
        <Wrapper>
          <QRCode className="qr" value="http://facebook.github.io/react/" />
        </Wrapper>
        <Text>Visitor Pass</Text>
      </Content>
    </Card>
  )
}

export default Pass
