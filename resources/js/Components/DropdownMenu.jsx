import { Fragment } from 'react';
import { Accordion } from 'react-bootstrap';

export default function ({ children, icon, title, target }) {
    return (
        <Fragment>
            <Accordion.Item eventKey={target} className="border-0 mb-2">
                <Accordion.Header>
                    <div className="menu-box d-flex align-items-baseline gap-2">
                        <div className="icon-menu">{icon}</div>
                        <div className="text-menu fw-medium">
                            {title}
                        </div>
                    </div>
                </Accordion.Header>
                <Accordion.Body className="py-0 mt-2">
                    <div className="docs-menu-submenu ps-2 d-grid">
                        {children}
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Fragment>
    );
}
