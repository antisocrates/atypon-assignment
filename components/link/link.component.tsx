import React from 'react';
import Link from 'next/link'

export interface LinkProps {
    linkText: string;
    href: string;
}

export const LinkComponent: React.FC<LinkProps> = ({linkText, href}) => {
    return (
        <Link href={href}>
            <a className={"text-link"}>{linkText}</a>
        </Link>
    )
}