// filepath: /Users/premmann/Next/docker/docker-app-001/src/app/page.tsx
import prisma from "@/lib/db";
import FormCreate from "@/components/form";

export default async function Home() {
  try {
    const users = await prisma.user.findMany();
    return (
      <div>
        <h1>Home User Lists</h1>
        {users.map((user: { id: number; name: string; createdAt: Date, email: string }) => (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>Created At: {user.createdAt ? new Date(user.createdAt).toLocaleString() : "N/A"}</p>
          </div>
        ))}
        <FormCreate />
      </div>
    );
  } catch (error) {
    console.error("Error fetching users:", error);
    return (
      <div>
        <h1>Error fetching users</h1>
        <p>{(error as Error).message}</p>
      </div>
    );
  }
}