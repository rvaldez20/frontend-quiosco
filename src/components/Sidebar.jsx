
import { categories } from '../data/categories'
import Logo from '../assets/img/logo.svg'

export default function Sidebar() {
  return (
   <aside className="md:w-72">
      
      <div className="p-4">
         <img 
            src={ Logo } 
            alt="imagen logotipo" 
            className='w-40'
         />
      </div>

      <div className='mt-10'>
         {categories.map((category) => (            
            <p key={category.id}>{category.nombre}</p>
         ))}
      </div>



   </aside>
  )
}
