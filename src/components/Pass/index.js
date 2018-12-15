import React, {useState, useEffect} from 'react'
import axios from 'axios'
import QRCode from 'qrcode.react'

import Card from './Card'
import Content from './Content'
import Text from './Text'
import Wrapper from './Wrapper'

const api = axios.create({
  baseURL: 'https://actions-on-falcon.herokuapp.com'
})

const Pass = () => {
  const [pass, setPass] = useState({})

  useEffect(() => {
    getCode()
  }, [])

  const getCode = async () => {
    const id = 'nlbvdu'
    const {data: code} = await api.get(`/pass/${id}`)
    if (!code) return

    setPass(code)
  }

  const {name = '', code = '', time = '', phone = ''} = pass

  return (
    <Card>
      <Content>
        <Wrapper>
          <QRCode className="qr" value={code} />
        </Wrapper>
        <Text paddingTop="0.75em" paddingBottom="0">
          {name}
        </Text>
        <Text paddingTop="0.75em" size="0.5em">
          Visitor Pass
        </Text>
      </Content>
    </Card>
  )
}

export default Pass
