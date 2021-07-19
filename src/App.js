import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Hello, World!</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const Hello = (props) => {
  // return <div>こんにちは、{props.name}さん</div>;
  return <div>{props.name}さんの誕生日は{props.birthday}です</div>;
};

ReactDOM.render(
  <div>
    <Hello name="坂本龍馬" birthday="1836/01/03" />
    <Hello name="西郷隆盛" />
    <Hello name="勝海舟" />
    <Hello name={"織田信長"} />
    <Hello name={["坂本龍馬", "西郷隆盛"]} />
  </div>,
  document.getElementById('root')
);

const Hello2 = (props) => {
  return (
    <div>こんにちは、{props.children}さん</div>
  );
};

const Greeting = (props) => {
  return (
    <div>
      <div>ご挨拶</div>
      {props.children}
    </div>
  );
};

ReactDOM.render(
  <Greeting>
    <Hello2>坂本龍馬</Hello2>
    <Hello2>西郷隆盛</Hello2>
  </Greeting>,
  document.getElementById('root')
);

const Profile = (props) => {
  return (
    <ul>
      <li>名前: {props.name}</li>
      <li>誕生日: {props.birthDay}</li>
    </ul>
  )
}

const profile = {
  name: '坂本龍馬',
  birthDay: '1836/01/03'
};

ReactDOM.render(
  <Profile {...profile}/>,
  document.getElementById('root')
);

export default App;
