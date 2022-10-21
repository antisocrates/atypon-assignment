import type {NextPage} from 'next'
import Head from 'next/head'
import {ActionButton, ActionButtonTypes} from "../components/action-button/action-button.component";
import {Link, Send, Copy, Close, Delete} from "../components/icons";
import {LinkComponent} from "../components/link/link.component";
import {Avatar, AvatarSizes} from "../components/avatar/avatar.component";
import avatar2 from "../public/avatar-2.jpg";
import {Tag} from "../components/tag/tag.component";
import {Comment, CommentTypes} from "../components/comment/comment.component";
import {CommentField} from "../components/comment-field/comment-field.component";
import {ModalCard} from "../components/modal-card/modal-card.component";

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Atypon`s frontend engineering assignment</title>
                <meta name="description" content="Atypon's frontend engineering assignment"/>
            </Head>

            <main className={"container"}>
                <h2 style={{textAlign: "center"}}>Click Button below to launch Modal:</h2>

                <ModalCard/>

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
                    <LinkComponent href={"https://www.atypon.com/"} linkText={"Add description"}/>
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
                    <div className={"flex-row"}>
                        <Comment avatar={<Avatar avatarSize={AvatarSizes.large} avatarText={"Socrates"} photoURL={avatar2}/>} user={"Jaydon Donin"} age={2} commentType={CommentTypes.notice}/>
                        <Comment avatar={<Avatar avatarSize={AvatarSizes.large} avatarText={"Socrates"} photoURL={avatar2}/>} user={"Jaydon Donin"} age={2} commentType={CommentTypes.post} content={"Rotational effects in the dissociative"}/>
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
