import * as React from "react"
import { FolderTwoTone, GithubOutlined } from '@ant-design/icons'
import '../styles/projectbox.css'
import { motion } from "framer-motion"

const ProjectBox = (props) => {
    return (
        <motion.div whileHover={{scale:1.1}}>
            <div className="card container" id="box" >
                <div id="links" className="p-6">
                    <div>
                        <FolderTwoTone twoToneColor="#eb2f96" style={{ fontSize: 30 }} />
                    </div>
                    <div>
                        <a href={props.href} target="_blank"><GithubOutlined style={{ fontSize: 25 }} /></a>
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
        </motion.div>
    )
}

export default ProjectBox;