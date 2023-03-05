import { createContext, useState } from "react";




export const Datacontext = createContext();

const Dataprovider = ({children}) => {

    const [html, setHtml] = useState('');
    const [css, setCss] = useState('');
    const [js, setJs] = useState('');


    return(
        <Datacontext.Provider value={{html, setHtml, css, setCss, js, setJs}}>
            {children}
        </Datacontext.Provider>
    )
}

export default Dataprovider;