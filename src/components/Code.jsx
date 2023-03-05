import { Box, styled } from '@mui/material'
import React, { useContext } from 'react'
import { Datacontext } from '../context/Dataprovider'
import Editor from './Editor'

const Container = styled(Box)`
  display: flex;
  background: #060606;
`

const Code = () => {
 
  const {html, setHtml, css, setCss, js, setJs} = useContext(Datacontext);

  return (
    <Container>
     <Editor heading="HTML"  icon="/" color="red" value={html}  onChange={setHtml}/>
     <Editor heading="CSS"   icon="*" color="blue" value={css}  onChange={setCss}/>
     <Editor heading="JS"    icon="()" color="yellow" value={js}  onChange={setJs}/> 
    </Container>
  )
}

export default Code