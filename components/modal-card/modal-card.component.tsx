import React from 'react';
import styles from './modal-card.module.css';
import {ActionButton, ActionButtonTypes} from "../action-button/action-button.component";
import {Close, Copy, Delete, Link} from "../icons";
import {Avatar, AvatarSizes} from "../avatar/avatar.component";
import avatar2 from "../../public/avatar-2.jpg";
import {Tag} from "../tag/tag.component";
import {AgeTypes, Comment, CommentProps, CommentTypes} from "../comment/comment.component";
import {LinkComponent} from "../link/link.component";
import {CommentField} from "../comment-field/comment-field.component";

export interface IAssignees {
    avatar: React.ReactNode;
    name: string;
}

export interface ModalCardProps {
    dueDate: string;
    createdBy: React.ReactNode;
    status: string;
    assignees: IAssignees[];
    commentHistory?: CommentProps[];
}

export const ModalCard: React.FC<ModalCardProps> = ({dueDate,createdBy,status,assignees,commentHistory}) => {
    return (
        <div className={`${styles.modalCard} default-box-shadow`} role={"dialog"} aria-labelledby={"assignmentModalLabel"}>
            <div className={styles.modalCardTop}>
                <div className={styles.modalButtonGroup}>
                    <ActionButton buttonText={"Copy Link"} buttonType={ActionButtonTypes.flatWithIcon} icon={<Link/>} action={() => {}}/>
                    <ActionButton buttonText={"Duplicate"} buttonType={ActionButtonTypes.flatWithIcon} icon={<Copy/>} action={() => {}}/>
                    <ActionButton buttonText={"Delete"} buttonType={ActionButtonTypes.flatWithIcon} icon={<Delete/>} action={() => {}}/>

                    <i style={{marginLeft: "auto"}} aria-label={"Close"}>
                        <ActionButton buttonText={"Action Button"} buttonType={ActionButtonTypes.iconOnly} icon={<Close/>} action={() => {}}/>
                    </i>
                </div>
                <div className={styles.modalInfo}>
                    <h1 className={"text-title"} aria-label={"assignmentModalLabel"}>Content Prep</h1>
                    <div className={styles.modalGrid}>
                        <div className={"text-normal fg-gray-300"}>Assignee</div>
                        <div className={styles.flexRow} style={{gap: "16px"}}>
                            {assignees.map ((assignee,index) =>
                                <div className={styles.flexRow} key={index}>
                                    <i>{assignee.avatar}</i>
                                    <span className={"text-normal"}>{assignee.name}</span>
                                </div>
                            )}
                        </div>
                        <div className={"text-normal fg-gray-300"}>Status</div>
                        <div>
                            <Tag tagText={status}/>
                        </div>
                        <div className={"text-normal fg-gray-300"}>Due date</div>
                        <div>
                            <span className={"text-normal"}>{dueDate}</span>
                        </div>
                        <div className={"text-normal fg-gray-300"}>Created by</div>
                        <div>
                            {createdBy}
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
                    {commentHistory?.map((comment,index) =>
                        <div key={index}>
                            <Comment avatar={comment.avatar} user={comment.user} age={comment.age} ageType={comment.ageType} commentType={comment.commentType} content={comment?.content}/>
                        </div>
                    )}
                </div>
                <CommentField avatar={<Avatar avatarSize={AvatarSizes.small} avatarText={"Socrates"} photoURL={avatar2}/>} placeholder={"Add a comment..."}/>
            </div>


        </div>
    )
}