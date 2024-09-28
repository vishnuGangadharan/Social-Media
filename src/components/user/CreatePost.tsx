import { addPost } from "@/api/user";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import React, { useState } from "react";
import { FaFileUpload } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { toast } from "react-toastify";
import { setPostData } from "@/redux/slice/postSlice";

interface PopUpProps {
  text: string;
  icon: React.ReactNode;
}


const CreatePost: React.FC<PopUpProps> = ({text,icon}) => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [files, setFiles] = React.useState<File[]>([]);
    const [preview, setPreview] = React.useState<string[]>([]);
    const [error, setError] = useState<{content?: string, files?: string}>({})
    const [content, setContent] = useState<string>('')

    const { userInfo } = useSelector((state: RootState) => state.auth);
    
    const dispatch = useDispatch();

    const handleFileChange = (e:React.ChangeEvent<HTMLInputElement>) =>{

      const selectedFile = Array.from(e.target.files || [])
      if(selectedFile.length > 3) {
        setError(prev => ({...prev,files: " You can upload maximum 3 files only"}))
        return
      }

      setFiles([...files,...selectedFile])

      const newPreview = selectedFile.map((file) =>  URL.createObjectURL(file))
      setPreview([...preview,...newPreview])      
      
    }

    const handleDeleteSelectFile =(index: number) => {
      setFiles((prev) => prev.filter((_, indx ) => indx !== index));
      setPreview((prev) => prev.filter((_,indx) => indx !==index))
    } 

    const handleModalClose = () => {
      setFiles([])
      setPreview([])
      setContent('')
      setError({})
      onOpenChange()
    }

    const handleSubmit = async(e:React.FormEvent) => {

      e.preventDefault()

      try{
        if(files.length === 0) {
          setError(prev => ({...prev,files: "You have to upload at least one file"}))
          return
        }else if(files.length > 3) {
          setError(prev => ({...prev,files: "You can upload maximum 3 files only"}))
          return
        }
        
        const formData = new FormData();
        formData.append('userId', userInfo?._id || '');
        formData.append('content', content);
        files.forEach((file) => {
          if (file.type.startsWith('image/')) {
            formData.append('imagesUpdate', file);
          } else if (file.type.startsWith('video/')) {
            formData.append('videosUpdate', file);
          }       
         })
         for (const [key, value] of formData.entries()) {
          console.log(key, value);
      }         
        const response = await addPost(formData)
        handleModalClose()
        console.log('.....post',response);
        if(response && response.status === 200){
          toast.success(response.data.message)
          dispatch(setPostData(response.data.data))
        }
      }catch(error){
        console.log(error);
      }
    } 
   

  return (
    <>
      <div className="flex items-center gap-4 px-1  text-xl w-full" onClick={onOpen}>{icon} {text}</div>
      <form >
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
              <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">Post Text</label>
                    <textarea
                     onChange={(e) => setContent(e.target.value)}
                      className="w-full px-3 py-2 border rounded-md"
                      rows={3}
                      placeholder="Write something..."
                    />
                  </div>
                  <p>click for fileUpload</p>
              <label
              htmlFor="fileUpload"
              className="curser-pointer p-4 border-dashed border-gray-400 rounded-lg"
              >
            < FaFileUpload size={28}/>

              </label>
             
              <input
                type="file"
                id='fileUpload'
                className='hidden'
                onChange={handleFileChange}
                accept='image/*,video/*'
                multiple
              />
               <div className="flex gap-2">
                {preview.map((preview,index) => (
                  <div key={index}>
                    {files[index].type.includes('image') ? (
                      <div className="relative">
                      <MdDeleteForever 
                      className="absolute top-1 right-1  cursor-pointer hover:text-red-700"
                      onClick={()=>handleDeleteSelectFile(index)}
                      />
                      <img src={preview} alt="preview img" className="w-24 h-24 object-cover"/>
                      </div>
                    ): (
                      <div className="relative">
                      <MdDeleteForever 
                      className="absolute top-1 right-1  cursor-pointer hover:text-red-700"
                      />
                      <video src={preview} controls  className="w-24 h-24 object-cover"/>
                      </div>
                    )}

                  </div>
                ))}
              </div>
              {error.files && <p className="text-red-500 text-sm">{error.files}</p>}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={handleModalClose}>
                  Close
                </Button>
                <Button type="submit" color="primary" onClick={handleSubmit}>
                 upload
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      </form>
    </>
  )
}

export default CreatePost
