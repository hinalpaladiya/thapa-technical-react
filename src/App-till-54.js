import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Accordion from './component/accordion/Accordion';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';
import { useState } from 'react';

function App() {
	const [AddItem, SetAddItem] = useState([])

	const addNote = (note) => {
		// alert('fd')
		SetAddItem((prevData) => {
			return [...prevData, note];
		})
		console.log(note);
	}
	// const onDelete = (id) => {
	// 	console.log(id, 'id');
	// 	SetAddItem((oldData) => {
	// 		oldData.filter((currentData, index) => {
				
	// 			return index !== id
	// 		})
	// 	})
	// }
	const onDelete = (id) => {
		SetAddItem((oldData) => {
			return oldData.filter((currentData, index) => index !== id);
		});
	};
	
	return (
		<>
			<Header />
			<CreateNote passNote={addNote} />
			{/* <Note /> */}
			{AddItem.map((val, index) => {
				return (<Note key={index}
					id={index}
					title={val.title}
					content={val.content}
					deleteItem={onDelete}
				/>)
			})}
			<Footer />
			{/* <h1 className="text-center text-danger text-capitalize my-5">Welcome to my channel</h1>
			<div className="container text-center">
				<div className="row">
					<div className="col">
						<div class="card">
							<img src="https://picsum.photos/100/150" class="card-img-top" alt="..." />
							<div class="card-body">
								<h5 class="card-title">Card title</h5>
								<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								<a href="#" class="btn btn-primary">Go somewhere</a>
							</div>
						</div>
					</div>
					<div className="col">
						<div class="card">
							<img src="https://picsum.photos/100/150" class="card-img-top" alt="..." />
							<div class="card-body">
								<h5 class="card-title">Card title</h5>
								<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								<a href="#" class="btn btn-primary">Go somewhere</a>
							</div>
						</div>
					</div>
					<div className="col">
						<div class="card">
							<img src="https://picsum.photos/100/150" class="card-img-top" alt="..." />
							<div class="card-body">
								<h5 class="card-title">Card title</h5>
								<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								<a href="#" class="btn btn-primary">Go somewhere</a>
							</div>
						</div>
					</div>
				</div>
			</div> */}
			{/* <Accordion /> */}

			{/* <h1 className='text-capitalize text-center mt-3 text-danger'>Welcome to site</h1> */}
			{/* <button className='btn btn-success'>Hello</button>
			<div class="mb-3">
				<label for="exampleFormControlInput1" class="form-label">Email address</label>
				<input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
			</div>
			<div class="mb-3">
				<label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
				<textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
			</div> */}
		</>
		// <div className="App">
		//   <header className="App-header">
		//     <img src={logo} className="App-logo" alt="logo" />
		//     <p>
		//       Edit <code>src/App.js</code> and save to reload.
		//     </p>
		//     <a
		//       className="App-link"
		//       href="https://reactjs.org"
		//       target="_blank"
		//       rel="noopener noreferrer"
		//     >
		//       Learn React
		//     </a>
		//   </header>
		// </div>
	);
}

export default App;
