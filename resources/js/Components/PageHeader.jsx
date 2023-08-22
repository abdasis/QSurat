import { Fragment } from 'react';

export default function PageHeader({pretitle, title, children}) {
    return (
        <Fragment>
            <div className="page-header d-print-none">
                <div className="container-xl">
                    <div className="row g-2 align-items-center">
                        <div className="col">
                            {/* Page pre-title */}
                            <div className="page-pretitle">{pretitle}</div>
                            <h2 className="page-title">{title}</h2>
                        </div>
                        {/* Page title actions */}
                        <div className="col-auto ms-auto d-print-none">
                            <div className="btn-list">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
