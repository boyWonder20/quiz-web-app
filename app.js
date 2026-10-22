const quizQuestions = [
  {
    id: 1,
    question: "Which parameter in the CSS box-shadow property controls the softness and edge diffusion of the shadow?",
    options: ["offset-x", "blur-radius", "spread-radius", "inset"],
    correctAnswer: "blur-radius"
  },
  {
    id: 2,
    question: "Why is it recommended to use filter: drop-shadow() instead of box-shadow on an element styled with clip-path?",
    options: [
      "box-shadow calculates around the original rectangular bounding box.",
      "drop-shadow is faster for hardware acceleration.",
      "box-shadow does not support color transparency.",
      "clip-path automatically disables box-shadow."
    ],
    correctAnswer: "box-shadow calculates around the original rectangular bounding box."
  },
  {
    id: 3,
    question: "Which CSS position value removes an element from normal document flow and anchors it relative to the browser viewport so it stays locked in place during page scrolling?",
    options: ["relative", "absolute", "fixed", "sticky"],
    correctAnswer: "fixed"
  },
  {
    id: 4,
    question: "What is the fundamental difference between Flexbox and the display: flex property?",
    options: [
      "Flexbox is the layout model, while display: flex is the property that activates it.",
      "They are two names for the exact same thing.",
      "display: flex is for grid layouts, while Flexbox is for rows.",
      "Flexbox only works on div tags, while display: flex works on all tags."
    ],
    correctAnswer: "Flexbox is the layout model, while display: flex is the property that activates it."
  },
  {
    id: 5,
    question: "Which shorthand CSS property combines flex-direction and flex-wrap into a single declaration?",
    options: ["flex-layout", "flex-flow", "flex-box", "flex-combine"],
    correctAnswer: "flex-flow"
  },
  {
    id: 6,
    question: "Which keyword is used alongside a class constructor call to instantiate a new, unique object in JavaScript?",
    options: ["create", "instance", "new", "this"],
    correctAnswer: "new"
  },
  {
    id: 7,
    question: "Which symbol is placed at the beginning of a class property name to declare it as strictly private in modern JavaScript?",
    options: ["$", "_", "#", "@"],
    correctAnswer: "#"
  },
  {
    id: 8,
    question: "Why is asynchronous programming essential for JavaScript applications that fetch data from external APIs?",
    options: [
      "It prevents the single-threaded main execution thread from freezing while waiting.",
      "It compresses the JSON response data automatically.",
      "It allows JavaScript to run multi-threaded background processes.",
      "It encrypts user data during transit."
    ],
    correctAnswer: "It prevents the single-threaded main execution thread from freezing while waiting."
  },
  {
    id: 9,
    question: "Which of the following is a strict syntax rule required when writing valid JSON data?",
    options: [
      "All keys must be wrapped in double quotes.",
      "Functions can be stored inside the objects.",
      "Trailing commas are allowed at the end of arrays.",
      "Single quotes must be used for all strings."
    ],
    correctAnswer: "All keys must be wrapped in double quotes."
  },
  {
    id: 10,
    question: "How can you permanently set a custom default zoom level across the entire Visual Studio Code interface?",
    options: [
      "Modify the Window: Zoom Level setting in the settings menu.",
      "Edit the package.json file.",
      "Run the zoom-reset command in the terminal.",
      "Hold Ctrl and scroll the mouse wheel."
    ],
    correctAnswer: "Modify the Window: Zoom Level setting in the settings menu."
  }
];

