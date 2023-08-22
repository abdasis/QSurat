import { Fragment } from 'react';
import { Link } from '@inertiajs/react';

export default function ({ icon, title, link }) {
    return (
        <Fragment>
            <Link class="nav-link sidebar-menu mb-2" href={link}>
                <div className="d-flex gap-2">
                    <span className="icon-menu">{icon}</span>
                    <span className="text-menu fw-medium">
                        {title}
                    </span>
                </div>
            </Link>
        </Fragment>
    );
}
