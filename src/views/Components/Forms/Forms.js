import React, { Component } from 'react';
import { Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Forms extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="container">
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-header">
                <strong>Credit Card</strong> <small>Form</small>
              </div>
              <div className="card-block">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input type="text" className="form-control" id="name" placeholder="Enter your name"/>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label htmlFor="ccnumber">Credit Card Number</label>
                      <input type="text" className="form-control" id="ccnumber" placeholder="0000 0000 0000 0000"/>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-sm-4">
                    <label htmlFor="ccmonth">Month</label>
                    <select className="form-control" id="ccmonth">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                      <option>11</option>
                      <option>12</option>
                    </select>
                  </div>
                  <div className="form-group col-sm-4">
                    <label htmlFor="ccyear">Year</label>
                    <select className="form-control" id="ccyear">
                      <option>2014</option>
                      <option>2015</option>
                      <option>2016</option>
                      <option>2017</option>
                      <option>2018</option>
                      <option>2019</option>
                      <option>2020</option>
                      <option>2021</option>
                      <option>2022</option>
                      <option>2023</option>
                      <option>2024</option>
                      <option>2025</option>
                    </select>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label htmlFor="cvv">CVV/CVC</label>
                      <input type="text" className="form-control" id="cvv" placeholder="123"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-header tester">
                <strong>Company</strong> <small>Form</small>
              </div>
              <div className="card-block">
                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input type="text" className="form-control" id="company" placeholder="Enter your company name"/>
                </div>
                <div className="form-group">
                  <label htmlFor="vat">VAT</label>
                  <input type="text" className="form-control" id="vat" placeholder="PL1234567890"/>
                </div>
                <div className="form-group">
                  <label htmlFor="street">Street</label>
                  <input type="text" className="form-control" id="street" placeholder="Enter street name"/>
                </div>
                <div className="row">
                  <div className="form-group col-sm-8">
                    <label htmlFor="city">City</label>
                    <input type="text" className="form-control" id="city" placeholder="Enter your city"/>
                  </div>
                  <div className="form-group col-sm-4">
                    <label htmlFor="postal-code">Postal Code</label>
                    <input type="text" className="form-control" id="postal-code" placeholder="Postal Code"/>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="country">Country</label>
                  <input type="text" className="form-control" id="country" placeholder="Country name"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default Forms;
