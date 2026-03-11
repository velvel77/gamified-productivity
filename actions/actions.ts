"use server";

import { revalidatePath } from "next/cache";
import prisma from "@/lib/db";

export async function addTask(formData: FormData) {
  const title = formData.get("title") as string;
  
  await prisma.task.create({
    data: { title },
  });

  revalidatePath("/");
}

export async function deleteTask(formData: FormData) {
  const id = formData.get("id") as string;

  await prisma.task.delete({
    where: { id },
  });

  revalidatePath("/");
}

export async function createCharacter(formData: FormData) {
  const name = formData.get("name") as string;

  await prisma.character.create({
    data: { name },
  });

  revalidatePath("/");
}