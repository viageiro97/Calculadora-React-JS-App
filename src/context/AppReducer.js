const AppReducer = (state, action) =>{
    switch(action.type){
        default:
            console.log('Default Action');
            return state;
        case 'ADD_NUM1':
            if(state.resultado){
                return {...state,resultado:'',numero1:action.payload};
            }
            return {...state,numero1:state.numero1+action.payload};
        case 'ADD_NUM2':
            return {...state,numero2:state.numero2+action.payload};
        case 'ADD_OPERAND':
            if(state.numero1){
                return {...state,operando:action.payload}
            }
            return {...state,numero1:"0", operando:action.payload}

        case 'DEL':
            if(state.numero2){
                return {...state, numero2:state.numero2.slice(0,-1)}
            }else{
                if(state.operando){
                    return {...state, operando:''}
                }else{
                    if(state.numero1){
                        return {...state, numero1:state.numero1.slice(0,-1)}
                    }
                }
            }
            return state;
        case 'RESET':
            return {numero1:'',operando:'',numero2:''}
        case 'GET_RESULT':
            let operand = action.payload?action.payload:'';
            let resultado;
            const num1 = parseFloat(state.numero1);
            const num2 = parseFloat(state.numero2);
            switch(state.operando){
                default:
                    return state;
                case '+':
                    resultado = (num1+num2).toString();
                    return {...state,resultado:resultado,numero1:resultado,operando:operand,numero2:''}
                case '-':
                    resultado = (num1-num2).toString();
                    return {...state,resultado:resultado,numero1:resultado,operando:operand,numero2:''}
                case 'x':
                    resultado = (num1*num2).toString();
                    return {...state,resultado:resultado,numero1:resultado,operando:operand,numero2:''}
                case '÷':
                    resultado = (num1/num2).toString();
                    return {...state,resultado:resultado,numero1:resultado,operando:operand,numero2:''}
            }
    }
}

export default AppReducer;

