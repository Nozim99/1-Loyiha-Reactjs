import React from "react";
import Movies from "../component/Movies";
import Search from "../component/Search";


export default class Main extends React.Component {
  state = {
    movies: [],
    loading: true,
    mv: '',
    src: '',
    inputValue: true
  }

  componentDidMount() {
    if(this.num){
      return
    }
    this.num = 1;
    const movieName = localStorage.getItem('search')
    const movieType = localStorage.getItem('type')
    if (movieName || movieType) {
      console.log(2);
      this.fetchPromise2 = fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=f9337567&s=${movieName}&type=${movieType}`)
      .then(response => response.json())
      .then(data => this.setState({ movies: data.Search, loading: false }))
      return
    }
    console.log(1);
    this.setState({inputValue: false})
    this.fetchPromise = fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=f9337567&s=avengers`)
    .then(response => response.json())
    .then(data => this.setState({ movies: data.Search, loading: false }))
    
  }

  searchMovies = (mv, src) => {
    this.setState({ loading: true });
    this.fetchPromise = fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=f9337567&s=${mv}&type=${src}`)
      .then(response => response.json())
      .then(data => this.setState({ movies: data.Search, loading: false }))
  }

  render() {
    return (
      <div className="main">
        <Search inputValue={this.state.inputValue} loading={this.state.loading} searchMovies={this.searchMovies} />
        <Movies loading={this.state.loading} movies={this.state.movies} />
      </div>
    )
  }
}