
import { Card } from "flowbite-react";
import {Avatar} from "@nextui-org/react";


const RightBar = () => {
  return (
    <div className='w-[30%] h-screen bg-black/85 p-5 '>
    <Card className="max-w-sm bg-black mt-10">
      <div className="mb-4 flex items-center justify-between">
        <h5 className="text-xl font-bold leading-none text-white dark:text-white">friend suggestions</h5>
        <a href="#" className="text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-500">
          View all
        </a>
      </div>
      <div className="flow-root">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="shrink-0">
              <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" size="md" />

              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-white dark:text-white">Neil Sims</p>
                <p className="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>
              </div>
              <div 
              className="inline-flex items-center text-base font-semibold text-white dark:text-white cursor-pointer hover:text-blue-500">
                Follow</div>
            </div>
          </li>
          
        </ul>
      </div>
    </Card>
    </div>
  )
}

export default RightBar
