import React from 'react';

export interface LinkProps {
    linkText: string;
    href: string;
}

export const LinkComponent: React.FC<LinkProps> = ({linkText, href}) => {
    return (
            <a href={href} className={"text-link"}>{linkText}</a>
    )
}