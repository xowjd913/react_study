import styled from "@emotion/styled";

import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Sidebar } from "../components/Sidebar/Sidebar";

import type { ReactNode } from "react";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100hv;
`;

const Content = styled.div`
    display: flex;
    flex: 1;
`;

const Main = styled.main`
    flex: 1;
    padding: 20px;
`;

interface Props {
    children: ReactNode;
}

export const Layout = (props: Props) => {
    return (
        <Container>
            <Header/>
            <Content>
                <Sidebar/>
                <Main>{props.children}</Main>
            </Content>
            <Footer/>
        </Container>
    );
};