import React from 'react'

const Nav = ({ setCity }) => {

    const handleInput = (e) => {
        if (e.keyCode === 13) {
            setCity(e.target.value);
            e.target.blur();
            e.target.value = "";
        }
    }

    return (
        <div>
            <nav >
                <input type="text" onKeyDown={(e) => handleInput(e)} placeholder='search here...' />
                {/* <button onClick={(e)=>handleClick(e)}>°C</button> */}
            </nav>
        </div>
    )
}

export default Nav