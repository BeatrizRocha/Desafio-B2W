import styled from 'styled-components'

export const DivApp = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`
export const DivCard = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: auto;
    font-size: large;
    font-weight: bold;
`
export const PlanetInfo = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    margin: 8px;
    div{
        margin-left: 10px;
        font-weight: normal;
    }
`
export const PlanetFilmsInfo = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-weight: normal;
    margin: 15px;
    div{
        font-weight: bold;
    }
`