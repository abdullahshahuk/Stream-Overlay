import React from 'react'

import { useDispatch } from 'react-redux';

import { Card } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

import { deleteFile } from '../../../../../actions/file.js'

const FileCard = (props) => {

    const dispatch = useDispatch();

    const deleteSingleFile = async (fileId) => {
        await dispatch(deleteFile(fileId));
        props.getsingle();
    }

    return (
        <div>
            <Card
                style={{ width: '20vw', height: '20vh', overflow: 'hidden'}}
                cover={
                    <img style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', height: '80%', width: ''}}
                        src={`http://195.22.157.230:5000/${props.file.filePath}`}
                    />
                }
            />
            <Card actions={[<a onClick={() => deleteSingleFile(props.file._id) } style={{zIndex: '3'}}><DeleteOutlined style={{zIndex: '3'}} key="delete" /></a>]}/>
        </div>
    )
}

export default FileCard
