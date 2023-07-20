
interface CardData {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
  }

  interface DataCardProps{
    data: CardData[];
  }

const UserCard: React.FC<DataCardProps> = ({data}) => {

   
    return(
        <div className="flex justify-center overflow-x-auto">
            <table className="w-2/3  text-base text-left text-gray-500">
                <thead className="text-sm text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th className="px-6 py-3">
                            Name
                        </th>
                        <th className="px-6 py-3">
                            Username
                        </th>
                        <th className="px-6 py-3">
                            Email
                        </th>
                        <th className="px-6 py-3">
                            Phone 
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) =>(
                        <tr  key={item.id} className="bg-white border-b">
                            <td className="px-6 py-4">{item.name}</td>
                            <td className="px-6 py-4">{item.username}</td>
                            <td className="px-6 py-4">{item.email}</td>
                            <td className="px-6 py-4">{item.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}
export {UserCard};