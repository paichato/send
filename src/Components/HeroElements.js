import styled from 'styled-components';

export const Nav=styled.nav`
display:flex;
/* position: sticky; */
justify-content:space-between;
align-items:center;
height:80px;
padding: 0rem calc((100vw - 1300px)/2);
background:#FFBF00;


`

export const Logo=styled.div`
font-size:1.5rem;
color:#251101;
font-weight:bold;
font-style: italic;
padding: 0 2rem;
cursor: pointer;
`

export const NavItems=styled.div`



a{
    text-decoration:none;
    color:#251101;
    padding: 0 1.5rem;
    font-weight:bold;
    
}

`
export const HeroSection=styled.section`
background:#FFBF00;

`
export const HeroContainer=styled.div`
/* display:flex;
flex-direction:row; */

display:grid;
grid-template-columns: 1fr 1fr;
height:95vh;
padding: 0rem calc((100vw - 1300px)/2);

@media screen and(max-width:768px){
    grid-template-columns:1fr;
    
}
`
export const HeroLeft=styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;
padding: 0rem 2rem;
margin-top: 30vh;

h1{
    font-size: 3rem;
    margin-bottom:1rem;
}

p{
line-height:1.5rem;
font-size:1.5rem;
margin-bottom:2rem;
}

`
export const HeroButtonWrapper=styled.div`

button{
        border-radius:100px;
        color: #FFBF00;
        background:#251101;
        padding: 1rem 3rem;
        border:none;
        outline:none;
        font-weight:bold;
        font-size:1rem;
        cursor: pointer;

        &:hover{
            background:#140901;
            color:white;
        }
}

`
export const HeroBgContainer=styled.div`
display:flex;
justify-content:center;
align-items:center;
padding: 0 2rem;
`

export const HeroBg=styled.img`

width:100%;
height:100%;
`

