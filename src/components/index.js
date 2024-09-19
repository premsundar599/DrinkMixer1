import { Component } from "react";

class Home extends Component {
  state = { data: [], input: "" };
  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const { input, data } = this.state;

    const api = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`;
    const options = {
      method: "GET",
    };
    const fetching = await fetch(api, options);

    const after = await fetching.json();
    if (fetching.ok) {
      this.setState({ data: after.drinks });
    }
  };
  onchange = (event) => {
    const { input } = this.state;
    this.setState({ input: event.target.value });
    console.log(input);
  };

  render() {
    const { input, data } = this.state;

    return (
      <div>
        <input type="search" onChange={this.onchange} />
        {data.map((item) => {
          <p key={item.idDrink}>{item.idDrink}</p>;
        })}
      </div>
    );
  }
}
export default Home;
