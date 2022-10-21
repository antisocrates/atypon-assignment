import React from 'react';
import styles from './comment.module.css';

export enum CommentTypes {
    notice,
    post,
    status
}

export enum AgeTypes {
    second = "second",
    minute = "minute",
    hour = "hour",
    day = "day",
    week = "week",
    month = "month",
    year = "year"
}

export interface CommentProps {
    commentType: CommentTypes;
    avatar: React.ReactElement;
    age: number;
    ageType: AgeTypes;
    content?: string;
    user: string;
}

export const Comment: React.FC<CommentProps> = ({commentType,avatar,age,content,user, ageType}) => {
    return (
        <div className={styles.comment}>
            <div>{avatar}</div>
            <div className={styles.commentCol}>
                <div className={styles.commentRow}>
                    {commentType === CommentTypes.notice &&
                        <div className={"text-subtitle"}>{user} created this task</div>
                    }
                    {commentType === CommentTypes.post &&
                        <div className={"text-overline"}>{user}</div>
                    }
                    {commentType === CommentTypes.status &&
                        <div className={"text-normal"}>{user}</div>
                    }
                    <div className={"text-caption"}>{age} {ageType}{age > 1 && "s"} ago</div>
                </div>
                <div className={"text-normal"}>{content}</div>
            </div>
        </div>
    )
}