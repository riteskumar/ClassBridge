import { Box, Button, Container, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import banner from "../assets/banner.jpg";
import { LightPurpleButton } from "../components/buttonStyles";

const Homepage = () => {
  return (
    <StyledContainer>
      <Grid container>
        <Grid item xs={12} md={6}>
          <StyledBanner src={banner} alt="banner" />
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledContent>
            <StyledTitle>
              <span style={{ fontSize: "30px" }}>Welcome to</span>
              <br />
              ClassBridge
              <br />
             
            </StyledTitle>
            <StyledText>
              Streamline school management. It enables administrators, teachers, and students to handle tasks like attendance tracking, grading, communication, and performance assessments.
            </StyledText>
            <StyledBox>
              <StyledLink to="/choose">
                <LightPurpleButton variant="contained" fullWidth>
                  Login
                </LightPurpleButton>
              </StyledLink>
              <StyledRow>
                <span>Don't have an account?</span>
                <Link to="/Adminregister" style={{ color: "#7E4ED8", marginLeft: "10px", textDecoration: "underline" }}>
                  Sign up
                </Link>
              </StyledRow>
            </StyledBox>
          </StyledContent>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default Homepage;

// Styling
const StyledContainer = styled(Container)`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledBanner = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;

const StyledContent = styled.div`
  padding: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
`;

const StyledTitle = styled.h1`
  font-size: 3rem;
  color: #252525;
  font-weight: bold;
  line-height: normal;
  margin-bottom: 20px;
`;

const StyledText = styled.p`
  font-size: 1rem;
  color: #6b6b6b;
  margin: 20px 0;
  line-height: 1.6;
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledRow = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  font-size: 14px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
