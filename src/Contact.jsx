import React from 'react'

export const Contact = ({address, budgets, latitude, longitude, setPosition, index, active, setActive}) => {
	const handleClick = () => {
		setActive(index);
		setPosition([latitude, longitude])
	}

	return (
		<div
			onClick={handleClick}
			className={!active ? 'contact' : 'contact contact_active'}
		>
			<div className='contact__address'>{address}</div>
			<ul className='deliveryType'>
				{budgets?.map(item =>
					<li
						className='deliveryType__item'
						key={item}
					>
						{item}
					</li>)}
			</ul>
		</div>
	)
}