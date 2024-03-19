import React from "react";
import Link from "next/link";
import Image from "next/image";

const MobileNavbarData = ({ data }) => {
  return (
    <div className="rounded-md max-w-sm w-full mx-auto" >
      <div className="flex-1 space-y-4 py-1">
        <div className="sm:block">
          <div className="space-y-1 px-5 pt-2 pb-3 text-white">
            {data.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className=" hover:bg-gray-700 hover:text-purple block  py-2 rounded-md text-base font-medium"
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
            <div>
                <div className="flex items-center text-white pb-5 pt-8">
                  <Image
                    src={"/images/Navbar/phone.png"}
                    alt="phone-image"
                    width={15}
                    height={15}
                  />
                  <p className="text-base pl-3">
                    +34 123-4567
                  </p>
                </div>
                <div className="flex items-center">
                  <Image
                    src={"/images/Navbar/email.png"}
                    alt="email-image"
                    width={20}
                    height={20}
                  />
                  <p className="text-xs pl-3">
                    Contacto@refugiadossinfronteras.org
                  </p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbarData;
