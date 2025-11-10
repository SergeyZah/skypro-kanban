import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

export const Loader = () => {
  const { loading } = useContext(AuthContext)
  return loading && <div className="loader-text">Данные загружаются...</div>
  
}