import { Header } from "./components/header";
import { Aluno } from "./components/aluno"

export default function App() {
  return (
    <div>
      <Header/>
      <Aluno nome="Yan Graim" idade={27}/>
      <Aluno nome="Wanessa Niederauer" idade={24}/>
    </div>
  )
}

