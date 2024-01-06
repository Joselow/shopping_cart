import './Filters.css'
import { useId } from "react"
import { useFilters } from '../../hooks/useFilters'

export function Filters () {
  const { filters, resetFilters, changeFilters} = useFilters()
  const idPrice = useId()
  const idCategory = useId()

  const handleChangePrice = (e) => {
    const price = e.target.value
    
    changeFilters({minPrice: price });    
  }

  const handleChangeCategory = (e) => {
    const category = e.target.value
    changeFilters({ category });
  }

  return (
    <section className="filters">
      <div>
        <label htmlFor={idPrice}>Price</label>
        <input type="range"  min="0" max="1500"
          id={idPrice} 
          onChange={handleChangePrice}
          value={filters.minPrice}
        />
        <span>$ {filters.minPrice}</span>
      </div>
      
      <div>    
          <label htmlFor={idCategory}>Category</label>
          <select name="" 
            id={idCategory}
            onChange={handleChangeCategory}        
            value={filters.category}  
          >
            <option value="all">All </option>
            <option value="smartphones">SmartPhones</option>
            <option value="laptops">Laptops</option>
          </select>
      </div>
      <div>    
        <button style={{background: '#29f', }}
          onClick={resetFilters}
        >
          <i className="gg-close"></i>
        </button>
      </div>
    </section>

  )
}