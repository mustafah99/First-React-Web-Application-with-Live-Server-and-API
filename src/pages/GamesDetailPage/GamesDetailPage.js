// import React from 'react';
// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import MainMeny from '../../components/MainMeny/MainMeny';

// const GamesDetailsPage = () => {

//     let { id } = useParams();

//     const [games, setGames] = useState(undefined);

//     useEffect(() => {
//         fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, {
//             "method": "GET",
//             "headers": {
//                 "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
//                 "x-rapidapi-key": "ad2d1bd7b1msh630ecaffad0e099p149032jsn9e5968f30a69"
//             }
//         })
//             .then(response => response.json())
//             .then(gams => setGames(gams));
//     }, []);

//     return games ? (
//         <div>
//             <MainMeny />
//             <div className="row pb-0 align-items-center rounded-3 border shadow-lg" style={{ margin: "0 auto" }}>
//                 <div style={{
//                     backgroundBlendMode: "darken",
//                     background: `rgba(0, 0, 0, .30) url(${games.screenshots[0].image})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "750px", display: "flex", flexDirection
//                         : "column-reverse", width: "100%"
//                 }} className="col-lg-7 p-3 p-lg-5 pt-lg-3">
//                     <div style={{ color: "white", fontFamily: "sans-serif", fontWeight: "bold" }}>
//                         <h1 className="display-4 fw-bold lh-1">{games.title}</h1>
//                         <p className="display-4 lh-1">{games.short_description}</p>
//                         <div style={{fontSize: "17px", color: "black", display: "flex", flexDirection: "row"}}>
//                             <p style={{paddingLeft: "10px", paddingRight: "20px", backgroundColor: "white"}}>Genre: {games.genre} <span style={{paddingLeft: "10px"}}>/</span></p>
//                             <p style={{paddingRight: "20px", backgroundColor: "white"}}>Publisher: {games.publisher}  <span style={{paddingLeft: "10px"}}>/</span></p>
//                             <p style={{paddingRight: "20px", backgroundColor: "white"}}>Release Year: {games.release_date} <span style={{paddingLeft: "10px"}}>/</span></p>
//                             <p style={{paddingRight: "10px", backgroundColor: "white"}}>Status: {games.status}</p>
//                         </div>
//                     </div>
//                 </div>

//                 <div style={{
//                     background: `url(${games.screenshots[1].image})`,
//                     display: "flex",
//                     height: "500px",
//                     backgroundSize: "cover",
//                     backgroundRepeat: "no-repeat",
//                     flexDirection: "column",
//                     justifyContent: "center"
//                 }}>
//                 </div>

//                 <div style={{
//                     background: `url(${games.screenshots[2].image})`,
//                     display: "flex",
//                     height: "500px",
//                     backgroundSize: "cover",
//                     backgroundRepeat: "no-repeat",
//                     flexDirection: "column",
//                     justifyContent: "center"
//                 }}>
//                     <div style={{ fontFamily: "sans-serif", padding: "30px", backgroundColor: "white", color: "black" }}>
//                         <p className="lead">{games.description}</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     ) : (
//         <h2 style={{ margin: "0 auto", textAlign: "center", padding: "50px 0" }}>Loading</h2>
//     )
// }

// export default GamesDetailsPage;