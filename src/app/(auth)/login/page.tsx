import Form from "./Form";
import RightSide from "./RightSide";

function Page() {
  return (
    <div className="grid h-screen lg:grid-cols-2">
      <div className="flex flex-col items-center justify-center">
        <div className="w-full max-w-md p-4">
          <Form />
        </div>
      </div>
      <div className="bg-img hidden items-center justify-center lg:flex">
        <RightSide />
      </div>
    </div>
  );
}

export default Page;
