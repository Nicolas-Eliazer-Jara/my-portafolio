
export default function nav() {
  return (
    <>
    <nav className="relative text- z-50 ">
          <div className="backdrop-blur   fixed top-0 z-50 flex items-center justify-between h-[50px] w-full">
            <a href='#home' className="hover:text-yellow-300 pl-7">Nicolas Jara</a>
            <div className="flex text-[16px] mr-8">
              <ul className="flex">
                <a href='#home' className="px-6 hover:text-yellow-300">Home</a>
                <a  href='#about' className="px-6 hover:text-yellow-300">About</a>
                <a  href='#work' className="px-6 hover:text-yellow-300">Work</a>
                <a  href='#contact' className="px-6 hover:text-yellow-300">Contact</a>
              </ul>
            </div>
          </div>
        </nav>
    </>
  )
}
