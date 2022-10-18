import type {NextPage} from 'next'
import Head from 'next/head'
import {ActionButton, ActionButtonTypes} from "../components/action-button/action-button.component";

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
                    <ActionButton buttonText={"skata"} buttonType={ActionButtonTypes.flat}/>
                </div>
            </main>
        </div>
    )
}

export default Home
