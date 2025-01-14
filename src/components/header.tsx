import './header.css';


interface IHeaderProps {
    title?: string; // propriedade opnicional
}



export function Header({title = "Curso React + TypeScript"}: IHeaderProps) {
    return (
        <header className='header'>
            <h1 className='title'>{title}</h1>
            <hr />
        </header>
    )
}