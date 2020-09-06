// トップページ
// React FCで作成する。

import React, {FC} from 'react';
import {Link} from 'react-router-dom';

//CSS
import "./toppage.scss";
import {} from "semantic-ui-react"

const TopPage:FC<{}> = ((props:{}) => {
    return (
        <div>
            <header>
                <div className="header__wrapper">
                    <ul>
                        <li className="header__wrapper__ul__li--li1">Engineer</li>
                        <li className="header__wrapper__ul__li--li2">K.Yamamoto's</li>
                        <li className="header__wrapper__ul__li--li3">Portfolio</li>
                    </ul>
                </div>
                <nav>
                    <ul className="header__nav">
                        <li><Link to='/profile'>PROFILE</Link></li>
                        <li><Link to='/profile'>SKILL</Link></li>
                        <li><Link to='/profile'>CONTACT</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
});

export default TopPage;
