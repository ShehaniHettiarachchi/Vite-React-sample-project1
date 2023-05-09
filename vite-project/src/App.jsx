import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <div className='container'>
                    <div className='row'>
                        <div className='col md-12 text-center'>
                            <h3 className='main-heading'>Moments</h3>
                            <div className='underline mx-auto'></div>
                            <p className='content'>We are where art starts, but that's only the beginning. We are the movement for the liberation of creative expression. We believe that art is for everyone, and we're creating the cultural context for how it is created, discovered, and shared.
                            <br/>Founded in August 2000, DeviantArt is the largest online social network for artists and art enthusiasts, and a platform for emerging and established artists to exhibit, promote, and share their works with an enthusiastic, art-centric community. We have over 61 million registered members and attract over 45 million unique visitors per month. Our members — known as deviants — upload tens of thousands of original pieces of art every day, everything from painting and sculpture to digital art, pixel art, films, and anime.
                            <br/>Our team is made up of diverse and talented individuals from all over the world. We take great pride in creating a supportive environment for the online artist community. You can find us around the site by looking for the  symbol after our usernames.
And we're not just staff members — we're artists too. 
                            </p>
                        </div>
                        
                    </div>
                </div>
      </div>
    </>
  )
}

export default App
