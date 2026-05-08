import { logoIcon } from "../utils/images";


const Navbar = () => {
    return (
        <>
            <header className='header'>
                <div className="container">
                    <div className="header__nav">
                        <a href="#" className="header__nav-logo"><img src={logoIcon} alt="" /></a>
                        <ul className="header__nav-list">
                            <li className="header__nav-list_item">
                                <a href="#" className="header__nav-list_item-link">HOME PAGE</a>
                            </li>
                            <li className="header__nav-list_item">
                                <a href="#" className="header__nav-list_item-link">CATEGORY</a>
                            </li>
                            <li className="header__nav-list_item">
                                <a href="#" className="header__nav-list_item-link">ABOUT US</a>
                            </li>
                        </ul>
                    </div></div>
            </header>
        </>
    )
}

export default Navbar