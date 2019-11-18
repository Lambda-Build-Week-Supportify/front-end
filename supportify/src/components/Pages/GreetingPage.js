import React from 'react'


////////////ORGANISMS
import Login from '../Organisms/Login'
import SignUp from '../Organisms/SignUp'

export default function GreetingPage(){


    return (


        <div>
            <header>
                    Header
            </header>
            <div>
                Ghana Admin
                <Login/>
            </div>
            <div>
                US Boardmember
                <Login/>
            </div>
            <div>
                <SignUp/>
            </div>
        </div>
    )
}