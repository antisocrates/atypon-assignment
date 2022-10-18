import React from 'react';
import styles from './action-button.module.css';

export enum ActionButtonTypes {
    flat,
    flatWithIcon,
    iconOnly
}

export interface ActionButtonProps {
    buttonType: ActionButtonTypes;
    buttonText: string;
    icon?: any;
}

export const ActionButton: React.FC<ActionButtonProps> = ({buttonType, buttonText, icon}) => {
    return (
        <button className={styles.actionButton}>{buttonText}</button>
    )
}