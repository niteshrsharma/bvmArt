import styles from './Artist.module.css';

export default function Artist() {
    return (
        <>
            <div className={`row ${styles.cont}`} style={{marginTop: "7em", width: "100vw"}}>
                <div className="col-xl-6 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <img
                                        src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                        alt=""
                                        style={{ width: 45, height: 45 }}
                                        className="rounded-circle"
                                    />
                                    <div className="ms-3">
                                        <p className="fw-bold mb-1">John Doe</p>
                                        <p className="text-muted mb-0">john.doe@gmail.com</p>
                                    </div>
                                </div>
                                <span className="badge rounded-pill badge-success">Active</span>
                            </div>
                        </div>
                        <div className="card-footer border-0 bg-body-tertiary p-2 d-flex justify-content-around">
                            <a
                                className="btn btn-link m-0 text-reset"
                                href="#"
                                role="button"
                                data-ripple-color="primary"
                                data-mdb-ripple-init=""
                            >
                                Message
                                <i className="fas fa-envelope ms-2" />
                            </a>
                            <a
                                className="btn btn-link m-0 text-reset"
                                href="#"
                                role="button"
                                data-ripple-color="primary"
                                data-mdb-ripple-init=""
                            >
                                Call
                                <i className="fas fa-phone ms-2" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <img
                                        src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                                        alt=""
                                        style={{ width: 45, height: 45 }}
                                        className="rounded-circle"
                                    />
                                    <div className="ms-3">
                                        <p className="fw-bold mb-1">Alex Ray</p>
                                        <p className="text-muted mb-0">alex.ray@gmail.com</p>
                                    </div>
                                </div>
                                <span className="badge rounded-pill badge-primary">Onboarding</span>
                            </div>
                        </div>
                        <div className="card-footer border-0 bg-body-tertiary p-2 d-flex justify-content-around">
                            <a
                                className="btn btn-link m-0 text-reset"
                                href="#"
                                role="button"
                                data-ripple-color="primary"
                                data-mdb-ripple-init=""
                            >
                                Message
                                <i className="fas fa-envelope ms-2" />
                            </a>
                            <a
                                className="btn btn-link m-0 text-reset"
                                href="#"
                                role="button"
                                data-ripple-color="primary"
                                data-mdb-ripple-init=""
                            >
                                Call
                                <i className="fas fa-phone ms-2" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <img
                                        src="https://mdbootstrap.com/img/new/avatars/7.jpg"
                                        alt=""
                                        style={{ width: 45, height: 45 }}
                                        className="rounded-circle"
                                    />
                                    <div className="ms-3">
                                        <p className="fw-bold mb-1">Kate Hunington</p>
                                        <p className="text-muted mb-0">kate.hunington@gmail.com</p>
                                    </div>
                                </div>
                                <span className="badge rounded-pill badge-warning">Awaiting</span>
                            </div>
                        </div>
                        <div className="card-footer border-0 bg-body-tertiary p-2 d-flex justify-content-around">
                            <a
                                className="btn btn-link m-0 text-reset"
                                href="#"
                                role="button"
                                data-ripple-color="primary"
                                data-mdb-ripple-init=""
                            >
                                Message
                                <i className="fas fa-envelope ms-2" />
                            </a>
                            <a
                                className="btn btn-link m-0 text-reset"
                                href="#"
                                role="button"
                                data-ripple-color="primary"
                                data-mdb-ripple-init=""
                            >
                                Call
                                <i className="fas fa-phone ms-2" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <img
                                        src="https://mdbootstrap.com/img/new/avatars/3.jpg"
                                        alt=""
                                        style={{ width: 45, height: 45 }}
                                        className="rounded-circle"
                                    />
                                    <div className="ms-3">
                                        <p className="fw-bold mb-1">Michael Bale</p>
                                        <p className="text-muted mb-0">michael.bale@gmail.com</p>
                                    </div>
                                </div>
                                <span className="badge rounded-pill badge-danger">Removed</span>
                            </div>
                        </div>
                        <div className="card-footer border-0 bg-body-tertiary p-2 d-flex justify-content-around">
                            <a
                                className="btn btn-link m-0 text-reset"
                                href="#"
                                role="button"
                                data-ripple-color="primary"
                                data-mdb-ripple-init=""
                            >
                                Message
                                <i className="fas fa-envelope ms-2" />
                            </a>
                            <a
                                className="btn btn-link m-0 text-reset"
                                href="#"
                                role="button"
                                data-ripple-color="primary"
                                data-mdb-ripple-init=""
                            >
                                Call
                                <i className="fas fa-phone ms-2" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}