
import { Card } from "flowbite-react";
import { Avatar } from "@nextui-org/react";
import { useSelector, UseSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { getAllUsers } from "@/api/user";
import { useEffect, useState } from "react";
import { userFormData } from "@/services/interface/user";
import { Link } from "react-router-dom";
const RightBar = () => {
  const { userInfo } = useSelector((state: RootState) => state.auth)
  const userId = userInfo._id

  const [userData, setUsersData] = useState<userFormData[]>([])

  const allUsers = async () => {
    try {
      const response = await getAllUsers(userId)
      setUsersData(response.data)
      console.log('all', response.data);
    } catch (error) {
      console.log(error);

    }
  }

  useEffect(() => {
    allUsers()
  }, [userId])
  return (
    <div className='w-[30%] h-screen bg-black/85 p-5 '>
      <Card className="max-w-sm bg-black mt-10">
        <div className="mb-4 flex items-center justify-between">
          <h5 className="text-xl font-bold leading-none text-white dark:text-white">friend suggestions</h5>
          <a href="#" className="text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-500">
            View all
          </a>
        </div>
        {userData && userData.length >= 0 ? (
          userData.map((item, indx) => (
            <div key={indx} className="flow-root">
              <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                <li className="py-3 sm:py-4">
                  <div className="flex items-center space-x-4">
                    <div className="shrink-0">
                      <Avatar src={item.profilePicture} size="md" />

                    </div>
                    <Link to='/profile' state={{ userId: item._id }}>
                      <div className="min-w-0 flex-1 cursor-pointer">
                        <p className="truncate text-sm font-medium text-white dark:text-white">{item.name}</p>
                        <p className="truncate text-sm text-gray-500 dark:text-gray-400">@{item.name}</p>
                      </div>
                    </Link>
                    <div
                      className="inline-flex items-center text-base font-semibold text-white dark:text-white cursor-pointer hover:text-blue-500">
                      Follow
                    </div>
                  </div>
                </li>

              </ul>
            </div>
          ))
        ) : ('no data get')}
      </Card>
    </div>
  )
}

export default RightBar
