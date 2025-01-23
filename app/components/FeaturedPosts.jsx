'use client';

import PostCard from "./PostCard";

const FeaturedPosts = ({ data }) => {
    
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.slice(0, 6).map((post) => (
                <PostCard key={post.id} title={post.title} description={post.body} />
            ))}
        </div>
    );
};

export default FeaturedPosts;
