// トップページ
// React FCで作成する。

import React, {FC} from 'react';
import {Link} from 'react-router-dom'

const TopPage:FC<{}> = ((props:{}) => {

    return (
        <div>
            <Link to='/profile'>プロフィール</Link>
        </div>
    );
});

export default TopPage;
