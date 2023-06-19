import { Link } from "react-router-dom"
 function Navbar(){

    const routes = [
        {
        name: 'Home',
        icon:'/house.svg',
        path:'/',
      },{
        name: 'Saved',
        icon:'/favorites.svg',
        path:'/favoriteMovies',
    
      },
      {
        name:'Search',
        icon:'/searchNavbar.svg',
        path:'/searchMovies'
      }
    ]
    
    return (
        <ul className='flex gap-8 pt-6 px-8 '>
        {
          routes.map((route) => (
            <Link key={route.name} to={route.path} className='text-1xl font-bold hover:text-white/80 '>
           <div  className='flex cursor-pointer justify-center items-center gap-4 px-4'> 
            <img className='h-[20px]' src={route.icon} alt="" />
             <p className="opacity-0 md:opacity-100">{route.name}</p>
            </div>
            </Link>

            
          ))
        }
       </ul>    
    )

}

export default Navbar
