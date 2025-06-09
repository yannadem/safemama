import { useState } from "react";
import './NewProductForm.css';

export default function NewProductForm() {
  const [formData, setFormData] = useState({
    name: "",
    safety: "unsafe",
    category: "",
    notes: "",
    source: "",
  })

  const handleChange = (ev) => {
    setFormData({
      ...formData,
      [ev.target.name]: ev.target.value
    })
  }

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error('error to add new error');

      setFormData({
        name: "",
        safety: "unsafe",
        category: "",
        notes: "",
        source: "",
      });

    } catch (error) {
      console.error('error', error)
    }
  }

  return (
    <section className="new-product-section">
      <p className="form-intro">Know something useful? Help other moms!</p>
      <h2 className="title-new-prd">Add New Product</h2> 
    <form className="new-product-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Product Name</label>
        <input id="name" type="text" name="name" placeholder="Product name" value={formData.name} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="safety">Risk Level</label>
        <select id="safety" name="safety" value={formData.safety} onChange={handleChange}>
          <option value="safe">Safe</option>
          <option value="unsafe">Unsafe</option>
          <option value="caution">Caution</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="category">Category</label>
        <input id="category" type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="notes">Notes</label>
        <textarea name="notes" placeholder="Add some notes" value={formData.notes} onChange={handleChange}></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="source">Source Link</label>
        <input id="source" type="text" name="source" placeholder="Source Link" value={formData.source} onChange={handleChange} />
      </div>
      <div className="update-btn"> 
      <button type="submit">Update</button>
      </div>
    </form>
    </section>
  )

}