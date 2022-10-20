import React from 'react';
import styles from './modal-card.module.css';

export interface ModalCardProps {
    avatar: React.ReactNode;
    placeholder: string;
}

export const ModalCard: React.FC<ModalCardProps> = ({avatar,placeholder}) => {
    return (
        <div className={styles.modalCard}>

        </div>
    )
}