import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Input from "./components/Input";
import Board from "./components/Board";
import { Grid } from "@material-ui/core";

const boards = [
  [
    {
      _id: "1",
      imageURL: "https://i.ebayimg.com/images/g/cM0AAOSwJ3dc9oRn/s-l500.jpg",
      title: "Apple MQ6J2B/A iPhone 8 64GB Smartphone (Sprint) - Dourado",
      price: "37,00"
    },
    {
      _id: "2",
      title: "Apple MQ6J2B/A iPhone 8 64GB Smartphone (Sprint) - Dourado",
      price: "32,00"
    },
    {
      _id: "3",
      imageURL: "https://i.ebayimg.com/images/g/cM0AAOSwJ3dc9oRn/s-l500.jpg",
      title: "Apple MQ6J2B/A iPhone 8 64GB Smartphone (Sprint) - Dourado",
      price: "37,00"
    }
  ],
  [
    {
      _id: "1",
      imageURL: "https://i.ebayimg.com/images/g/cM0AAOSwJ3dc9oRn/s-l500.jpg",
      title: "Apple MQ6J2B/A iPhone 8 64GB Smartphone (Sprint) - Dourado",
      price: "37,00"
    },
    {
      _id: "2",
      title: "Apple MQ6J2B/A iPhone 8 64GB Smartphone (Sprint) - Dourado",
      price: "32,00"
    },
    {
      _id: "3",
      imageURL: "https://i.ebayimg.com/images/g/cM0AAOSwJ3dc9oRn/s-l500.jpg",
      title: "Apple MQ6J2B/A iPhone 8 64GB Smartphone (Sprint) - Dourado",
      price: "37,00"
    }
  ],
  [
    {
      _id: "1",
      imageURL: "https://i.ebayimg.com/images/g/cM0AAOSwJ3dc9oRn/s-l500.jpg",
      title: "Apple MQ6J2B/A iPhone 8 64GB Smartphone (Sprint) - Dourado",
      price: "37,00"
    },
    {
      _id: "2",
      title: "Apple MQ6J2B/A iPhone 8 64GB Smartphone (Sprint) - Dourado",
      price: "32,00"
    },
    {
      _id: "3",
      imageURL: "https://i.ebayimg.com/images/g/cM0AAOSwJ3dc9oRn/s-l500.jpg",
      title: "Apple MQ6J2B/A iPhone 8 64GB Smartphone (Sprint) - Dourado",
      price: "37,00"
    }
  ],
  [
    {
      _id: "1",
      imageURL: "https://i.ebayimg.com/images/g/cM0AAOSwJ3dc9oRn/s-l500.jpg",
      title: "Apple MQ6J2B/A iPhone 8 64GB Smartphone (Sprint) - Dourado",
      price: "37,00"
    },
    {
      _id: "2",
      title: "Apple MQ6J2B/A iPhone 8 64GB Smartphone (Sprint) - Dourado",
      price: "32,00"
    },
    {
      _id: "3",
      imageURL: "https://i.ebayimg.com/images/g/cM0AAOSwJ3dc9oRn/s-l500.jpg",
      title: "Apple MQ6J2B/A iPhone 8 64GB Smartphone (Sprint) - Dourado",
      price: "37,00"
    }
  ],
  [
    {
      _id: "1",
      imageURL: "https://i.ebayimg.com/images/g/cM0AAOSwJ3dc9oRn/s-l500.jpg",
      title: "Apple MQ6J2B/A iPhone 8 64GB Smartphone (Sprint) - Dourado",
      price: "37,00"
    },
    {
      _id: "2",
      title: "Apple MQ6J2B/A iPhone 8 64GB Smartphone (Sprint) - Dourado",
      price: "32,00"
    },
    {
      _id: "3",
      imageURL: "https://i.ebayimg.com/images/g/cM0AAOSwJ3dc9oRn/s-l500.jpg",
      title: "Apple MQ6J2B/A iPhone 8 64GB Smartphone (Sprint) - Dourado",
      price: "37,00"
    }
  ],
  [
    {
      _id: "2",
      title: "Apple MQ6J2B/A iPhone 8 64GB Smartphone (Sprint) - Dourado",
      price: "32,00"
    },
    {
      _id: "3",
      imageURL: "https://i.ebayimg.com/images/g/cM0AAOSwJ3dc9oRn/s-l500.jpg",
      title: "Apple MQ6J2B/A iPhone 8 64GB Smartphone (Sprint) - Dourado",
      price: "37,00"
    }
  ],
  [
    {
      _id: "1",
      imageURL: "https://i.ebayimg.com/images/g/cM0AAOSwJ3dc9oRn/s-l500.jpg",
      title: "Apple MQ6J2B/A iPhone 8 64GB Smartphone (Sprint) - Dourado",
      price: "37,00"
    },
    {
      _id: "2",
      title: "Apple MQ6J2B/A iPhone 8 64GB Smartphone (Sprint) - Dourado",
      price: "32,00"
    },
    {
      _id: "3",
      imageURL: "https://i.ebayimg.com/images/g/cM0AAOSwJ3dc9oRn/s-l500.jpg",
      title: "Apple MQ6J2B/A iPhone 8 64GB Smartphone (Sprint) - Dourado",
      price: "37,00"
    }
  ],
  [
    {
      _id: "1",
      imageURL: "https://i.ebayimg.com/images/g/cM0AAOSwJ3dc9oRn/s-l500.jpg",
      title: "Apple MQ6J2B/A iPhone 8 64GB Smartphone (Sprint) - Dourado",
      price: "37,00"
    },
    {
      _id: "2",
      title: "Apple MQ6J2B/A iPhone 8 64GB Smartphone (Sprint) - Dourado",
      price: "32,00"
    },
    {
      _id: "3",
      imageURL: "https://i.ebayimg.com/images/g/cM0AAOSwJ3dc9oRn/s-l500.jpg",
      title: "Apple MQ6J2B/A iPhone 8 64GB Smartphone (Sprint) - Dourado",
      price: "37,00"
    }
  ],
  [
    {
      _id: "1",
      imageURL: "https://i.ebayimg.com/images/g/cM0AAOSwJ3dc9oRn/s-l500.jpg",
      title: "Apple MQ6J2B/A iPhone 8 64GB Smartphone (Sprint) - Dourado",
      price: "37,00"
    },
    {
      _id: "2",
      title: "Apple MQ6J2B/A iPhone 8 64GB Smartphone (Sprint) - Dourado",
      price: "32,00"
    },
    {
      _id: "3",
      imageURL: "https://i.ebayimg.com/images/g/cM0AAOSwJ3dc9oRn/s-l500.jpg",
      title: "Apple MQ6J2B/A iPhone 8 64GB Smartphone (Sprint) - Dourado",
      price: "37,00"
    }
  ]
];

const App: React.FC = () => {
  return (
    <div className="App">
      <div style={{ padding: 24, paddingBottom: 0 }}>
        <Input />
      </div>
      <div style={{ maxWidth: 1280 + 24 + 48 + 24 }}>
        <Grid
          container
          direction="row"
          spacing={2}
          style={{ flexGrow: 1, padding: 24 }}
        >
          {boards.map(board => (
            <Grid item>
              <Board
                email="itelofilho@gmail.com"
                sp="goku"
                time="3 min"
                data={board}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default App;
