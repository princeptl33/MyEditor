import { Box, styled } from '@mui/material'
import React, { useState } from 'react'

import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';

import {Controlled as ControlledEditor} from "react-codemirror2";
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

import "../App.css";

const Container = styled(Box)`
  flex-grow: 1;
  flex-basic: 0;
  diplay: flex;
  flex-direction: column;
  padding: 0px 8px 8px;

`;

const Heading = styled(Box)`
  background: #1d1e22;
  display: flex;
  padding: 9px 12px;
  // text-align: center;
  align-items: center;
`;

const Header = styled(Box)`
    display: flex;
    background: #060606;
    color: #AAAEBC;
    justify-content: space-between;
    font-weight: 700;
`

const Editor = ({ heading, icon, color, value, onChange }) => {

  const [open, setopen] = useState(true);

  const handelchange = (editor, data, value) => {
    onChange(value);
  }
    
  return (
    <Container style={open ? null : {flexGrow: 0}}>
        <Header>
            <Heading>
                <Box component="span" 
                style={{
                    background: color,
                    color: "#1ede23",
                    width: 20,
                    height: 20,
                    display: 'flex',
                    placeContent: "center",
                    borderRadius: 5,
                    margin: 5,
                    paddingBottom: 2,
                }}>{icon}</Box>
            {heading}
            </Heading>
            <CloseFullscreenIcon  className="btn"  onClick={()=> setopen(prevState => !prevState)}/>
        </Header>
        <ControlledEditor className='controlled-editor'
        value={value}
        onBeforeChange={handelchange}
         options={{
          theme: 'material',
          lineNumbers: true
         }}
        />
    </Container>
  )
}

export default Editor