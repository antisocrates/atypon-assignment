import React from 'react';
import styles from './comment-field.module.css';
import {Send} from '../icons';

export interface CommentFieldProps {
    avatar: React.ReactNode;
    placeholder: string;
}

export const CommentField: React.FC<CommentFieldProps> = ({avatar,placeholder}) => {
    return (
        <div className={`${styles.commentField} default-box-shadow`}>
            <div>{avatar}</div>
            <input type={"text"} placeholder={placeholder} className={`${styles.commentInput} text-normal`}/>
            <button className={styles.sendIcon} onClick={() => {}}>
                <Send/>
            </button>
        </div>
    )
}