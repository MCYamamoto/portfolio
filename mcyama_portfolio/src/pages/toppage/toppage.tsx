// トップページ
// React FCで作成する。

import React, {FC} from 'react';
import {Link} from 'react-router-dom';

//オリジナルコンポーネンツ
import ComHeader from './../../com_component/com_header'

//画像
import ProfileImg from './../../image/Profile.jpg'  //プロフィールボタン画像
import SkillImg from './../../image/Skill.jpg'      //スキルボタン画像
import ContactImg from './../../image/Contact.jpg'  //コンタクトボタン画像

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
            </header>
            <main>
                <section className="main__section__wrapper">
                    <div className="main__sectoin__item">
                        <img src={ProfileImg} alt="プロフィールボタン画像"/>
                    </div>
                </section>

                <section className="main__section__wrapper">
                    <div className="main__sectoin__item">
                        <img src={SkillImg} alt="スキルボタン画像"/>
                    </div>
                    <div className="main__sectoin__item">
                        <img src={ContactImg} alt="コンタクトボタン画像"/>
                    </div>
                </section>
            </main>
        </div>
    );
});

export default TopPage;
