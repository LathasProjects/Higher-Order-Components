import React, { useState, useEffect } from 'react';
import Hoc from './Hoc';

function Todolist({ datas }) {
	let filteredtodolist = datas.map((dt) => {
		return <p key={dt.userId}>{dt.title}</p>;
	});
	return (
		<div>
			<div>{filteredtodolist}</div>
		</div>
	);
}
const Tdlist = Hoc(Todolist, 'todos');
export default Tdlist;
