import React from 'react';
import styles from './avatar.module.css';
import Image from 'next/future/image';


export enum AvatarSizes {
    small,
    large
}

export interface AvatarProps {
    avatarSize?: AvatarSizes;
    avatarText: string;
    photoURL?: any;
}

export const Avatar: React.FC<AvatarProps> = ({avatarSize, avatarText, photoURL}) => {
    return (
        <div className={`${styles.avatar} ${avatarSize === AvatarSizes.small ? styles.small : styles.large} bg-accent fg-white`}>
            {photoURL ?
                <Image src={photoURL} alt={"user avatar"} className={`${styles.avatar} ${avatarSize === AvatarSizes.small ? styles.small : styles.large}`}/>
                : avatarText[0]
            }
        </div>
        // <Image src={photoURL} alt={"user avatar"}/>
    )
}