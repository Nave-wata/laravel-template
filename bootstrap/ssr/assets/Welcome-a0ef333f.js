import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Head } from "@inertiajs/react";
import { Typography } from "@mui/material";
function Welcome({ title, subject }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title }),
    /* @__PURE__ */ jsx(Typography, { variant: "h1", children: subject })
  ] });
}
export {
  Welcome as default
};
