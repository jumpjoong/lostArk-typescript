import { useContext, useState } from "react"
import { AppC } from "../../context/Context"
import { Link, useLocation } from "react-router-dom";
import { ObjectCharacter } from "../../type/typeContext";
function List() {
  const [drop, setDrop] = useState(false);
  const { char, organ } = useContext(AppC);
  const name = useLocation();
  const group: ObjectCharacter[] = name.state.group;
  //드롭다운 메뉴
  const list = () => {
    setDrop(!drop);
  }
  return (
    <div className='name'>
      {organ !== undefined && 
        <div className='name-sub'>
          <Link to="/">
            <p><img src='./icon/mococo2.gif' alt='메인으로가기'></img></p>
          </Link>
          <div className='header-sub' onClick={list}>
            <div className="list">
              <p className='e'>
                {
                  char && char.CharacterName
                }
              </p>
              <div className={drop ? 'deg' : ''}><img src="icon/arrow.png" alt="더보기"></img></div>
            </div>
          <div className={drop ? 'hidden active' : 'hidden noActive'}>
            <ul>
              {
                group && group.map((obj, key)=> {
                  return <li key={key}>
                    <Link to={`/${obj.CharacterName}`} state={{ name : obj.CharacterName , group : group }} onClick={list}>
                      {obj.CharacterName}
                    </Link>
                  </li>
                })
              }
            </ul>
          </div> 
          </div>
        </div>
      }
    </div>
  )
}

export default List