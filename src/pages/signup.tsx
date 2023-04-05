import { FunctionComponent } from 'react'

const Signup: FunctionComponent<{}> = () => {
  return (
    <main
      className="h-full w-full min-h-screen"
      style={{ backgroundImage: "url('/sun.jpg')" }}
    >
      <div className="h-full min-h-screen flex items-center flex-col md:justify-center">
        <div className="bg-white rounded-md p-8 mt-16 md:mt-0">
          <div className="my-8">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-center pt-5">
              Fiesta Collector
            </h1>
          </div>
          <form>
            <ol>
              <li className="flex flex-col">
                <input
                  id="nameInput"
                  placeholder="Your name"
                  maxLength={50}
                  className="hover:bg-zinc-300 rounded-lg border-solid border-2 border-zinc-500 text-center w-full my-2 py-1 font-dosis lg:text-lg"
                />
                <input
                  id="emailInput"
                  placeholder="example@email.com"
                  maxLength={50}
                  className="hover:bg-zinc-300 rounded-lg border-solid border-2 border-zinc-500 text-center w-full my-2 py-1 font-dosis lg:text-lg"
                />
                <div className="flex items-center mt-4 mb-4 relative z-10">
                  <i
                    id="toggle"
                    className="fa-regular fa-eye-slash ml-2 text-zinc-500 z-10"
                    style={{ width: '1.25rem' }}
                  ></i>
                  <input
                    id="passwordInput"
                    type="password"
                    placeholder="Password"
                    minLength={8}
                    maxLength={20}
                    className="absolute hover:bg-zinc-300 rounded-lg border-solid border-2 border-zinc-500 text-center w-full my-2 py-1 font-dosis lg:text-lg"
                  />
                </div>
              </li>
              <li className="flex justify-center">
                <button
                  id="button"
                  className="bg-orange-400 hover:bg-zinc-300 w-full rounded-lg mt-4 mb-4 py-2 font-dosis"
                >
                  Sign Up
                </button>
              </li>
              <div id="hidden" className="hidden">
                <div className="h-10 w-[263px] md:w-[351px] lg:w-[438px] relative rounded-lg text-center text-zinc-600 border-4 border-orange-400 flex items-center">
                  <h2 className="font-dosis text-xl w-full">
                    Not a valid email
                  </h2>
                  <i
                    id="x"
                    className="absolute fa-solid fa-xmark text-xl right-4"
                  ></i>
                </div>
              </div>
              <div id="hiddentwo" className="hidden">
                <div className="h-10 w-[263px] md:w-[351px] lg:w-[438px] relative rounded-lg text-center text-zinc-600 border-4 border-orange-400 flex items-center">
                  <h2 className="font-dosis text-md text-zinc-600 w-full">
                    Password must contain 8 to 20 characters
                  </h2>
                  <i
                    id="xtwo"
                    className="absolute fa-solid fa-xmark text-xl right-4"
                  ></i>
                </div>
              </div>
              <hr className="mb-5 border-2 border-zinc-500"></hr>
              <li className="text-center m-3">
                <h4 className="text-xl font-dosis">Already have an account?</h4>
                <a
                  href="./login"
                  className="text-orange-400 hover:text-zinc-400 font-dosis text-lg"
                >
                  Login here
                </a>
              </li>
            </ol>
          </form>
        </div>
      </div>
    </main>
  )
}

export default Signup
