import './header.css';


interface IHeaderProps {
    title: string;
}



export function Header({title}: IHeaderProps) {
    return (
        <header className='header'>
            <h1 className='title'>{title}</h1>
            <hr />
        </header>
    )
}