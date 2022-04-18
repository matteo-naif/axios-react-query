import type { NextPage } from 'next'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import People from '../components/People';
import Planets from '../components/Planets';
import ToggleEnum from '../enum/toggle.enum';

const Home: NextPage = () => {
  const [page, setPage] = useState(ToggleEnum.PLANETS);

  return (
    <>
    <h1>Star wars info</h1>
    
    <Navbar page={page} setPage={setPage} />

    <div className='content'>
      { page === ToggleEnum.PLANETS ? <Planets /> : <People />}

    </div>
    </>
  )
}

export default Home
