import React from 'react';
import HyperModal from 'react-hyper-modal';
import {ActionButton, ActionButtonTypes} from "../action-button/action-button.component";
import {Delete} from "../icons";

export interface ModalLaunchProps {
    innerDiv: React.ReactNode;
}

export const ModalLaunch: React.FC<ModalLaunchProps> = ({innerDiv}) => {
    return (
        <HyperModal
            renderOpenButton={(requestOpen) => <ActionButton buttonText={"Open Modal"} buttonType={ActionButtonTypes.flat} icon={<Delete/>} action={requestOpen}/>}
        >
                <div>
                    {innerDiv}
                </div>
        </HyperModal>
    );
}