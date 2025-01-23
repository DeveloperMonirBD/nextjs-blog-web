"use client"

const PostCard = ({ title, description }) => {
    return (
        <>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title mb-3">{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </>
    );
};

export default PostCard;