import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className='container mx-auto flex justify-between py-12 fixed top-0 left-0 right-0 text-white font-bold'>
        <div className="">Sadi</div>
        <ul className="flex justify-between">
          <li className='px-5 cursor-pointer'>
            <Link href="/">Home</Link>
          </li>
          <li className='px-5 cursor-pointer'>
            <Link href="/about">About</Link>
          </li>
          <li className='px-5 cursor-pointer'>
            <Link href="/skills">Skills</Link>
          </li>
          <li className='px-5 cursor-pointer'>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li className='px-5 cursor-pointer'>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <div className="">
          icon
        </div>
      </div>
      <main className={`w-full h-[80vh] bg-[url(/mouse-bg.png)] bg-cover bg-no-repeat`}>
        <div className="w-full h-full bg-black opacity-50  pointer-events-none">
          <h1>Tanvir Hossain Sadi</h1>
        </div>
      </main>
    </>
  );
}
