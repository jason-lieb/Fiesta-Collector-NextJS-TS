import { FunctionComponent, useState } from 'react'

export const Password: FunctionComponent<{}> = () => {
  const [showPassword, setShowPassword] = useState(false)

  function toggleShowPassword() {
    console.log('test')
    setShowPassword((showPassword) => !showPassword)
  }
  return (
    <>
      {showPassword ? (
        <i
          id="toggle"
          className="fa-regular fa-eye text-md z-10 ml-2 text-zinc-500"
          onClick={toggleShowPassword}
        />
      ) : (
        <i
          id="toggle"
          className="fa-regular fa-eye-slash text-md z-10 ml-2 text-zinc-500"
          onClick={toggleShowPassword}
        />
      )}
      <input
        id="passwordInput"
        type={showPassword ? 'text' : 'password'}
        placeholder="Password"
        minLength={8}
        maxLength={20}
        className="absolute my-2 w-full rounded-lg border-2 border-solid border-zinc-500 py-1 text-center font-dosis hover:bg-zinc-300 lg:text-lg"
      />
    </>
  )
}
