import "./informations.scss"
import Image from 'next/image';

export function Informations(){
    return(
        <div className="box-details">
 
        <Image src="/lua.jpg" alt="Vercel Logo" width={220} height={220} priority />
          <div className='titles'>
            <h1>Hi, I'm Luana! 👋</h1>
            <h2>Software Developer</h2>
            <h3>🇧🇷 PT-BR - Native Speaker</h3>
            <h3> 🇺🇸 EN - Basic (studying)</h3>
          </div>
        </div>

    )
}