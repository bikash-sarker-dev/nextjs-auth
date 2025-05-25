import LoginButton from "@/components/LoginButton";
import LogOutButton from "@/components/LogOutButton";
import UserInfo from "@/components/UserInfo";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <>
      <div>
        <h2>this is a best home page</h2>

        {session?.user ? <LogOutButton /> : <LoginButton />}

        <UserInfo />
        <p>server: {JSON.stringify(session)}</p>
      </div>
    </>
  );
}
