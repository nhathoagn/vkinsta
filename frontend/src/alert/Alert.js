import Loading from "react-loading";

const Notify = () => {
  return(
      <div>
          {alert.loading && <Loading />}
      </div>
  )
}
export default Notify