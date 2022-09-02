import React from 'react'

function Card(props) {
    return (
        <div>

            <div class=" mt-5 mb-5 sm:ml-1 lg:ml-32 w-94  lg:w-3/4 md:mt-6 md:pl-6 h-40  lg:h-20  bg-gray-50 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div class="flex flex-col items-center pb-10">
                    <div class="flex flex-col md:flex-col lg:flex-row  mt-4 space-x-3 md:mt-6">
                        <h5 class="mb-1 md:ml-5 sm:mr-5 md:mr-20 lg:mr-72 text-xl font-medium text-gray-900 dark:text-white">{props.name}</h5>

                        <a href="#" class="  items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</a>
                        <a href="#" class="  items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Message</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Card
