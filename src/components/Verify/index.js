import React, {useState, useEffect, useRef} from 'react'
import styled from 'styled-components'
import {Cameras, Scanner} from 'react-instascan'
import axios from 'axios'

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

const Container = styled.div`
  max-width: 1000px;

  margin-top: 1.8em;
  margin-bottom: 1.8em;

  padding: 1.3em;
  width: 100%;

  background: white;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);
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

export default function Verify() {
  const [qr, setQr] = useState(null)
  const [pass, setPass] = useState({})
  const [isLoading, setLoading] = useState(false)

  async function onScan(id) {
    console.log('Pass ID =', id)

    setQr(id)

    try {
      setLoading(true)
      const {data: pass} = await api.get(`/pass/${id}`)

      console.log('Pass Info =', pass)

      setPass(pass)
    } catch (err) {
      console.error('Pass Validation Error ->', err)
    } finally {
      setLoading(false)

      setTimeout(() => {
        setQr(null)
        setPass({})
      }, 5000)
    }
  }

  return (
    <Backdrop>
      <Heading>Scan Your Visitor Pass</Heading>

      {qr && (
        <ModalBackdrop>
          {isLoading && <h1>Verifying Access Pass... Please Wait.</h1>}

          {!isLoading && pass.name && (
            <div>
              <h1>Welcome, {pass.name}! Have a great time.</h1>
            </div>
          )}
        </ModalBackdrop>
      )}

      <Cameras>
        {cameras => (
          <div>
            {console.log('Camera ->', cameras[0])}

            <Scanner camera={cameras[0]} onScan={onScan}>
              <Video />
            </Scanner>
          </div>
        )}
      </Cameras>

      <Container>
        <h1>...</h1>
      </Container>
    </Backdrop>
  )
}
