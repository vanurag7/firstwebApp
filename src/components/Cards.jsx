import Single from '../assets/single.png'
import double from '../assets/double.png'
import triple from '../assets/triple.png'


const Cards = () => {
return(
    <div className='sm:p-16 bg-white mx-auto grid md:grid-cols-3 gap-5'>
        
         <div className="border w-full flex flex-col justify-center items-center py-8 shadow-xl rounded-lg sm:hover:scale-105 duration-300">
         <img className='w-20' src={Single}  alt="card img" />
            <h1 className='font-bold text-xl '>Single User</h1>
            <p className='font-bold text-3xl py-2'>$150</p>
            <p className='border-b mt-5'>500 GB Storage</p>
            <p className='border-b my-2'>1 user Allowed</p>
            <p className='border-b '>Send upto 2gGb</p>
        <button className="capitalize bg-green-400 font-bold mt-8 w-[200px] mx-auto py-3 rounded-md text-white">get started</button>
        </div>
         <div className="border bg-slate-200 w-full flex flex-col justify-center items-center py-8 shadow-xl rounded-lg sm:hover:scale-105 duration-300">
         <img className='w-20' src={double}  alt="card img" />
            <h1 className='font-bold text-xl '>Single User</h1>
            <p className='font-bold text-3xl py-2'>$150</p>
            <p className='border-b mt-5'>500 GB Storage</p>
            <p className='border-b my-2'>1 user Allowed</p>
            <p className='border-b '>Send upto 2gGb</p>
        <button className="capitalize bg-green-400 font-bold mt-8 w-[200px] mx-auto py-3 rounded-md text-white">get started</button>
        </div>

         <div className="border w-full flex flex-col justify-center items-center py-8 shadow-xl rounded-lg sm:hover:scale-105 duration-300">
         <img className='w-20' src={triple}  alt="card img" />
            <h1 className='font-bold text-xl '>Single User</h1>
            <p className='font-bold text-3xl py-2'>$150</p>
            <p className='border-b mt-5'>500 GB Storage</p>
            <p className='border-b my-2'>1 user Allowed</p>
            <p className='border-b '>Send upto 2gGb</p>
        <button className="capitalize bg-green-400 font-bold mt-8 w-[200px] mx-auto py-3 rounded-md text-white">get started</button>
        </div>

      
       
    </div>

  )
}

export default Cards