// Imports
import React, {useState, useEffect} from "react";
// Component Imports
import Footer from "../components/Footer"
import Header from "../components/Header";
import SearchResults from "../components/SearchResults";
// Modal Imports
import ArenaInfoModal from "../modals/ArenaInfoModal";
import BookingModal from "../modals/BookingModal";
import BookingConfirmationModal from "../modals/BookingConfirmationModal";
import LoginModal from "../modals/LoginModal";
import RegisterModal from "../modals/RegisterModal";

function SearchResultsPage(props)  {
  // State related variables
  const [activeModal,setActiveModal] = useState();
  const [arenaDetailsAll, setArenaDetailsAll] = useState();
  const [selectedArena, setSelectedArena] = useState();

  const get_all_arena_details_url = "/api/cache/getCache?cache_name=arena_details_and_sport_id";

  useEffect(() => {
    const fetchArenaDetails = async () => {
      await fetch(get_all_arena_details_url, {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }).then(res => res.json())
        .then(data => {
          setArenaDetailsAll(data.cache_data);
      })
    };

    fetchArenaDetails();
  }, []);
    
  return (
    <div>
        <LoginModal setIsLoggedIn={props.setIsLoggedIn} isLoggedIn={props.isLoggedIn} setAccessToken={props.setAccessToken}/>
        <RegisterModal isLoggedIn={props.isLoggedIn}/>
        <Header isLoggedIn={props.isLoggedIn} setIsLoggedIn={props.setIsLoggedIn}/>

        { (arenaDetailsAll) && <SearchResults
          arenaDetails={arenaDetailsAll}
          isLoggedIn={props.isLoggedIn}
          setSelectedArena={setSelectedArena}
          setActiveModal={setActiveModal}
         /> }

        { (selectedArena && activeModal === "infoarenas" ) && <ArenaInfoModal 
          selectedArena={selectedArena} 
          setActiveModal={setActiveModal}
        />}
        
        { (selectedArena && activeModal === "booking" ) && <BookingModal 
          selectedArena={selectedArena} 
          setActiveModal={setActiveModal}
        />}      

        { (selectedArena && activeModal === "confirmation" ) && <BookingConfirmationModal
          selectedArena={selectedArena} 
          setActiveModal={setActiveModal}
        />}

        <Footer />
    </div>
  );
}
export default SearchResultsPage;
