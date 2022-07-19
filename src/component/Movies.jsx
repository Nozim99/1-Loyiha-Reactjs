import React from "react";
import Movie from "./Movie";
import Preloader from "./Preloader";
import NotFound from './NotFound'

export default class Movies extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      current: true
    }
  }
  
  render(){
    const { movies = [] } = this.props
  return (
    <div className="container mb-5">
      <div className="container mt-5 row d-flex justify-content-center">
        { this.props.loading ? <Preloader /> : (movies.length ? movies.map(movie => (
            <Movie key={movie.imdbID} {...movie} />
          )) : (<NotFound />) )}
      </div>
    </div>
  )
}
}



// export default function Movies(props) {
//   const { movies = [] } = props

//   return (
//     <div className="container">
//       <div className="container mt-5 row d-flex justify-content-center">
//         { movies.length ? movies.map(movie => (
//             <Movie key={movie.imdbID} {...movie} />
//           )) : (<NotFound />) }
//       </div>
//     </div>
//   )
// }