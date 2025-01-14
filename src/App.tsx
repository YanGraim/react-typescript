import { Header } from "./components/header";
import { Aluno } from "./components/aluno"
import { Footer } from "./components/footer"

export default function App() {
  return (
    <div>
      <Header title="Alunos do React + TypeScript"/>
      <Aluno nome="Yan Graim" idade={27}/>
      <Aluno nome="Wanessa Niederauer" idade={24}/>
      <Footer/>
    </div>
  )
}

