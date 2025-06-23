"use client"

import {styled} from "styled-components"

const Tagheader = styled.header`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px 160px;
`
const Logo = styled.a`
color: var(--globo-color);
font-weight:400 ;
font-size: 40px;
line-height: 150%;
`

export function Header(){
    return(
        <Tagheader>
            <Logo>
              teste teste 
              
            </Logo>
            <div>

            </div>
        </Tagheader>
    )
}