import { Button } from "@/components/ui/button";
const page = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 pt-40">
      <img src="/icons/logo.png" alt="logo" width={150} height={150} />
      <p className="text-blue-500 text-7xl font-bold">TopBoard</p>
      <p className="text-4xl pt-2">Colab students assessment forum</p>
      <div className="space-x-20 pt-5">
        <Button className="bg-blue-500 hover:bg-blue-400 px-10 ">
          Sign Up
        </Button>
        <Button className="bg-blue-500 hover:bg-blue-400 px-10 ">
          Sign In
        </Button>
      </div>
    </div>
  );
};

export default page;
