import Loginfn from "./_components/Loginfn";

const LoginPage = () => {
  return (
    <div>
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full bg-gray-50/50 px-4 py-10 border rounded-2xl">
          <Loginfn />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
