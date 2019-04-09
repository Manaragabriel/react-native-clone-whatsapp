import {combineReducers} from 'redux'
import AuthReducer from './AuthReducer'
import AppReducer from './AppReducer'
import ContatosReducer from './ContatosReducers'
import ListaConversaReducer from './ListaConversaReducer'
import ListaConversasReducer from './ListaConversasReducer'
export default combineReducers({
    AuthReducer,
    AppReducer,
    ContatosReducer,
    ListaConversaReducer,
    ListaConversasReducer,
})