"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const activeFilter = searchParams.get("capacity");

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  }

  return (
    <div className="border border-primary-800 flex">
      <Button
        filter="all"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        All
      </Button>
      <Button
        filter="small"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        Small
      </Button>
      <Button
        filter="medium"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        Medium
      </Button>
      <Button
        filter="large"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        Large{" "}
      </Button>
    </div>
  );
}

export default Filter;

function Button({ filter, handleFilter, children, activeFilter }) {
  return (
    <button
      onClick={() => handleFilter(filter)}
      className={`bg-primary-900 text-white px-4 py-2 rounded-md hover:bg-gray-900 ${
        activeFilter === filter ? "bg-primary-700 text-primary-50" : ""
      } `}
    >
      {children}
    </button>
  );
}
