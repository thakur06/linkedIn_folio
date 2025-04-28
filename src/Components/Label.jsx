
import React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { Util } from "../libs/utils";

const Label = React.forwardRef((props, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={Util(
      "text-sm text-start font-medium  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      props.className
    )}
    {...props}
  />
));

Label.displayName = LabelPrimitive.Root.displayName;

export { Label };