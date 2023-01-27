import styled from "@emotion/styled";
import { colors } from "../../styles/colors";

export const AuthLayoutStyles = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
    overflow: scroll;
    background-color: #fff;
    .side {
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 70px;
        @media (max-width: 768px) {
            display: none;
        }
        .image {
            height: 500px;
            width: auto;
        }

    }
    .box {
        width: 50%;
        height: 100vh;
        overflow: scroll;
        @media (max-width: 768px) {
            width: 100%;
        }
    }
`

export const ChoosePurposeStyles = styled.div`
    width: 100%;
    height: 100%;
    overflow: scroll;
    padding-top: 50px;
    display: flex;
    justify-content: center;
    .container {
        width: 70%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        h1 {
            font-family: 'DM Sans';
            font-style: normal;
            font-weight: 700;
            font-size: 40px;
            line-height: 50px;
            padding-top: 30px
        }
        .more {
            font-family: 'DM Sans';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 21px;
            text-align: center;
            color: ${colors.text};
            padding-top: 20px;
        }
        .card-box {
            padding-top: 30px;
            width: 100%;
        }
   } 
`

export const CardStyles = styled.div`
    width: 100%;
    height: 108px;
    border: 1px solid #CBD5E1;
    border-radius: 12px;
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: flex-start;
    padding-top: 16px;
    gap: 20px;
    transition: all ease 300ms;
    margin-bottom: 40px;
    box-shadow: ${props => props.selected ? `3px 3px 5px ${colors.primary}, -3px -3px 5px ${colors.primary}` : `none`};
    transform: ${props => props.selected ? 'scale(1.006)' : 'scale(1)'};
    &:hover {
        box-shadow: 3px 3px 5px ${colors.primary}, -3px -3px 5px ${colors.primary};
        transform: scale(1.006);
    }
    .text {
        width: 80%;
        h2 {
            font-family: 'DM Sans';
            font-style: normal;
            font-weight: 700;
            font-size: 20px;
            color: #213253;
        }
        p {
            font-family: 'DM Sans';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 21px;
            color: #6E759F;
        }
    }
`

export const CustomButton = styled.button`
    width: 100%;
    height: 60px;
    background: ${(props) => (props.valid ? 'rgba(223, 145, 25, 1)' : 'rgba(223, 145, 25, 0.4)')};
    border-radius: 3px;
    border: none;
    outline: none;
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 21px;
    margin-top: 40px;
`


export const SignUpStyles = styled.div`
    width: 100%;
    height: 100%;
    overflow: scroll;
    padding-top: 50px;
    display: flex;
    justify-content: center;
        .container {
            width: 70%;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            flex-direction: column;
            // padding-top: 50px;
            @media (max-width: 768px) {
                width: 90%;
            }
            .arrow {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 20px;
                font-family: 'DM Sans';
                font-style: normal;
                font-weight: 700;
                font-size: 17px;
                cursor: pointer;
            }
            h1 {
                font-family: 'DM Sans';
                font-style: normal;
                font-weight: 700;
                font-size: 40px;
                line-height: 50px;
                letter-spacing: -0.02em;
                color: #0D1435;
                // padding-top: 20px;
            }
            .proceed {
                font-family: 'DM Sans';
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 21px;
                text-align: center;
                color: #6E759F;
                // margin-top: -25px;
            }
            .input_container {
                width: 100%;
                padding-top: 30px;
                .select {
                    font-family: 'DM Sans';
                    font-style: normal;
                    color: #0D1435;
                    font-weight: 700;
                    font-size: 16px;
                }
                p {
                    font-family: 'DM Sans';
                    font-style: normal;
                    color: #0D1435;
                    font-weight: 700;
                    font-size: 16px;
                }
                .name {
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    width: 100%;
                    div {
                        width: 50% !important;
                    }
                }
                .account {
                    font-family: 'DM Sans';
                    font-style: normal;
                    color: #0D1435;
                    font-weight: 700;
                    font-size: 16px;
                    padding-top: 30px;
                    padding-bottom: 40px;
                }
            }
        }
`


export const CustomInput = styled.div`
            font-family: 'DM Sans';
            font-style: normal;
           color: #0D1435;
        p {
            font-weight: 700;
            font-size: 16px;
            margin-top: 20px;
        }
        input {
            width: 100%;
            height: 60px;
            border: 1px solid #CBD5E1;
            border-radius: 3px;
            outline: none;
            background-color: rgb(250,250,250);
            
            padding-left: 30px;
            font-size: 13px;
            color: #0D1435;
            // margin-top: -10px;

        }
        .eye {
            position: relative;
            right: 0px;
            top: -40px;
            left: 92%;
            cursor: pointer;
        }
        span {
            font-weight: 300;
            font-size: 13px;
            color: red;
            margin-bottom: 20px;
        }
`