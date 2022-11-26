import{AiFillTwitterCircle,AiFillLinkedin,AiFillGithub,AiFillFacebook,AiFillInstagram} from 'react-icons/ai';



const Footer = () => {
  return (
    <div className='container mx-auto grid lg:grid-cols-3 p-8 text-gray-400 gap-10 '>
        <div className="">
            <h1 className="text-3xl text-green-400 font-bold">REACT</h1>
            <p className='my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse unde ad quos assumenda blanditiis illum?</p>
            <div className="flex justify-between">
                <AiFillFacebook  className='hover:text-green-400 hover:scale-150 duration-300' size={30}/>
                <AiFillTwitterCircle  className='hover:text-green-400 hover:scale-150 duration-300' size={30}/>
                <AiFillInstagram  className='hover:text-green-400 hover:scale-150 duration-300' size={30}/>
                <AiFillLinkedin className='hover:text-green-400 hover:scale-150 duration-300'  size={30}/>
                <AiFillGithub className='hover:text-green-400 hover:scale-150 duration-300'  size={30}/>
            </div>
        </div>
        <div className="flex justify-between ">
            <div className="">
                <p className='font-bold text-lg mb-4'>Solution</p>
                <p className='mb-2 font-medium text-sm'>Support</p>
                <p className='mb-2 font-medium text-sm'>Support</p>
                <p className='mb-2 font-medium text-sm'>Support</p>
                <p className='mb-2 font-medium text-sm'>Support</p>
            </div>
            <div className="">
                <p className='font-bold text-lg mb-4'>Solution</p>
                <p className='mb-2 font-medium text-sm'>Support</p>
                <p className='mb-2 font-medium text-sm'>Support</p>
                <p className='mb-2 font-medium text-sm'>Support</p>
                <p className='mb-2 font-medium text-sm'>Support</p>
            </div>
        </div>


        <div className="flex justify-between">
            <div className="">
                <p className='font-bold text-lg mb-4'>Solution</p>
                <p className='mb-2 font-medium text-sm'>Support</p>
                <p className='mb-2 font-medium text-sm'>Support</p>
                <p className='mb-2 font-medium text-sm'>Support</p>
                <p className='mb-2 font-medium text-sm'>Support</p>
            </div>
            <div className="">
                <p className='font-bold text-lg mb-4'>Solution</p>
                <p className='mb-2 font-medium text-sm'>Support</p>
                <p className='mb-2 font-medium text-sm'>Support</p>
                <p className='mb-2 font-medium text-sm'>Support</p>
                <p className='mb-2 font-medium text-sm'>Support</p>
            </div>
        </div>
    </div>
  )
}

export default Footer