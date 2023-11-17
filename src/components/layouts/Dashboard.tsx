import { Outlet } from "react-router-dom"

const Dashboard = () => {
  return (
    // TODO: Dashboard navbar
    <>
      <main className="w-full flex items-start">
        <div className=""></div>
        <div className="w-full lg:w-5/6">
          <Outlet />
        </div>
      </main>
    </>
  )
}

export default Dashboard