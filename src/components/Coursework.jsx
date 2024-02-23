import { useAppContext } from "../appContext";
import { Element } from "react-scroll";
// Data
import { skillData, resume } from "../data";
// Components
import { Button, Col, Container, Row } from "react-bootstrap";
import { Title } from "./globalStyledComponents";
import Accordion from 'react-bootstrap/Accordion';
import styled from "styled-components";

export default function Skills() {
    const { theme } = useAppContext();
    return (
        <Element name={"Coursework"} id="Coursework">
            <section className="section">
                <Container className="text-center">
                    <Title>
                        <h2>Coursework</h2>
                        <div className="underline"></div>
                    </Title>
                    <Accordion defaultActiveKey="">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Fall 2022</Accordion.Header>
                            <Accordion.Body>
                                Sem
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Spring 2023</Accordion.Header>
                            <Accordion.Body>
                                Sem
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Fall 2023</Accordion.Header>
                            <Accordion.Body>
                                Sem
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Spring 2024</Accordion.Header>
                            <Accordion.Body>
                                Sem
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Fall 2024</Accordion.Header>
                            <Accordion.Body>
                                Sem
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>Spring 2025</Accordion.Header>
                            <Accordion.Body>
                                Sem
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="6">
                            <Accordion.Header>Fall 2025</Accordion.Header>
                            <Accordion.Body>
                                Sem
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="7">
                            <Accordion.Header>Spring 2026</Accordion.Header>
                            <Accordion.Body>
                                Sem
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    {resume && (
                        <a href={resume}>
                            <Button
                                size="lg"
                                variant={theme === "light" ? "outline-dark" : "outline-light"}
                                className="mt-5"
                            >
                                R&eacute;sum&eacute;
                            </Button>
                        </a>
                    )}
                </Container>
            </section>
        </Element>
    );
}
