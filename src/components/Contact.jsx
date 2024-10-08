import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
        <main>
            <h1>Contact Us</h1>
            <form>
                <div>
                    <label>Name</label>
                    <input type="text" required placeholder='Temp' />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" required placeholder='Temp@xyz.com' />
                </div>
                <div>
                    <label>Message</label>
                    <input type="text" required placeholder='Write Your Query Here...' />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </main>
    </div>
  )
}

export default Contact
