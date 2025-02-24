import logo from './logo.svg';
import './App.css';
import Card from './Card'

function App() {
  const images1=['img01','img02','img03']
  const images2=['img04','img05','img06']
  const images3=['img07','img08','img09']
  return (
<div class="container text-center">
  <div class="row">
    <div class="col">
      <Card imags={images1}/>
    </div>
    <div class="col">
      <Card imags={images2}/>
    </div>
    <div class="col">
    <Card imags={images3}/>
    </div>
  </div>
</div>
  );
}

export default App;
