import React from 'react'

const CategoriesList = [
    {
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
        ]
    },
    {
        Active:false,
        Category: "Toys",
        SubCategories: [
            "1",
            "2",
            "3",
            "3+",
        ]
    },
    {
        Active:true,
        Category: "Toys",
        SubCategories: [
            "1",
            "2",
            "3",
            "3+",
        ]
    },
    {
        Active:true,
        Category: "Toys",
        SubCategories: [
            "1",
            "2",
            "3",
            "3+",
        ]
    }




]

const Categories = () => {
    return (
        <div className='bg-blue-200 p-1 overflow-auto text-left text-sm' style={{ width: "180px", height: "85vh" ,resize:'horizontal'}}>
            Categories
            <div className='m-5'>
                {CategoriesList.filter(item => item.Active === true).map(Category =>
                    <div>
                    <p>
                        {Category.Category}
                    </p>
                        <div className='mx-3'>
                        {Category.SubCategories?.map(SubCategory =>
                            <p>{SubCategory}</p>
                        )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Categories