import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import LoadingForm from "../../Loading/Loading.Form";
import FormCreatePost from "../../common/FormCreatePost";
import Modal from "../../common/Modal";
import {toast} from "react-toastify";
import {GLOBALTYPES} from "../../redux/actions/globalTypes";
import LoadingPost from "../../Loading/Loading.Post";
import InfiniteScroll from "react-infinite-scroll-component";
import Post from "../../common/Post";


let scroll = 0;

const Home = () => {
    const user = useSelector(state => state.authReducer)
    const dark = useSelector(state => state.themeReducer)
    const  homePosts  = useSelector((state) => state.homeReducer);
    console.log("homePosts",homePosts)
    const [openModal, setOpenModal] = useState(false);
    window.addEventListener("scroll", () => {
        if (window.location.pathname === "/") {
            scroll = window.pageYOffset;
            return scroll;
        }
    });


    const form = () =>{
    if (loading) return <LoadingForm/>
    return (
        <FormCreatePost
            setAttachment={setAttachment}
            setOpenModal={setOpenModal}
            text={text}
            user={user.user}
        />
    )
   }
    const content = () =>{
        if (loading){
            return(
                <div>
                    <LoadingPost/>
                </div>
            )
        }
        if (homePosts.loading){
            return (
                <div
                    className={`bg-white ${
                        !dark && "shadow-post"
                    } dark:bg-[#242526] rounded-lg w-full text-center text-xl font-bold py-10 `}
                >
                    <div>No post found... Try again!</div>
                </div>
            );
        }
        if (homePosts.length === 0){
            return (
                <div className="w-full text-center text-xl font-semibold pt-[20vh] flex-col ">
                    <div>
                        You don't post anything and don't follow anyone.
                        <br />
                        Let's do something! :3
                    </div>
                </div>
            );
        }
        return (
            <InfiniteScroll
                dataLength={homePosts.posts.length}
                next={homePosts}
                hasMore={true}
                loader={<LoadingPost />}
            >
                {homePosts.posts.map((post) => (
                    <Post
                        key={post._id}
                        currentPost={post}
                        user_img={user.image.url}
                        userId={user._id}
                        className={!dark ? "shadow-post" : ""}
                        userRole={user.role}
                    />
                ))}
            </InfiniteScroll>
        );
    }
    /*const createNewPost = () => {

    }*/
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
                createNewPost={createNewPost}
                />
           )}
           {loadingCreateNewPost && <LoadingPost className="mb-4" />}
           {content()}
       </div>
    );
};

export default Home;
