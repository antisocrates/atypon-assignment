import React from 'react';
import styles from './modal-card.module.css';
import {ActionButton, ActionButtonTypes} from "../action-button/action-button.component";
import {Close, Link} from "../icons";

export interface ModalCardProps {
    avatar: React.ReactNode;
    placeholder: string;
}

export const ModalCard: React.FC<ModalCardProps> = ({avatar,placeholder}) => {
    return (
        <div className={`${styles.modalCard} default-box-shadow`}>
            <div className={styles.modalButtonGroup}>
                <ActionButton buttonText={"Action Button"} buttonType={ActionButtonTypes.flat} icon={<Link/>} action={() => {}}/>
                <ActionButton buttonText={"Action Button"} buttonType={ActionButtonTypes.flatWithIcon} icon={<Link/>} action={() => {}}/>
                <ActionButton buttonText={"Action Button"} buttonType={ActionButtonTypes.iconOnly} icon={<Link/>} action={() => {}}/>
                <i className={"icon"} style={{marginLeft: "auto"}}><Close/></i>
            </div>
        </div>
    )
}