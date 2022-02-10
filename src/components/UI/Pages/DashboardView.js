import React, { useContext } from 'react';

import CaptureContext from '../../../capture/capture-context';

import Loader from '../../Layout/Loader/Loader';

import {Container} from 'react-bootstrap/';

import Dashboard from '../Dashboard/Dashboard';


const DashboardView = () => {
    const notesCtx = useContext(CaptureContext);
    return (
        <div>
            
            {notesCtx.loading && <Loader/>}
            <Dashboard />
        </div>

            

      
    );
}

export default DashboardView;