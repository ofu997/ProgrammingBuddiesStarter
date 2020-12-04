// import React, { useState, useEffect } from "react";
// import axios from 'axios'
// import { Card } from 'react-bootstrap'

// interface Props {}
// export default function Component<Props>() {
//   const [products, setProducts] = useState([])
//   useEffect( () => {
//     const getAxiosProducts = async () => {
//       const axiosProducts = await axios(
//         'https://my.api.mockaroo.com/store-schema.json?key=bddd0a20'
//       );
//       setProducts(
//         axiosProducts.data
//       );
//     }
//     getAxiosProducts();

//   })
//   return (
//   <>
//     home
//     {products.map(item => {
//       <Card >
//         <p>{item.name}</p>
//       </Card>
//     })}
//   </>
//   );
// }


import React, { useState, useEffect } from "react";
import axios from 'axios'
import { Card, Image } from 'react-bootstrap'

const Home = () => {
  const [products, setProducts] = useState([])
  const productsArray=[{"id":"aee458fe-0b7c-4602-b83b-ad090a9aa21b","name":"libero","description":"ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit","price":"$101.97","category":"Games","image":"http://dummyimage.com/250x250.jpg/cc0000/ffffff"},{"id":"acf7daaf-68de-480f-bba0-c52c4bf49e22","name":"ante","description":"orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi","price":"$68.11","category":"Jewelery","image":"http://dummyimage.com/250x250.jpg/ff4444/ffffff"},{"id":"249dca5d-a0e1-40f0-93e1-9ba57eb076e3","name":"aliquet","description":"ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus","price":"$68.21","category":"Books","image":"http://dummyimage.com/250x250.jpg/cc0000/ffffff"},{"id":"19c43cbf-dc1c-47fd-b54c-7ae6ba4784f3","name":"potenti","description":"sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo","price":"$96.69","category":"Games","image":"http://dummyimage.com/250x250.jpg/cc0000/ffffff"},{"id":"9417f06e-8572-4f32-ae82-ebd4cb43484e","name":"natoque","description":"accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor","price":"$155.33","category":"Toys","image":"http://dummyimage.com/250x250.jpg/cc0000/ffffff"},{"id":"2a3e8484-44f5-4d98-b613-36f29cd82a66","name":"eu","description":"iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec","price":"$175.74","category":"Beauty","image":"http://dummyimage.com/250x250.jpg/cc0000/ffffff"},{"id":"a301f59c-b772-4a2e-9f34-a0d6e4a58611","name":"turpis","description":"pede justo lacinia eget tincidunt eget tempus vel pede morbi","price":"$181.82","category":"Shoes","image":"http://dummyimage.com/250x250.jpg/dddddd/000000"},{"id":"07e6a18b-037f-4285-af46-174005d74065","name":"eleifend","description":"ullamcorper augue a suscipit nulla elit ac nulla sed vel enim","price":"$79.22","category":"Outdoors","image":"http://dummyimage.com/250x250.jpg/dddddd/000000"},{"id":"90a14dff-7005-4e6b-96fe-03c14a25351e","name":"interdum","description":"elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum","price":"$149.88","category":"Jewelery","image":"http://dummyimage.com/250x250.jpg/5fa2dd/ffffff"},{"id":"13f69794-7e15-443b-b1af-2bd75243bedc","name":"suspendisse","description":"ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse","price":"$43.31","category":"Jewelery","image":"http://dummyimage.com/250x250.jpg/ff4444/ffffff"}]

  // useEffect( () => {
  //   const getAxiosProducts = async () => {
  //     const axiosProducts = await axios(
  //       'https://my.api.mockaroo.com/store-schema.json?key=bddd0a20'
  //     );
  //     setProducts(
  //       axiosProducts.data
  //     );
  //   }
  //   getAxiosProducts();

  // })

  // useEffect( () => {

  //   async function fetchData() {      
  //     const axiosProducts = await axios.get(
  //       'https://my.api.mockaroo.com/store-schema.json?key=bddd0a20'
  //     );
  //     setProducts(
  //       axiosProducts.data
  //     )
  //   }

  //   fetchData()


      


  // },[])

  const mockArray = [{'id': 1, 'name': 'first'}, {'id': 2, 'name': 'second'}]

  return (
  <>
    home
    {productsArray.map(item => (
      <Card >
        <p>{item.name}</p>
        <Image src={item.image} />
      </Card>
    ))}
  </>
  );
}

export default Home

