import { Sub, SubActions } from './types';


const INITIAL_STATE = {
  nick: "",
  submonths: 0,
  avatar: "",
  description: ""
}

const subReducer = (state: Sub, action: SubActions) => {

  switch (action.type) {
    case 'change':
      const {inputName, inputValue} = action.payload
      return { ...state, [inputName]: inputValue}
    case 'clear':
      return INITIAL_STATE
    default:
      return INITIAL_STATE;
  }
}

export default subReducer