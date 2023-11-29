import ExpandIcon from "../../icon-expand/icon-expand"
import { LabelTag } from "../../label-tag/label-tag";
import "./certificate-one.scss"

export function CertificateOne(){
    return(

      <a href="https://www.credly.com/badges/30bef1ae-3182-4599-946a-793ce88e5510" className="box-page-certificate">
        <div className="box-section-certificate">

        <div className="title-certificate">   
        AWS Certified Cloud Practitioner

        <div className="position-icon">
          <ExpandIcon/></div>
        
      
        </div>
        <div className="box-general-certificate">

        <LabelTag color="#FF8D04" width="210px" label="Amazon Web Services" />
        <LabelTag color="#213444" width="210px" label="Cloud Computing" />
     
        </div>
        </div>
        </a>
   
    )
}