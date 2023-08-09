import React, { memo } from "react";

import { HeaderWrapper } from "./style.js";
import HeaderLeft from "./c-cpns/header-left/index.jsx";
import HeaderCenter from "./c-cpns/header-center/index.jsx";
import HeaderRight from "./c-cpns/header-right/index.jsx";

const AppHeader = memo(() => {
  return (
    <div>
      <HeaderWrapper>
        <HeaderLeft />
        <HeaderCenter />
        <HeaderRight />
      </HeaderWrapper>
    </div>
  );
});
export default AppHeader;
