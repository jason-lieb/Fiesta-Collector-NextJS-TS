export default function Login() {
  return (
    <main
      className="h-full w-full"
      style={{ backgroundImage: "url('/img/sun.jpg')" }}
    >
      <div className="flex h-full flex-col items-center md:justify-center">
        <div className="mt-16 rounded-md bg-white p-8 md:mt-0">
          <div className="my-8">
            <h1 className="pt-5 text-center font-serif text-4xl md:text-5xl lg:text-6xl">
              Fiesta Collector
            </h1>
          </div>
          <form>
            <ol>
              <li className="flex flex-col">
                <input
                  id="emailInput"
                  placeholder="example@email.com"
                  maxLength={50}
                  className="my-2 w-full rounded-lg border-2 border-solid border-zinc-500 py-1 text-center font-dosis hover:bg-zinc-300 lg:text-lg"
                />
                <div className="relative mt-4 mb-4 flex items-center">
                  <i
                    id="toggle"
                    className="fa-regular fa-eye-slash text-md z-10 ml-2 text-zinc-500"
                  ></i>
                  <input
                    id="passwordInput"
                    type="password"
                    placeholder="Password"
                    minLength={8}
                    maxLength={20}
                    className="absolute my-2 w-full rounded-lg border-2 border-solid border-zinc-500 py-1 text-center font-dosis hover:bg-zinc-300 lg:text-lg"
                  />
                </div>
              </li>
              <li className="flex justify-center">
                <button
                  id="button"
                  className="mt-4 mb-4 w-full rounded-lg bg-orange-400 py-2 font-dosis hover:bg-zinc-300"
                >
                  Login
                </button>
              </li>
              <div id="hidden" className="hidden">
                <div className="flex h-10 w-[263px] items-center rounded-lg border-4 border-orange-400 text-center text-zinc-600 md:w-[351px] lg:w-[438px]">
                  <h2 className="w-full font-dosis text-xl">Failed to login</h2>
                  <i
                    id="x"
                    className="fa-solid fa-xmark absolute ml-[236px] text-xl md:ml-[320px] lg:ml-[405px]"
                  ></i>
                </div>
              </div>
              <hr className="mb-5 border-2 border-zinc-500" />
              <li className="m-3 text-center">
                <h4 className="font-dosis text-xl">
                  Don&apos;t have an account?
                </h4>
                <a
                  href="./signup"
                  className="font-dosis text-lg text-orange-400 hover:text-zinc-400"
                >
                  Create account
                </a>
              </li>
            </ol>
          </form>
        </div>
        <div className="mt-8 rounded bg-white p-8">
          <h4 className="text-center font-dosis text-xl">
            Login with these test credentials
          </h4>
          <p className="text-center font-dosis text-zinc-400">
            Jason@email.com
          </p>
          <p className="text-center font-dosis text-zinc-400">test1234</p>
          <h4 className="text-center font-dosis text-xl">
            Or create your own account
          </h4>
        </div>
      </div>
    </main>
  )
}
