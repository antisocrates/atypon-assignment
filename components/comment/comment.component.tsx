import React from 'react';
import styles from './comment.module.css';

export enum CommentTypes {
    notice,
    post
}

export interface CommentProps {
    commentType: CommentTypes;
    avatar: React.ReactElement;
    age: number;
    content?: string;
    user: string;
}

export const Comment: React.FC<CommentProps> = ({commentType,avatar,age,content,user}) => {
    return (
        <div className={styles.comment}>
            <div>{avatar}</div>
            <div className={styles.commentCol}>
                <div className={styles.commentRow}>
                    {commentType === CommentTypes.notice ?
                        <div className={"text-subtitle"}>{user} created this task</div>
                        :
                        <div className={"text-overline"}>{user}</div>
                    }
                    <div className={"text-caption"}>{age} days ago</div>
                </div>
                <div className={"text-normal"}>{content}</div>
            </div>
        </div>
    )
}