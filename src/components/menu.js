import './menu.css'

const Menu = function (props) {
  let parMenu = props.content;
  let flat = function (parMenu) {
    if (!parMenu.children) {
      return <li className='menu-li'>
          {parMenu.name}
      </li>;
    }
    if (parMenu.children) {
      return (
        <ul className="all-menu">
          <h1 className="menu-title">{parMenu.name}</h1>
          <ul className="menu-ul">
            {parMenu.children.map((item) => {
              return flat(item);
            })}
          </ul>
        </ul>
      );
    }
  };

  return <div className="all" onClick={(e)=>{console.log(window.location.hash=e.target.innerHTML) }}>{flat(parMenu)}</div>;
};
export default Menu;
