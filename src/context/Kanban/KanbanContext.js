import { createContext, useReducer } from 'react'
import kanbanReducer from './KanbanReducer'
import axios from 'axios'

const KanbanContext = createContext()
export const KanbanProvider = ({ children }) => {
  const initialState = {
    kanbans: [],
    kanban: {},
    loading: false,
  }

  const [state, dispatch] = useReducer(kanbanReducer, initialState)


  const fetchKanbans = async () => {
    setLoading()
    const response = await fetch(
      `http://localhost:5000/sfac/api/kanban/allKanbans`,
    )
    const data = await response.json()

    dispatch({
      type: 'GET_KANBANS',
      payload: data.data,
    })
  }

  const getKanban = async (login) => {
    setLoading()
    const response = await fetch(
      `http://localhost:5000/sfac/api/kanban/${login}`,
    )
    const data = await response.json()

    dispatch({
      type: 'GET_KANBAN',
      payload: data,
    })
  }

  const deleteKanban = (id) => {
    if (window.confirm('Êtes vous sur de vouloir supprimer ce Kanban ?')) {
      axios.delete(`
     http://localhost:5000/sfac/api/kanban/${id}`)
    }
    setTimeout(() => window.location.reload(), 2000)
  }

  const addKanban = (kanban) => {
    axios.post('http://localhost:5000/sfac/api/kanban/addKanban', kanban)
    setTimeout(() => window.location.reload(), 2000)
  }
  const updateKanban = (kanban, id) => {
    axios.put(`http://localhost:5000/sfac/api/kanban/${id}`, kanban)
    setTimeout(() => window.location.reload(), 2000)
  }

  const setLoading = () => dispatch({ type: 'SET_LOADING' })

  return (
    <KanbanContext.Provider
      value={{
        kanbans: state.kanbans,
        kanban: state.kanban,
        loading: state.loading,
        fetchKanbans,
        getKanban,
        addKanban,
        updateKanban,
        deleteKanban,
      }}
    >
      {children}
    </KanbanContext.Provider>
  )
}

export default KanbanContext
