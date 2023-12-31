import React from "react";
//import {Link} from 'react-router-dom';
import { useState,useEffect } from "react";
import axios from "axios";
import { url } from "../../common/constant";
import Logout from '../../screens/common/Logout';
 import { Link } from "react-router-dom";
 import {useHistory} from 'react-router-dom';

const AllBranches = () => {
    const [branches, setBranch] = useState([]);

    const history=useHistory();
    const loginStatus = sessionStorage.getItem('LoginStatus');
    if( loginStatus != 1){
        alert('please signin first!!')
        history.push('/login')
      }


    useEffect(() => {
        console.log("branch component is mounted");
        getBranch();
    
    } , []);

    const getBranch = () => {
        axios.get(url+"/branch/branch").then((response) => {
            const result = response.data;
            console.log(result);
            if (result.status === "OK" ) {
                setBranch(result.response);
            }else{
                alert("branches not found");
            }
        });
    }


    return(
        <div className="privacydiv">
             <Logout/>

             <Link to="/addbranch"> <a className="btn btn-warning" href=" ">Add Branch</a> </Link>
            <h1 align="center">All Branches</h1> 
            <table className="table" >
                <thead class="thead-dark">
                
                    <tr>
                        <th>Id</th>
                        <th>Branch Name</th>
                        <th>Locality</th>
                        <th>City</th>
                        <th>State</th> 
                        <th>Zipcode</th>  
                        <th>Phone</th>                 
                        {/* <th>Action</th> */}
                    </tr>
                </thead>
                <tbody id="myTable">
                    {
                        branches.length >= 1 ? branches.map(branch => {
                            return(
                                <tr key={branch.id}>
                                    <td>{branch.id}</td>
                                    <td>{branch.branchName}</td>
                                    <td>{branch.locality}</td>
                                    <td>{branch.city}</td>
                                    <td>{branch.state}</td>
                                    <td>{branch.zipCode}</td>
                                    <td>{branch.phoneNo}</td>
                                   
                                </tr>
                            )
                        }):''
                    }
                </tbody>
            </table>  
            <Link to="/localadminpage">
               &nbsp;&nbsp; <button className="btn btn-primary">Back</button>
            </Link>
        </div>
    )
}


export default AllBranches;