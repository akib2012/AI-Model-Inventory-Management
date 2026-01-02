import React from 'react';
import { SyncLoader } from 'react-spinners';

const LoadingSpinner = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-[#000814]">
      <SyncLoader size={15} color="#ffffff" />
    </div>
    );
};

export default LoadingSpinner;