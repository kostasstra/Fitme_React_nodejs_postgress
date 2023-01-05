// Imports
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
// Page Imports
import HomePage from "./pages/HomePage";
import SearchResultsPage from "./pages/SearchResultsPage";

const queryClient = new QueryClient()
const tokenErrors = ["Refresh Token is required!", "No token provided!", "Refresh token is not in database!"]

export default function App() {
  // State related variables
  const [accessToken, setAccessToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(window.localStorage.getItem("isLoggedIn") === "true");

  const refresh_token_api = "/api/auth/refreshToken";

  const refreshToken = () => {
    if (isLoggedIn) {
      fetch(refresh_token_api, {
        method: "POST",
        headers: {"Content-type": "application/json; charset=UTF-8"}
      }
      ).then(response => response.json()
      ).then(result => {
        if (tokenErrors.includes(result.error)) {
          setIsLoggedIn(false);
        } else {
          setAccessToken(result.accessToken);
        };
      });
    }
  };

  useEffect(() => {
    refreshToken();
    const interval = setInterval(() => {
      if (isLoggedIn) { 
        refreshToken();
      }
     },100000)
     return() => clearInterval(interval);
  }, [isLoggedIn]);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
              <HomePage 
                  accessToken={accessToken}
                  isLoggedIn={isLoggedIn} 
                  setAccessToken={setAccessToken}
                  setIsLoggedIn={setIsLoggedIn} 
              />} 
          />
          <Route path="search_results" element={
              <SearchResultsPage
                  accessToken={accessToken}
                  setIsLoggedIn={setIsLoggedIn} 
                  setAccessToken={setAccessToken} 
                  isLoggedIn={isLoggedIn}
              />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

function NotFound() {
  return (
    <div>
      <h1>Not found!</h1>
      <p>Sorry your page was not found!</p>
    </div>
  );
}
