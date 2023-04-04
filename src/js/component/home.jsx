import React, { useState } from "react";


const Home = () => {

	const [newItem, setNewItem] = useState("");
	const [items, setItems] = useState([])

	const addItem = () => {

		if (!newItem) {
			alert("Add an item");
			return
		}

		const item = {
			id: Math.floor(Math.random() * 1000),
			value: newItem
		}

		setItems(oldList => [...oldList, item]);
		setNewItem("")
	}

	const deleteItem = (id) => {
		const newArray = items.filter(item => item.id !== id);
		setItems(newArray);
	}

	const deleteAll = () => {
		if (items.length === 0) {

			alert("There are no tasks to delete");

		}
		else {
			setItems([])
		}

		;
	}
	return (
		<div className="wrapper">
			<div className="title">
				<p>To Do List <i class="fa-solid fa-check"></i></p>
			</div>
			<div className="container">
				<div className="input">
					<input className="input" type="text" placeholder="Add a new task" value={newItem} onChange={e => setNewItem(e.target.value)} />
					<button id="addButton"type="button" class="btn btn-success ms-2" onClick={() => addItem()}>Add</button>
					
				</div>
				<div className="tasklist">
					<ul className="list">
						{items.map(item => {
							return (
								<li className="listItem" key={item.id}>{item.value}<p className="deleteItem" onClick={() => deleteItem(item.id)}><i id="trash" class="fa-solid fa-trash"></i></p></li>
							)
						})}
					</ul>
				</div>
				<div className="counter">
					<p className="remaining">{items.length === 0 ?
						"Add a task" :
					`Tasks remaining: ${items.length}`}
					</p>
					<button id="deleteAllButton" type="button" class="btn btn-danger ms-2" onClick={deleteAll}>Delete all tasks</button>

				</div>
			</div>
		</div>

	);
};

export default Home;



