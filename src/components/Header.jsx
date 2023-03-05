import React from "react";

import { AppBar, Toolbar, Typography , styled} from "@mui/material";

const Container =  styled(AppBar)`
background: #000;
height: 9vh;
`

const Header = () => {

    const logo = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScxg9Cc0qvFPru0tT3tFcIFn2ULDwDsQgRJg&usqp=CAU`;

  return (
    <>
      <Container position="static">
        <Toolbar>
           
            <img src={logo} alt="img"  style={{width: 40, marginRight:5}}/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PrinceTech
          </Typography>
        </Toolbar>
      </Container>
    </>
  );
};

export default Header;
