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
 

export default Products