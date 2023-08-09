import React, { memo } from "react";

import { LeftWrapper } from "./style.js";
import IconLogo from "@/assets/svg/icon_logo.jsx";

const HeaderLeft = memo(() => {
  return (
    <LeftWrapper>
      <div className="logo">
        <IconLogo />
      </div>
    </LeftWrapper>
  );
});
export default HeaderLeft;
