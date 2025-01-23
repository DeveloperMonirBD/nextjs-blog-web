import Link from "next/link";

const Profile = async () => {
    return (
        <div className="text-center mt-20 text-2xl px-3">
            <div className="max-w-xl mx-auto bg-gray-100 py-20 rounded-md">
                    <div className="flex flex-col mx-auto justify-center items-center gap-6">
                        <h1>Welcome to my Profile</h1>
                        <Link href="/api/auth/logout" className="hover:text-orange-600">
                            <button className="btn text-base"> Sign Out</button>
                        </Link>
                    </div>
            </div>
        </div>
    );
};

export default Profile;
