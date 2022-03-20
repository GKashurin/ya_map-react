import React, {useState} from 'react'
import {Contact} from './Contact';

export const Contacts = ({items, setPosition}) => {
	const [active, setActive] = useState(null)

	return (
		<div className='contacts'>
			{items?.map((obj, i) =>
				<Contact
					key={obj.address}
					address={obj.address}
					budgets={obj.budgets}
					latitude={obj.latitude}
					longitude={obj.longitude}
					setPosition={setPosition}
					index={i}
					setActive={setActive}
					active={active === i}
				/>
			)}
		</div>
	)
}