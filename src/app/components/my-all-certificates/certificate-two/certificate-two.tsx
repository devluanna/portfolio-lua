import ExpandIcon from "../../icon-expand/icon-expand"
import { LabelTag } from "../../label-tag/label-tag";


export function CertificateTwo(){
    return(

      <a href="https://www.udemy.com/certificate/UC-865c03c4-e085-42f0-a0aa-eb9707b74421/" className="box-page-certificate">
        <div className="box-section-certificate">

        <div className="title-certificate">   
        React from Zero to Mastery (w/ hooks, router, API, Projects)

        <div className="position-icon">
          <ExpandIcon/></div>
        
      
        </div>
        <div className="box-general-certificate">

        <LabelTag color="#0097B2" width="110px" label="React.JS" />
        <LabelTag color="#FFC61A" width="120px" label="Javascript" />
        <LabelTag color="#3171BC" width="120px"  label="Typescript" />
     
        </div>
        </div>
        </a>
   
    )
}