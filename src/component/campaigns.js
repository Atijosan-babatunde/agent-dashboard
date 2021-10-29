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

        <div class="container1">
            <div class="row ro">
                <div class="col-md-12" style={{marginTop:"4em", paddingLeft:"1.10em", marginBottom:"16em"}}>
                    <div class="page-header1">
                        <h2 class="head1 mb-4">Shear Application Link</h2>
                        <p class="form-label1">Nifemi's application link is ready to be sheard</p>
                    </div>
                    <div class="row">
                        <div class="col-md-9 min">
                            <div class="profile-input">
                                
                                <div class="form-group mb-3">
                                    <label class="form-label1 mb-1" for="exampleFormControlInput1">
                                        Link</label>
                                    <div>
                                        <input type="email" class=" form-control1"
                                            id="exampleFormControlInput1"/>
                                    </div>
                                </div>
                               
                                
                               
                            </div>
                        </div>
                        <div class="col-md-3">
                            <select class="grow1">
                                <option selected>Next</option>
                                <option value="1">Copy Link</option>
                                <option value="2">Send Email</option>
                                <option value="3">Send Mobile Number</option>
                                <option value="3">Send Whatsapp Message</option>
                            </select> 
                        </div>
                     </div>

               
                


                
            </div>

           
        </div>
    </div>
    </div>
    </BaseContainer>
    )
}