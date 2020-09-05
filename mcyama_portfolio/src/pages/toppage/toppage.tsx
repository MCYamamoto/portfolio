// トップページ
// React FCで作成する。

import React, {FC} from 'react';
import {Link} from 'react-router-dom';

//CSS
import "./toppage.scss";

const TopPage:FC<{}> = ((props:{}) => {
    const toppage_image = require('./../../image/toppageimage.jpg');
    return (
        <div>
            <img className='toppage-image' src={toppage_image} alt='Top Page Image'/>
            <Link to='/profile'>プロフィール</Link>
        </div>
    );
});

export default TopPage;
