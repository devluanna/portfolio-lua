'use client'


//Components
import { CertificateOne } from "../my-all-certificates/certificate-one/certificate-one";
import { CertificateTwo } from "../my-all-certificates/certificate-two/certificate-two";
import { CertificateThree } from "../my-all-certificates/certificate-three/certificate-three";
import { CertificateFour } from "../my-all-certificates/certificate-four/certificate-four";
import { CertificateFive } from "../my-all-certificates/certificate-five/certificate-five";
import { CertificateSix } from "../my-all-certificates/certificate-six/certificate-six";
import { CertificateSeven } from "../my-all-certificates/certificate-seven/certificate-seven";
import { CertificateEight } from "./certificate-eight/certificate-eight";


export function AllCertificates(){
    const handleButtonClick = (type: string) => {
    
      };
    
    return(

          <div className="page-projects">
          <div className="box-one">
            <CertificateOne/>
            <CertificateEight/>
            <CertificateSix/>
            <CertificateFour/>
            </div>
            <div className="box-two">
            <CertificateFive/>
            <CertificateThree/>
            <CertificateSeven/>
            <CertificateTwo/>
            </div>
           </div>
    
    )
};
