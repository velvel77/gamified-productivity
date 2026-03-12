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

export async function toggleTask(formData: FormData) {
  const id = formData.get("id") as string;

  const task = await prisma.task.findUniqueOrThrow({
    where: { id },
  });

  await prisma.task.update({
    where: { id },
    data: {
      is_done: !task?.is_done,
    },
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

export async function deleteCharacter(formData: FormData) {
  const id = formData.get("id") as string;

  await prisma.character.delete({
    where: { id },
  });

  revalidatePath("/");
}