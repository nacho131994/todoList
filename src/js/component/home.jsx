import React, {useState} from "react";

const Home = () => {

const [newItem, setNewItem]=useState("");
const [items, setItems]=useState([])

const addItem=()=>{

	if(!newItem){
		alert("Add an item");
		return
	}

	const item={
		id: Math.floor(Math.random () * 1000),
		value: newItem
	}

	setItems(oldList => [...oldList, item]);
	setNewItem("")
}

const deleteItem=(id)=>{
	const newArray = items.filter(item=> item.id!==id);
	setItems(newArray);
}

const deleteAll=()=>{
	setItems([]);
}
	return (
		<div className="wrapper">
			<div className="title">
				<p>To Do List</p>
			</div>
			<div className="input">
				<input className="input" type="text" placeholder="Add a new task" value={newItem} onChange={e=>setNewItem(e.target.value)} />
				<button type="button" class="btn btn-success ms-2" onClick={()=> addItem()}>Add</button>
			</div>
			<div className="tasklist">
				<ul className="list">
					{items.map(item=>{
						return(
							<li className = "listItem"key={item.id}>{item.value}<p className="deleteItem" onClick={()=> deleteItem(item.id)}><i class="fa-solid fa-trash"></i></p></li>
						)
					})}
				</ul>
			</div>
			<div className="counter">
				<p className="remaining">Tasks remaining: {items.length}</p>
			</div>
			<button type="button" class="btn btn-danger" onClick={deleteAll}>Delete all</button>
		</div>
	);
};

export default Home;
