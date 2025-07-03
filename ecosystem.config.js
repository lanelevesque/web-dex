module.exports = {
  apps: [
    {
      name: "react",
      cwd: "./react-pokedex",
      script: "npm",
      args: "run dev",
    },
    {
      name: "express",
      cwd: "./express-pokedex",
      script: "npm",
      args: "start",
    },
  ],
};
