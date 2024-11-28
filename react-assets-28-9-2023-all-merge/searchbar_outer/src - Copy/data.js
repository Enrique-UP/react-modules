import axios from "axios";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchField from "react-search-field";
import { Button, TextField } from "@material-ui/core";
import PageItem from "react-bootstrap/PageItem";
import Pagination from "@material-ui/lab/Pagination";

let posts = [];
let postsWithPagination = [];
let pos = 1;
let time = 1;
let length = 0;

class Data extends React.Component {
  constructor() {
    super();
    this.state = {
      data: false,
      keyword: ""
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        posts = res.data;
        length = parseInt(posts.length / 10);
        postsWithPagination = posts.slice(0, 10);
        this.setState({ data: true });
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(postsWithPagination);
  }

  getData = () => {
    // let postsNew = [];
    // for (let i = 0; i < postsWithPagination.length; i++) {
    //   if (
    //     postsWithPagination[i].title.search(this.state.keyword) >= 0 ||
    //     postsWithPagination[i].body.search(this.state.keyword) >= 0
    //   ) {
    //     postsNew.push(postsWithPagination[i]);
    //   } else {
    //   }
    // }
    // postsWithPagination = postsNew;

    postsWithPagination = postsWithPagination.filter((res) => {
      if (
        res.body.includes(this.state.keyword) ||
        res.title.includes(this.state.keyword)
      ) {
        return res;
      }
    });

    this.forceUpdate();
  };

  prev = () => {
    if (pos == 1) {
    } else {
      pos = pos - 1;
      time = pos * 10;
      postsWithPagination = posts.slice(time + 1, time + 11);
      this.forceUpdate();
    }
  };

  change = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
      open: false
    });
  };
  next = () => {
    pos = pos + 1;
    time = pos * 10;
    postsWithPagination = posts.slice(time + 1, time + 11);
    this.forceUpdate();
  };

  handleChange = (event, value) => {
    this.setState({
      keyword: ""
    });
    postsWithPagination = posts.slice((value - 1) * 10, (value - 1) * 10 + 11);

    this.forceUpdate();
  };
  render() {
    return (
      <>
        <div className="container">
          <div className="row mt-4 ml-1">
            <TextField
              margin="dense"
              classname="MuiInputBase-root"
              id="keyword"
              value={this.state.keyword}
              onChange={(e) => this.change(e)}
              type="name"
              variant="outlined"
            />
            <div>
              <Button
                className="ml-2 mt-2"
                onClick={this.getData}
                variant="contained"
              >
                Search
              </Button>
            </div>
          </div>

          <br />
          <br />

          <Pagination
            onChange={this.handleChange}
            count={length}
            variant="outlined"
            shape="rounded"
          />
          <br />
          <br />

          {this.state.data
            ? postsWithPagination.map((res, index) => {
                return (
                  <div
                    className="container-fluid"
                    style={{ border: "1px solid black", margin: "5px" }}
                  >
                    <div className="row">
                      <div className="col-4" style={{ margin: "auto" }}>
                        <p
                          style={{
                            fontWeight: "bold",
                            textAlign: "center"
                          }}
                        >
                          {res.title.slice(0, 14)}
                        </p>
                      </div>
                      <div className="col-8" style={{ margin: "auto" }}>
                        <p
                          style={{
                            textAlign: "center"
                          }}
                        >
                          {res.body.slice(0, 133)}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })
            : ""}
        </div>
      </>
    );
  }
}

export default Data;
