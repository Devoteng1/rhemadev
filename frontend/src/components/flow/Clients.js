import React, { Component } from 'react'

class Clients extends Component {
    render() {
        return (
            <form className="mt-5">
                <h1 class="display-2"> Create a Client</h1>
                <div className="form-row mt-5">
                    <div className="form-group col-md-4">
                        <label htmlFor="inputEmail4">Client Name</label>
                        <input type="text" className="form-control" id="inputEmail4" placeholder="Client Name" />
                    </div>
                    <div className="form-group col-md-4">
                    <label htmlFor="inputState">Industry</label>
                        <select id="inputState" className="form-control">
                            <option selected>Health</option>
                            <option> Information Technology </option>
                            <option> Transport </option>
                            <option> Manufacturing </option>
                        </select>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputPassword4">Location</label>
                        <input type="text" className="form-control" id="inputPassword4" placeholder="Job Reference" />
                    </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                     <label for="exampleFormControlTextarea1">Brief Description</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                  </div>
                  <div className="form-group col-md-6">
                     <label for="exampleFormControlTextarea1">Address/GP Address</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                  </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-3">
                    <label htmlFor="inputState">Billing Cycle</label>
                        <select id="inputState" className="form-control">
                            <option selected>Daily</option>
                            <option> Weekly </option>
                            <option> Monthly </option>
                            <option> Yearly </option>
                        </select>
                    </div>
                    <div className="form-group col-md-3">
                    <label htmlFor="inputState">Support Status</label>
                        <select id="inputState" className="form-control">
                            <option selected> contract</option>
                            <option> OnDemand </option>
                        </select>
                    </div>
                    <div className="form-group col-md-2">
                    <label htmlFor="inputState">Service To Customer</label>
                        <select id="inputState" className="form-control">
                            <option selected> PASTEL</option>
                            <option> RMS </option>
                            <option> PAYROLL</option>
                            <option> GP</option>
                        </select>
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="inputAddress2">Rate</label>
                        <input type="text" className="form-control" id="inputAddress2" placeholder="Rate" />
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="inputAddress2">Total Charge</label>
                        <input type="text" className="form-control" id="inputAddress2" placeholder="Total Charge" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="inputCity">Client Contact Person Name</label>
                        <input type="text" className="form-control" id="inputCity" />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputZip">Client Contact Person Telephone</label>
                        <input type="text" className="form-control" id="inputZip" />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputState">Support Consultant</label>
                        <select id="inputState" className="form-control">
                            <option selected> Oteng Isaac</option>
                            <option> Steven .....</option>
                            <option> Micheal Martey</option>
                            <option> Akwesi .....</option>
                        </select>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="exampleFormControlTextarea1">Additional Info</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                    </div>
                    <div className="form-group col-md-6">
                        <label for="exampleFormControlTextarea1">Client Remarks</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary"> Submit </button>
            </form>
        )
    }
}


export default Clients;
