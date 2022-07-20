import uuid from "react-uuid";

export const quizData = [
  {
    _id: "SQJ9yFvL3ESuTgHrdX1u",
    name: "HTML Quiz",
    category: {
      _id: uuid(),
      name: "HTML",
      imgURL:
        "https://res.cloudinary.com/dhshzqkzm/image/upload/v1656594195/Lens%20Quiz/unnamed_fbe9ls.png",
    },
    noOfQuestions: 5,
    questions: [
      {
        question: "Full form of HTML ?",
        options: [
          { value: "Hybrid Text Markup Language", isRight: false },
          { value: "Hyper Transfer Markup Language", isRight: false },
          { value: "Hyper Text Markup Language", isRight: true },
          { value: "Hybrid Text Mark Language", isRight: false },
        ],
      },
      {
        question: "What do you understand by HTML ?",
        options: [
          {
            value: "HTML describes the structure of a webpage",
            isRight: false,
          },
          {
            value:
              "HTML is the standard markup language mainly used to create web pages",
            isRight: false,
          },
          {
            value:
              "HTML consists of a set of elements that helps the browser how to view the content",
            isRight: false,
          },
          {
            value: "All of the above",
            isRight: true,
          },
        ],
      },
      {
        question: "Which is used to read an HTML page and render it ?",
        options: [
          {
            value: "Web server",
            isRight: false,
          },
          {
            value: "Web network",
            isRight: false,
          },
          {
            value: "Web browser",
            isRight: true,
          },
          {
            value: "Web matrix",
            isRight: false,
          },
        ],
      },
      {
        question:
          "Which tag is used for inserting the largest heading in HTML ?",
        options: [
          {
            value: "head",
            isRight: false,
          },
          {
            value: "<h1>",
            isRight: true,
          },
          {
            value: "<h6>",
            isRight: false,
          },
          {
            value: "heading",
            isRight: false,
          },
        ],
      },
      {
        question: "HTML program is saved using ___ extension.",
        options: [
          {
            value: ".htmn",
            isRight: false,
          },
          {
            value: ".html",
            isRight: true,
          },
          {
            value: ".htnl",
            isRight: false,
          },
          {
            value: ".htl",
            isRight: false,
          },
        ],
      },
    ],
  },
  {
    _id: "LRfR0Zri17YneCu4G8pi",
    name: "CSS Quiz",
    category: {
      _id: uuid(),
      name: "CSS",
      imgURL:
        "https://res.cloudinary.com/dhshzqkzm/image/upload/v1656594482/Lens%20Quiz/Vp9WvV7YKdH4k8sKRePcE8_qgiigd.jpg",
    },
    noOfQuestions: 5,
    questions: [
      {
        question: "Full form of CSS ?",
        options: [
          { value: "Custom Style Sheets", isRight: false },
          { value: "Colorful Style Sheets", isRight: false },
          { value: "Computer Style Sheets", isRight: false },
          { value: "Cascading Style Sheets", isRight: true },
        ],
      },
      {
        question:
          "What is the correct CSS syntax for making all the <span> elements bold?",
        options: [
          {
            value: "span {text-size: bold}",
            isRight: false,
          },
          {
            value: "span {font-weight: bold}",
            isRight: true,
          },
          {
            value: "<span style='font-size: bold'>",
            isRight: false,
          },
          {
            value: "<span style='text-size: bold'>",
            isRight: false,
          },
        ],
      },
      {
        question: "How do you add a comment in a CSS file?",
        options: [
          {
            value: "/* this is a comment */",
            isRight: true,
          },
          {
            value: "// this is a comment //",
            isRight: false,
          },
          {
            value: "// this is a comment",
            isRight: false,
          },
          {
            value: "<!-- this is a comment-->",
            isRight: false,
          },
        ],
      },
      {
        question:
          "What property is used to change the text color of an element?",
        options: [
          {
            value: "fontcolor:",
            isRight: false,
          },
          {
            value: "textcolor:",
            isRight: false,
          },
          {
            value: "color:",
            isRight: true,
          },
          {
            value: "font-color:",
            isRight: false,
          },
        ],
      },
      {
        question: "The # symbol specifies that the selector is?",
        options: [
          {
            value: "class",
            isRight: false,
          },
          {
            value: "tag",
            isRight: false,
          },
          {
            value: "first",
            isRight: false,
          },
          {
            value: "id",
            isRight: true,
          },
        ],
      },
    ],
  },
  {
    _id: "buep6Lnd96vBR0OVKSQm",
    name: "Javascript Quiz",
    category: {
      _id: uuid(),
      name: "Javascript",
      imgURL:
        "https://res.cloudinary.com/dhshzqkzm/image/upload/v1656595008/Lens%20Quiz/IegUPpg-_400x400_esptdu.jpg",
    },
    noOfQuestions: 5,
    questions: [
      {
        question: "Inside which HTML element do we put the JavaScript ?",
        options: [
          { value: "<scripting>", isRight: false },
          { value: "<script>", isRight: true },
          { value: "<js>", isRight: false },
          { value: "<javascript>", isRight: false },
        ],
      },
      {
        question: "How do you create a function in JavaScript ?",
        options: [
          {
            value: "function = myFunction(){}",
            isRight: false,
          },
          {
            value: "function:myFunction(){}",
            isRight: false,
          },
          {
            value: "function myFunction(){}",
            isRight: true,
          },
          {
            value: "None",
            isRight: false,
          },
        ],
      },
      {
        question:
          "Which of the following will write the message “Hello DataFlair!” in an alert box ?",
        options: [
          {
            value: "alertBox(“Hello DataFlair!”);",
            isRight: false,
          },
          {
            value: "alert(Hello DataFlair!);",
            isRight: true,
          },
          {
            value: "msgAlert(“Hello DataFlair!”);",
            isRight: false,
          },
          {
            value: " alert(“Hello DataFlair!”);",
            isRight: false,
          },
        ],
      },
      {
        question: "How do you find the minimum of x and y using JavaScript ?",
        options: [
          {
            value: "min(x,y);",
            isRight: false,
          },
          {
            value: "Math.min(x,y):",
            isRight: true,
          },
          {
            value: "Math.min(xy)",
            isRight: false,
          },
          {
            value: "min(xy);",
            isRight: false,
          },
        ],
      },
      {
        question:
          "Which event occurs when the user clicks on an HTML element ?",
        options: [
          {
            value: "onmouseclick",
            isRight: false,
          },
          {
            value: "onclick",
            isRight: true,
          },
          {
            value: "onchange",
            isRight: false,
          },
          {
            value: "onmousehover",
            isRight: false,
          },
        ],
      },
    ],
  },
];
