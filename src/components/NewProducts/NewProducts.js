import React, { useEffect, useState } from 'react'
import { ref, onValue } from "firebase/database"
import { database } from '../../firebase/firestore'

export const NewProducts = () => {
	const [data, setData] = useState()

	useEffect(() => {
		const dataList = []

		const categoryHydi = ref(database, 'category/')
		onValue(categoryHydi, (snapshot) => {
			const fullList = snapshot.val()
			for(const key in fullList) {
				const items = ref(database, `category/${key}`)
				onValue(items, (snapshot) => {
					const listItems = snapshot.val()
					for (const keyOfKey in listItems) {
						const items = ref(database, `category/${key}/${keyOfKey}`)
						onValue(items, (snapshot) => {
							dataList.push(snapshot.val())
						})
					}
				})
			}
			setData(dataList)
		})
			
	}, [])

	if(!data) return null

	return (
		<div style={{ flexDirection: 'row', flexWrap: 'wrap' }} className='d-flex'>
			{
				data && data.map((item, i) => {
					let ArrOfTrueSize = []
					for (let key in item.sizes) if(item.sizes[key]) ArrOfTrueSize.push(key)
					return (
						<div style={{ width: '400px' }} key={i}>
							<div>{item.name}</div>
							<img src={item.imageUrl} alt='img' />
							<div>
								{
									ArrOfTrueSize.map((size, i) => {
										return <div key={i}>{size}</div>
									})
								}
							</div>
						</div>
					)
				})
			}
		</div>
	)
}

	// -webkit-user-modify: read-write-plaintext-only;
