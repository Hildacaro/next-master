import React from "react";
import Link from "next/link";

const MobileNavbarData = ({ data }) => {
  return (
    <div className="rounded-md max-w-sm w-full mx-auto">
      <div className="flex-1 space-y-4 py-1">
        <div className="sm:block">
          <div className="space-y-1 px-5 pt-2 pb-3">
            {data.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-black hover:bg-gray-700 hover:text-purple block  py-2 rounded-md text-base font-medium"
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbarData;
