import Head from 'next/head'
import Image from 'next/image'
import styled from "styled-components";


const Gloabalcontent = styled.div`
  padding: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
`

const Img = styled.div`
  /* width: 50%; */
  height: 100vh;
  flex-grow: 1;
  .image{
    max-width: calc(100vw - 50%);
  }
`

const FormStyle = styled.div`
  /* max-width: 50%; */
  flex-grow: 1;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default function Home() {
  return (
    <Gloabalcontent>
      <FormStyle>
        amine
      </FormStyle>
      <Img>
        <img src="/imnage.png"  className='image' alt="" />
      </Img>
    </Gloabalcontent>
  )
}
