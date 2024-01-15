import React from 'react'

const Backend = () => {

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
            <h3 className="skills_title">Backend Developer</h3>

            <div className="skills_box">

                <div className="skills_group">

                    <SkillsData iconclass='check' name='Python' />

                    <SkillsData iconclass='check' name='Flask' />

                    <SkillsData iconclass='check' name='NodeJS' />
                </div>

                <div className="skills_group">
                    <SkillsData iconclass='check' name='MongoDB' />

                    <SkillsData iconclass='check' name='SQL' />

                    <SkillsData iconclass='check' name='Scripting' />
                </div>
            </div>
        </div>
    )
}

export default Backend