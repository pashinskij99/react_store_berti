import React, { useRef, useState } from "react"
import { AddProductForm } from "./AddProductForm/AddProductForm"
import { uploadBytes } from "firebase/storage"
import { ref, getDownloadURL } from "firebase/storage"
import { storage } from "../../firebase/storage"
import { set, ref as storageRef } from 'firebase/database'
import { database } from "../../firebase/firestore"
import { v4 as uuidv4 } from 'uuid';

import './AddProduct.scss'

const writeUserData = (userId, name, price, imageUrl, sizes, descr, category) => {
	set(
		storageRef(database, `category/${ category }/` + userId), {
			id: userId,
			name,
			imageUrl,
			price,
			sizes,
			descr,
			category
		}
	)
}

const AddProduct = () => {
	const [image, setImage] = useState(null)
	const imgRef = useRef()

	const handleChange = (event) => {
		if(event.target.files[0]) {
			setImage(event.target.files[0])

			const reader = new FileReader()

			reader.onload = (event) => {
				imgRef.current.src = event.target.result
			}

			reader.readAsDataURL(event.target.files[0])
		}
	}

	const onSubmit = (event) => {
		event.preventDefault()

		const file = image
		const name = event.target[1].value
		const price = event.target[2].value
		const sizes = {
			XS: event.target[3].checked,
			S: event.target[4].checked,
			M: event.target[5].checked,
			L: event.target[6].checked,
			XL: event.target[7].checked,
		}
		const descr = event.target[8].value
		const category = event.target[9].value

		const imagesRef = ref(storage, `images/${file.name}`)
		
		const metadata = {
			contentType: null,
		};
		
		uploadBytes(imagesRef, file, metadata)
			.then((res) => {
				const refPath = res.ref._location.path_
				getDownloadURL(ref(storage, refPath))
					.then((url) => {
						const id = uuidv4()
						writeUserData(id, name, price, url, sizes, descr, category)
					})
			})
	}

	return (
		<AddProductForm
			imgRef={imgRef}
			onSubmit={onSubmit}
			handleChange={handleChange}
			image={image}
		/>
	 );
}

export default AddProduct;
