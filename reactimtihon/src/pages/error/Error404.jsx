
import { useNavigate } from "react-router-dom"

import s from "./Error404.module.scss"

export const Error404 = () => {
  const navigate = useNavigate()

  const onSubmit = e => {
    navigate("/gen")
  }

  // const {  }
  return (
    <>
      <div className={s["error-main"]}>
        <h1>404</h1>
        <h5>Oops! That page can’t be found</h5>
        <p>The page you are looking for it maybe deleted</p>
        <button onClick={onSubmit}>Go To Home</button>
      </div>
    </>
  )
}