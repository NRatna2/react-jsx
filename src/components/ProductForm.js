
import React, { useState } from 'react';
import './ProductForm.css';

function ProductForm() {
    const [formData, setFormData] = useState({
      name: '',
      description: '',
      category: '',
      quantity: '',
      price: '',
    });

    const [formErrors, setFormErrors] = useState({
        name: '',
        description: '',
        category: '',
        quantity: '',
        price: '',
      });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setFormErrors({ ...formErrors, [name]: '' });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        
        let errors = {};

    if (formData.name.trim() === '') {
      errors.name = 'Name is required';
    }

    if (formData.description.trim() === '') {
      errors.description = 'Description is required';
    }

    if (formData.category.trim() === '') {
      errors.category = 'Category is required';
    }

    if (isNaN(formData.quantity)) {
      errors.quantity = 'Quantity must be a number';
    }

    if (isNaN(formData.price)) {
      errors.price = 'Price must be a number';
    }

    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      
      alert('Form Data Submitted');
    }
  
        
      };

      

      const handleCancel = () => {
        
        setFormData({
          name: '',
          description: '',
          category: '',
          quantity: '',
          price: '',
        });
      };
    
      return (
        <div className="form-container">
          <h2>New Product</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
              <span className="error">{formErrors.name}</span>
            </div>
            <div>
              <label>Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
              />
              <span className="error">{formErrors.description}</span>
            </div>
            <div>
              <label>Category</label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
              />
              <span className="error">{formErrors.category}</span>
            </div>
            <div>
              <label>Quantity</label>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleInputChange}
              />
              <span className="error">{formErrors.quantity}</span>
            </div>
            <div>
              <label>Price</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
              />
              <span className="error">{formErrors.price}</span>
            </div>
            <div>
              <button type="submit" >Submit</button>
              <button type="button" onClick={handleCancel}>Cancel</button>
            </div>
          </form>
        </div>
      );
    }

export default ProductForm;