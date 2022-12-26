import Left from "./components/Weather.component";
import Center from "./components/Main.component";
import Right from "./components/Sugestion.component";
import {useSelector} from "react-redux";
const Dashboard = () => {
    const dark = useSelector(state => state.themeReducer)
    const user = useSelector(state => state.authReducer)
    console.log("user",user)
  return(
      <div className='overflow-x-hidden min-h-screen pt-16 md:pt-[85px]  '>
          <div className='w-screen grid grid-cols-11 md:gap-x-12 px-3 sm:px-7 md:px-10 relative '>
              <div className='col-span-11 md:col-span-3 relative order-1 '>
                  <Left  dark={dark} />
              </div>
              <div className='col-span-11 md:col-span-5 shrink-0 order-3 md:order-2 '>
                  <Center
                      dark={dark}
                      token={user.token}
                      user={user}
                  />
              </div>
              {/*<div className='col-span-11 md:col-span-3 relative order-2 md:order-3 '>
                  <Right
                      getAllPosts={getAllPosts}
                      navigate={navigate}
                      user={user}
                      token={token}
                      dark={dark}
                      error={error}
                  />
              </div>*/}
          </div>
      </div>
  )
}
export default Dashboard