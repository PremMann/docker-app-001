import { insert } from '@/lib/actions';

export default function FormCreate() {
    return (
        <div>
        <form action={insert} className="flex flex-col max-w-[400px] mx-auto gap-2 my-10">
          <input name="name" type="text" placeholder="Name" className="border rounded-md px-3 h-10" required />
          <input name="email" type="email" placeholder="Email" className="border rounded-md px-3 h-10" required />
          <button type="submit" className="bg-blue-500 text-white px-5 py-2 rounded-md">
            Create
          </button>
        </form>
      </div>
      )
}
