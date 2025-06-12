import './CategoryFilter.css';

interface CatergoryProps {
  onSelectCategory : Function
}

export default function CategoryFilter ({onSelectCategory}:CatergoryProps) {
  const categories = ['All', 'Food', 'Cosmetics', 'Medications'];

  return (
    <div className="category-filter">
      {categories.map(cat => {
      return (
        <button
        key={cat}
        onClick={()=> onSelectCategory(cat)}
        >
          {cat}

        </button>
      )
      })

      }

    </div>
  );
}