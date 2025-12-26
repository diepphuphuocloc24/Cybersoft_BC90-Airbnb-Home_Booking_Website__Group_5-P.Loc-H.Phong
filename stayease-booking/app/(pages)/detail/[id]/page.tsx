import React from "react"
import Image from "next/image"
import { fetchDetailEachShoes } from "@/app/server/action/shoe"

interface Props {
    params: any
}

export async function generateMetadata({ params }: Props) {
    const { id } = await params

    const prodDetail = await fetchDetailEachShoes(id);

    return {
        title: `${prodDetail?.name} - Product Detail`,
        description: prodDetail?.description,
        openGraph: {
            title: prodDetail?.name,
            description: prodDetail?.description,
            url: `https://yourwebsite.com/products/${id}`,
            images: [
                {
                    url: prodDetail?.image,
                    width: 500,
                    height: 500,
                    alt: prodDetail?.alias,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: prodDetail?.name,
            description: prodDetail?.description,
            images: [prodDetail?.image],
        },
    };
}

const Detail = async ({ params }: { params: { id: string } }) => {
    const { id } = await params

    const dataShoe = await fetchDetailEachShoes(id)

    const renderMainDetail = () => {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-10 shadow-2xl">
                <div className="relative group">
                    <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full opacity-40 group-hover:opacity-70 transition" />
                    <div className="relative w-full h-105 rounded-2xl overflow-hidden">
                        <Image
                            src={dataShoe?.image || ""}
                            alt={dataShoe?.name || "productImage"}
                            fill
                            className="object-contain p-8 group-hover:scale-110 transition duration-500"
                        />
                    </div>
                </div>

                <div className="flex flex-col justify-between text-white">
                    <div className="space-y-6">
                        <h1 className="text-4xl font-extrabold tracking-wide">
                            {dataShoe?.name}
                        </h1>

                        <p className="text-gray-400 leading-relaxed">
                            {dataShoe?.shortDescription}
                        </p>

                        <div className="flex items-center gap-6">
                            <span className="text-3xl font-bold text-blue-400">
                                ${dataShoe?.price}
                            </span>
                            <span className="text-sm text-gray-400">
                                In stock: {dataShoe?.quantity}
                            </span>
                        </div>

                        <div>
                            <p className="mb-2 text-sm text-gray-400">Available Sizes</p>
                            {/* <div className="flex gap-3 flex-wrap">
                                {dataShoe?.size?.map((size: string) => (
                                    <span
                                        className="px-4 py-2 rounded-full border border-white/20 hover:border-blue-400 hover:text-blue-400 transition cursor-pointer text-sm"
                                    >
                                        {size}
                                    </span>
                                ))}
                            </div> */}
                        </div>
                    </div>

                    <button className="mt-10 w-full py-4 rounded-xl bg-blue-500 hover:bg-blue-600 transition font-semibold tracking-wide cursor-pointer">
                        Add to cart
                    </button>
                </div>
            </div>
        )
    }

    const renderDescription = () => {
        return (
            <div className="mt-14 bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl">
                <h2 className="text-2xl font-bold text-white mb-6">
                    Product Description
                </h2>
                <p className="text-gray-300 leading-relaxed">
                    {dataShoe?.description}
                </p>
            </div>
        )
    }

    const renderRelatedProducts = () => {
        return (
            <div className="mt-16">
                <h2 className="text-3xl font-bold text-white mb-10 text-center">
                    Related Products
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {dataShoe?.relatedProducts.map((item: any) => (
                        <div
                            key={item.id}
                            className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-xl shadow-lg hover:shadow-2xl transition cursor-pointer"
                        >
                            <div className="relative w-full h-56 bg-black/30">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="object-contain p-6 group-hover:scale-110 transition duration-500"
                                />
                            </div>

                            <div className="p-5 space-y-3">
                                <h3 className="text-white font-semibold text-lg line-clamp-1">
                                    {item.name}
                                </h3>
                                <p className="text-blue-400 font-bold">
                                    ${item.price}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-linear-to-br from-black via-gray-900 to-black px-12 py-16">
            <div className="container mx-auto space-y-16">
                {renderMainDetail()}
                {renderDescription()}
                {renderRelatedProducts()}
            </div>
        </div>
    )
}

export default Detail
