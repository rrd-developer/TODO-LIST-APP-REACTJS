import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react'
import AddItem from './AddItem';
import SearchItem from './SearchItem';


function App() {
  const [items,setItems] = useState( JSON.parse(localStorage.getItem('todo-list'))
    );

const [newItem,setNewItem] = useState('');
const [search,setSearch] = useState('');



 
const handleChange = (id)=>{
  const listItems = items.map((p)=> p.id  === id ? {...p,checked:!p.checked}:p);
  setItems(listItems)
  localStorage.setItem("todo-list",JSON.stringify(listItems))
}

const handleDelete = (id)=>{
  const listItems  = items.filter((p)=> p.id!== id )
  setItems(listItems)
  localStorage.setItem("todo-list",JSON.stringify(listItems))

}
const handleSubmit = (e)=> {
  e.preventDefault()
  console.log ("submitted")
  if(!newItem) return;
  console.log(newItem)
  setNewItem('')
  addItem(newItem)

}

const addItem = (item) =>{
  const id = items.length ? items[items.length -1].id + 1 :1;
  const addNewItem = {id, checked:false, item}
  const listItems = [...items,addNewItem]
  setItems(listItems)
  localStorage.setItem("todo-list",JSON.stringify(listItems))

}


  
  return (
    <div className="App">
      <Header title="RRD TODO-APP-LIST"/>
      <AddItem
      newItem = {newItem}
      setNewItem= {setNewItem}
      handleSubmit = {handleSubmit}
      />
      <SearchItem
      search = {search}
      setSearch = {setSearch}
      
      />
     <Content
      items = {items.filter(item=> ((item.item).toLowerCase()).includes(search.toLowerCase()))}
      handleChange = {handleChange}
      handleDelete = {handleDelete}
           
     />
      <Footer length={items.length}/>
     
      
    </div>
  );
}

export default App;
