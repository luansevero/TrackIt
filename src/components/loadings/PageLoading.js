import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";
export default function Loading() {
    return (
        <Container>
            <ThreeDots
                height="100"
                width="100"
                color="#126BA5"
                ariaLabel='loading' />
        </Container>
    )
}
const Container = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    display:flex;
    align-items:center;
    justify-content:center;
    width: 100%;
    height: 100vh;
`