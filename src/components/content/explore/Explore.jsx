let arr = [];
for (let i = 0; i < 10; i++) {
    arr.push(i);
}


export default function Explore() {
    return (
        <>
            <div style={{ marginTop: "7em", display: "flex", width: "100vw", gap: "20px", flexWrap: "wrap"}}>

                {
                    arr.map((value) => (
                        <div className="container" key={value} style={{width: "23rem"}}>
                            <section className="mx-auto my-5" style={{ maxWidth: "23rem" }}>
                                <div className="card">
                                    <div className="card-body d-flex flex-row">
                                        <img
                                            src="https://mdbootstrap.com/img/Photos/Avatars/avatar-8.jpg"
                                            className="rounded-circle me-3"
                                            height="50px"
                                            width="50px"
                                            alt="avatar"
                                        />
                                        <div>
                                            <h5 className="card-title font-weight-bold mb-2">New spicy meals</h5>
                                            <p className="card-text">
                                                <i className="far fa-clock pe-2" />
                                                07/24/2018
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="bg-image hover-overlay ripple rounded-0"
                                        data-mdb-ripple-color="light"
                                    >
                                        <img
                                            className="img-fluid"
                                            src="https://mdbootstrap.com/img/Photos/Horizontal/Food/full page/2.jpg"
                                            alt="Card image cap"
                                        />
                                        <a href="#!">
                                            <div
                                                className="mask"
                                                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                                            />
                                        </a>
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text collapse" id="collapseContent">
                                            Recently, we added several exotic new dishes to our restaurant menu.
                                            They come from countries such as Mexico, Argentina, and Spain. Come to
                                            us, have some wine and enjoy our juicy meals from around the world.
                                        </p>
                                        <div className="d-flex justify-content-between">
                                            <a
                                                className="btn btn-link link-danger p-md-1 my-1"
                                                data-mdb-toggle="collapse"
                                                href="#collapseContent"
                                                role="button"
                                                aria-expanded="false"
                                                aria-controls="collapseContent"
                                            >
                                                Read more
                                            </a>
                                            <div>
                                                <i
                                                    className="fas fa-share-alt text-muted p-md-1 my-1 me-2"
                                                    data-mdb-toggle="tooltip"
                                                    data-mdb-placement="top"
                                                    title="Share this post"
                                                />
                                                <i
                                                    className="fas fa-heart text-muted p-md-1 my-1 me-0"
                                                    data-mdb-toggle="tooltip"
                                                    data-mdb-placement="top"
                                                    title="I like it"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    ))
                }

            </div>
        </>
    )
}