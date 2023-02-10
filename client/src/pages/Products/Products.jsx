import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import List from '../../components/List/List';
import useFetch from '../../hooks/useFetch';
import "./Products.scss";

const Products = () => {
  
  const catId = parseInt(useParams().id);
  // const param = useParams();
  // console.log(param);

  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);

  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const { data, loading, error } = useFetch(`/sub-categories?[filters][categories][id][$eq]=${catId}`);
  // console.log(data);

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked ?
      [...selectedSubCats, value]
      : 
      selectedSubCats.filter((item) => item !== value)
    )
  }

  // console.log(selectedSubCats);

  return (  
  <div className="products">
  <div className="left">
    <div className="filterItem"> 
      <h2>Product Categories</h2>
      
      {data?.map(item => (
        <div className="inputItem" key={item?.id}>
        <input 
          type="checkbox" 
          id={item?.id} 
          value={item?.id}
          onChange={handleChange} 
        />
        <label htmlFor={item?.id}>{item?.attributes?.title}</label> 
      </div>
      ))}
      {/* <div className="inputItem">
        <input type="checkbox" id="1" value={1} />
        <label htmlFor="1">Shoes</label> 
      </div>
      <div className="inputItem">
        <input type="checkbox" id="2" value={2} />
        <label htmlFor="2">Skirts</label> 
      </div>
      <div className="inputItem">
        <input type="checkbox" id="3" value={3} />
        <label htmlFor="3">Coats</label> 
      </div> */}
    </div>
    <div className="filterItem">
      <h2>Filter By Price</h2>
      <div className="inputItem">
        <span>0</span>
     
      </div>
    </div>
   
  </div>
 
</div>
)
}

export default Products