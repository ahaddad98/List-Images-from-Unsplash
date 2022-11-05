import { Spin } from "antd";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Cards from "../../components/photos/Cards";
import Header from "../../components/photos/Header";
import { getImages, getImagesfiltred } from "../../networkAPI/axiosApi";

const GlobalContent = styled.div`
    width: 100vw;
    height: 100vh;
    padding: .5rem 3rem 0rem 4rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    overflow-x: hidden;
`

const Photos = () => {
    const [data , setData] = useState<any>()
    const getImg = async () => {
        const {data}: any = await getImages(12,12);
        setData(data);
    }
    const getImgfilte = async () => {
        const {data}: any = await getImagesfiltred(12,12, '');
        console.log(data);
        // setData(data);
    }
    useEffect(()=>{
        getImg();
        getImgfilte();
    },[])
    return <GlobalContent>
        <Header />
        {
            data ? 
            <Cards data={data}/>
            : 
            <Spin size="large" style={{marginTop: '5rem'}}/>
        }
    </GlobalContent>
}
export default Photos