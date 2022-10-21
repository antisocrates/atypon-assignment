import React from 'react';
import styles from './modal-card.module.css';
import {ActionButton, ActionButtonTypes} from "../action-button/action-button.component";
import {Close, Copy, Delete, Link} from "../icons";
import {Avatar, AvatarSizes} from "../avatar/avatar.component";
import avatar1 from "../../public/avatar-1.jpg";
import avatar2 from "../../public/avatar-2.jpg";
import {Tag} from "../tag/tag.component";
import {Comment, CommentTypes} from "../comment/comment.component";
import {LinkComponent} from "../link/link.component";
import {CommentField} from "../comment-field/comment-field.component";

export interface ModalCardProps {
    avatar: React.ReactNode;
    placeholder: string;
}

export const ModalCard: React.FC<ModalCardProps> = ({avatar,placeholder}) => {
    return (
        <div className={`${styles.modalCard} default-box-shadow`}>
            <div className={styles.modalCardTop}>
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
                        <div className={styles.flexRow} style={{gap: "16px"}}>
                            <div className={styles.flexRow}>
                                <i><Avatar avatarSize={AvatarSizes.small} avatarText={"Curtis"} photoURL={avatar1}/></i>
                                <span className={"text-normal"}>Giana R. Curtis</span>
                            </div>
                            <div className={styles.flexRow}>
                                <i><Avatar avatarSize={AvatarSizes.small} avatarText={"Ping"} photoURL={avatar2}/></i>
                                <span className={"text-normal"}>Liu Jin Ping</span>
                            </div>
                        </div>
                        <div className={"text-normal fg-gray-300"}>Status</div>
                        <div>
                            <Tag tagText={"In progress"}/>
                        </div>
                        <div className={"text-normal fg-gray-300"}>Due date</div>
                        <div>
                            <span className={"text-normal"}>14 Dec 2022</span>
                        </div>
                        <div className={"text-normal fg-gray-300"}>Created by</div>
                        <div>
                            <Comment avatar={<Avatar avatarSize={AvatarSizes.small} avatarText={"Jaydon Donin"}/>} user={"Jaydon Donin"} age={2} commentType={CommentTypes.status}/>
                        </div>
                        <div className={"text-normal fg-gray-300"}>Description</div>
                        <div>
                            <LinkComponent href={"#"} linkText={"Add description"}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.modalCardBottom}>
                <div className={styles.commentBox}>
                    <Comment avatar={<Avatar avatarSize={AvatarSizes.large} avatarText={"Jaydon Donin"}/>} user={"Jaydon Donin"} age={2} commentType={CommentTypes.notice}/>
                    <Comment avatar={<Avatar avatarSize={AvatarSizes.large} avatarText={"Socrates"} photoURL={avatar2}/>} user={"Liu Jin Ping"} age={2} commentType={CommentTypes.post} content={"Rotational effects in the dissociative"}/>
                </div>
                <CommentField avatar={<Avatar avatarSize={AvatarSizes.small} avatarText={"Socrates"} photoURL={avatar2}/>} placeholder={"Add a comment..."}/>
            </div>


        </div>
    )
}