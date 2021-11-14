interface Props {
  title: string;
}

const Header = (props: Props): JSX.Element => {
  function testHeader(_unused: any, used: string) {
    return used;
  }

  if (props.title) {
    console.log('from if');
  } else if (props.title) {
    console.log('from if');
  }

  testHeader(null, 'Hello');
  return (
    <div>
      <h1 className="Hello">{props.title}</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat omnis
        doloribus sapiente officiis adipisci! Vitae laboriosam dicta molestiae
        minima amet recusandae, possimus corporis ut sint eveniet quaerat
        delectus quos assumenda.
      </p>
    </div>
  );
};

export default Header;
