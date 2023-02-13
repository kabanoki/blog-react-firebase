import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPenToSquare, faRightToBracket } from '@fortawesome/free-solid-svg-icons'

const Navbar = ({ isAuth }) => {
  return (
    <nav>
        <Link to="/"><FontAwesomeIcon icon={faHome} />ホーム</Link>
        <Link to="/createpost"><FontAwesomeIcon icon={faPenToSquare} />記事投稿</Link>
        {!isAuth 
          ? (<Link to="/login"><FontAwesomeIcon icon={faRightToBracket} />ログイン</Link>)
          : (<Link to="/logout"><FontAwesomeIcon icon={faRightToBracket} />ログアウト</Link>)
        }
    </nav>
  )
}

export default Navbar