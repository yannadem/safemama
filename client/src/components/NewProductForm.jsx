import { useState } from "react";

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
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Product name" value={formData.name} onChange={handleChange} />
      <select name="safety" value={formData.safety} onChange={handleChange}>
        <option value="safe">Safe</option>
        <option value="unsafe">Unsafe</option>
        <option value="caution">Caution</option>
      </select>
      <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} />
      <textarea name="notes" placeholder="Add some notes" value={formData.notes} onChange={handleChange}></textarea>
      <input type="text" name="source" placeholder="Source Link" value={formData.source} onChange={handleChange} />
      <button type="submit">Add new product</button>
    </form>
  )

}