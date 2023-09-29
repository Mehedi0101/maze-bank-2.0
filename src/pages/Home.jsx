import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const handleEnterSite = () => navigate('/login');
    return (
        <div>
            <div className="h-[80vh] flex flex-col justify-center items-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-red-700">Welcome to Maze Bank</h1>
                <button onClick={handleEnterSite} className="px-5 py-2 bg-red-700 text-white rounded text-lg font-semibold mt-5 active:scale-95 transition-transform">Enter Site</button>
            </div>
        </div>
    );
};

export default Home;