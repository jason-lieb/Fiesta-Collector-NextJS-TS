import { FunctionComponent } from 'react'
import Link from 'next/link'

export const Nav: FunctionComponent<void> = () => {
  return (
    <>
      <nav className="sticky top-0 z-20 bg-zinc-600 text-white flex flex-col items-center sm:justify-between sm:flex-row">
        <h1 className="font-serif m-4 sm:ml-6 text-2xl md:text-4xl lg:text-5xl">
          Fiesta Collector
        </h1>
        <div className="flex items-center sm:mr-6">
          <Link
            href="../"
            className="font-dosis text-xl md:text-2xl m-3 hover:text-orange-400"
          >
            Your Collection
          </Link>
          <Link
            href="../browse"
            className="font-dosis text-xl md:text-2xl m-3 hover:text-orange-400"
          >
            Browse
          </Link>
          <button
            id="logOutButton"
            className="font-dosis text-xl md:text-2xl m-3 hover:text-orange-400"
          >
            Log Out
          </button>
        </div>
      </nav>
      <div id="hidden" className="hidden">
        <div className="h-10 w-[263px] md:w-[351px] lg:w-[483px] z-30 rounded-lg text-center text-zinc-600 border-4 border-orange-400 bg-white flex items-center">
          <h2 className="font-dosis text-xl w-full">
            Failed to log out, please try again
          </h2>
          <i
            id="x"
            className="absolute fa-solid fa-xmark text-xl ml-[236px] md:ml-[320px] lg:ml-[450px]"
          ></i>
        </div>
      </div>
    </>
  )
}
