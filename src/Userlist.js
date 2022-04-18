import React, { useState, useEffect } from 'react';
import Hoc from './Hoc';
function Userlist({ datas }) {
	let userslists = (datas || []).map((user) => {
		return <p key={user.id}>{user.name}</p>;
	});

	return (
		<div>
			<div>{userslists}</div>
		</div>
	);
}
const Searchusers = Hoc(Userlist, 'users');
export default Searchusers;
