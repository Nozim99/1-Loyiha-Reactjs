import React from "react"

export default class Search extends React.Component {
  state = {
    search: "",
    type: "",
  }

  searchMv = () => {
    this.props.searchMovies(this.state.search, this.state.type)
    console.log(3);
  }

  changeHendler = (e) => {
    this.setState(() => ({ type: e.target.dataset.type }), () => {
      this.searchMv(this.state.search, this.state.type)
    })
  }

  enterSearch = (e) => {
    if (e.key === "Enter") {
      this.props.searchMovies(this.state.search, this.state.type)
    }
  }

  componentDidMount() {
    const movieName = localStorage.getItem("search")
    const movieType = localStorage.getItem("type")
    if (movieName) {
      this.setState({ search: movieName })
    }
    if (movieType) {
      this.setState({ type: movieType })
    }
  }

  componentWillUnmount() {
    this.setState({ search: "avengers" })
    this.setState({ type: '' })
  }

  componentDidUpdate() {
    localStorage.setItem("search", this.state.search)
    localStorage.setItem("type", this.state.type)
  }


  render() {
    return (
      <div className="container">
        <div className="position-relative">
          <input onKeyDown={this.enterSearch} defaultValue={this.props.inputValue ? this.state.search : ''} placeholder="Search" className="mt-3 border-0 border-bottom search-movie__input" type="search" onChange={(e) => { this.setState({ search: e.target.value }) }} />
          <button onClick={this.searchMv} type="button" className="btn btn-primary float-end position-absolute top-50 end-0 translate-middle-y">Search</button>
        </div>
        <div>
          <label><input onChange={this.changeHendler} className="me-3" type="radio" data-type="" name="category" checked={this.state.type === ''} />All</label>
          <label className="mx-4"><input onChange={this.changeHendler} className="me-3" data-type="movie" name="category" type="radio" checked={this.state.type === 'movie'} />Movies only</label>
          <label><input onChange={this.changeHendler} className="me-3" type="radio" data-type="series" name="category" checked={this.state.type === 'series'} />Series only</label>
        </div>
      </div>
    )
  }
}