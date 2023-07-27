import React from 'react'

function Login(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-center"> Login</h3>

                </div>

            </div>

            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-body">
                            <form autoComplete="off">
                                <div className="form-group mt-2">
                                    <label htmlFor="user"> UserName </label>
                                    <input type="email" name="user" id="user" className="form-control" required/>
                                </div>
                                
                                
                                <div className="form-group mt-2">
                                    <label htmlFor="pass"> Password</label>
                                    <input type="pass" name="pass" id="pass" className="form-control" required/>
                                </div>

                                <div className="form-group mt-2">
                                    <input type="submit" value="Login" className="btn btn-success"/>

                                </div>
                            </form>
                        

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )
}

export default Login