import Form from "./Form";
// import Right from './Right';
import RightSide from "./RightSide";

function Page() {
  return (
    <div className=" w-full lg:flex items-center h-screen">
      <div className="bg-img hidden h-full w-1/2 lg:block">
        <RightSide />
      </div>
      <div className="mt-[35px] flex w-full  items-center justify-center  md:mt-0 lg:w-1/2">
        {/* <Right /> */}
        <Form />
      </div>
    </div>
  );
}

export default Page;
