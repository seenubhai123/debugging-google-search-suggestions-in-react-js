import {Component} from 'react'

import './index.css'

class SuggestionItem extends Component {
  onClickSuggestion = () => {
    const {suggestionDetails, updateSearchInput} = this.props
    const {suggestion} = suggestionDetails
    updateSearchInput(suggestion)
  }

  render() {
    const {suggestionDetails} = this.props
    const {suggestion} = suggestionDetails
    return (
      <li className="suggestion-item">
        <p className="suggestion-text">{suggestion}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
          onClick={this.onClickSuggestion}
        />
      </li>
    )
  }
}

export default SuggestionItem
