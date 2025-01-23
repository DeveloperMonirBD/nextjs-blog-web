
const Page = async ({ params }) => {
    const { id } = params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();

    return (
        <div className="px-3">
            <div className="max-w-xl bg-gray-200 mx-auto mt-20 px-10 py-10 rounded-md">
                <h1 className="text-center text-xl font-bold mb-6">Blog Post - {data.id}</h1>
                <h2 className="text-lg font-semibold mb-2">{data.title}</h2>
                <p>{data.body}</p>
            </div>
        </div>
    );
};

export default Page;
