import errorImage from '../images/image.png'
import React from 'react';


export default class Movie extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      src: false
    }
  }

  currentImg = () => {
    if (this.props.Poster === "N/A") {
      this.setState({ src: true })
    } else {
      this.setState({ src: false })
    }
  }

  componentDidMount(){
    this.currentImg()
  }

  render() {
    return (
      <div className="card movie p-2 m-3 position-relative">
        {/* {this.currentImg()} */}
        <div className="position-relative h-100">
          <div className="movie-img__box d-flex justify-content-center align-items-start">
            <img src={this.state.src ? errorImage : this.props.Poster} className="img-fluid text-center" alt="Error" />
          </div>
          <div className="card-body">
            <h5 className="text-center">{(this.props.Title.length < 25) ? this.props.Title : (this.props.Title.slice(0, 25) + '...')}</h5>
            <p><span className="position-absolute bottom-0 start-0">{this.props.Type}</span><span className="position-absolute bottom-0 end-0">{(this.props.Year.length>4) ? this.props.Year.slice(0, 4) : this.props.Year}</span></p>
          </div>
        </div>
      </div>
    )
  }
}


// export default function Movie(props) {
//   const { Title, Year, Type, Poster } = props;

//   return (
//     <div className="card movie p-2 m-3 position-relative">
//       <div className="position-relative h-100">
//         <div className="movie-img__box d-flex justify-content-center align-items-start">
//           <img src={Poster} className="img-fluid text-center" alt="Error" />
//         </div>
//         <div className="card-body">
//           <h5 className="text-center">{(Title.length < 25) ? Title : (Title.slice(0, 25) + '...')}</h5>
//           <p><span className="position-absolute bottom-0 start-0">{Type}</span><span className="position-absolute bottom-0 end-0">{Year}</span></p>
//         </div>
//       </div>
//     </div>
//   )
// }