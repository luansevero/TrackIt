import styled from "styled-components";

export const Body = styled.div`
    background: #F2F2F2;
    width: 100%;
    min-height: 100vh;
    header,
    footer{
        width: 100%;
        height: 70px;
    }
`
export const Main = styled.main`
    display:flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    padding: 100px 18px;
    font-weight: 400;
    &.loading{
        justify-content:center;
        align-items:center;
    }
`
export const Header = styled.header`
    display:flex;
    position: fixed;
    padding: 0 18px;
    align-items: center;
    justify-content: space-between;
    left: 0px;
    top: 0px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    .siteLogo{
        width: 96px;
        height: 49px;
    }
    .userProfile{
        width: 51px;
        height: 51px;
        border-radius: 51px;
    }
`

export const Footer = styled.footer`
    background: #FFFFFF;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 33px;
    left: 0;
    bottom: 0;
    .today{
        height: 91px;
        border-radius: 100px;
        background: #52B6FF;
        margin-bottom: 45px;
        color: #FFFFFF;
        .CircularProgressbar-path {
            stroke: #FFFFFF;
            
        }
        .CircularProgressbar-trail {
            stroke: #52B6FF;
            
        }
        .CircularProgressbar-text {
            fill: #FFFFFF;
            
        }
        .CircularProgressbar-background {
            fill: #52B6FF;
        }
    }
`
export const NavButtons = styled.button`
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
    color: #52B6FF;
    width: 91px;

`
export const Title = styled.h1`
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
`
export const SectionInfo = styled.section`
    margin-top: 28px;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
`