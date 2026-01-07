import { Link } from "react-router";

const NotFoundPage = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen gap-8">
            <h1 className="font-bold text-2xl text-white">Error, page not found!</h1>
            <Link className="font-montserrat font-semibold transition-transform duration-300 hover:scale-120 hover:text-lg text-white hover:text-blue-600" to={'/dashboard'}>Go Back!</Link>
        </div>
    )
}

export default NotFoundPage;