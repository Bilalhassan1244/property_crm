import { useEffect } from "react";
import SearchInput from "../../components/search/searchInput";
import CustomTable from "../../components/customTable";
import { Icon } from "@iconify/react";
const titles = [
  "Contact ID",
  "Contact Name / Number",
  "Whatsaap Number",
  "Email",
  "City / Country",
  "Address",
  "Enter By ",
  "Edit By",
  "Action",
];
const tableData = [
  [
    "Sep 20,2025",
    <>
      <p>Hussain</p>
      <p className="px-2 text-white rounded-sm bg-amber-400 w-max ">
        0322-1234567
      </p>{" "}
    </>,
    "+966-052-1236558",
    <p className="text-sm text-light">imran985@gmail.com</p>,
    "Lahore / Pakistan",
    "Property CRM",
    <>
      <p>Misbah</p>
      <p className="text-sm text-light">17-Feb-2026</p>
    </>,
    "-",
    <Icon
      icon="bi:three-dots-vertical"
      className="text-lg cursor-pointer text-primary"
    />,
  ],
];

export default function Contact() {
  useEffect(() => {
    document.title = "Contact — Property CRM";
    window.scroll(0, 0);
  });
  return (
    <>
      <div className="flex flex-wrap gap-3 justify-between items-center">
        <p className="w-full text-2xl font-medium md:w-max text-heading">
          Contact List
        </p>{" "}
        <button className="w-full flex justify-center font-medium items-center h-10 text-white rounded-lg cursor-pointer bg-primary md:w-45">
          <Icon
            icon="material-symbols:add-rounded"
            className="text-base test-white"
          />{" "}
          Add New
        </button>
      </div>
      <div className="flex flex-wrap items-center gap-3 justify-between mt-4">
        <div className="flex flex-wrap items-center gap-3">
          <button className="w-full h-10 text-heading font-medium rounded-lg cursor-pointer bg-white md:w-45">
            Upload Excel
          </button>
          <div className="w-full md:w-48 2xl:w-70">
            <SearchInput name="Name" placeholder="Search" />
          </div>{" "}
          <div className="w-full md:w-48 2xl:w-70">
            <SearchInput name="Phone No" placeholder="Search" />
          </div>{" "}
          <div className="w-full md:w-48 2xl:w-70">
            <SearchInput name="Email" placeholder="Search" />
          </div>
        </div>
        <button className="w-full h-10 text-white font-medium rounded-lg cursor-pointer bg-[#2DA219] md:w-45">
          Search
        </button>
      </div>
      <div className="w-full bg-[#E5EBF7] h-auto mt-4 rounded-xl p-3 ">
        <p className="text-sm font-medium text-light ">Contact List</p>
        <div className="mt-2 2xl:h-[76vh] xl:h-[64.5vh] bg-white border rounded-md border-primary">
          <CustomTable titles={titles} data={tableData} />
        </div>
      </div>
    </>
  );
}
