import React, { Component } from 'react'

class Activity extends Component {
    render() {
        return (
            <form className="mt-5">
                <h1 class="display-2"> Create an Activity</h1>
                <div className="form-row mt-5">
                    <div className="form-group col-md-4">
                        <label htmlFor="inputEmail4">Client Name</label>
                        <input type="text" className="form-control" id="inputEmail4" placeholder="Client Name" />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputPassword4">Job Reference</label>
                        <input type="text" className="form-control" id="inputPassword4" placeholder="Job Reference" />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputPassword4">Email Address</label>
                        <input type="text" className="form-control" id="inputPassword4" placeholder="Job Reference" />
                    </div>
                </div>
                
                <div className="form-row">
                    <div className="form-group col-md-3">
                        <label htmlFor="inputAddress">Start Time</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="Start Time" />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputAddress2">End Time</label>
                        <input type="text" className="form-control" id="inputAddress2" placeholder="End Time" />
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="inputAddress2">Billable Hours</label>
                        <input type="text" className="form-control" id="inputAddress2" placeholder="Billable Hours" />
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
                        <label htmlFor="inputCity">Client Contact Name</label>
                        <input type="text" className="form-control" id="inputCity" />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputZip">Client Telephone Number</label>
                        <input type="text" className="form-control" id="inputZip" />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputState">Job Status</label>
                        <select id="inputState" className="form-control">
                            <option selected>Choose...</option>
                            <option> Completed </option>
                            <option> Open</option>
                            <option> In progress</option>
                        </select>
                    </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                     <label for="exampleFormControlTextarea1">Consultant Remarks</label>
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

export default Activity;
