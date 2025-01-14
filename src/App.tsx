export default function App() {
  return (
    <div>
      <h1>Meu projeto</h1>
      <Aluno nome="Yan Graim" idade={27}/>
      <Aluno nome="Wanessa Niederauer" idade={24}/>
    </div>
  )
}

interface IAlunoProps {
  nome: string;
  idade: number;
}

function Aluno({nome, idade}: IAlunoProps) {
  return (
    <div>
      <h2>Aluno: {nome}</h2>
      <p>Idade: {idade}</p>
    </div>
  )
}