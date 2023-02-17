import { createContext, useContext, useReducer } from "react";

export const ContextoFormulario = createContext()

const initialState = {
    entrenador: null,
    pokemon: null
}

const formReducer = (state, action) => {

    switch (action.type) {
        case 'ACTUALIZAR_ENTRENADOR':
            return {
                ...state,
                entrenador: { ...state.entrenador, ...action.payload }
            }
            break;

        case 'ACTUALIZAR_POKEMON':
            return {
                ...state,
                pokemon: { ...state.pokemon, ...action.payload }
            }
            break;
    }

}

export const FormularioProvider = ({ children }) => {
    const [store, dispatch] = useReducer(formReducer, initialState)

    return (
        < ContextoFormulario.Provider value={[store, dispatch]}>
            {children}
        </ContextoFormulario.Provider >
    )
}

export const useStore = () => useContext(ContextoFormulario)[0]
export const useDispatch = () => useContext(ContextoFormulario)[1]


