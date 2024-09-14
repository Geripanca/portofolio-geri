import React from "react";

function Footer() {
  return (
    <>
      <div className="flex flex-column  w-3/4 mx-auto justify-end mt-3 px-4">
        <div className="flex justify-end space-x-1 sm:text-[15px] text-[8px] text-[#3A3A3A] font-anton">
          <div>Junior Dev</div> <span>|</span>
          <div>Content Writer</div> <span>|</span>
          <div>UI\UX Design</div>
        </div>
      </div>
      <div className="flex flex-column  w-3/4 mx-auto justify-end px-4">
        <div className="flex justify-end  space-x-1 sm:text-[15px] text-[8px] text-[#3A3A3A] font-anton">
          <div>2024 By Me</div>
        </div>
      </div>
    </>
  );
}

export default Footer;
