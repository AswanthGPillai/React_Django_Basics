import React from 'react'
import style from './Header.module.css'

const Header = () => {
    return (
        <div className={style.nav}>
            <div>
                <p className={style.tag}>Laura</p>
            </div>
            <div className={style.sectionTwo}>
                <a href="" className={style.links}>About</a>
                <a href="" className={style.links}>Mission</a>
                <a href="" className={style.links}>Product</a>
                <button className={style.button}>Contact</button>
            </div>
        </div>
    )
}

export default Header