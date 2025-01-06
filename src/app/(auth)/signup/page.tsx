import Form from "./Form";
import RightSide from "./RightSide";

function Page() {
  return (
    <div className="flex h-screen w-full flex-col-reverse lg:flex-row">
      {/* RightSide: Visible only on larger screens */}
      <div className="hidden h-full w-full lg:block lg:w-1/2">
        <RightSide />
      </div>

      {/* Form: Centered and responsive */}
      <div className="flex h-full w-full items-center justify-center p-6 lg:w-1/2">
        <Form />
      </div>
    </div>
  );
}

export default Page;
