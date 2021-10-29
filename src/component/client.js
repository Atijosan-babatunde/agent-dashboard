import React from "react";
import {BaseContainer} from "../web/layouts/Containers";
import "./style.css";

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
                    <div class="col-md-5" style={{marginTop:"4em", paddingLeft:"1.10em", marginBottom:"2.50em"}}>
                        <div class="page-header1">
                            <h2 class="head1 mb-4">Trip Details</h2>
                        </div>
                        <div class="row">
                            <div class="min">
                                <div class="profile-input">
                                    <div class="form-group mb-3">
                                        <label class="form-label1 mb-2" for="exampleFormControlInput1">
                                            Booking Type</label>
                                        <div>
                                            <input type="email" class=" form-control1"
                                                id="exampleFormControlInput1"/>
                                        </div>
                                    </div>
                                    <div class="form-group mb-3">
                                        <label class="form-label1 mb-2" for="exampleFormControlInput1">
                                            From</label>
                                        <div>
                                            <input type="email" class=" form-control1"
                                                id="exampleFormControlInput1"/>
                                        </div>
                                    </div>
                                    <div class="form-group mb-3">
                                        <label class="form-label1 mb-2" for="exampleFormControlInput1">
                                            Deport</label>
                                        <div>
                                            <input type="email" class=" form-control1"
                                                id="exampleFormControlInput1"/>
                                        </div>
                                    </div>
                                    <div class="form-group mb-3">
                                        <label class="form-label1 mb-2" for="exampleFormControlInput1">
                                            Cost of Trip</label>
                                        <div>
                                            <input type="email" class=" form-control1"
                                                id="exampleFormControlInput1"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    


                    
                </div>

                <div class="col-md-5" style={{marginTop:"8em", marginBottom:"1em", paddingLeft:"2em"}}>
                    <div class="row">
                        <div class="min">
                            <div class="profile-input">
                                <h2 class="head2">Trip Type</h2>
                                <div class="row mb-4">
                                    <div class="col-md-4">
                                       <div class="form-check">
                                    <input class="form-check-input" type="radio" value="" id="defaultRadio1" disabled />
                                    <label class="form-check-label" for="defaultRadio1">Roundtrip</label>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-check">
                                     <input class="form-check-input" type="radio" value="" id="defaultRadio1" disabled />
                                     <label class="form-check-label" for="defaultRadio1">One-Way</label>
                                         </div>
                                     </div>
                                     <div class="col-md-4">
                                        <div class="form-check">
                                     <input class="form-check-input" type="radio" value="" id="defaultRadio1" disabled />
                                     <label class="form-check-label" for="defaultRadio1">Multi-city</label>
                                         </div>
                                     </div>
                                </div>
                                <div class="form-group mb-3">
                                    <label class="form-label1 mb-2" for="exampleFormControlInput1">
                                        TO</label>
                                    <div>
                                        <input type="email" class=" form-control1"
                                            id="exampleFormControlInput1"/>
                                    </div>
                                </div>
                                <div class="form-group mb-3">
                                    <label class="form-label1 mb-2" for="exampleFormControlInput1">
                                        Return</label>
                                    <div>
                                        <input type="email" class=" form-control1"
                                            id="exampleFormControlInput1"/>
                                    </div>
                                </div>
                            </div>

                           
                        </div>
                        
                    </div> 
                    <div class="text-end">
                        <button class="grow2">Next</button>
                    </div>   
                </div>
            </div>
        </div>
        </div>
        </BaseContainer>
    )
}