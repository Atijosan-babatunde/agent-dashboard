import React from 'react';
import {BaseContainer } from '../web/layouts/Containers';
import "./style.css";


export function Body() {
    return(
        <BaseContainer>
                <div class="top">
        <div class="header">
            <div class="nav">
                <div class="search">
                    <button type="submit"><i class="fa fa-search"></i></button>
                    <input type="text" placeholder="Global search"/>
                    
                </div>
               
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-md-8" style={{marginTop:"4.10em", paddingLeft:"1em", marginBottom:"1em"}}>
                    <div id="content" class="app-content">
                        <h1 class="page-header mb-2 mt-3">
                            Overview
                        </h1>

                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="card mb-2">

                                        <div class="card-body">
                                            <div class="d-flex">
                                                <div class="flex-grow-1">
                                                    <h5 class="small-card-header mb-2">Total Customers</h5>
                                                    <p class="small-card-para">40,689</p>
                                                </div>

                                            </div>

                                        </div>

                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="card mb-2">

                                        <div class="card-body">
                                            <div class="d-flex">
                                                <div class="flex-grow-1">
                                                    <h5 class="small-card-header mb-2">Ticketed Customers</h5>
                                                    <p class="small-card-para">40,689</p>
                                                </div>

                                            </div>

                                        </div>

                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="card mb-2">

                                        <div class="card-body">
                                            <div class="d-flex">
                                                <div class="flex-grow-1">
                                                    <h5 class="small-card-header mb-2">Pending Applications</h5>
                                                    <p class="small-card-para">40,689</p>
                                                </div>

                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <h1 class="page-header mb-2 mt-3">
                            Recent Tickets Request
                        </h1>
                        <div class="card">
                        <div class="container" style={{background:"none"}}>
                        <div class="row">
                                            <div class="col-md-4">
                                                <div class="searchContainer1 mt-3 mb-2">
                                                    <i class="fa fa-search searchIcon"></i>
                                                    <input class="searchBox1" type="search" name="search"
                                                        placeholder=" customer search"/>
                                                </div>
                                            </div>
                                            <div class="col-md-4 mb-2 mt-3">
                                                <select class="form-select">
                                                    <option selected>Filter</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>

                                            <div class="col-md-4 mb-2 mt-3">

                                                <div class="input-group" id="daterange">
                                                    <span class="input-group-text" style={{background: "none"}}><i
                                                            class="fa fa-calendar"></i></span>
                                                    <input type="text" name="daterange" class="form-control "
                                                        placeholder="Date Filter" />

                                                </div>
                                            </div>
                                        </div>
                                        </div>
                            <div class="card-body">
                                <div id="flip-scroll">
                                    <table id="datatableDefault" class="table text-nowrap w-200">


                                        <thead>
                                            <tr class="table-light">
                                                <th width="1%"><input class="form-check-input" type="checkbox" value="" id="defaultCheck1" disabled /></th>
                                                <th class="payment-inner-p" width="10%"> Date</th>
                                                <th class="payment-inner-p" width="15%">Customer Name</th>
                                                <th class="payment-inner-p" width="15%">Ticket Price</th>
                                                <th class="payment-inner-p" width="6%">Trip Type</th>
                                                <th class="payment-inner-p" width="5%">...</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td width="1%"><input class="form-check-input" type="checkbox" value="" id="defaultCheck1" disabled /></td>
                                                <td class="payment-month">6 Jan 2021</td>
                                                <td class="payment-month">Cynthia Okafor</td>
                                                <td class="payment-month">&#8358;500,000</td>
                                                <td class="payment-month">Multi City</td>
                                                <td class="payment-month">...</td>
                                            </tr>
                                            <tr>
                                                <td width="1%"><input class="form-check-input" type="checkbox" value="" id="defaultCheck1" disabled /></td>
                                                <td class="payment-month">6 Jan 2021</td>
                                                <td class="payment-month">Cynthia Okafor</td>
                                                <td class="payment-month">&#8358;500,000</td>
                                                <td class="payment-month">Multi City</td>
                                                <td class="payment-month">...</td>
                                            </tr>

                                            <tr>
                                                <td width="1%"><input class="form-check-input" type="checkbox" value="" id="defaultCheck1" disabled /></td>
                                                <td class="payment-month">6 Jan 2021</td>
                                                <td class="payment-month">Cynthia Okafor</td>
                                                <td class="payment-month">&#8358;500,000</td>
                                                <td class="payment-month">Multi City</td>
                                                <td class="payment-month">...</td>
                                            </tr>
                                            <tr>
                                                <td width="1%"><input class="form-check-input" type="checkbox" value="" id="defaultCheck1" disabled /></td>
                                                <td class="payment-month">6 Jan 2021</td>
                                                <td class="payment-month">Cynthia Okafor</td>
                                                <td class="payment-month">&#8358;500,000</td>
                                                <td class="payment-month">Multi City</td>
                                                <td class="payment-month">...</td>
                                            </tr>
                                            <tr>
                                                <td width="1%"><input class="form-check-input" type="checkbox" value="" id="defaultCheck1" disabled /></td>
                                                <td class="payment-month">6 Jan 2021</td>
                                                <td class="payment-month">Cynthia Okafor</td>
                                                <td class="payment-month">&#8358;500,000</td>
                                                <td class="payment-month">Multi City</td>
                                                <td class="payment-month">...</td>
                                            </tr>
                                            <tr>
                                                <td width="1%"><input class="form-check-input" type="checkbox" value="" id="defaultCheck1" disabled /></td>
                                                <td class="payment-month">6 Jan 2021</td>
                                                <td class="payment-month">Cynthia Okafor</td>
                                                <td class="payment-month">&#8358;500,000</td>
                                                <td class="payment-month">Multi City</td>
                                                <td class="payment-month">...</td>
                                            </tr>
                                            <tr>
                                                <td width="1%"><input class="form-check-input" type="checkbox" value="" id="defaultCheck1" disabled /></td>
                                                <td class="payment-month">6 Jan 2021</td>
                                                <td class="payment-month">Cynthia Okafor</td>
                                                <td class="payment-month">&#8358;500,000</td>
                                                <td class="payment-month">Multi City</td>
                                                <td class="payment-month">...</td>
                                            </tr>
                                            <tr>
                                                <td width="1%"><input class="form-check-input" type="checkbox" value="" id="defaultCheck1" disabled /></td>
                                                <td class="payment-month">6 Jan 2021</td>
                                                <td class="payment-month">Cynthia Okafor</td>
                                                <td class="payment-month">&#8358;500,000</td>
                                                <td class="payment-month">Multi City</td>
                                                <td class="payment-month">...</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="text-end">
                                    <div class="row bottom">
                                        <div class="col-md-8">
                                    <div class="mb-3 form-check">
                                        <h3 class="down pr-3">Rows per page: 10 </h3>   
                                    </div>
                                       </div>
                                    
                                        <div class="col-md-2 text-end tot">
                                            <h3 class="down">1-10 276
                                                
                                            </h3> 
                                            
                                        </div>
                                   
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div class="col-md-4" style={{marginTop:"7em", marginBottom:"1em"}}>
                    <div class="card">
                        <div class="card-header" style={{background:"none"}}>Quick Links</div>
                        <div class="container" style={{background:"none"}}>
                            <div class="row">
                                <div class="col-md-6 mt-3">

                                    <div class="card r1" style={{width: "100%"}}>

                                        <div class="d-flex align-items-center align">
                                            <div class="card-body">
                                                <h2 class="card-head">New Client Application</h2>

                                            </div>


                                        </div>
                                    </div>


                                    <div class="card  r3 " style={{width: "100%"}}>

                                        <div class="d-flex align-items-center align">
                                            <div class="card-body">
                                                <h2 class="card-head">Customer Service</h2>

                                            </div>


                                        </div>
                                    </div>

                                </div>


                                <div class="col-md-6 mt-3">

                                    <div class="card r2" style={{width: "100%"}}>

                                        <div class="d-flex align-items-center align">
                                            <div class="card-body">
                                                <h2 class="card-head">Campaign Monitoring</h2>

                                            </div>

                                        </div>

                                    </div>


                                    <div class="card r4" style={{width:"100%"}}>

                                        <div class="d-flex align-items-center align">
                                            <div class="card-body">
                                                <h2 class="card-head">Ticketed Customers</h2>

                                            </div>


                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="d-flex align-items-center align">
                            
                            <div class="card-body">
                                   <h2 class="card-name">Campaigns</h2>
                            </div>
                            
                                 <div class="ms-auto" style={{paddingRight: "1em"}}> 
                                    <h2 class="card-name">Show: <span class="text-primary">Monthly</span></h2>
                                </div>
                        </div>        
                            
                           

                            <div class="container">
                                <div class="row">
                                    <div>
                                        <canvas id="myChart">
                                            <script>
                                                
                                              
                                                const myChart = new Chart(
                                                  document.getElementById('myChart'),
                                                  config
                                                 
                                                );
                                            </script>
                                        </canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </BaseContainer>
    )
}