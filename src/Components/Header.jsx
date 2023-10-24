// export default function (Header) {
//   return <h1 className="Header">HORNED BEASTS</h1>;
// }

function Header(props) {
  return (
    <header>
      <h1 className="Header" onClick={props.onClick}>
        HORNED BEASTS
      </h1>
    </header>
  );
}

export default Header;
