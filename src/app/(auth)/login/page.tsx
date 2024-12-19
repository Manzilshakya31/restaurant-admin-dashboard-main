import Form from "./Form";
import RightSide from "./RightSide";

function Page() {
  return (
    <div className="h-[100vh] grid-cols-2 lg:grid">
      <div className="flex">
        <div className=" container flex h-full flex-grow items-center justify-center">
          <Form />
        </div>
        <div className="bg-img hidden flex-grow lg:block">
          <RightSide />
        </div>
      </div>
    </div>
  );
}

export default Page;
