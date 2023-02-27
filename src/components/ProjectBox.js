import * as React from "react"
import { FolderTwoTone, GithubOutlined } from '@ant-design/icons'
import '../styles/projectbox.css'
import { motion } from "framer-motion"
import { Col } from 'react-bootstrap';

const ProjectBox = (props) => {
    return (
        <Col sm={4} className="mt-4">
            <motion.div whileHover={{ scale: 1.1 }}>
                <div className="card container d-flex align-items-start flex-column" id="box" >
                    <div id="desc" >
                        <div id="links"  className="mb-auto p-2">
                            <div>
                                <h5>{props.title}</h5>
                            </div>
                            <div>
                                <a href={props.href} target="_blank"><GithubOutlined style={{ fontSize: 35 }} /></a>
                            </div>
                        </div>
                        <div id="desc" className="p-2">
                            <p>{props.desc}</p>
                        </div>

                        <div className="icons px-2" >
                            {props.icon1}
                            {props.icon2}
                            {props.icon3}
                        </div>
                    </div>

                </div>
            </motion.div>
        </Col>
    )
    // icon3={<SiMysql style={{fontSize:35}}/>}
}

export default ProjectBox;