import { Fragment } from 'react';
import { Link } from '@inertiajs/react';

export default function ({ title, link }) {
    return (
        <Fragment>
            <Link className="docs-menu-item" href={link}>
                {title}
            </Link>
        </Fragment>
    );
}
