
interface PostData {
    userId: number;
    id: number;
    title: string;
    body: string;

}

interface PostDataProps{
    posts: PostData[];
}

const PostCard: React.FC<PostDataProps> = ({posts}) => {

    return(
        <div className="flex justify-center overflow-x-auto">
            <table className="w-2/3 text-left  text-base text-gray-500">
                <thead className="uppercase text-sm text-gray-700 bg-gray-50">
                    <tr >
                        <th className="px-6 py-3">Title</th>
                        <th className="px-6 py-3">Body</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((item) => (
                        <tr key={item.id} className="bg-white border-b">
                            <td className="px-6 py-3">{item.title}</td>
                            <td className="px-6 py-3">{item.body}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export {PostCard}
