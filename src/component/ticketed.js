import React from 'react';
import { BaseContainer } from '../web/layouts/Containers';
import './style.css';


export function Body(){
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
            <div class="row ro">
                <div class="col-md-12" style={{marginTop:"4em", paddingLeft:"1.10em", marginBottom:"2.50em"}}>
                    <div class="page-header1">
                        <h2 class="head1 mb-4">Customer Information</h2>
                    </div>
                    <div class="row">
                        <div class="min">
                            <div class="profile-input">
                                <div class="form-group mb-3">
                                    <div class="row">
                                        <div class="col-md-6">
                                    <label class="form-label1 mb-2" for="exampleFormControlInput1">
                                        First Name</label>
                                    <div>
                                        <input type="email" class=" form-control1"
                                            id="exampleFormControlInput1"/>
                                    </div>
                                    </div>
                                    
                                    <div class="col-md-6">
                                    <label class="form-label1 mb-2" for="exampleFormControlInput1">
                                        Last Name</label>
                                    <div>
                                        <input type="email" class=" form-control1"
                                            id="exampleFormControlInput1"/>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                                <div class="form-group mb-3">
                                    <label class="form-label1 mb-2" for="exampleFormControlInput1">
                                        Address</label>
                                    <div>
                                        <input type="email" class=" form-control1"
                                            id="exampleFormControlInput1"/>
                                    </div>
                                </div>
                               
                                <div class="form-group mb-3">
                                    <div class="row">
                                        <div class="col-md-6">
                                    <label class="form-label1 mb-2" for="exampleFormControlInput1">
                                        Country</label>
                                    <div>
                                        <input type="email" class=" form-control1"
                                            id="exampleFormControlInput1"/>
                                    </div>
                                    </div>
                                    
                                    <div class="col-md-6">
                                    <label class="form-label1 mb-2" for="exampleFormControlInput1">
                                        City</label>
                                    <div>
                                        <input type="email" class=" form-control1"
                                            id="exampleFormControlInput1"/>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                                <div class="form-group mb-3">
                                    <div class="row">
                                        <div class="col-md-6">
                                    <label class="form-label1 mb-2" for="exampleFormControlInput1">
                                        Customer Email</label>
                                    <div>
                                        <input type="email" class=" form-control1"
                                            id="exampleFormControlInput1"/>
                                    </div>
                                    </div>
                                    
                                    <div class="col-md-6">
                                    <label class="form-label1 mb-2" for="exampleFormControlInput1">
                                        Customer Mobile Number </label>
                                    <div>
                                        <input type="email" class=" form-control1"
                                            id="exampleFormControlInput1"/>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                         <div class="text-end">
                    <button class="grow3">Next</button>
                </div>
                </div>
                
                

                
            </div>

           
        </div>
    </div>
    </div>
    </BaseContainer>
    )
}