const Items = (props) => {
	const { id, name, description, price, full_background, } = props;
	return (
		<div className="card">
			<div className="card-image">
				<img src={full_background} />
				<span className="card-title">{name}</span>
			</div>
			<div className="card-content">
				<p>{description}</p>
			</div>
			<div className="card-action">
				<button className="btn">купить</button>
				<span>{price}</span>
			</div>
		</div>
	)
}

export { Items }