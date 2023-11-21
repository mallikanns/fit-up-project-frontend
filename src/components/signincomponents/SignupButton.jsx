import React from 'react'

const SignupButton = () => {
  return (
    <div className='flex justify-between items-center gap-2'>
        <div className='label-text font-roboto-mono text-sm text-white'>Don’t have an account? </div>
        <a href="#" className='label-text font-roboto-mono text-sm font-bold text-pink hover:underline'>Sign up</a>
    </div>
  )
}

export default SignupButton