"use server";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function insert(formData: FormData) {
    await prisma.user.create({
        data: {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
        },
    });

    revalidatePath("/posts");
}

