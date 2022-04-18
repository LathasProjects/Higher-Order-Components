import React, { useEffect, useState } from 'react';

const Hoc = (Wrappedcomponent, entity) => {
	return () => {
		const [ data, setData ] = useState([]);
		const [ term, setTerm ] = useState('');

		useEffect(() => {
			const alldata = async () => {
				const res = await fetch(`https://jsonplaceholder.typicode.com/${entity}`);
				const json = await res.json();
				setData(json);
			};
			alldata();
		}, []);
		let filtereddata = data.slice(0, 10).filter((d) => {
			if (entity === 'users') {
				const { name } = d;
				return name.indexOf(term) >= 0;
			}
			if (entity === 'todos') {
				const { title } = d;
				return title.indexOf(term) >= 0;
			}
		});

		return (
			<div>
				<h1>{entity}</h1>
				<input type="text" value={term} onChange={(e) => setTerm(e.target.value)} />

				<Wrappedcomponent datas={filtereddata} />
			</div>
		);
	};
};
export default Hoc;
