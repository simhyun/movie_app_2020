import React from "react";
import PropTypes from "prop-types"

// function Food({ name, picture }) {
//   return (
//     <div>
//       <h2>I like {name}</h2>
//       <img src={picture} alt="설명"/>
//     </div>
//   );
// }

// const foodILike = [
//   {
//     id: 1,
//     name: "Kimchi",
//     image:
//       "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"
//   },
//   {
//     id: 2,
//     name: "Samgyeopsal",
//     image:
//       "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg"
//   },
//   {
//     id: 3,
//     name: "Bibimbap",
//     image:
//       "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb"
//   },
//   {
//     id: 4,
//     name: "Doncasu",
//     image:
//       "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg"
//   },
//   {
//     id: 5,
//     name: "Kimbap",
//     image:
//       "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg"
//   }
// ];

// Food.propTypes = {
//   name: PropTypes.string.isRequired,
//   picture: PropTypes.string.isRequired,
//   rating: PropTypes.number
// };

// function App() {
//   return (
//     <div>
//       {foodILike.map(dish => (
//         <Food key={dish.id} name={dish.name} picture={dish.image} />
//       ))}
//     </div>
//   );
// }

class App extends React.Component {
  state = {
    count: 0
  };
  add = () => {
    console.log("add");
    //this.setState({count:this.state.count+1});
    this.setState(current => ({count:current.count+1}));
  };
  minus = () => {
    console.log("minus");
    //this.setState({count:this.state.count-1});
    this.setState(current => ({count:current.count-1}));
  };
  
  render() {
    console.log("I am   render");
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }

  //처음 생성 시
  componentDidMount(){
    console.log("I am componentDidMount");
  }

  //업데이트 시
  componentDidUpdate(){
    console.log("I am componentDidUpdate");
  }
  //종료 시
  componentWillUnmount(){
    console.log("I am componentWillUnmount");
  }
};

export default App;