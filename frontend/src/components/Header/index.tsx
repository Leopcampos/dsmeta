import logo from '../../assets/img/logo.svg';


function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>
                    Desenvolvido por Leonardo Campos →
                    <a href="https://www.linkedin.com/in/leo-campos-a6113534/"> Linkedin</a>
                </p>
            </div>
        </header>
    )
}

export default Header;