import './CategoryFilter.css';

interface CategoryProps {
  onSelectCategory: (category: string) => void;
}

export default function CategoryFilter ({onSelectCategory}: CategoryProps) {
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