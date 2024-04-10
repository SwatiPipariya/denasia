import React from 'react'
import "./SignIn.css"
import Den from "./assest/R.png"
import SmallK from "./assest/Smallpic.jpg"
import JaiS from "./assest/JaiShree.png"
import More from "./assest/MorePankh.png"

const SignIn = () => {
  return (
    <div className='sdgh'>
      <div className="cdsc">
        <div className='jshdsd'>
          <img src={Den} alt='Denasia' width={"60%"} className='denaSF' />
        </div>
        <div className='dsdfa'>
          <img src={SmallK} alt='Krishna' className='wefdc' />
        </div>
      </div>
      <div className="uhde">


        <div className='iwjs'>
          <h2 className='uedd'>Login </h2>
          <div className='jisw'>
            <div className='ysxed'>
              <label for="username" className='dfhgcdg' >Name</label>
              <input name='username' type='text' placeholder='Username' className='cftn' />
            </div>
            <div className='ysxed'>
              <label for="email" className='dfhgcdg'>Email</label>
              <input name='email' type='mail' placeholder='abc@gmail.com' className='cftn' />
            </div>
            <div className='ysxed'>
              <label for="password" className='dfhgcdg'>Password</label>
              <input name='password' type='password' placeholder='password' className='cftn' />
            </div>
            <div className='bhjil'>
              <p>Forgot Password ?</p>
            </div>
            <div className='bthsv'>
              <input type='button' value={"Login"} className='qasx' />
            </div>
          </div>
        </div>


      </div>
      <div className=" hscsjsdc">
        <div className='eqwed'>
          <img src={JaiS} alt='Jai' width={"100%"} className='JaiSh' />
        </div>
        <div className='qegpx'>
          <img src={More} alt='pankh' width={"15%"} className='mopan' />
        </div>
      </div>
      {/* </div> */}
    </div>

  )
}

export default SignIn