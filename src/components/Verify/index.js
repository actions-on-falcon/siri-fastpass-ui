import React, {useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'

import Button from './Button'

let QrReader = () => null

if (typeof window !== 'undefined') {
  QrReader = require('react-qr-scanner')
}

const api = axios.create({
  baseURL: 'https://actions-on-falcon.herokuapp.com'
})

const Backdrop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;

  min-height: 100vh;
  background: linear-gradient(45deg, #4f00bc, #29abe2);
`

const Video = styled.video`
  max-width: 1000px;

  width: 100%;

  background: white;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);
`

const ModalBackdrop = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;

  z-index: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: #2d2d30;
  background: white;
`

const Heading = styled.h1`
  color: #fff;
  font-weight: 300;
  margin-top: 1em;
`

const Notice = styled.h1`
  color: #2d2d30;
  font-weight: 300;
  font-size: 3.1em;
  line-height: 1.3em;
`

const LargeButton = styled(Button)`
  margin: 1.8em 0;
  font-size: 1.3em;
`

const Input = styled.input`
  width: 400px;
  font-size: 4.1em;
  border: none;
  outline: none;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);
  padding: 0.5em;
  font-family: 'Roboto', sans-serif;
  text-align: center;
`

const Meta = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 1em;
  font-weight: 300;
`

export default function Verify() {
  const [code, setCode] = useState('')
  const [pass, setPass] = useState({})
  const [isLoading, setLoading] = useState(false)
  const [isInvalid, setInvalid] = useState(false)
  const [isActive, setActive] = useState(false)
  const [isCodeModal, setCodeModal] = useState(false)

  async function onEnterCode(code) {
    if (!code) return

    setCodeModal(false)

    console.log('Passcode =', code)

    setCode(code)
    setActive(true)

    try {
      setLoading(true)
      const {data: pass} = await api.get(`/pass/${code}`)

      console.log('Pass Info =', pass)

      if (pass.code === 404 && pass.name === 'NotFound') {
        setInvalid(true)
        console.log('!! INVALID PASS:', code, pass)
      } else {
        setPass(pass)
      }
    } catch (err) {
      console.error('API Error ->', err)
    } finally {
      setLoading(false)

      setTimeout(() => {
        setCode('')
        setPass({})
        setInvalid(false)
        setActive(false)
      }, 5000)
    }
  }

  function onKeyPress(event) {
    if (event.key === 'Enter') {
      onEnterCode(code)
    }
  }

  return (
    <Backdrop>
      <Heading>Scan Your Visitor Pass</Heading>

      {isActive && (
        <ModalBackdrop>
          {isLoading && <Notice>Verifying Access Pass... Please Wait.</Notice>}

          {!isLoading && pass.name && (
            <div>
              <Notice>
                <span>
                  Welcome to 39, <strong>{pass.name}</strong>!
                </span>

                <br />

                <span>Enjoy your visit.</span>
              </Notice>

              <Meta>Passcode: {pass.code}</Meta>
            </div>
          )}

          {!isLoading && isInvalid && (
            <Notice>
              <span>Your Access Pass is invalid.</span>

              <br />

              <span>Please contact the information counter.</span>
            </Notice>
          )}
        </ModalBackdrop>
      )}

      {!isCodeModal && (
        <QrReader
          style={{maxWidth: 800}}
          delay={100}
          onError={console.error}
          onScan={onEnterCode}
        />
      )}

      {isCodeModal && (
        <ModalBackdrop>
          <Input
            value={code}
            onKeyPress={onKeyPress}
            onChange={e => setCode(e.target.value)}
          />

          <LargeButton onClick={() => onEnterCode(code)} success>
            Enter Passcode
          </LargeButton>
        </ModalBackdrop>
      )}

      <LargeButton onClick={() => setCodeModal(true)} primary>
        Enter Passcode
      </LargeButton>
    </Backdrop>
  )
}
