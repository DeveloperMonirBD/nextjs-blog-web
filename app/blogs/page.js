import Link from 'next/link';

const blogs = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    return (
        <div className="container mx-auto px-3 mb-20">
            <h1 className="text-3xl text-center font-bold pb-10 pt-20">Blog Posts</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {data.map(post => (
                    <Link key={post.id} href={`/${post.id}`} className="bg-gray-200 h-[100px] p-4 rounded-md font-bold">
                        <p>{post.title}</p>
                    </Link>
                ))}
            </div>

            {/* <Link href={"/blogs"} className="btn">
                See More
            </Link> */}
        </div>
    );
};

export default blogs;
