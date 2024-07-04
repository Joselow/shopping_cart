import { useContext } from "react";
import { FiltersContext } from "../context/filterContext.jsx";

export function useFilters () {
  const filterContext = useContext(FiltersContext)

  if (filterContext === undefined) {
    throw new Error('use this context inside the FilterProvider');
  }

  const { filters, setFilter } = filterContext

  const resetFilters = () => {    
    setFilter({
      minPrice: 0,
      category: 'all'
    })
  }

  const changeFilters = (newfilters= {} ) => {    
    const { minPrice, category  } = newfilters;
    setFilter( prevFilters => {
      return {
        minPrice: minPrice ?? prevFilters.minPrice, 
        category: category ?? prevFilters.category 
      }
    });
  }

  const filterProducts = ({ products }) => { 
    return products.filter((product) => {
        const { minPrice, category } = filters;

        const isAtMinPriceLimit = product.price >= minPrice
        const herCategoryIsAll = category === 'all'
        const isTheCategorySearched = product.category === category

        return isAtMinPriceLimit && (herCategoryIsAll || isTheCategorySearched);
      })
  }
  
  return { filterProducts, filters, setFilter, resetFilters, changeFilters }
}