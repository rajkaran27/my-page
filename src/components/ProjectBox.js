import * as React from "react"
import { FolderTwoTone, GithubOutlined } from '@ant-design/icons'
import '../styles/projectbox.css'

const ProjectBox = (props) => {
    return (
        <div className="card " id="box">
            <div id="links" className="p-6">
                <div>
                    <FolderTwoTone twoToneColor="#eb2f96" style={{ fontSize: 30 }} />
                </div>
                <div>
                    <a href={props.href}><GithubOutlined style={{ fontSize: 25 }} /></a>
                </div>
            </div>
            <div id="desc" >
                <h5>{props.title}</h5>
                <p>{props.desc}</p>

                <li>{props.lang1}</li>
                <li>{props.lang2}</li>
                <li>{props.lang3}</li>
                <li>{props.lang4}</li>

            </div>

        </div>
    )
}

export default ProjectBox;