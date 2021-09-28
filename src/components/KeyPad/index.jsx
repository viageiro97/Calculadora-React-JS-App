import React, { useContext } from 'react'
import styled from 'styled-components'
import GlobalContext from '../../context/GlobalContext'

const Wrapper = styled.div`
    background: ${({theme})=>theme.color.vdDesaturetedBlue2};
    border-radius: ${({theme})=>theme.radius1};
    padding: 14px;
    display: grid;
    gap: 15px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas: "a b c d"
                         "e f g h"
                         "i j k l"
                         "m n o p"
                         "q q r r";
`
const Key = styled.button`
    z-index: 2;
    font-size: 1.2rem;
    color: ${({theme,del,equal})=>
            del?'white':
            equal?theme.color.equalBtn:
            theme.color.vdGrayishBlue
        };
    background: ${({del,equal,theme})=>
                del?theme.color.dDarkBlue1:
                equal?theme.color.red:
                theme.color.lightGrayishOrange};
    font-family: ${({theme})=>theme.fontFam};
    cursor: pointer;
    width: 100%;
    position: relative;
    padding: 10px;
    border: none;
    border-radius: ${({theme})=>theme.radius1};
`
const Shadow = styled.div`
    border-radius: ${({theme})=>theme.radius1};
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 108%;
    background: ${({theme,del,equal})=>del?theme.color.dDarkBlue2:
                equal?theme.color.darkRed:
                theme.color.grayishOrange};
`
const ButtonDiv = styled.div`
    position: relative;
    grid-area: ${({area})=>area};
`

function KeyPad() {
    const {state, dispatch} = useContext(GlobalContext);

    const writeNum = (num) =>{
        if(!state.operando){
            dispatch({type:'ADD_NUM1', payload:num});
        }else{
            dispatch({type:'ADD_NUM2', payload:num});
        }
    } 
    const writeOperand = (operand) =>{
        if(state.numero2){
            dispatch({type:'GET_RESULT', payload: operand});
        }
        dispatch({type:'ADD_OPERAND', payload: operand});
    }

    const deleteFactor = () =>{
        dispatch({type:'DEL'});
    }
    const getResult = () =>{
        console.log(state.numero1,state.numero2,state.operando)
        if(!state.numero1||!state.numero2||!state.operando){
            alert('falta numero');
        }else{
            dispatch({type:'GET_RESULT'})
        }
    }
    return (
        <Wrapper>
           <ButtonDiv><Key onClick={()=>writeNum('7')}>7</Key><Shadow/></ButtonDiv>
           <ButtonDiv><Key onClick={()=>writeNum('8')}>8</Key><Shadow/></ButtonDiv>
           <ButtonDiv><Key onClick={()=>writeNum('9')}>9</Key><Shadow/></ButtonDiv>
           <ButtonDiv><Key del onClick={deleteFactor}>DEL</Key><Shadow del/></ButtonDiv>
           <ButtonDiv><Key onClick={()=>writeNum('4')}>4</Key><Shadow/></ButtonDiv>
           <ButtonDiv><Key onClick={()=>writeNum('5')}>5</Key><Shadow/></ButtonDiv>
           <ButtonDiv><Key onClick={()=>writeNum('6')}>6</Key><Shadow/></ButtonDiv>
           <ButtonDiv><Key onClick={()=>writeOperand('+')}>+</Key><Shadow/></ButtonDiv>
           <ButtonDiv><Key onClick={()=>writeNum('1')}>1</Key><Shadow/></ButtonDiv>
           <ButtonDiv><Key onClick={()=>writeNum('2')}>2</Key><Shadow/></ButtonDiv>
           <ButtonDiv><Key onClick={()=>writeNum('3')}>3</Key><Shadow/></ButtonDiv>
           <ButtonDiv><Key onClick={()=>writeOperand('-')}>-</Key><Shadow/></ButtonDiv>
           <ButtonDiv><Key onClick={()=>writeNum('.')}>.</Key><Shadow/></ButtonDiv>
           <ButtonDiv><Key onClick={()=>writeNum('0')}>0</Key><Shadow/></ButtonDiv>
           <ButtonDiv><Key onClick={()=>writeOperand('÷')}>/</Key><Shadow/></ButtonDiv>
           <ButtonDiv><Key onClick={()=>writeOperand('x')}>x</Key><Shadow/></ButtonDiv>
           <ButtonDiv area="q"><Key del onClick={()=>dispatch({type:'RESET'})}>RESET</Key><Shadow del/></ButtonDiv>
           <ButtonDiv area="r"><Key equal onClick={getResult}>=</Key><Shadow equal/></ButtonDiv> 
        </Wrapper>
    )
}

export default KeyPad
