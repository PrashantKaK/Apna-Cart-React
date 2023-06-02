import React from "react";
class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      productPrice: 0,
    };
  }
  render() {
    return (
      <form
        className="row mb-2"
        onSubmit={(e) => {
          e.preventDefault();
          this.props.addItem(this.state.productName, Number(this.state.productPrice));
        }}
      >
        <div className="mb-3 col-4">
          <label htmlFor="inputName" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            aria-describedby="name"
            name="productName"
            onChange={(e) => {
              this.setState({ productName: e.currentTarget.value });
            }}
            value={this.state.productName}
          />
        </div>
        <div className="mb-3 col-4">
          <label htmlFor="inputPrice" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="inputPrice"
            name="productPrice"
            onChange={(e) => {
              this.setState({ productPrice: e.currentTarget.value });
            }}
            value={this.state.productPrice}
          />
        </div>

        <button type="submit" className="btn btn-primary col-3">
          Add
        </button>
      </form>
    );
  }
}

export default AddItem;
