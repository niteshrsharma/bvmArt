export default function Login({setTab}) {
    return (
        <>
            <div style={{marginTop: "10em", display: "flex", width: "100vw", justifyContent: "center"}}>
                <form style={{width: '60vw'}}>
                    {/* Email input */}
                    <div data-mdb-input-init="" className="form-outline mb-4">
                        <input type="email" id="form2Example1" className="form-control" />
                        <label className="form-label" htmlFor="form2Example1">
                            Email address
                        </label>
                    </div>
                    {/* Password input */}
                    <div data-mdb-input-init="" className="form-outline mb-4">
                        <input type="password" id="form2Example2" className="form-control" />
                        <label className="form-label" htmlFor="form2Example2">
                            Password
                        </label>
                    </div>
                    {/* 2 column grid layout for inline styling */}
                    <div className="row mb-4">
                        <div className="col d-flex justify-content-center">
                            {/* Checkbox */}
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    defaultValue=""
                                    id="form2Example31"
                                    defaultChecked=""
                                />
                                <label className="form-check-label" htmlFor="form2Example31">
                                    {" "}
                                    Remember me{" "}
                                </label>
                            </div>
                        </div>
                        <div className="col">
                            {/* Simple link */}
                            <a href="#!">Forgot password?</a>
                        </div>
                    </div>
                    {/* Submit button */}
                    <button
                        type="button"
                        data-mdb-button-init=""
                        data-mdb-ripple-init=""
                        className="btn btn-primary btn-block mb-4"
                    >
                        Sign in
                    </button>
                    {/* Register buttons */}
                    <div className="text-center">
                        <p>
                            Not a member? <a href="#!" onClick={()=>setTab('signup')}>Register</a>
                        </p>
                    </div>
                </form>
            </div>

        </>
    )
}