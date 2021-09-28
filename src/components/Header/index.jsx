import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import GlobalContext from '../../context/GlobalContext'
import { theme1, theme2, theme3 } from '../../themes'

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
`
const Logo = styled.h1`
`
const ThemeChangeArea = styled.div`
    display: flex;
    font-size: .9rem;
`
const Title = styled.p`
    text-transform: uppercase;
    display: flex;
    align-items: flex-end;
`
//Themes list 1,2,3
const ThemesList = styled.div`
    margin-left: 15px;
    text-align: center;
    display: grid;
    grid-template-areas: "a b c"
                         "d d d";
`
const Toggler = styled.button`
    cursor: pointer;
    border: none;
    display: flex;
    justify-content: space-between;
    width: 60px;
    padding: 3px 5px;
    border-radius: 15px;
    background: ${({theme})=>theme.color.vdDesaturetedBlue2};
    grid-area: d;

    &:focus{
        outline: 1px dashed blue;
    }

    .active{
        opacity: 1;
    }
`
const Circle = styled.div`
    opacity: 0;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${({theme})=>theme.color.red};
`

function Header() {
    const [selected, setSelected] = useState(1);
    const {setTheme} = useContext(GlobalContext);
    
    const handleThemeChange = () =>{
        switch(selected){
            default:
                break;
            case 1:
                setTheme(theme2);
                setSelected(2);
                break;
            case 2: 
                setTheme(theme3);
                setSelected(3);
                break;
            case 3:
                setTheme(theme1);
                setSelected(1);
                break;
        }
    }
    return (
        <Wrapper>
            <Logo>calc</Logo>
            <ThemeChangeArea>
                <Title>Theme</Title>
                <ThemesList>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <Toggler onClick={handleThemeChange}>
                        <Circle className={selected===1&&'active'}/>
                        <Circle className={selected===2&&'active'}/>
                        <Circle className={selected===3&&'active'}/>
                    </Toggler>
                </ThemesList>
            </ThemeChangeArea>
        </Wrapper>
    )
}

export default Header
