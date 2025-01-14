interface IAlunoProps {
    nome: string;
    idade: number;
  }
  
export function Aluno({nome, idade}: IAlunoProps) {
    return (
      <div>
        <h2>Aluno: {nome}</h2>
        <p>Idade: {idade}</p>
      </div>
    )
}