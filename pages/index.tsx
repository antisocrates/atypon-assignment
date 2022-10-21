import type {NextPage} from 'next'
import Head from 'next/head'
import {ActionButton, ActionButtonTypes} from "../components/action-button/action-button.component";
import {Close, Copy, Delete, Link, Send} from "../components/icons";
import {LinkComponent} from "../components/link/link.component";
import {Avatar, AvatarSizes} from "../components/avatar/avatar.component";
import {Tag} from "../components/tag/tag.component";
import {AgeTypes, Comment, CommentTypes} from "../components/comment/comment.component";
import {CommentField} from "../components/comment-field/comment-field.component";
import {ModalCard} from "../components/modal-card/modal-card.component";
import React from "react";
import avatar1 from "../public/avatar-1.jpg";
import avatar2 from "../public/avatar-2.jpg";
import {ModalLaunch} from "../components/modal/modal.component";

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Atypon`s frontend engineering assignment</title>
                <meta name="description" content="Atypon's frontend engineering assignment"/>
            </Head>

            <main className={"container"}>
                <h2 style={{textAlign: "center"}}>Click Button below to launch Modal:</h2>

                <ModalLaunch
                    innerDiv={
                        <ModalCard dueDate={"14 Dec 2022"}
                                   status={"In progress"}
                                   createdBy={<Comment avatar={<Avatar avatarSize={AvatarSizes.small} avatarText={"Jaydon Donin"}/>} user={"Jaydon Donin"} age={2} ageType={AgeTypes.day} commentType={CommentTypes.status}/>}
                                   assignees={[
                                       {avatar: <Avatar avatarSize={AvatarSizes.small} avatarText={"Curtis"} photoURL={avatar1}/>, name: "Giana R. Curtis"},
                                       {avatar: <Avatar avatarSize={AvatarSizes.small} avatarText={"Ping"} photoURL={avatar2}/>, name: "Liu Jin Ping"},
                                   ]}
                                   commentHistory={[
                                       {
                                           avatar: <Avatar avatarSize={AvatarSizes.large} avatarText={"Jaydon Donin"}/>,
                                           age: 2,
                                           user: "Jaydon Donin",
                                           ageType: AgeTypes.day,
                                           commentType: CommentTypes.notice
                                       },
                                       {
                                           avatar: <Avatar avatarSize={AvatarSizes.large} avatarText={"Socrates"} photoURL={avatar2}/>,
                                           user: "Liu Jin Ping",
                                           age: 1,
                                           ageType: AgeTypes.hour,
                                           commentType: CommentTypes.post,
                                           content: "Rotational effects in the dissociative"
                                       },
                                   ]}
                        />
                    }
                />

                <h3 style={{textAlign: "center"}}>Modal Card Component:</h3>

                <ModalCard dueDate={"14 Dec 2022"}
                           status={"In progress"}
                           createdBy={<Comment avatar={<Avatar avatarSize={AvatarSizes.small} avatarText={"Jaydon Donin"}/>} user={"Jaydon Donin"} age={2} ageType={AgeTypes.day} commentType={CommentTypes.status}/>}
                           assignees={[
                               {avatar: <Avatar avatarSize={AvatarSizes.small} avatarText={"Curtis"} photoURL={avatar1}/>, name: "Giana R. Curtis"},
                               {avatar: <Avatar avatarSize={AvatarSizes.small} avatarText={"Ping"} photoURL={avatar2}/>, name: "Liu Jin Ping"},
                           ]}
                           commentHistory={[
                               {
                                   avatar: <Avatar avatarSize={AvatarSizes.large} avatarText={"Jaydon Donin"}/>,
                                   age: 2,
                                   user: "Jaydon Donin",
                                   ageType: AgeTypes.day,
                                   commentType: CommentTypes.notice
                               },
                               {
                                   avatar: <Avatar avatarSize={AvatarSizes.large} avatarText={"Socrates"} photoURL={avatar2}/>,
                                   user: "Liu Jin Ping",
                                   age: 1,
                                   ageType: AgeTypes.hour,
                                   commentType: CommentTypes.post,
                                   content: "Rotational effects in the dissociative"
                               },
                           ]}
                />

                <h2 style={{textAlign: "center"}}>Components Showcase:</h2>

                <section>
                    <h3 style={{textAlign: "center"}}>Action Buttons:</h3>
                    <div className={"flex-row"}>
                        <ActionButton buttonText={"Action Button"} buttonType={ActionButtonTypes.flat} icon={<Link/>} action={() => {}}/>
                        <ActionButton buttonText={"Action Button"} buttonType={ActionButtonTypes.flatWithIcon} icon={<Link/>} action={() => {}}/>
                        <ActionButton buttonText={"Action Button"} buttonType={ActionButtonTypes.iconOnly} icon={<Link/>} action={() => {}}/>
                    </div>
                </section>

                <section>
                    <h3 style={{textAlign: "center"}}>Links:</h3>
                    <LinkComponent href={"#"} linkText={"Add description"}/>
                </section>

                <section>
                    <h3 style={{textAlign: "center"}}>Avatars:</h3>
                    <div className={"flex-row"}>
                        <Avatar avatarSize={AvatarSizes.large} avatarText={"Socrates"} photoURL={avatar2}/>
                        <Avatar avatarSize={AvatarSizes.small} avatarText={"Socrates"} photoURL={avatar2}/>
                        <Avatar avatarSize={AvatarSizes.large} avatarText={"Socrates"}/>
                        <Avatar avatarSize={AvatarSizes.small} avatarText={"Socrates"}/>
                    </div>
                </section>

                <section>
                    <h3 style={{textAlign: "center"}}>Tags:</h3>
                    <Tag tagText={"In progress"}/>
                </section>

                <section>
                    <h3 style={{textAlign: "center"}}>Comments:</h3>
                    <div className={"flex-col"}>
                        <Comment avatar={<Avatar avatarSize={AvatarSizes.large} avatarText={"Socrates"} photoURL={avatar2}/>} user={"Jaydon Donin"} age={2} ageType={AgeTypes.day} commentType={CommentTypes.notice}/>
                        <Comment avatar={<Avatar avatarSize={AvatarSizes.large} avatarText={"Socrates"} photoURL={avatar2}/>} user={"Jaydon Donin"} age={5} ageType={AgeTypes.hour} commentType={CommentTypes.notice}/>
                        <Comment avatar={<Avatar avatarSize={AvatarSizes.large} avatarText={"Socrates"} photoURL={avatar2}/>} user={"Jaydon Donin"} age={1} ageType={AgeTypes.month} commentType={CommentTypes.post} content={"Rotational effects in the dissociative"}/>
                    </div>
                </section>

                <section>
                    <h3 style={{textAlign: "center"}}>CommentField:</h3>
                    <CommentField avatar={<Avatar avatarSize={AvatarSizes.small} avatarText={"Socrates"} photoURL={avatar2}/>} placeholder={"Add a comment..."}/>
                </section>

                <section>
                    <h3 style={{textAlign: "center"}}>Icons:</h3>
                    <div className={"flex-row"}>
                        <i className={"icon"}><Link/></i>
                        <i className={"icon"}><Close/></i>
                        <i className={"icon"}><Copy/></i>
                        <i className={"icon"}><Delete/></i>
                        <i className={"icon"}><Send/></i>
                    </div>
                </section>

            </main>
        </div>
    )
}

export default Home
