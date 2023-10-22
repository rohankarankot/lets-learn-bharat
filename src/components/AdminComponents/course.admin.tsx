import Card from "@/hoc/Card/custum.card"

import { deleteCmsData, fetchCmsData } from "@/redux/slice/action"
import { getDatabase, ref, remove } from "firebase/database"
import { initFlowbite } from "flowbite"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import EditCourse from "./components/editCourse.course"

const Course = () => {
  const data = useSelector((state: any) => state.cmsData.cmsData)
  const dispatch = useDispatch()
  const [isEdit, setIsEdit] = useState(false)
  const [selectedId, setSelectedId] = useState()
  const [indexNumber, setIndexNumber] = useState()
  const [isDropdownOpenArray, setIsDropdownOpenArray] = useState([])
  const [selectedInittial, setSelectedInitial] = useState() // Array to manage dropdown visibility for each card
  useEffect(() => {
    initFlowbite()
    dispatch(fetchCmsData())
  }, [])


  const handleEditClick = () => {
    setIsEdit(true)

    setIsDropdownOpenArray([]) // Close all dropdowns when editing
    const selectedData = data?.filter((e: any) => e.id === selectedId)
    setSelectedInitial(selectedData[0])
  }
  const handleDelete = () => {
    const db = getDatabase()
    const coursesRef = ref(db, `/courses/${selectedId}`)
    remove(coursesRef)
      .then(() => {

        // Update the component's state to remove the deleted course from the data array
        const updatedData = data.filter(
          (courseData: any) => courseData.id !== selectedId
        )
        // Dispatch an action to update your Redux store with the updated data
        dispatch(deleteCmsData(updatedData))
      })
      .catch((error) => {
      })
  }

  const handleChange = async ({ id }: any, index: number) => {
    setSelectedId(id)
    // Toggle the dropdown visibility for the clicked card
    const updatedDropdownState: any = [...isDropdownOpenArray]
    updatedDropdownState[index] = !updatedDropdownState[index]
    setIsDropdownOpenArray(updatedDropdownState)
  }

  return (
    <>
      <div className={`flex gap-5 mx-5 my-5 flex-1 flex-wrap`}>
        {data?.map((courseData: any, index: any) => {
          return (
            <Card className="flex p-2 gap-2" key={index}>
              <Image
                src={courseData?.image.toString()}
                height={120}
                width={120}
                alt=""
              />
              <div className="px-5">
                <div className="flex">
                  <p className="">{courseData.title}</p>
                  <div
                    id={`dropdownDefaultButton-${index}`} // Use unique IDs for each dropdown button
                    data-dropdown-toggle={`dropdown-${index}`} // Use unique data attributes for each dropdown
                    className="cursor-pointer"
                    onClick={() => {
                      handleChange(courseData, index)
                      setIndexNumber(index)
                    }} // Toggle dropdown visibility for the clicked card
                  >
                    <p className="pl-5"> {"..."}</p>
                  </div>
                  {isDropdownOpenArray[index] && ( // Check the individual card's dropdown state
                    <div
                      id={`dropdown-${indexNumber}`} // Use unique IDs for each dropdown
                      className={`z-10 absolute  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
                    >
                      <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby={`dropdownDefaultButton-${indexNumber}`} // Use unique IDs for each dropdown button
                      >
                        <li onClick={handleEditClick}>
                          <Link
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Edit
                          </Link>
                        </li>
                        <li onClick={() => handleDelete()}>
                          <Link
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Delete
                          </Link>
                        </li>
                        <li onClick={() => setIsDropdownOpenArray([])}>
                          <Link
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Close
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
                <p>{courseData?.instituteName}</p>
                <p>Price:{courseData?.price}</p>
              </div>
            </Card>
          )
        })}
      </div>
      {isEdit && (
        <div
          className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-60 z-50 overflow-hidden"
          onClick={() => {}} // Close the EditCourse component when clicking outside
        >
          <EditCourse initialValues={selectedInittial} id={selectedId} />
        </div>
      )}
    </>
  )
}

export default Course
