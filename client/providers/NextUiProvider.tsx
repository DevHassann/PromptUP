"use client"

import * as React from "react";

import { NextUIProvider } from "@nextui-org/react";
import { NextUIProviderProps } from "../interfaces/providers.interface";

export default function NextUiProvider({ children }: NextUIProviderProps) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
