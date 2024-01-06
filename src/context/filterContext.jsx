import { createContext, useState } from "react";

export const FiltersContext = createContext()

export function FilterProvider ({children}) {
  const [filters, setFilter]= useState({
    minPrice: 0,
    category: 'all'
  })
  return (
    <FiltersContext.Provider value={
      {
        filters, setFilter
      }
    }>
      {children}
    </FiltersContext.Provider>
  )
}