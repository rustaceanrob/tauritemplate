import { FaReact } from 'react-icons/fa'
import { SiFramer, SiTailwindcss, SiTauri, SiTypescript, SiVite } from 'react-icons/si'
import Fades from './util/Fades'

const Root = () => {
  return (
    <div className='flex flex-row w-full h-screen bg-gradient-to-b from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800 justify-center'>
        <Fades delay={250} style={'flex flex-row justify-center items-center space-x-5'}>
            <FaReact className="text-green-700" size={25}/>
            <SiTailwindcss className="animate-pulse text-green-700" size={25}/>
            <SiVite className="text-green-700" size={25}/>
            <SiFramer className="text-green-700" size={25}/>
            <SiTauri className="text-green-700" size={25}/>
            <SiTypescript className="text-green-700" size={25}/>
        </Fades>
    </div>
  )
}

export default Root