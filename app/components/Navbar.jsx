import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import Link from 'next/link';

const Navbar = async () => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    // console.log(user)

    // const isUserAuthenticated = await isAuthenticated();

    return (
        <div className="bg-gray-200 text-gray-700">
            <nav className="container mx-auto flex justify-between py-4 px-6">
                <div>
                    <Link href="/" className="hover:text-orange-600 font-bold text-xl text-orange-600">
                        .Blog
                    </Link>
                </div>
                <div className="space-x-6">
                    <Link href="/" className="hover:text-orange-600">
                        Home
                    </Link>

                    {/* Redirect users to the login page if they are not authenticated. */}
                    {/* {isUserAuthenticated ? (
                        <>
                            <Link href="/profile" className="hover:text-orange-600">
                                Profile
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link href="/api/auth/login" className="hover:text-orange-600">
                                Profile
                            </Link>
                        </>
                    )} */}

                    <Link href="/profile" className="hover:text-orange-600">
                        Profile
                    </Link>

                    {/* Show a "Login" button if the user is not authenticated, and a "Logout" button if they are.  */}
                    {user ? (
                        <>
                            <Link href="/api/auth/logout" className="hover:text-orange-600">
                                Sign Out
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link href="/api/auth/login" className="hover:text-orange-600">
                                Sign In
                            </Link>
                            {/* <Link href="/api/auth/register" className="hover:text-orange-600">
                                Sign Up
                            </Link> */}
                        </>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
