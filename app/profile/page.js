import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import Image from 'next/image';
import Link from 'next/link';

const Profile = async () => {
    const { isAuthenticated, getUser } = getKindeServerSession();
    const isUserAuthenticated = await isAuthenticated();
    const user = await getUser();

    return (
        <div className="text-center mt-20 text-2xl">
            <div className="max-w-xl mx-auto bg-gray-100 py-12 rounded-md">
                {isUserAuthenticated ? (
                    <div className="flex flex-col mx-auto justify-center items-center gap-6">
                        <h1>Welcome to my Profile</h1>
                        <Image src={user.picture || ''} alt={user.given_name || ''} width={100} height={100} />
                        <h3 className="text-sm font-bold">
                            {user.given_name} {user.family_name}
                        </h3>
                        <Link href="/api/auth/logout" className="hover:text-orange-600">
                            <button className="btn text-base"> Sign Out</button>
                        </Link>
                    </div>
                ) : (
                    <div>
                        <h1>Forbidden</h1>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Profile;
