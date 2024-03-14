// import React, { useEffect, useState } from 'react';
// import home1 from "../Images/home1.png";
// interface searchProp {
//     search: any,
//     menu: any
// }

// const Home = (props: searchProp) => {
//     const [products, setProducts] = useState([]);

//     const getProducts = async () => {
//         try {
//             await fetch('https://fakestoreapi.com/products')
//                 .then(res => res.json())
//                 .then(json => setProducts(json))
//         }
//         catch (error) {
//             console.error(error)
//         }
//     }

//     useEffect(() => {
//         getProducts();
//     }, [products])

//     console.log(products);
//     return (
//         <div className='grid grid-cols-5 bg-gray-200'>
//             {
//                 !props.menu ? products.filter((product: any) => product.category.includes(props.menu)).map((prod: any) => {
//                     return <>
//                         <div className="max-w-sm p-3 overflow-hidden bg-white rounded shadow-lg">
//                             <img className="w-full h-64" src={prod.image} alt="Sunset in the mountains" />
//                             <div className='flex items-center'>
//                                 <h1>{prod?.description.substring(0, prod?.description.indexOf(" ")) + "..."}</h1>
//                                 <img src={home1} className='w-10 h-22' />
//                             </div>

//                             <h1 className='text-lg font-semibold'>${prod.price}</h1>
//                             <h1 >{prod.title}</h1>

//                             {/* <div className="px-6 py-4">
//                                 <div className="mb-2 text-xl font-bold">The Coldest Sunset</div>
//                                 <p className="text-base text-gray-700">
//                                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
//                                 </p> */}
//                         </div>
//                         {/* <div className="px-6 pt-4 pb-2">
//                                 <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">#photography</span>
//                                 <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">#travel</span>
//                                 <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">#winter</span>
//                             </div> */}
//                         {/* </div> */}
//                     </>
//                 })
//                     : products.filter((product: any) => product.category.includes(props.menu)).map((prod: any) => {
//                         return <>
//                             <div className="max-w-sm p-3 overflow-hidden bg-white rounded shadow-lg">
//                                 <img className="w-full h-64" src={prod.image} alt="Sunset in the mountains" />
//                                 <div className='flex items-center'>
//                                     <h1>{prod?.description.substring(0, prod?.description.indexOf(" ")) + "..."}</h1>
//                                     <img src={home1} className='w-28 h-22' />
//                                 </div>
//                                 <h1 className='text-lg font-semibold'>${prod.price}</h1>
//                                 <h1 >{prod.title}</h1>
//                             </div>

//                         </>
//                     })
//             }
//         </div>


//     )
// }
// export default Home


import React, { useEffect, useState } from 'react';
import home1 from "../Images/home1.png";
import Flipkartimage  from "../Images/Flipkartimg.png";

interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    category: string;
    image: string;
}

interface Props {
    search: any;
    menu: any;
}

const Home: React.FC<Props> = (props) => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className='grid grid-cols-1 gap-4 bg-gray-200 md:grid-cols-3 lg:grid-cols-5'>
            {products
                .filter((product) => !props.menu || product.category.includes(props.menu))
                .map((product) => (
                    <div key={product.id} className="max-w-sm p-3 overflow-hidden bg-white rounded shadow-lg">
                        <img className="w-full h-64" src={product.image} alt={product.title} />
                        <div className='flex items-center'>
                            <h1>{product.description.substring(0, product.description.indexOf(" ")) + "..."}</h1>
                            <img src={Flipkartimage} className='w-28 h-22' alt="Flipkart buy Product" />
                        </div>
                        <h1 className='text-lg font-semibold'>${product.price}</h1>
                        <h1>{product.title}</h1>
                    </div>
                ))}
        </div>
    );
};

export default Home;
