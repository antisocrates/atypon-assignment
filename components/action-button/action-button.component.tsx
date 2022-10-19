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
    action: () => void;
}

export const ActionButton: React.FC<ActionButtonProps> = ({buttonType, buttonText, icon, action}) => {
    return (
        <>
            {buttonType === ActionButtonTypes.flat &&
            <button className={`${styles.actionButton} ${styles.flat} text-button`} onClick={action}>
                {buttonText}
            </button>
            }
            {buttonType === ActionButtonTypes.flatWithIcon &&
                <button className={`${styles.actionButton} ${styles.flatWithIcon} text-button`} onClick={action}>
                    <i style={{marginRight: 2}}>{icon}</i> {buttonText}
                </button>
            }
            {buttonType === ActionButtonTypes.iconOnly &&
                <button className={`${styles.actionButton} ${styles.iconOnly} text-button`} onClick={action}>
                    <i>{icon}</i>
                </button>
            }
        </>
    )
}