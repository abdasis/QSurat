import { Fragment } from 'react';

export default function MenuTitle({ title }) {
    return (
        <Fragment>
            <div className="menut-title text-muted ms-4 mb-3 mt-5">{title}</div>
        </Fragment>
    );
}
