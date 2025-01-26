import prisma from "@/lib/db";

export default async function Home() {
  const user = await prisma.user.find
  return (
    <div>
      <h1>Home Docker prisma </h1>
    </div>
  );
}
