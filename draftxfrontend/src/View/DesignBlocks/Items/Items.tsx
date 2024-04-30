import React, { useEffect, useState } from 'react'
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts'
import { BaseURI } from '../../../Utils/config'
import {Item, fetchItems} from '../../../Services/api'


import axios from 'axios'


// const Items = () => {

//     const [items, setItems] = useState([]);
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState(null);
  
//     useEffect(() => {
//       const fetchData = async () => {
//         setIsLoading(true);
//         try {
//           const fetchedItems = await fetchItems();
//           setItems(fetchedItems);
//         } catch (error) {
//           console.error('Error fetching data in Items component:', error);
//           setError(error);
//         } finally {
//           setIsLoading(false);
//         }
//       };
  
//       fetchData();
//     }, []);





    // useEffect(()=>{
    //     const x = fetchItems().then((res: { data: any })=>{
    //         console.log(res.data)
    //         console.log("hays")
    //     })
    // },[])




    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get(`${BaseURI}`);
    //             const jsonData = response.data;
    //             setItems(jsonData);
    //             console.log(Items); 
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };
    //     fetchData(); 
    // }, []);
    //query

//     return (
//         <div>
           

// //             <div className='m-5 pt-10 flex  flex-wrap gap-2 justify-center'>
// //                 {SlicedData.map((product, index) => (
//                     <div key={index} className='bg-red-800' style={{ width: '150px', height: '150px', margin: "5px" }}>
//                         {index+1}
//                         {product.productName}
//                     </div>
//                 ))}
//             </div>

//             <div className='flex gap-2 justify-center'>
//                 {
//                     NumberOfPages.map((PageNumber,index) =>
//                         <ul>
//                             <li>
//                                 <button key={index} onClick={() => handlePageNumber(PageNumber)}>
//                                     {PageNumber}
//                                 </button>
//                             </li>
//                         </ul>
//                     )
//                 }
//             </div>

//         </div>

//     )
// }

// export default Items



const Items = ({itemCategory}:{itemCategory: string}) => {
    const [category, setCategory] = useState<string>("");
    const [items, setItems] = useState<Item[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);


    useEffect(()=>{
        setCategory(itemCategory)  
        console.log("m")
    },[itemCategory])


    console.log(category)
    useEffect(() => {
    
      const fetchData = async () => {
        setIsLoading(true);
        try {
          const fetchedItems = await fetchItems(category);
          setItems(fetchedItems);
        } catch (error:any) {
          console.error('Error fetching data in Items component:', error);
          setError(error);
        } finally {
          setIsLoading(false);
        }
      };
     
      fetchData();
    }, [category]);


    // page
        const [currentPage, setCurrentPage] = useState<number>(1);

    const limit = 20
    const SlicedData = items.slice((currentPage - 1) * limit, currentPage * limit);
    const totalPages = Math.ceil(items.length / limit);

    const NumberOfPages = [];
    for (let i = 1; i <= totalPages; i++) {
        NumberOfPages.push(i);
    }

    const handlePageNumber = (PageNumber: number): void => {
        setCurrentPage(PageNumber);
    }
    const previousPage = ()=>{
        if (currentPage >1){
            console.log(currentPage)
            setCurrentPage(currentPage-1)
        }
    }
    const nextPage = ()=>{
        if(currentPage < totalPages){
            setCurrentPage(currentPage+1)
        }
     }
  
    return (
      <div>
         <div className='flex flex-col'>
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
        {isLoading && <p>Loading items...</p>} {/* Optional loading indicator */}
        {/*error && <p>Error: {error.message}</p>} {/* Optional error message */}
        {items.length > 0 && (
  

        <div className='m-5 pt-10 flex  flex-wrap gap-2 justify-center'>
                        {SlicedData.map((product, index) => (
                       <div key={index} className='bg-red-800' style={{ width: '150px', height: '150px', margin: "5px" }}>
                                 {index+1}
                                 {product.productName}
                                 {product.price}
                             </div>
                         ))}
                    </div>
        )}
        <div className='flex gap-2 justify-center'>
                {
                    NumberOfPages.map((PageNumber,index) =>
               
                                 <button key={index} onClick={() => handlePageNumber(PageNumber)}>
                                     {PageNumber}

                                 </button>
                     
                   
                     )
                 }
             </div>
    
      </div>
    );
  };
  
  export default Items;