import React, { useState } from 'react'





const Categories = ({onChangeCategory}:any) => {
    const [X, setX] = useState([
        {
            CategoryID:999,
            Active:true,
            Category:"All",
            SubCategories:[
                "Featured"
            ]

        },
        {
            CategoryID:111,
            Active:true,
            Category: "Clothing",
            SubCategories: [
                "Shirt",
                "Pants",
                "Shorts",
                "Toys",
                "Shirt",
                "Pants",
                "Shorts",
                "Toys",
                "Shirt",
                "Pants",
                "Shorts",
                "Toys",
                "Shirt",
                "Pants",
                "Shorts",
            ],
            isOpen: true, 
        },
        {
            CategoryID:222,
            Active:true,
            Category: "Toys",
            SubCategories: [
                "1",
                "2",
                "3",
                "3+",
            ],
            isOpen: true, 
        },
        {
            CategoryID:333,
            Active:false,
            Category: "Toys",
            SubCategories: [
                "1",
                "2",
                "3",
                "3+",
            ],
            isOpen: true, 
        },
        {
            CategoryID:444,
            Active:true,
            Category: "Toys",
            SubCategories: [
                "1",
                "2",
                "3",
                "3+",
            ],
            isOpen: true, 
        },
        {
            CategoryID:555,
            Active:true,
            Category: "Toysxxx",
            SubCategories: [
                "1",
                "2",
                "3",
                "3+",
            ], 
            isOpen: true, 
        }
    ]
    );
      
    const handleCategory = (index:number) => {
        setX((prevCategories: any[]) =>
          prevCategories.map((category, catIndex) =>
            category.CategoryID === index
              ? { ...category, isOpen: !category.isOpen } // Toggle isOpen for clicked category
              : category
          )
        );
      };
    

    return (
        <div className='bg-blue-200 p-1 overflow-auto text-left text-sm' style={{ width: "180px", height: "85vh" ,resize:'horizontal'}}>
            Categories
            <div className='m-5'>
                {X.filter((item) => item.Active === true).map((Category,catIndex) =>
                    <div key={catIndex}>
                    <button onClick={()=>handleCategory(Category.CategoryID)} >
                        {
                        Category.Category}
                    </button>
                       {Category.isOpen && ( <div className='mx-3'>
                        {Category.SubCategories?.map(SubCategory =>
                        <>
                            <button onClick={()=>onChangeCategory(SubCategory)}>{SubCategory}</button>
                            <br/>
                            </>
                        )}
                        </div>
                    )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Categories