import React from 'react';
import styles from './comment.module.css';

export enum CommentTypes {
    notice,
    post
}

export interface CommentProps {
    commentType: CommentTypes;
    avatar: React.FC;
    age: number;
    content?: string;
    user: string;
}

export const Comment: React.FC<CommentProps> = ({commentType,avatar,age,content,user}) => {
    return (
        <div className={styles.comment}>

        </div>
    )
}