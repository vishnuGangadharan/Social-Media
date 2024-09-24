import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import React from "react";
import { FaFileUpload } from "react-icons/fa";

interface PopUpProps {
  text: string;
  icon: React.ReactNode;
}


const PopUp: React.FC<PopUpProps> = ({text,icon}) => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [files, setFiles] = React.useState<File[]>([]);
    const [preview, setPreview] = React.useState<string[]>([]);

  return (
    <>
      <div className="flex items-center gap-4 px-1  text-xl w-full" onClick={onOpen}>{icon} {text}</div>
      <form action="">
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
              <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">Post Text</label>
                    <textarea
                     
                     
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
                // onChange={}
                accept='image/*,video/*'
                multiple
              />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
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

export default PopUp
