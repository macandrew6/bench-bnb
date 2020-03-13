import React, { Component } from 'react'

class SessionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
    // clears the form after login in or signup
    this.setState({
      username: '',
      password: ''
    });
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="session-form-container">
        <h2>Welcome to BenchBnB!</h2>
        <form 
          className="session-form"
          onSubmit={this.handleSubmit}>
          <br/>
          {this.renderErrors()}
          <div className='login-form'>
            <label>Username: 
              <br/>
              <input 
                type="text"
                value={this.state.username}
                onChange={this.update('username')}
              />
            </label>
            <br/>
            <label>Password: 
              <br/>
              <input 
                type="password"
                value={this.state.password}
                onChange={this.update('password')}
              />
            </label>
            <br/>
            <h5>Please {this.props.formType} or {this.props.navLink}</h5>
            <br/>
            <button className="submit-button" type="submit"> {this.props.formType}</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;