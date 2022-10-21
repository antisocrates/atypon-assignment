import React from 'react';
import styles from './modal-card.module.css';
import {ActionButton, ActionButtonTypes} from "../action-button/action-button.component";
import {Close, Copy, Delete, Link} from "../icons";

export interface ModalCardProps {
    avatar: React.ReactNode;
    placeholder: string;
}

export const ModalCard: React.FC<ModalCardProps> = ({avatar,placeholder}) => {
    return (
        <div className={`${styles.modalCard} default-box-shadow`}>
            <div className={styles.modalButtonGroup}>
                <ActionButton buttonText={"Copy Link"} buttonType={ActionButtonTypes.flatWithIcon} icon={<Link/>} action={() => {}}/>
                <ActionButton buttonText={"Duplicate"} buttonType={ActionButtonTypes.flatWithIcon} icon={<Copy/>} action={() => {}}/>
                <ActionButton buttonText={"Delete"} buttonType={ActionButtonTypes.flatWithIcon} icon={<Delete/>} action={() => {}}/>

                <i style={{marginLeft: "auto"}}>
                    <ActionButton buttonText={"Action Button"} buttonType={ActionButtonTypes.iconOnly} icon={<Close/>} action={() => {}}/>
                </i>
            </div>
            <div className={styles.modalInfo}>
                <h1 className={"text-title"}>Content Prep</h1>
                <div className={styles.modalGrid}>
                    <div className={"text-normal fg-gray-300"}>Assignee</div>
                    <div>1</div>
                    <div className={"text-normal fg-gray-300"}>Status</div>
                    <div>2</div>
                    <div className={"text-normal fg-gray-300"}>Due date</div>
                    <div>3</div>
                    <div className={"text-normal fg-gray-300"}>Created by</div>
                    <div>4</div>
                    <div className={"text-normal fg-gray-300"}>Description</div>
                    <div>5</div>


                </div>
            </div>

        </div>
    )
}