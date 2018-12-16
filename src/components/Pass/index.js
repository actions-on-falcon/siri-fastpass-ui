import React, {useState, useEffect} from 'react'
import axios from 'axios'
import QRCode from 'qrcode.react'
import styled from 'styled-components'

import Content from './Content'
import Text from './Text'
import Wrapper from './Wrapper'

const api = axios.create({
  baseURL: 'https://actions-on-falcon.herokuapp.com'
})

function getParams(name) {
  if (typeof window === 'undefined') return

  const qs = new URLSearchParams(window.location.search)

  return qs.get(name)
}

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
  const [pass, setPass] = useState({})

  useEffect(() => {
    getCode()
  }, [])

  const getCode = async () => {
    const id = getParams('id')
    const {data: code} = await api.get(`/pass/${id}`)
    if (!code) return

    setPass(code)
  }

  const {name = '', code = '', time = '', phone = ''} = pass

  return (
    <Backdrop>
      <Content>
        <Wrapper>
          <QRCode className="qr" value={code} />
        </Wrapper>

        <Text paddingTop="0.75em" paddingBottom="0">
          {String(name)}
        </Text>

        <Text paddingTop="0.75em" size="0.5em">
          <span>Visitor Pass</span>

          {code && <small>&nbsp;(code: {code})</small>}
        </Text>
      </Content>
    </Backdrop>
  )
}

export default Pass
