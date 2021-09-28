import React, { useContext } from 'react'
import styled from 'styled-components'
import GlobalContext from '../../context/GlobalContext'

const Wrapper = styled.div`
    text-align: right;
    border-radius: ${({theme})=>theme.radius1};
    background: ${({theme})=>theme.color.vdDesaturetedBlue3};
    padding: 10px;
    margin: 20px 0;
`
const PrevFactor = styled.div`
    font-size: .8rem;
    margin-bottom: 5px;
    color: #DBC8C8;
    opacity:.6
`
function CalcScreen() {
    const {state} = useContext(GlobalContext);
    return (
        <Wrapper>
            <PrevFactor>{state.numero1} {state.operando}</PrevFactor>
            {state.numero1?<h1>{state.numero1.toLocaleString('en')}{state.operando}{state.numero2}</h1>:<h1>0</h1>}
        </Wrapper>
    )
}

export default CalcScreen
