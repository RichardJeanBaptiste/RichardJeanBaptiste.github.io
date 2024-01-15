import React from 'react'

const Frontend = () => {

    const SkillsData = (props) => {

        const iClass = `bx bx-badge-${props.iconclass}`;

        return (
            <div className="skills_data">

                <i class={iClass}></i>
                <div>
                    <h3 className="skills_name">{props.name}</h3>
                </div>
            </div>
        )
    }



  return (
    <div className="skills_content">
        <h3 className="skills_title">Frontend Developer</h3>

        <div className="skills_box">
            <div className="skills_group">
                
                <SkillsData iconclass='check' name='Html'/>

                <SkillsData iconclass='check' name='CSS'/>

                <SkillsData iconclass='check' name='Javascript'/>
               
            </div>

            <div className="skills_group">
                
                <SkillsData iconclass='check' name='Bootstrap'/>

                <SkillsData iconclass='check' name='React'/>

                <SkillsData iconclass='check' name='Git'/>
                
            </div>
        </div>
    </div>
  )
}

export default Frontend