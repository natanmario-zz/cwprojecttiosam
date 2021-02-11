import styled from 'styled-components';

export const Modal = styled.div`

img {
    width: 427px;
    height: 240px;
}

@media(max-width:600px) {
    img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 213px;
        height: 120px;
    }
}

`