import React from 'react';

export default function Review() {
    return (
        <div className="min-h-screen bg-gray-100 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white shadow-md sm:rounded-lg">
                    <div className="p-6">
                        <h1 className="text-2xl sm:text-3xl font-semibold mb-4">
                            Customer Reviews
                        </h1>
                        <div className="bg-gray-100 p-4 rounded-lg mb-4">
                            <div className="mb-2">
                                <div className="text-lg font-semibold">John Doe</div>
                                <div className="text-gray-600">April 10, 2023</div>
                            </div>
                            <p className="text-gray-800">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                vehicula, justo a rhoncus fringilla, purus purus pretium elit,
                                vel iaculis purus felis a nulla.
                            </p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg mb-4">
                            <div className="mb-2">
                                <div className="text-lg font-semibold">Jane Smith</div>
                                <div className="text-gray-600">April 15, 2023</div>
                            </div>
                            <p className="text-gray-800">
                                Fusce et vestibulum elit, ut fringilla augue. Sed maximus
                                consectetur nunc, quis eleifend justo tincidunt in.
                            </p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg mb-4">
                            <div className="mb-2">
                                <div className="text-lg font-semibold"> Smith Howe</div>
                                <div className="text-gray-600">April 15, 2023</div>
                            </div>
                            <p className="text-gray-800">
                                Fusce et vestibulum elit, ut fringilla augue. Sed maximus
                                consectetur nunc, quis eleifend justo tincidunt in.
                            </p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg mb-4">
                            <div className="mb-2">
                                <div className="text-lg font-semibold"> Lionel Pessi</div>
                                <div className="text-gray-600">May 15, 2023</div>
                            </div>
                            <p className="text-gray-800">
                                Fusce et vestibulum elit, ut fringilla augue. Sed maximus
                                consectetur nunc, quis eleifend justo tincidunt in.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
