'use client'

//Styles
import "./my-certificates.scss"
import { useState } from 'react';
//Components
import Button from "../buttons-menu/Button";
import BoxHeader from "../info/box-header"
import { CertificateOne } from "../my-all-certificates/certificate-one/certificate-one";
import { CertificateTwo } from "../my-all-certificates/certificate-two/certificate-two";
import { CertificateThree } from "../my-all-certificates/certificate-three/certificate-three";
import { CertificateFour } from "../my-all-certificates/certificate-four/certificate-four";
import { CertificateFive } from "../my-all-certificates/certificate-five/certificate-five";
import { CertificateSix } from "../my-all-certificates/certificate-six/certificate-six";
import { CertificateSeven } from "../my-all-certificates/certificate-seven/certificate-seven";
import { CertificateEight } from "../my-all-certificates/certificate-eight/certificate-eight";

export function MyCertificates(){
    
    return(

         <div className="container-certificates">
       
         <div className="titles-certificates">
          <div className="title-page-certificates">Certificates</div>
          
          <h2>and courses</h2> </div>

        
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
