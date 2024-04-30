import React, { useEffect, useState } from 'react'
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts'

import axios from 'axios'


const Items = () => {
    const BASE_URL = process.env.BASE_URL

    const [currentPage, setCurrentPage] = useState<number>(1);
    const [Items, setItems] = useState<Array<any>>([])
    const limit = 25;
    const SlicedData = Items.slice((currentPage - 1) * limit, currentPage * limit);
    const totalPages = Math.ceil(Items.length / limit);

    const NumberOfPages = [];
    for (let i = 1; i <= totalPages; i++) {
        NumberOfPages.push(i);
    }

    const handlePageNumber = (PageNumber: number): void => {
        setCurrentPage(PageNumber);
    }
    const previousPage = ()=>{
        if (currentPage >1){
            setCurrentPage(currentPage-1)
        }
    }
    const nextPage = ()=>{
        if(currentPage < totalPages){
            setCurrentPage(currentPage+1)
        }
    }

    console.log(currentPage)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${BASE_URL}products`);
                const jsonData = response.data;
                setItems(jsonData);
                console.log(Items); 
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData(); 
    }, []);
    //query

    return (
        <div>
            <div>
                <div className='flex justify-between border border-red-50'>
                    <div>Items</div>
                    <div className='flex flex-col gap-1 '>
                        <div className='flex gap-2 bg-white w-5/12 p-2 rounded w-full'>
                            <input className='w-full rounded p-1 border-red-100 border' />
                            <div>
                                Search
                            </div>
                        </div>
                    </div>
                    <div>
                        <button onClick={previousPage}>
                            previous
                        </button>
                        |
                        <button onClick={nextPage}>
                            next
                        </button>
                    </div>
                </div>
                <div className='border border-red-50'>
                    filter
                </div>
            </div>

            <div className='m-5 pt-10 flex  flex-wrap gap-2 justify-center'>
                {SlicedData.map((product, index) => (
                    <div key={index} className='bg-red-800' style={{ width: '150px', height: '150px', margin: "5px" }}>
                        {index+1}
                        {product.productName}
                    </div>
                ))}
            </div>

            <div className='flex gap-2 justify-center'>
                {
                    NumberOfPages.map((PageNumber) =>
                        <ul>
                            <li>
                                <button onClick={() => handlePageNumber(PageNumber)}>
                                    {PageNumber}
                                </button>
                            </li>
                        </ul>
                    )
                }
            </div>

        </div>

    )
}

export default Items