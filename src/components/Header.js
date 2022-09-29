import { logDOM } from '@testing-library/react';
import { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';


const NAVLINK = [
    { id: 1, menu: "KAIST", link: '/sub01' },
    { id: 2, menu: "입학", link: '/sub02' },
    { id: 3, menu: "교육", link: '/sub03' },
    { id: 4, menu: "연구", link: '/sub04' },
    { id: 5, menu: "대학 생활", link: '/sub05' },
    { id: 6, menu: "뉴스", link: '/sub06' },
    { id: 7, menu: "발전기금", link: '/sub07' },
]



const Header = () => {
    const [TG, setTG] = useState([false, false]);

    return (
        <header className="Header">
            <div className="inner">
                <h1>
                    <Link to='/'>
                        < img src={process.env.PUBLIC_URL + "/assets/img/logo.svg"} alt="" />
                    </Link>
                </h1>
                <nav className="Gnb">
                    <ul>
                        {
                            NAVLINK.map((it, idx) => {
                                return (
                                    <li key={it.idx}>
                                        <NavLink to={it.link}>{it.menu}</NavLink>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
                <div className="top_service">
                    <div className={'lang ' + (TG[0] ? 'on' : '')}>
                        <strong onClick={() => setTG([!TG[0], false])}>
                            KOR <i className="xi-angle-down arrow"></i></strong>
                        <ul className="lang_box">
                            <li><a href="#!">KOR</a></li>
                            <li><a href="#!">ENG</a></li>
                        </ul>
                    </div>
                    <div className={'top_search ' + (TG[1] ? 'on' : '')}>
                        <strong onClick={() => setTG([false, !TG[1]])}><i className="xi-search"></i></strong>
                        <div className="search_box">
                            <form action="#!">
                                <input type="text" placeholder="검색어를 입력하세요" required />
                                <button>
                                    <i className="xi-search"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </header >

    )
}

export default Header;