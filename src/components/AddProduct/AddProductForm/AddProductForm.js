import React from 'react'
import { Form, Button, FormControl } from 'react-bootstrap'

export const AddProductForm = (
	{
		onSubmit, imgRef, handleChange, image
	}) => {

  	return (
		<Form
			className="add-product"
			name='file'
			onSubmit={onSubmit}
		>
			<Form.Group controlId="formFile" className="mb-3">
    			<Form.Label>Upload Image</Form.Label>
    			<Form.Control
					onChange={handleChange}
					type="file"
				/>
  			</Form.Group>
			{
				image &&
				<Form.Group controlId="formFile" className='img-wrapper mb-3'>
					<img ref={imgRef} alt="img"/>
				</Form.Group>
			}
			<Form.Group controlId="formFile" className="mb-3">
				<Form.Label>Name</Form.Label>
				<FormControl aria-label="Small" name='name' aria-describedby="inputGroup-sizing-sm" />
			</Form.Group>
			<Form.Group controlId="formFile" className="mb-3">
				<Form.Label>Price</Form.Label>
				<FormControl aria-label="Small" name='price' aria-describedby="inputGroup-sizing-sm" />
			</Form.Group>
			<Form.Group controlId="formFile" className="mb-3">
    			<Form.Label>Sizes</Form.Label>
				{
					['XS', 'S', 'M', 'L', 'XL'].map((size, i) => {
						return (
							<div key={i} className="mb-3">
								<Form.Check
									inline
									label={size}
									name="checkbox"
									type='checkbox'
									id={`inline-checkbox-1`}
								/>
							</div>
						)
					})
				}
  			</Form.Group>
			<Form.Group controlId="formFile" className="mb-3">
				<Form.Label>Description</Form.Label>
				<Form.Control as="textarea" rows={3} />
			</Form.Group>
			<Form.Group controlId="formFile" className="mb-3">
				<Form.Label>Select category</Form.Label>
				<Form.Select name='select' size="sm">
					<option>Рюкзаки</option>
					<option>Худи</option>
					<option>Куртки</option>
				</Form.Select>
			</Form.Group>
			<Form.Group>
				<Button type='submit'>Add</Button>
			</Form.Group>
		</Form>
  )
}
