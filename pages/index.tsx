import type {NextPage} from 'next'
import Head from 'next/head'
import {ActionButton, ActionButtonTypes} from "../components/action-button/action-button.component";
import {Link} from "../components/icons/Link";
import {LinkComponent} from "../components/link/link.component";
import {Avatar, AvatarSizes} from "../components/avatar/avatar.component";
import avatar2 from "../public/avatar-2.jpg";
import Image from 'next/future/image'

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Atypon's frontend engineering assignment</title>
                <meta name="description" content="Atypon's frontend engineering assignment"/>
            </Head>

            <main>
                <div className={"container"}>
                    <h1>Components Showcase</h1>

                    <h3>Action Buttons:</h3>
                    <ActionButton buttonText={"Action Button"} buttonType={ActionButtonTypes.flat} icon={<Link/>} action={() => {}}/>
                    <ActionButton buttonText={"Action Button"} buttonType={ActionButtonTypes.flatWithIcon} icon={<Link/>} action={() => {}}/>
                    <ActionButton buttonText={"Action Button"} buttonType={ActionButtonTypes.iconOnly} icon={<Link/>} action={() => {}}/>

                    <h3>Links:</h3>
                    <LinkComponent href={"https://www.atypon.com/"} linkText={"Add description"}/>

                    <h3>Avatars:</h3>
                    <Avatar avatarSize={AvatarSizes.large} avatarText={"Socrates"} photoURL={avatar2}/>

                </div>
            </main>
        </div>
    )
}

export default Home
