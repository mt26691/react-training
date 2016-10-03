
import React, {Component} from 'react'
import config from './config.json';
import styles from './greeter.css';
import Immutable from 'immutable'
class Greeter extends Component {

  constructor(props) {
    super(props);
    console.log("dm nhe");
    let map1 = Immutable.Map({ a: 1, b: 2, c: 3 });
    let map2 = map1.set('b', 50);
    map1.get('b'); // 2
    map2.get('b'); // 50
    console.log(map1);

    console.log(map1.equals(map2) === true);
    var map3 = map1.set('b', 50);
    console.log(map1.equals(map3) === false);
    console.log(map2.equals(map2));
  }

  render() {
    return (
      <div className="greeter">
        {config.greetText}
      </div>
    );
  }
}

export default Greeter