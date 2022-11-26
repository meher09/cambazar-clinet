import React, { useEffect } from 'react';
import CategoryCard from './CategoryCard';

const Categories = () => {

    useEffect(() => {
        fetch('temp/category.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }, [])


    return (

        <div className="div  bg-gray-50 my-8 py-8">
            <section className='container my-8'>


                <div className="divider font-2xl font-bold uppercase">Camera Categories</div>

                <div className="mx-auto  px-4 py-12 sm:px-6 lg:px-8">

                    <div
                        className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:items-stretch"
                    >
                        <div className="flex items-center rounded bg-gray-500 p-8">
                            <div className="mx-auto text-center lg:text-left">
                                <h2 className="text-2xl font-bold text-white">Choose best Camera Types</h2>

                                <p className="mt-4 max-w-[45ch] text-sm text-white">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
                                    cupiditate mollitia saepe vitae libero nobis.
                                </p>


                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 lg:col-span-2 lg:grid-cols-3 lg:py-12">
                            {
                                [...Array(3)].map(category => <CategoryCard></CategoryCard>)
                            }

                        </div>
                    </div>
                </div>
            </section>
        </div>


    );
};

export default Categories;