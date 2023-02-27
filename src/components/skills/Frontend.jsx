import React from 'react'

const Frontend = () => {

    const SkillsData = (props) => {

        const iClass = `bx bx-badge-${props.iconclass}`;

        return (
            <div className="skills_data">

                <i class={iClass}></i>
                <div>
                    <h3 className="skills_name">{props.name}</h3>
                    <span className="skills_level">{props.level}</span>
                </div>
            </div>
        )
    }



  return (
    <div className="skills_content">
        <h3 className="skills_title">Frontend Developer</h3>

        <div className="skills_box">
            <div className="skills_group">
                
                <SkillsData iconclass='check' name='Html' level='Basic'/>

                <SkillsData iconclass='check' name='CSS' level='Intermediate'/>

                <SkillsData iconclass='check' name='Javascript' level='Intermediate'/>
               
            </div>

            <div className="skills_group">
                
                <SkillsData iconclass='check' name='Bootstrap' level='Intermediate'/>

                <SkillsData iconclass='check' name='React' level='Intermediate'/>

                <SkillsData iconclass='check' name='Git' level='Intermediate'/>
                
            </div>
        </div>
    </div>
  )
}

export default Frontend