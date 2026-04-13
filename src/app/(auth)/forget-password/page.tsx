import React from 'react';
import Title from '../login/_components/Title';
import Forgetfn from './_components/Forgetfn';

const ResetPassword = () => {
  
  return (
    <div>
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          <div className="w-full max-w-md space-y-8">
          <Title
            title="Forget password"
            description={"Enter your email to forget your password"}
          />
        </div>
        <Forgetfn />
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;