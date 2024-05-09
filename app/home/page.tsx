'use client'
import { Navigation, Pagination } from "swiper/modules";

export default function Page() {
    return (
        <main className="relative h-screen bg-[#2A2438] mx-auto px-4">
            {/* Vector Image - Left Bottom */}
            <img
                src="/img/Vector 7_home.png"
                alt="Left Bottom Vector"
                className="absolute left-0 bottom-0 w-96 h-96 z-0"
            />

            <div className="container flew-row mx-auto px-12 py-32">
                <div className="grid grid-cols-12 gap-4">
                    {/* Title and Image Section */}
                    <div className="col-span-6 z-20">
                        <div className="flex-row items-center mb-8">
                            <div>
                                <h1 className="text-3xl font-bold text-white mr-4">
                                    Your one-stop solution for all document needs
                                </h1>
                            </div>
                            <img
                                src="/img/Maskot home.png"
                                alt="Your Image"
                                className="w-96 h-96 z-10"
                            />
                        </div>
                    </div>

                    {/* Cards Section */}
                    <div className="col-span-6 z-20">
                        <div className="items-center grid grid-cols-2 grid-rows-2 gap-4 md:gap-8">
                            {/* Card Summaroid */}
                            <div className="h-52 w-52 flex-col bg-[#5B5470] bg-opacity-80 p-4 rounded-lg border-solid border-2">
                                <img
                                    src="img\google-docs (1) 1_home.png"
                                    alt="Icon 1"
                                    className="w-auto h-12"
                                />
                                <h2 className="text-lg font-bold">Summaroid</h2>
                                <p className="text-xs text-white text-gray-500">
                                    Summarize the contents of the document according to your needs
                                </p>
                                {/* button */}
                                <button 
                                onClick={() => {window.location.href = '/summaroid'}}
                                className="bg-[#DBD8E3] text-xs text-[#352F44] font-bold px-4 py-2 mt-4 rounded-2xl">
                                    Summarize Now
                                </button>
                            </div>

                            {/* Card Syntax Guard */}
                            <div className="h-52 w-52 flex-col bg-[#5B5470] bg-opacity-80 p-4 rounded-lg border-solid border-2">
                                <img
                                    src="img\project-plan 1_home.png"
                                    alt="Icon 1"
                                    className="w-auto h-12"
                                />
                                <h2 className="text-lg font-bold">Syntax Guard</h2>
                                <p className="text-xs text-white">
                                    Check the validity of the document structure you need
                                </p>

                                <button 
                                onClick={() => {window.location.href = '/syntax-guard'}}
                                className="bg-[#DBD8E3] text-xs text-[#352F44] font-bold px-4 py-2 mt-4 rounded-2xl">
                                    Validate Now
                                </button>
                            </div>

                            {/* Card Doc Query */}
                            <div className="h-52 w-52 flex-col justify-between bg-[#5B5470] bg-opacity-80 p-4 rounded-lg border-solid border-2">
                                <img
                                    src="img\question (1) 1_home.png"
                                    alt="Icon 3"
                                    className="w-auto h-12"
                                />
                                <h2 className="text-lg font-bold text-white">Doc Query</h2>
                                <p className="text-xs text-white">
                                    Free to ask questions about the contents of the document you want to understand
                                </p>
                                <button 
                                onClick={() => {window.location.href = '/doc-query'}}
                                className="bg-[#DBD8E3] text-xs text-[#352F44] font-bold px-4 py-2 mt-4 rounded-2xl">
                                    Ask Now
                                </button>
                            </div>

                            {/* Card Similatron */}
                            <div className="h-52 w-52 flex-col justify-between bg-[#5B5470] bg-opacity-80 p-4 rounded-lg border-solid border-2">
                                <img
                                    src="img\opacity (1) 1_home.png"
                                    alt="Icon 4"
                                    className="w-auto h-12"
                                />
                                <h2 className="text-lg font-bold text-white">Similatron</h2>
                                <p className="text-xs text-white">
                                    Check the plagiarism rate of some of your documents
                                </p>
                                <button 
                                onClick={() => {window.location.href = '/similatron'}}
                                className="bg-[#DBD8E3] text-xs text-[#352F44] font-bold px-4 py-2 mt-4 rounded-2xl">
                                    Compare Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Vector Image - Right Bottom */}
            <img
                src="/img/Vector 8_home.png"
                alt="Right Bottom Vector"
                className="absolute right-0 bottom-0 w-96 h-96 z-0"
            />
        </main>
    );
}
