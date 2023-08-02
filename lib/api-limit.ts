import { auth } from "@clerk/nextjs";

import prismadb from "@/lib/prismadb";
import { MAX_FREE_COUNTS } from "@/constants";

export const incrementApiLimit = async () => {
    const { userId } = auth();

    if (!userId) {
        return;
    }

    // Looking for existing
    const userApiLimit = await prismadb.userApiLimit.findUnique({
        where: { userId: userId },
    });

    if (userApiLimit) {
        await prismadb.userApiLimit.update({
            where: { userId: userId },
            data: { count: userApiLimit.count + 1 },
        });
    } else {
        await prismadb.userApiLimit.create({
            data: { userId: userId, count: 1 },
        });
    }
};

// Check if current user reach the limit of Free Usage
export const checkApiLimit = async () => {
    const { userId } = auth();

    if (!userId) {
        return false;
    }

    const userApiLimit = await prismadb.userApiLimit.findUnique({
        where: { userId: userId },
    });

    if (!userApiLimit || userApiLimit.count < MAX_FREE_COUNTS) {
        return true;
    } else {
        return false;
    }
};

export const getApiLimitCount = async () => {
    const { userId } = auth();

    if (!userId) {
        return 0;
    }

    const userApiLimit = await prismadb.userApiLimit.findUnique({
        where: {
            userId
        }
    });

    if (!userApiLimit) {
        return 0;
    }

    return userApiLimit.count;
};