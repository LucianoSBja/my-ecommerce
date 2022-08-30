import React, { useState, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';

const ItemCount = ({ stock, initial, onAdd }) => {
	const [contador, setContador] = useState(initial);

	useEffect(() => {
		console.log('useEffect');
	});

	const sumar = () => {
		contador < stock && setContador(contador + 1);
	};

	const restar = () => {
		contador > initial && setContador(contador - 1);
		contador < initial && setContador(1);
	};

	const reset = () => {
		setContador(0);
	};
	const agregar = () => {
		onAdd(contador);
	};

	return (
		<div style={styles.iCount}>
			{contador < stock ? (
				<h2>{contador}</h2>
			) : (
				<h2 style={styles.cont}>{contador}</h2>
			)}

			<button className="waves-effect waves-light btn pink" onClick={sumar}>
				+
			</button>

			<button className="waves-effect waves-light btn pink" onClick={restar}>
				-
			</button>

			<button className="waves-effect waves-light btn pink" onClick={reset}>
				Reset
			</button>
			{contador >= 1 ? (
				<button
					className="waves-effect waves-light btn pink"
					onClick={agregar}
				>
					Agregar al Carrito
				</button>
			) : (
				<button className="waves-effect waves-light btn pink">
					Aun no agregaste productos
				</button>
			)}
		</div>
	);
};

export default ItemCount;

const styles = {
	iCount: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
	},

	cont: {
		color: 'red',
	},
};
