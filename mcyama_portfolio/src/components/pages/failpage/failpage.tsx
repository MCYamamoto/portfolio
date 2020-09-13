// ルーティング失敗頁
// React FCで作成する。

import React, {FC} from 'react';

const FailPage:FC<{}> = ((props:{}) => {
    let h1_style = {
        fontSize:"20px"
    }
    return (
        <div>
            <h1 style={h1_style}>404 notfound</h1>
            <h1 style={h1_style}>指定した頁はありません。</h1>
        </div>
    );
});

export default FailPage;
