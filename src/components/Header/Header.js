import icon from '../../images/icon.png';
import st from './Header.module.css';

export default function Header() {
    return (
        <header className={st.header}>
            <img className={st.icon} src={icon} alt="Quiz icon" />
            <h1 className={st.title}>Вікторина</h1>
        </header>
    )
}
