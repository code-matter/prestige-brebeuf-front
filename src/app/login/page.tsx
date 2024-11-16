import React from 'react'
import { getSession, login, logout } from '../../../lib'
import { redirect } from 'next/navigation'
import { Button } from 'antd'

type Props = {}

const page = async (props: Props) => {
    const session = await getSession()
    return (
        <div>
            <form
                action={async formData => {
                    'use server'
                    await login(formData)
                    // redirect('/')
                }}
            >
                <input name='email' type='email' placeholder='Email' />
                <Button htmlType='submit'>Login</Button>
            </form>
            <form
                action={async () => {
                    'use server'
                    await logout()
                    // redirect('/')
                }}
            >
                <Button htmlType='submit'>Logout</Button>
            </form>
            <pre>{JSON.stringify(session, null, 2)}</pre>
        </div>
    )
}

export default page
