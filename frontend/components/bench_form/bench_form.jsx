import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class BenchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      seating: 2,
      photoFiles: [],
      photoUrls: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.navigateToSearch = this.navigateToSearch.bind(this);
  }

  navigateToSearch() {
    this.props.history.push('/');
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.target.value
      });
    };
  }

  handleFile(e) {
    const files = [];
    const urls = [];
    for (let i = 0; i < e.currentTarget.files.length; i++) {
      const file = e.currentTarget.files[i];
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        files.push(file);
        urls.push(fileReader.result);
          this.setState({
            photoFiles: files,
            photoUrls: urls
          });
      };
      if (file) {
        fileReader.readAsDataURL(file);
      }
    }

  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('bench[description]', this.state.description);
    formData.append('bench[seating]', this.state.seating);
    formData.append('bench[lat]', this.props.lat);
    formData.append('bench[lng]', this.props.lng);

    if (this.state.photoFile) {
      formData.append('bench[photos]', this.state.photoFile);
    }

    this.props.createBench(formData);
    this.navigateToSearch();
  }
  
  render() {
    const { lat, lng } = this.props;
    const { seating, description } = this.state;
    const preview =
      this.state.photoUrls !== []
        ? this.state.photoUrls.map((photoUrl,i) => (
            <img src={photoUrl} key={i*performance.now()} height="250px" width="250px" />
          ))
        : null;

      console.log(this.state);
    return (
      <div className="bench-form-container">
        <form className="bench-form" onSubmit={this.handleSubmit}>
          <label htmlFor="description">
            Description
            <br />
            <input
              type="text"
              onChange={this.update("description")}
              value={description}
            />
          </label>
          <br />
          <label htmlFor="number of seats">
            Number of Seats
            <br />
            <input
              min="0"
              type="number"
              onChange={this.update("seating")}
              value={seating}
            />
          </label>
          <br />
          <label htmlFor="latitude">
            Latitude
            <br />
            <input type="number" disabled value={lat} />
          </label>
          <br />
          <label htmlFor="longitude">
            Longitude
            <br />
            <input type="number" disabled value={lng} />
          </label>

          <div className="photo-input-container">
            {preview}
            <input type="file" multiple="multiple" onChange={this.handleFile} />
          </div>
          <br />
          <button type="submit" multiple="multiple">
            Create Bench
          </button>
          <br />
          <button onClick={this.navigateToSearch}>Cancel</button>
        </form>
      </div>
    );
  }
}

export default withRouter(BenchForm);