import { Fragment } from 'react';
import { usePage } from '@inertiajs/react';
import {IconBell, IconInbox, IconNotification} from "@tabler/icons-react";
import {Overlay, OverlayTrigger, Tooltip} from "react-bootstrap";
import {toast} from "react-toastify";

export default function Header() {
    const user = usePage().props.auth.user;
    const { name } = user;

    const showNotify = () => {
        toast.success("Wow so easy!")
    }

    return (
        <Fragment>
            <header className="navbar navbar-expand-md navbar-light d-none d-lg-flex d-print-none border-bottom border-light-subtle">
                <div className="container-xl">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbar-menu"
                        aria-controls="navbar-menu"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="navbar-nav flex-row order-md-last">
                        <div className="d-none d-md-flex">
                            <OverlayTrigger placement={'auto'}  overlay={<Tooltip>Inbox</Tooltip>}>
                                <a
                                    onClick={showNotify}
                                    href="#"
                                    className="nav-link "
                                    aria-label="Inbox"
                                >
                                    <IconInbox strokeWidth={1}/>
                                </a>
                            </OverlayTrigger>
                            <div className="nav-item dropdown d-none d-md-flex me-3">
                                <a
                                    href="#"
                                    className="nav-link "
                                    data-bs-toggle="dropdown"
                                    tabIndex={-1}
                                    aria-label="Show notifications"
                                >
                                    <IconBell strokeWidth={1}/>
                                    <span className="badge bg-red" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-end dropdown-menu-card">
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">
                                                Last updates
                                            </h3>
                                        </div>
                                        <div className="list-group list-group-flush list-group-hoverable">
                                            <div className="list-group-item">
                                                <div className="row align-items-center">
                                                    <div className="col-auto">
                                                        <span className="status-dot status-dot-animated bg-red d-block" />
                                                    </div>
                                                    <div className="col text-truncate">
                                                        <a
                                                            href="#"
                                                            className="text-body d-block"
                                                        >
                                                            Example 1
                                                        </a>
                                                        <div className="d-block text-muted text-truncate mt-n1">
                                                            Change deprecated
                                                            html tags to text
                                                            decoration classes
                                                            (#29604)
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <a
                                                            href="#"
                                                            className="list-group-item-actions"
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="icon text-muted"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                strokeWidth={2}
                                                                stroke="currentColor"
                                                                fill="none"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            >
                                                                <path
                                                                    stroke="none"
                                                                    d="M0 0h24v24H0z"
                                                                    fill="none"
                                                                />
                                                                <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="list-group-item">
                                                <div className="row align-items-center">
                                                    <div className="col-auto">
                                                        <span className="status-dot d-block" />
                                                    </div>
                                                    <div className="col text-truncate">
                                                        <a
                                                            href="#"
                                                            className="text-body d-block"
                                                        >
                                                            Example 2
                                                        </a>
                                                        <div className="d-block text-muted text-truncate mt-n1">
                                                            justify-content:between
                                                            ⇒
                                                            justify-content:space-between
                                                            (#29734)
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <a
                                                            href="#"
                                                            className="list-group-item-actions show"
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="icon text-yellow"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                strokeWidth={2}
                                                                stroke="currentColor"
                                                                fill="none"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            >
                                                                <path
                                                                    stroke="none"
                                                                    d="M0 0h24v24H0z"
                                                                    fill="none"
                                                                />
                                                                <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="list-group-item">
                                                <div className="row align-items-center">
                                                    <div className="col-auto">
                                                        <span className="status-dot d-block" />
                                                    </div>
                                                    <div className="col text-truncate">
                                                        <a
                                                            href="#"
                                                            className="text-body d-block"
                                                        >
                                                            Example 3
                                                        </a>
                                                        <div className="d-block text-muted text-truncate mt-n1">
                                                            Update
                                                            change-version.js
                                                            (#29736)
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <a
                                                            href="#"
                                                            className="list-group-item-actions"
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="icon text-muted"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                strokeWidth={2}
                                                                stroke="currentColor"
                                                                fill="none"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            >
                                                                <path
                                                                    stroke="none"
                                                                    d="M0 0h24v24H0z"
                                                                    fill="none"
                                                                />
                                                                <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="list-group-item">
                                                <div className="row align-items-center">
                                                    <div className="col-auto">
                                                        <span className="status-dot status-dot-animated bg-green d-block" />
                                                    </div>
                                                    <div className="col text-truncate">
                                                        <a
                                                            href="#"
                                                            className="text-body d-block"
                                                        >
                                                            Example 4
                                                        </a>
                                                        <div className="d-block text-muted text-truncate mt-n1">
                                                            Regenerate
                                                            package-lock.json
                                                            (#29730)
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <a
                                                            href="#"
                                                            className="list-group-item-actions"
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="icon text-muted"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                strokeWidth={2}
                                                                stroke="currentColor"
                                                                fill="none"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            >
                                                                <path
                                                                    stroke="none"
                                                                    d="M0 0h24v24H0z"
                                                                    fill="none"
                                                                />
                                                                <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="collapse navbar-collapse" id="navbar-menu">
                        <div>
                        </div>
                    </div>
                </div>
            </header>
        </Fragment>
    );
}
