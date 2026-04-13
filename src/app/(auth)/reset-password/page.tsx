import React from 'react';
import Title from '../login/_components/Title';
import Resetfn from './_components/Resetfn';

const ResetPassword = () => {
  
  return (
    <div>
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          <div className="w-full max-w-md space-y-8">
          <Title
            title="Reset password"
            description={"Enter your email  and old password to reset your password"}
          />
        </div>
        <Resetfn />
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;