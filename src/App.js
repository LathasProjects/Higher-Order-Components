import React from 'react';
import './style.css';
import Userlist from './Userlist';
import Todolist from './Todolist';
import Searchusers from './Userlist';
import Tdlist from './Todolist';
export default function App() {
	return (
		<div>
			<div className="div-style">
				<div>
					<Searchusers />
				</div>
				<div>
					<Tdlist />
				</div>
			</div>
		</div>
	);
}
