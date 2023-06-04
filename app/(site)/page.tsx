import Image from "next/image";
import AuthForm from "./components/AuthForm";
export default function Home() {
  return (
    <div
      className="flex h-[100vh] flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-100 items-center
     "
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md ">
        <Image
          alt="logo"
          src="/logo.png"
          width="48"
          height="48"
          className="mx-auto w-auto"
        />
        <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 text-center">
          Sign in to your account
        </h2>
      </div>

      {/* AuthForms */}
      <AuthForm />
    </div>
  );
}
