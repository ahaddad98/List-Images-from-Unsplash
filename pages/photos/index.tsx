import { Spin } from "antd";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Cards from "../../components/photos/Cards";
import Header from "../../components/photos/Header";
import { getImages, getImagesfiltred } from "../../networkAPI/axiosApi";
import { useMyContext } from "../Provider/Provider";

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
    const componentRef = useRef<any>();
    const effectRun = useRef(false);
    const [dataphotos, setData] = useState<any>([])
    const [loading, setLoader] = useState(false)
    let offset = 1;
    const getImg = async () => {
        setLoader(true)
        const { data }: any = await getImages(12, offset);
        setData((prev: any) => [...prev, ...data]);
        setLoader(false)
        offset += 1;
    }
    const getImgfilte = async () => {
        const { data }: any = await getImagesfiltred(12, 12, '');
        console.log(data);
        // setData(data);
    }
    const handleScroll = (event: any) => {
        if (
            componentRef.current.offsetHeight + componentRef.current.scrollTop + 1 >
            componentRef.current.scrollHeight
        ) {
            getImg();
        }

    };
    const router  = useRouter()
    let context: any = useMyContext()
    useEffect(() => {
        if (!localStorage.getItem('username'))
            router.push('/')
        else{
            getImg();
            componentRef.current.addEventListener("scroll", handleScroll);
        }
    }, [])
    return <GlobalContent ref={componentRef}>
            <Header /> 
        {
            dataphotos.length > 0 &&
            <div >
                <Cards data={dataphotos} />
            </div>

        }
        {
            loading &&
            <Spin size="large" style={{ margin: '5rem' }} />
        }
    </GlobalContent>
}
export default Photos