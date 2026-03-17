import { useEffect, useState } from "react";
import SearchInput from "../../components/search/searchInput";
import CustomTable from "../../components/customTable";
import { Icon } from "@iconify/react";
import CustomInput from "../../components/customInput";
import CustomSelect from "../../components/select";
import DatePicker from "../../components/datePicker";
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
const StatusOption = ["Approved", "Pending", "In-Progress"];

export default function Contact() {
  const [openModal, setOpenModal] = useState(false);
  const [editingContact, setEditingContact] = useState<any | null>(null);
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
        <button
          onClick={() => {
            setOpenModal(true);
          }}
          className="w-full flex justify-center font-medium items-center h-10 text-white rounded-lg cursor-pointer bg-primary md:w-45"
        >
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
      {openModal && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/70">
          <div
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            className="w-full max-w-4xl overflow-auto bg-white rounded-xl"
          >
            <div className="flex items-center justify-between bg-[#E5EBF7] xl:px-6 px-4 py-4">
              <p className="text-[24px] text-heading capitalize leading-[100%] font-normal">
                {editingContact ? "Edit Contact" : "Create Contact"}
              </p>

              <div className="h-8 group w-8 p-1 rounded-full  hover:shadow-[rgba(99,99,99,0.25)_0px_4px_12px_2px] flex items-center justify-center">
                <div className="p-2 rounded-full cursor-pointer group-hover:bg-white">
                  <Icon
                    icon="ic:twotone-close"
                    className="text-xl cursor-pointer text-primary"
                    onClick={() => setOpenModal(false)}
                  />
                </div>
              </div>
            </div>
            <form className="flex flex-col gap-3 p-6 space-y-3">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <CustomInput placeholder="Enter the Name" label="Name" />
                <CustomInput
                  label="Contact Name"
                  placeholder="Enter the Name"
                  onChange={(val) =>
                    setEditingContact(
                      (prev: any) => prev && { ...prev, contactName: val },
                    )
                  }
                />
                <CustomInput
                  label="Whatsaap Number"
                  placeholder="Enter Whatsaap Number"
                  onChange={(val) =>
                    setEditingContact(
                      (prev: any) => prev && { ...prev, Whatsaapphone: val },
                    )
                  }
                />
                <CustomInput
                  onChange={(val) =>
                    setEditingContact(
                      (prev: any) => prev && { ...prev, email: val },
                    )
                  }
                  placeholder="Enter Email"
                  label="Email"
                />
                <CustomInput
                  placeholder="Enter Location"
                  label="Location"
                  onChange={(val) =>
                    setEditingContact(
                      (prev: any) => prev && { ...prev, location: val },
                    )
                  }
                />
                <CustomInput
                  placeholder="Enter Address"
                  label="Address"
                  onChange={(val) =>
                    setEditingContact(
                      (prev: any) => prev && { ...prev, city: val },
                    )
                  }
                />
                <CustomInput
                  placeholder="Enter name"
                  label="Enter By"
                  onChange={(val) =>
                    setEditingContact(
                      (prev: any) => prev && { ...prev, remarks: val },
                    )
                  }
                />
                <CustomSelect
                  label="Edit By"
                  placeholder="Select the Statu"
                  onChange={(val) =>
                    setEditingContact(
                      (prev: any) => prev && { ...prev, editBy: val },
                    )
                  }
                />
              </div>
              <div className="flex justify-end gap-2 mt-4">
                <button
                  type="button"
                  onClick={() => setOpenModal(false)}
                  className="h-13.75 md:w-25 w-full bg-[#F2FAFD] text-heading rounded-md gap-3 cursor-pointer flex justify-center items-center"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="h-13.75 md:w-50 w-full bg-primary text-white rounded-md gap-3 cursor-pointer flex justify-center items-center"
                  onClick={(e) => {
                    e.preventDefault();
                    console.log("Save Contact", editingContact);
                    setOpenModal(false);
                  }}
                >
                  {editingContact ? "Update Contact" : "Create Contact"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
