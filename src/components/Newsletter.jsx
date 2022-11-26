


const Newsletter = () => {
  return (
<div className="text-slate-50 container mx-auto py-16">
<h1 className="font-bold text-3xl ">Want tips & tricks to optimize your flow?</h1>
<p className="py-4">Sign up to our Newsletter and stay up to date.</p>
<div className="flex flex-col md:flex-row px-1">
    <input className="rounded-md pl-3 py-3 mt-4 md-p-0 mr-4 font-medium w-full text-black" type="email" placeholder="Enter E-mail"/>
    <button className="bg-green-400 font-bold px-3 mt-4 rounded-md w-[200px]  py-3   text-black ">Notify Me</button>
    
</div>
</div>  
)
}

export default Newsletter