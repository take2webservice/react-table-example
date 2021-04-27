import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import './App.css';

const products = [
  {
    id: 1,
    name: "食パン",
    price: 500,
  },
  {
    id: 2,
    name: "お米",
    price: 1000,
  },
  {
    id: 3,
    name: "パスタ",
    price: 200,
  },
];
const columns = [{
  dataField: 'id',
  text: '商品ID',
  formatter: (cell, row) => (<div>{cell}</div>)
}, {
  dataField: 'name',
  text: '商品名'
}, {
  dataField: 'price',
  text: '価格'
}];


function App() {
  return (
    <div className="App">
      <BootstrapTable keyField='id' data={products} columns={columns} />
    </div>
  );
}

export default App;
