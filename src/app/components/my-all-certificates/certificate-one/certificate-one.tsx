import ExpandIcon from "../../icon-expand/icon-expand"
import { LabelTag } from "../../label-tag/label-tag";
import "./certificate-one.scss"

export function CertificateOne(){
    return(

      <div className="box-page-certificate">
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
        </div>
   
    )
}