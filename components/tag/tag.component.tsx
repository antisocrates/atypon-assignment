import React from 'react';
import styles from './tag.module.css';


export interface TagProps {
    tagText: string
}

export const Tag: React.FC<TagProps> = ({tagText}) => {
    return (
        <div className={`${styles.tag} text-overline fg-yellow-500`}>
            {tagText}
        </div>
    )
}