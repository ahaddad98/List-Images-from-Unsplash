import React from "react";
import styled from "styled-components";
import Cards from "../../components/photos/Cards";
import Header from "../../components/photos/Header";

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
    return <GlobalContent>
        <Header />
        <Cards />
    </GlobalContent>
}
export default Photos