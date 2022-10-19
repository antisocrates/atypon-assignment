import type {NextPage} from 'next'
import Head from 'next/head'
import {ActionButton, ActionButtonTypes} from "../components/action-button/action-button.component";
import {Link} from "../components/icons/Link";
import {LinkComponent} from "../components/link/link.component";

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
                </div>
            </main>
        </div>
    )
}

export default Home
