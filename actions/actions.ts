"use server";

import { revalidatePath } from "next/cache";
import prisma from "@/lib/db";

// --- Task actions ---

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

  const newStatus = !task.is_done;

  await prisma.task.update({
    where: { id },
    data: {
      is_done: newStatus,
    },
  });

  if (!task.is_done && newStatus) {
    await increaseExp();
  }

  revalidatePath("/");
}

// --- Character actions ---

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

//helper functions

async function increaseExp() {
  const character = await prisma.character.findFirstOrThrow();

  const currentExp = character.exp + 10;

  await prisma.character.update({
    where: { id: character.id },
    data: {
      exp: { increment: 10 },
    },
  });

  await tryLevelUp(character.id, currentExp);
}

async function tryLevelUp(id: string, exp: number) {
  const character = await prisma.character.findUniqueOrThrow({
    where: { id },
  });

  const thresholdForNextLevel = await prisma.levelThreshold.findUniqueOrThrow({
    where: { level: character.level + 1 },
  });

  if (exp >= thresholdForNextLevel.exp) {
    await prisma.character.update({
      where: { id },
      data: {
        level: { increment: 1 },
        exp: 0,
      },
    });
  }
}

export async function reduceExp(formData: FormData) {}
