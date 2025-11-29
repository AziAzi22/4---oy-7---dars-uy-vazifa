const express = require("express");
const { read_file, write_file } = require("./fs/file-manager");
require("dotenv").config();
const cors = require("cors");
const { v4 } = require("uuid");
const bcrypt = require("bcryptjs");

const app = express();
app.use(cors());
app.use(express.json());

//// GET

// animal

app.get("/get_all_animals", (req, res) => {
  try {
    const data = read_file("animals.json");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/// books

app.get("/get_all_books", (req, res) => {
  try {
    const data = read_file("books.json");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
/// cars

app.get("/get_all_cars", (req, res) => {
  try {
    const data = read_file("cars.json");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/// drinks

app.get("/get_all_drinks", (req, res) => {
  try {
    const data = read_file("drinks.json");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/// fruits

app.get("/get_all_fruits", (req, res) => {
  try {
    const data = read_file("fruits.json");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//// ADD

// animal

app.post("/add_animal", (req, res) => {
  try {
    const { name, continent } = req.body;
    const dataFile = read_file("animals.json");
    if (dataFile.find((item) => item.name === name)) {
      return res.status(400).json({ message: "animal already exists" });
    }
    dataFile.push({
      id: v4(),
      name,
      continent,
    });
    write_file("animals.json", dataFile);
    res.status(201).json({ message: "added new animal" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//// books

app.post("/add_book", (req, res) => {
  try {
    const { name, autor } = req.body;
    const dataFile = read_file("books.json");
    if (dataFile.find((item) => item.name === name)) {
      return res.status(400).json({ message: "book already exists" });
    }
    dataFile.push({
      id: v4(),
      name,
      autor,
    });
    write_file("books.json", dataFile);
    res.status(201).json({
      message: "added new book",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
/// car

app.post("/add_car", (req, res) => {
  try {
    const { name, continent } = req.body;
    const dataFile = read_file("cars.json");
    if (dataFile.find((item) => item.name === name)) {
      return res.status(400).json({ message: "car already exists" });
    }
    dataFile.push({
      id: v4(),
      name,
      continent,
    });
    write_file("cars.json", dataFile);
    res.status(201).json({ message: "added new car" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/// drinks

app.post("/add_drink", (req, res) => {
  try {
    const { name, type } = req.body;
    const dataFile = read_file("drinks.json");
    if (dataFile.find((item) => item.name === name)) {
      return res.status(400).json({ message: "drink already exists" });
    }
    dataFile.push({
      id: v4(),
      name,
      type,
    });
    write_file("drinks.json", dataFile);
    res.status(201).json({ message: "added new drink" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/// fruits

app.post("/add_fruit", (req, res) => {
  try {
    const { name, continent } = req.body;
    const dataFile = read_file("fruits.json");
    if (dataFile.find((item) => item.name === name)) {
      return res.status(400).json({ message: "fruit already exists" });
    }
    dataFile.push({
      id: v4(),
      name,
      continent,
    });
    write_file("fruits.json", dataFile);
    res.status(201).json({ message: "added new fruit" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/// GET ONE

//animal

app.get("/get_one_animal/:id", (req, res) => {
  try {
    const { id } = req.params;
    const data = read_file("animals.json");
    const foundedData = data.find((www) => www.id === id);
    if (!foundedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(foundedData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/// book

app.get("/get_one_book/:id", (req, res) => {
  const { id } = req.params;
  const data = read_file("books.json");
  const foundedData = data.find((book) => book.id === id);
  if (!foundedData) {
    return res.status(404).json({ message: "Data not found" });
  }
  res.status(200).json(foundedData);
});

// car

app.get("/get_one_car/:id", (req, res) => {
  try {
    const { id } = req.params;
    const data = read_file("cars.json");
    const foundedData = data.find((car) => car.id === id);
    if (!foundedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(foundedData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/// drinks

app.get("/get_one_drink/:id", (req, res) => {
  try {
    const { id } = req.params;
    const data = read_file("drinks.json");
    const foundedData = data.find((data) => data.id === id);
    if (!foundedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(foundedData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/// fruits

app.get("/get_one_fruit/:id", (req, res) => {
  try {
    const { id } = req.params;
    const data = read_file("fruits.json");
    const foundedData = data.find((item) => item.id === id);
    if (!foundedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(foundedData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/// PUT

// animal

app.put("/update_animal/:id", (req, res) => {
  try {
    const { id } = req.params;
    const { name, continent } = req.body;
    const data = read_file("animals.json");
    const foundedData = data.find((item) => item.id === id);
    if (!foundedData) {
      return res.status(404).json({ message: "Data not found" });
    }

    data.forEach((item) => {
      if (item.id === id) {
        item.name = name ? name : item.name;
        item.continent = continent ? continent : item.continent;
      }
      write_file("animals.json", data);
      res.status(200).json({ message: "updated" });
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/// books

app.put("/update_book/:id", (req, res) => {
  try {
    const { id } = req.params;
    const { name, author } = req.body;
    const data = read_file("books.json");
    const foundedData = data.find((book) => book.id === id);

    if (!foundedData) {
      return res.status(404).json({ message: "Data not found" });
    }

    data.forEach((book) => {
      if (book.id === id) {
        book.name = name ? name : book.name;
        book.author = author ? author : book.author;
      }
      write_file("books.json", data);
      res.status(200).json({ message: "updated" });
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/// car

app.put("/update_car/:id", (req, res) => {
  try {
    const { id } = req.params;
    const { name, continent } = req.body;
    const data = read_file("cars.json");
    const foundedData = data.find((item) => item.id === id);
    if (!foundedData) {
      return res.status(404).json({ message: "Data not found" });
    }

    data.forEach((item) => {
      if (item.id === id) {
        item.name = name ? name : item.name;
        item.continent = continent ? continent : item.continent;
      }
      write_file("cars.json", data);
      res.status(200).json({ message: "updated" });
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/// drinks

app.put("/update_drink/:id", (req, res) => {
  try {
    const { id } = req.params;
    const { name, type } = req.body;
    const data = read_file("drinks.json");
    const foundedData = data.find((item) => item.id === id);
    if (!foundedData) {
      return res.status(404).json({ message: "Data not found" });
    }

    data.forEach((item) => {
      if (item.id === id) {
        item.name = name ? name : item.name;
        item.type = type ? type : item.type;
      }
      write_file("drinks.json", data);
      res.status(200).json({ message: "updated" });
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/// fruits

app.put("/update_fruit/:id", (req, res) => {
  try {
    const { id } = req.params;
    const { name, continent } = req.body;
    const data = read_file("fruits.json");
    const foundedData = data.find((item) => item.id === id);
    if (!foundedData) {
      return res.status(404).json({ message: "Data not found" });
    }

    data.forEach((item) => {
      if (item.id === id) {
        item.name = name ? name : item.name;
        item.continent = continent ? continent : item.continent;
      }
      write_file("fruits.json", data);
      res.status(200).json({ message: "updated" });
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//// DELETE

// animal

app.delete("/delete_animal/:id", (req, res) => {
  try {
    const { id } = req.params;
    const data = read_file("animals.json");
    const foundedData = data.find((item) => item.id === id);
    if (!foundedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    data.forEach((item, index) => {
      if (item.id === id) {
        data.splice(index, 1);
      }
    });
    write_file("animals.json", data);
    res.status(200).json({ message: "deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/// book

app.delete("/delete_book/:id", (req, res) => {
  try {
    const { id } = req.params;
    const data = read_file("animals.json");
    const foundedData = data.find((item) => item.id === id);
    if (!foundedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    data.forEach((item, index) => {
      if (item.id === id) {
        data.splice(index, 1);
      }
    });
    write_file("books.json", data);
    res.status(200).json({ message: "deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// car

app.delete("/delete_car/:id", (req, res) => {
  try {
    const { id } = req.params;
    const data = read_file("cars.json");
    const foundedData = data.find((item) => item.id === id);
    if (!foundedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    data.forEach((item, index) => {
      if (item.id === id) {
        data.splice(index, 1);
      }
    });
    write_file("cars.json", data);
    res.status(200).json({ message: "deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// drink

app.delete("/delete_drink/:id", (req, res) => {
  try {
    const { id } = req.params;
    const data = read_file("drinks.json");
    const foundedData = data.find((item) => item.id === id);
    if (!foundedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    data.forEach((item, index) => {
      if (item.id === id) {
        data.splice(index, 1);
      }
    });
    write_file("drinks.json", data);
    res.status(200).json({ message: "deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// fruit

app.delete("/delete_fruit/:id", (req, res) => {
  try {
    const { id } = req.params;
    const data = read_file("fruits.json");
    const foundedData = data.find((item) => item.id === id);
    if (!foundedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    data.forEach((item, index) => {
      if (item.id === id) {
        data.splice(index, 1);
      }
    });
    write_file("fruits.json", data);
    res.status(200).json({ message: "deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("Server is runnig at port:", PORT));
