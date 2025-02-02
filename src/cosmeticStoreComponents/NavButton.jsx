/* eslint-disable react/prop-types */
import './css/NavButton.css';
function NavButton({ onClick }) {

    return (
        <button
            onClick={onClick}
            className='nav-button'>
            see all
        </button>
    )
}

export default NavButton