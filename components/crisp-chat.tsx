"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {

    useEffect(() => {
        Crisp.configure("aba592e8-b8bc-4913-b7e6-8c78b8bcc9ad");
    }, []);

    return null;
};