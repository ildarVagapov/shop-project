const Items = (props) => {
	const { id, name, description, price, full_background, addToCart } = props;
	return (
		<div className="card" id={id}>
			<div className="card-image">
				<img src={full_background} alt={name} />
			</div>
			<span className="card-title">{name}</span>
			<div className="card-content">
				<p>{description}</p>
			</div>
			<div className="card-action">
				<button onClick={() => addToCart({ id, name, price })} className="btn">купить</button>
				<span>{price}</span>
			</div>
		</div>
	)
}

export { Items }