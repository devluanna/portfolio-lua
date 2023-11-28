import ExpandIcon from "../../icon-expand/icon-expand"
import { LabelTag } from "../../label-tag/label-tag";

export function CertificateThree(){
    return(

      <div className="box-page-certificate">
        <div className="box-section-certificate">

        <div className="title-certificate">   
        Relational Database Concepts and Modeling

        <div className="position-icon">
          <ExpandIcon/></div>
        
      
        </div>
        <div className="box-general-certificate">

        <LabelTag color="#0B7791" width="100px" label="MySQL" />
        <LabelTag color="#96797C" width="210px" label="Relational Database" />
     
        </div>
        </div>
        </div>
   
    )
}