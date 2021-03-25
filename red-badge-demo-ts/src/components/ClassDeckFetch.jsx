import React, {Component} from 'react';

class ClassDeckFetch extends Component {

  constructor(props){
    super(props);
    this.state = {deckID: ''}
  }
  fetchDeck(){
    //What's URL are we fetching
    // Store the data from the fetch
    const url = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';

    fetch(url)
    .then(res => res.json())
    .then(json => console.log(json));
  }

  //cdm shortcut
  componentDidMount() {
    this.fetchDeck();
  }
  

  render(){
    return(
      <div>
        Hello
      </div>
    )
  }


}
export default ClassDeckFetch;