import React from 'react'

export default function Card() {
    const cards = [
        {
            title: "Kartu 1",
            description: "Deskripsi Kartu 1. Ini adalah kartu sederhana dengan Tailwind CSS.",
            imageUrl: "https://via.placeholder.com/300"
        },
        {
            title: "Kartu 2",
            description: "Deskripsi Kartu 2. Anda dapat menambahkan lebih banyak kartu di sini.",
            imageUrl: "https://via.placeholder.com/300"
        },
        {
            title: "Kartu 3",
            description: "Deskripsi Kartu 3. Tailwind CSS memudahkan desain tampilan web.",
            imageUrl: "https://via.placeholder.com/300"
        }
    ];
    return (
        <div className="container mx-auto mt-32 mb-28">
            <h1 className="text-3xl font-semibold mb-4">Kartu Sederhana</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cards.map((card, index) => (
                    <div key={index} className="max-w-md bg-white rounded overflow-hidden shadow-lg">
                        <img className="w-full" src={card.imageUrl} alt={card.title} />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{card.title}</div>
                            <p className="text-gray-700 text-base">{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
