import "./badges.scss"
import Image from 'next/image';

export function Bagdes(){
    return(

        <div className="badges">

        <div className="image-primary">
         <Image
          src="/CertificateCloud.png"
          alt="Certificate AWS"
          width={155}
          height={155}
          priority />
        </div>
        <div className="image-secondary">

         <Image
          src="/Certificate.png"
          alt="Certificate AWS"
          width={135}
          height={135}
          priority />
         </div>

        </div>
    )
}