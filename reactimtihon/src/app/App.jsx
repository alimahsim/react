import { Header, Homepage, Error404, SignIn, Info} from "../components/index";
import { Routes, Route } from "react-router-dom"

import s from "./App.module.scss";

function App() {
  return (
    <div className={s["app-wrapper"]}>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/sign" element={<SignIn/>}></Route>
        <Route path="/info" element={<Info/>}></Route>
        <Route path="*" element={<Error404/>}></Route>
      </Routes>

      {/* <Header></Header> 
      <Homepage></Homepage>
      <Error404></Error404>
      <SignIn></SignIn>
      <Info></Info>
       */}
    </div>
  )
}
export default App;
