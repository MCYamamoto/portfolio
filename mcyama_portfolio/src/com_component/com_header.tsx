//共通頁ヘッダ。トップページ以外で使用する

import React, {FC} from "react";
import {Link} from "react-router-dom";

const ComHeader:FC<{}> = ((pops:{})=>{

    let nav_style = {
        display:"flex",
        listStyle:"none",     //点無くし
        color:"white",       //文字は白    
        justifyContent:"space-around",
        li : {
            border:"solid",
            padding:"20px 0px"
        }    
    }

    return (
        <div>
            <nav>
                <ul style={nav_style}>
                    <li><Link to='/'>TOP</Link></li>
                    <li><Link to='/profile'>PROFILE</Link></li>
                    <li><Link to='/profile'>SKILL</Link></li>
                    <li><Link to='/profile'>CONTACT</Link></li>
                </ul>
            </nav>
        </div>
    );
})

export default ComHeader;
