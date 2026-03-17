import { Icon } from "@iconify/react";

export default function Analytics() {
  return (
    <>
      <div className="flex justify-between items-center">
        <p className="w-full text-2xl font-medium md:w-max text-heading">
          Analytics
        </p>{" "}
        <button className="w-full flex justify-center font-medium items-center h-10 text-white rounded-lg cursor-pointer bg-primary md:w-45">
          <Icon
            icon="material-symbols:add-rounded"
            className="text-base test-white"
          />{" "}
          Add New
        </button>
      </div>
    </>
  );
}
