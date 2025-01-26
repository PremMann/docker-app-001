import prisma from "@/lib/db";

export default async function Home() {
  try {
    const users = await prisma.user.findMany();
    return (
      <div>
        <h1>Home Docker prisma </h1>
        {
          users.map((user: { id: string; name: string }) => (
            <div key={user.id}>
              <h2>{user.name}</h2>
            </div>
          ))
        }
      </div>
    );
  } catch (error) {
    console.error("Error fetching users:", error);
    return (
      <div>
        <h1>Error fetching users</h1>
      </div>
    );
  }
}
