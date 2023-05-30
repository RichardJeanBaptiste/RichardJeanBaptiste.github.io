import React from 'react'

const Backend = () => {

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
            <h3 className="skills_title">Backend Developer</h3>

            <div className="skills_box">

                <div className="skills_group">

                    <SkillsData iconclass='check' name='Python' level='Intermidiate'/>

                    <SkillsData iconclass='check' name='Flask' level='Intermidiate'/>

                    <SkillsData iconclass='check' name='NodeJS' level='Intermidiate'/>
                </div>

                <div className="skills_group">
                    <SkillsData iconclass='check' name='MongoDB' level='Intermidiate'/>

                    <SkillsData iconclass='check' name='SQL' level='Intermidiate'/>

                    <SkillsData iconclass='check' name='Firebase' level='Intermidiate'/>
                </div>
            </div>
        </div>
    )
}

export default Backend