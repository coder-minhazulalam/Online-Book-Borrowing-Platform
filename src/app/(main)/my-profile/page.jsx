import { headers } from "next/headers";
import { auth } from "@/lib/auth";

const MyProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    return <div>User not found</div>;
  }

  const { image, name, email } = session.user;

  return (
    <div>
      <h1>Name = {name}</h1>
      <p>Email = {email}</p>
      {image && (
        <img
          src={image}
          alt={name}
          className="w-20 h-20 rounded-full"
        />
      )}
      <p>This is the my profile page.</p>
    </div>
  );
};

export default MyProfilePage;