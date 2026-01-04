import React from 'react';
import Userbarchart from '../Components/useroverviews/Userbarchart';
import Dashboard from '../Components/useroverviews/Dashboard';

const DeshboardHome = () => {
    return (
        <div>
            {/* <h3>this is deshboard home page</h3> */}
            <Userbarchart></Userbarchart>

            <Dashboard></Dashboard>


        </div>
    );
};

export default DeshboardHome;