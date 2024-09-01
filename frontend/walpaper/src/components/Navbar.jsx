import toast, { Toaster } from 'react-hot-toast';
function Navbar({ toggleSearch, setToggleSearch }) {
  const search = () => {
    setToggleSearch(!toggleSearch); // Toggle the search input visibility
  };


  return (
    <>
      <div  className='text-black p-6 flex justify-between'>
        <div className='text-black font-[poppins] font-bold tracking-wider text-center items-center flex text-2xl'>Magic Stock</div>
        <div  className='flex p-2 h-[45px] space-x-3 cursor-pointer'>
          <img onClick={search} className='cursor-pointer' src="./Search.png" alt="Search" />
          <img onClick={()=>toast('AI Feature Coming Soon!', {
  icon: '⌛',
})} src="./ai.png" alt="Profile" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
