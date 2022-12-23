import {useSelector} from "react-redux";

function App() {
  const dark  = useSelector(state => state.themeReducer)
  console.log(dark)
  return <div className="App">
    <div >

    </div>
  </div>;
}

export default App;
