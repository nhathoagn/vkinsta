import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import LoadingForm from "../../Loading/Loading.Form";
import FormCreatePost from "../../common/FormCreatePost";
import Modal from "../../common/Modal";


let scroll = 0;

const Home = () => {
    const user = useSelector(state => state.authReducer)
    const { homePosts } = useSelector((state) => state);
    const [loading, setLoading] = useState(false);
    const [attachment, setAttachment] = useState("");
    const [text, setText] = useState("");
    const [openModal, setOpenModal] = useState(false);
    const [loadingCreateNewPost, setLoadingCreateNewPost] = useState(false);

    const form = () =>{
    if (loading) return <LoadingForm/>
    return (
        <FormCreatePost
            setAttachment={setAttachment}
            setOpenModal={setOpenModal}
            text={text}
            user={user}
        />
    )
   }
   const createNewPost = async (formData) =>{
       setLoadingCreateNewPost(true);
       /*if (!text) {
           toast.error("You must type something...");
           return;
       }*/
    }
    const handleChangeImages = e => {
        const files = [...e.target.files]
        let err = ""
        let newImages = []

        files.forEach(file => {
            if(!file) return err = "File does not exist."

            if(file.size > 1024 * 1024 * 5){
                return err = "The image/video largest is 5mb."
            }

            return newImages.push(file)
        })

        if(err) dispatch({ type: GLOBALTYPES.ALERT, payload: {error: err} })
        setImages([...images, ...newImages])
    }
    return (
       <div className=''>
           {form()}
           {openModal && (
                <Modal
                setOpenModal={setOpenModal}
                text={text}
                setText={setText}
                attachment={attachment}
                setAttachment={setAttachment}
                createNewPost={create}
                />
           )}
       </div>
    );
};

export default Home;
