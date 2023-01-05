// Imports
import React from "react";
// Component Imports
import Search from "./Search";

function HeroWrapper(props)  {
  
  return (
    <section className="hero-wrapper hero-bg-2 ">
      {/* <div className="overlay" />{/* end overlay */}
      {/* <span className="line-bg line-bg1" />
      <span className="line-bg line-bg2" />
      <span className="line-bg line-bg3" />
      <span className="line-bg line-bg4" />
      <span className="line-bg line-bg5" />
      <span className="line-bg line-bg6" />  */}
      <div className="container">
        <div className="column">
          <div className="col-lg-12">
            <div className="hero-heading text-center">
              <div className="section-heading">
                {/*<h2 class="sec__title mb-3 line-height-60">Πάρε την παρέα σου και βρές με ενα click το κατάλληλο γήπεδο να αθληθείς</h2>*/}
                <p className="sec__desc line-height-35">
                {/*Simple, Yet powerful local business directory where buyers and sellers engage
                            each others with trust.*/}
                </p>
                <h2 className="sec__title cd-headline slide">
                  Πάρε την παρέα σου και βρές με ενα click το κατάλληλο γήπεδο  
                            
                  <span className="cd-words-wrapper py-0">
                    <b className="is-visible"> Πόλο</b>
                    <b> Μπάσκετ</b>
                    <b> Ποδοσφαίρου</b>
                    <b> Τέννις</b>
                    <b> Πίνκ Πόνκ</b>
                    <b> Βόλει</b>
                  </span> 
                </h2>
              </div>
            </div>{/* end hero-heading */}
          </div>
          {/*Search Page*/}
          <Search config={props.config}/>
        </div>{/* end col-lg-12 */}
      </div>{/* end row */}
      {/* end container */}
        {/*    <div className="bg-white position-relative z-index-1  pb-0">
         <div className="testboxes">
          <div style={{backgroundColor: 'rgb(192, 221, 164)'}}>
          <h4>Ατομικά</h4>
          <ol>
          <li>Κολυμβητήριο</li>
          <li>Στίβος</li>
          <li>Τέννις</li>
          <li>Ping Pong</li>
          <li>Άρση Βαρών</li>
          <li>Τοξοβολία</li>
          <li>Ξιφασκία</li>
          <li>Ποδηλασία</li>
          </ol>
          </div>
          <div style={{backgroundColor: 'rgb(203, 163, 207)'}}>
          <h4>Ομαδικά</h4>
          <ol>
          <li>Ποδόσφαιρο</li>
          <li>Μπάσκετ</li>
          <li>Βόλει</li>
          <li>Χάντμπολ</li>
          <li>Beach Volleyball</li>
          <li>Beach Soccer</li>
          <li>Beach Handball</li>
          <li>Ράγκμπι</li>
          </ol>
          </div>
          <div style={{backgroundColor: 'rgba(56, 21, 112, 0.37)'}}>
          <h4>Πολεμικές Τέχνες</h4>
          <ol>
          <li>Κούνγκ Φού</li>
          <li>Τάι τσί τσουάν</li>
          <li>Καράτε</li>
          <li>Τάε κβον ντό</li>
          <li>Παγκράτιο</li>
          <li>Πυγμαχία</li>
          <li>Καποέρια</li>
          </ol>
          </div>
          <div style={{backgroundColor: 'rgba(38, 44, 5, 0.651)'}}>
          <h4>Γυμναστήρια</h4>
          <ol>
          <li>Palladiumgym</li>
          <li>My Health club</li>
          <li>City Ladies</li>
          <li>Bodytecone</li>
          <li>Your Balance </li>
          <li>Mpasdekis Gym</li>
          <li>Mindset Fitness</li>
          <li>Golden Gym</li>
          </ol>
          </div>
          <div style={{backgroundColor: 'rgba(82, 36, 36, 0.719)'}}>
          <h4>Personal</h4>
          <ol>
          <li>Yoga</li>
          <li>Χορός</li>
          <li>Pilates</li>
          <li>Καλλισθενική</li>
          <li>Your Balance </li>
          <li>Mpasdekis Gym</li>
          <li>Mindset Fitness</li>
          <li>Golden Gym</li>
          </ol>
          </div>     
        </div>
      </div> */}
    </section>
  );
}

export default HeroWrapper;
