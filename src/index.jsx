import React, {useEffect, useState} from 'react';
import {YMaps, Map, Placemark, Clusterer} from 'react-yandex-maps';
import {Contacts} from './Contacts';
import {render} from 'react-dom'

import './styles/style.scss'

const App = () => {
	const [items, setItems] = useState([]);
	const [coordinates, setCoordinates] = useState([]);
	const [position, setPosition] = useState([56.841, 60.611]);

	useEffect(() => {
		fetch('http://localhost:4200/state.json')
			.then((resp) => resp.json())
			.then(json => {
				const data = json.pickPoints;
				setItems(data);
				let coords = data.map(obj=> [obj.latitude, obj.longitude])
				setCoordinates(coords)
			})
	}, [])

	return (
		<div className='container'>
			<YMaps>
				<div className='wrapper'>
					<Contacts
						items={items}
						setPosition={setPosition}
					/>
					<Map width='100%'
						 height='100vh'
						 state={{
							 center: position,
							 zoom: 11,
							 controls: ['zoomControl', 'fullscreenControl'],
						 }}
						 modules={['control.ZoomControl', 'control.FullscreenControl']}
					>
						<Clusterer
							options={{
								preset: 'islands#invertedVioletClusterIcons',
								groupByCoordinates: false,
							}}
						>
							{coordinates?.map(coordinate =>
								<Placemark
									key={coordinate.latitude}
									geometry={coordinate}
								/>)}
						</Clusterer>
					</Map>
				</div>
			</YMaps>
		</div>
	)
}

render(<App/>, document.getElementById('app'))
